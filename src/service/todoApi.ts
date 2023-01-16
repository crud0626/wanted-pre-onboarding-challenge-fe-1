import { checkErrorFromServer, handleError } from 'utils/handleError';
import { AUTHORIZATION_KEY, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from './../constants/api';
import { API_BASE_URL } from 'constants/api';
import { ITodoForm, ITodoItem } from "types/todo.type";

interface ITodoHeaderProps {
    method?: "POST" | "PUT" | "DELETE";
    token: string;
    content?: ITodoForm;
}

interface ITodoAPI {
    getTodos(token: string): Promise<void | ITodoItem[]>;
    createTodo(token: string, item: ITodoForm): Promise<void | ITodoItem>;
    updateTodo(token: string, item: ITodoForm, id: string): Promise<void | ITodoItem>;
    deleteTodo(token: string, itemId: string): Promise<void | string>;
}

class TodoAPI implements ITodoAPI {
    private END_POINT: string;

    constructor() {
        this.END_POINT = `${API_BASE_URL}/todos`;
    }

    private convertRequestBody({ method, token, content }: ITodoHeaderProps): RequestInit {
        const request: RequestInit = { 
            method: method || "GET",
            headers: {
                [AUTHORIZATION_KEY]: token,
            }
        };
        
        if(!content) return request;

        request.headers = {
            [AUTHORIZATION_KEY]: token,
            [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE
        };
        request.body = JSON.stringify(content);
        return request;
    }

    private checkResponse(res: any): null | ITodoItem | ITodoItem[] | Error {
        if('data' in res) return res.data;

        if(checkErrorFromServer(res)) return new Error(res.details);

        return new Error("Undefined Error");
    }

    getTodos = async (token: string): Promise<void | ITodoItem[]> => {
        try {
            const response = await fetch(`${this.END_POINT}`, 
                this.convertRequestBody({ token })
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(response instanceof Error) throw response;

            if(Array.isArray(response) && response.length) return response;
        } catch (error) {
            handleError(error, "통신이 실패했습니다.");
        }
    }

    createTodo = async (token: string, item: ITodoForm): Promise<void | ITodoItem> => {
        try {
            const response = await fetch(this.END_POINT, 
                this.convertRequestBody({ method: 'POST', token, content: item })
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(response instanceof Error) throw response;

            if(response && 'id' in response) return response;
        } catch (error) {
            handleError(error, "통신이 실패했습니다.");
        }
    }

    updateTodo = async (token: string, item: ITodoForm, id: string): Promise<void | ITodoItem> => {
        try {
            const response = await fetch(`${this.END_POINT}/${id}`, 
                this.convertRequestBody({ method: 'PUT', token, content: item })
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(response instanceof Error) throw response;

            if(response && 'id' in response) return response;
        } catch (error) {
            handleError(error, "통신이 실패했습니다.");
        }
    }

    deleteTodo = async (token: string, itemId: string): Promise<void | string> => {
        try {
            const response = await fetch(`${this.END_POINT}/${itemId}`, 
                this.convertRequestBody({ method: "DELETE", token })
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(response instanceof Error) throw response;

            if(response === null) return itemId;
        } catch (error) {
            handleError(error, "통신이 실패했습니다.");
        }
    }
}

const todoApi = new TodoAPI();

export { todoApi };
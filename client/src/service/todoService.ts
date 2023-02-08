import { checkErrorFromServer, handleError } from 'utils/handleError';
import { AUTHORIZATION_KEY, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from '../constants/api';

import { 
    ITodoCreateArgs, 
    ITodoDeleteArgs, 
    ITodoForm, 
    ITodoGetArgs, 
    ITodoItem, 
    ITodoUpdateArgs 
} from "types/todo.type";

interface ITodoHeaderProps {
    method?: "POST" | "PUT" | "DELETE";
    token: string;
    content?: ITodoForm;
}

interface ITodoAPI {
    getTodos({ token }: ITodoGetArgs): Promise<void | ITodoItem[]>;
    createTodo({ token, item }: ITodoCreateArgs): Promise<void | ITodoItem>;
    updateTodo({ token, item, id }: ITodoUpdateArgs): Promise<void | ITodoItem>;
    deleteTodo({ token, id }: ITodoDeleteArgs): Promise<void | string>;
}

class TodoAPI implements ITodoAPI {
    private END_POINT = `${process.env.REACT_APP_API_END_POINT}/todos`;

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

    getTodos = async ({ token }: ITodoGetArgs): Promise<void | ITodoItem[]> => {
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

    createTodo = async ({ token, item }: ITodoCreateArgs): Promise<void | ITodoItem> => {
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

    updateTodo = async ({ token, item, id }: ITodoUpdateArgs): Promise<void | ITodoItem> => {
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

    deleteTodo = async ({ token, id }: ITodoDeleteArgs): Promise<void | string> => {
        try {
            const response = await fetch(`${this.END_POINT}/${id}`, 
                this.convertRequestBody({ method: "DELETE", token })
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(response instanceof Error) throw response;

            if(response === null) return id;
        } catch (error) {
            handleError(error, "통신이 실패했습니다.");
        }
    }
}

const todoApi = new TodoAPI();

export { todoApi };
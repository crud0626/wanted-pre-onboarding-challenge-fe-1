import { AUTHORIZATION_KEY, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from './../constants/api';
import { API_BASE_URL } from 'constants/api';
import { IResponseFailed } from 'types/auth.type';
import { IResponseTodoItem, IResponseTodoItems, ITodo, ITodoItem } from "types/todo.type";

/* API 결과 값 리턴 될 때 details를 포함한 모든 에러 상황 컨트롤하자 */

interface DeleteResponse {
    data: null;
}

// 타입 가드를 위한 함수 정의
function isFailed(arg: any): arg is IResponseFailed {
    return arg.details !== undefined;
}

function isSuccessWithItems(arg: any): arg is IResponseTodoItems {
    return arg.data !== undefined;
}

function isSuccessWithItem(arg: any): arg is IResponseTodoItem {
    return arg.data !== undefined;
}

function isSuccessDelete(arg: any): arg is DeleteResponse {
    return arg.data !== undefined;
}

interface ITodoAPI {
    getTodos(token: string): Promise<void | ITodoItem[]>;
    createTodo(token: string, item: ITodo): Promise<void | ITodoItem>;
    updateTodo(token: string, item: ITodo, id: string): Promise<void | ITodoItem>;
    deleteTodo(token: string, itemId: string): Promise<void | string>;
}

class TodoAPI implements ITodoAPI {
    private END_POINT: string;

    constructor() {
        this.END_POINT = `${API_BASE_URL}/todos`;
    }

    getTodos = async (token: string): Promise<void | ITodoItem[]> => {
        try {
            const response = await fetch(`${this.END_POINT}`, {
                headers: { [AUTHORIZATION_KEY]: token }
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItems(response) && response.data) return response.data;

            throw new Error("Undefined Error");
        } catch (error) {
            const reason = error instanceof Error ? error.message : error;
            console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
            alert("통신이 실패했습니다.");
        }
    }

    createTodo = async (token: string, item: ITodo): Promise<void | ITodoItem> => {
        try {
            const response = await fetch(this.END_POINT, {
                method: "POST",
                headers : {
                    [AUTHORIZATION_KEY]: token,
                    [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE
                },
                body: JSON.stringify(item)
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItem(response) && response.data) return response.data;
            
            throw new Error("Undefined Error");
        } catch (error) {
            const reason = error instanceof Error ? error.message : error;
            console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
            alert("통신이 실패했습니다.");
        }
    }

    updateTodo = async (token: string, item: ITodo, id: string): Promise<void | ITodoItem> => {
        const pushData = {
            title: item.title,
            content: item.content
        }

        try {
            const response = await fetch(`${this.END_POINT}/${id}`, {
                method: "PUT",
                headers: {
                    [AUTHORIZATION_KEY]: token,
                    [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE
                },
                body: JSON.stringify(pushData)
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItem(response) && response.data) return response.data;
        
            throw new Error("Undefined Error");
        } catch (error) {
            const reason = error instanceof Error ? error.message : error;
            console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
            alert("통신이 실패했습니다.");
        }
    }

    deleteTodo = async (token: string, itemId: string): Promise<void | string> => {
        try {
            const response: DeleteResponse | IResponseFailed  = await fetch(`${this.END_POINT}/${itemId}`, {
                method: "DELETE",
                headers: { [AUTHORIZATION_KEY]: token }
            })
            .then(res => res.json());

            if(isFailed(response) && response.details) throw new Error(response.details);

            if(isSuccessDelete(response)) return itemId;

            throw new Error("Undefined Error");
        } catch (error) {
            if(error instanceof Error) {
                const reason = error instanceof Error ? error.message : error;
                console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
                alert("통신이 실패했습니다.");
            }
        }
    }
}

const todoApi = new TodoAPI();

export { todoApi };
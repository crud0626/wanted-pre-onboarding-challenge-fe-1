import { IResponseFailed } from 'types/auth/auth.type';
import { IResponseTodoItem, IResponseTodoItems, ITodo, ITodoItem } from "types/todo.type";

const END_POINT = "http://localhost:8080/todos";

/**
 * API 결과 값 리턴 될 때 details를 포함한 모든 에러 상황 컨트롤하자
 */

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

class TodoApi {
    getTodos = async (token: string): Promise<void | ITodoItem[]> => {
        try {
            const response = await fetch(`${END_POINT}`, {
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItems(response) && response.data) return response.data;

            throw new Error("Undefined");
        } catch (error) {
            console.error(
                error instanceof Error 
                ? `에러가 발생했습니다. ${error.message}` 
                : `알 수 없는 에러가 발생했습니다. ${error}`
            );
        }
    }

    createTodo = async (token: string, item: ITodo): Promise<void | ITodoItem> => {
        try {
            const response = await fetch(END_POINT, {
                method: "POST",
                headers : {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItem(response) && response.data) return response.data;
            
            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    // 단일아이템 또는 void
    updateTodo = async (token: string, item: ITodo, id: string): Promise<void | ITodoItem> => {
        const pushData = {
            title: item.title,
            content: item.content
        }

        try {
            const response = await fetch(`${END_POINT}/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pushData)
            }).then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccessWithItem(response) && response.data) return response.data;
        
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    // 성공시 details: null | void
    deleteTodo = async (token: string, itemId: string): Promise<void | boolean> => {
        try {
            const response: DeleteResponse | IResponseFailed  = await fetch(`${END_POINT}/${itemId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            // 실패요 실패
            if(isFailed(response) && response.details) throw new Error(response.details);

            // true로 반환
            if(isSuccessDelete(response)) return true;

            throw new Error("Undefined");
        } catch (error) {
            if(error instanceof Error) {
                alert();
                throw new Error(`통신 중 에러가 발생했습니다. ${error.message}`);
            }
        }
    }
}

const todoApi = new TodoApi();

export { todoApi };
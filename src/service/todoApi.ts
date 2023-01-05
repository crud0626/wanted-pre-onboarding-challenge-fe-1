import { Todo, TodoItem } from "types/Todos";

const END_POINT = "http://localhost:8080/todos";

class TodoApi {
    getTodos = async (token: string): Promise<any> => {
        try {
            const response = await fetch(`${END_POINT}`, {
                headers: {
                    Authorization: token
                }
            }).then(res => res.json());

            if(response.data) {
                console.log(response.data);
                
                return response.data;
            }
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    getTodoById = async (token: string, itemId: string) => {
        try {
            const response = await fetch(`${END_POINT}/${itemId}`, {
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            if(response.data) {
                return response.data;
            }
            
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    createTodo = async (token: string, item: Todo) => {
        try {
            const response = await fetch(END_POINT, {
                method: "POST",
                headers : {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            }).then(res => res.json());

            if(response.data) {
                return response.data;
            }
            
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    // 기존께 들어오므로 TodoItem으로 해야함.
    updateTodo = async (token: string, item: TodoItem) => {
        const pushData: Todo = {
            title: item.title,
            content: item.content
        }

        try {
            const response = await fetch(`${END_POINT}/${item.id}`, {
                method: "PUT",
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: pushData
                })
            }).then(res => res.json());

            if(response.data) {
                return response.data;
            }
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    deleteTodo = async (token: string, itemId: string) => {
        try {
            const response = await fetch(`${END_POINT}/${itemId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            if(response.data) {
                return response.data;
            }
            
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }
}

const todoApi = new TodoApi();

export { todoApi };
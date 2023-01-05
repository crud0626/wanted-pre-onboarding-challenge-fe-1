const END_POINT = "http://localhost:8080/todos";

class TodoApi {
    getTodos = async (token) => {
        try {
            const response = await fetch(`${END_POINT}`, {
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            const { data, details } = response;

            if(data) return data;

            if(details) throw new Error(details);

            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    getTodoById = async (token, itemId) => {
        try {
            const response = await fetch(`${END_POINT}/${itemId}`, {
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            const { data, details } = response;

            if(data) return data;

            if(details) throw new Error(details);
            
            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    createTodo = async (token, item) => {
        try {
            const response = await fetch(END_POINT, {
                method: "POST",
                headers : {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            }).then(res => res.json());

            const { data, details } = response;

            if(data) return data;

            if(details) throw new Error(details);
            
            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    // 기존께 들어오므로 TodoItem으로 해야함.
    updateTodo = async (token, item, id) => {
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

            const { data, details } = response;

            if(data) return data;

            if(details) throw new Error(details);
            
            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }

    deleteTodo = async (token, itemId) => {
        try {
            const response = await fetch(`${END_POINT}/${itemId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': token
                }
            }).then(res => res.json());

            const { data, details } = response;

            if(data === null) return true;

            if(details) throw new Error(details);
            
            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`통신 중 에러가 발생했습니다. ${error}`);
        }
    }
}

const todoApi = new TodoApi();

export { todoApi };
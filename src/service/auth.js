const END_POINT = "http://localhost:8080/users";

class AuthService {
    login = async (loginData) => {
        try {
            const response = await fetch(`${END_POINT}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(res => res.json());

            if(response) {
                return response.token;
            }
        } catch (error) {
            throw new Error(`로그인 도중 에러가 발생했습니다. ${error}`);
        }
    }

    signUp = async (loginData) => {
        try {
            const response = await fetch(`${END_POINT}/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(res => res.json());

            if(response) {
                return response.token;
            }
        } catch (error) {
            throw new Error(`회원가입 도중 에러가 발생했습니다. ${error}`);
        }
    }
}

const authService = new AuthService();

export { authService };
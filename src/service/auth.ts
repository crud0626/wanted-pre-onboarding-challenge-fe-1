import { IAuthSuccess, IResponseFailed, IUserForm } from "types/auth/auth.type";

interface IAuthService {
    login(loginData: IUserForm): Promise<void | string>;
    signUp(loginData: IUserForm): Promise<void | string>;
}

// 타입 가드 함수
function isFailed(arg: any): arg is IResponseFailed {
    return arg.details !== undefined;
}

function isSuccess(arg: any): arg is IAuthSuccess {
    return arg.token !== undefined;
}


const END_POINT = "http://localhost:8080/users";

class AuthService implements IAuthService {
    async login(loginData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${END_POINT}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(res => res.json());

            console.dir(response);

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccess(response)) return response.token;

            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`로그인 도중 에러가 발생했습니다. ${error}`);
        }
    }

    async signUp(loginData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${END_POINT}/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccess(response)) return response.token;

            throw new Error("Undefined");
        } catch (error) {
            throw new Error(`회원가입 도중 에러가 발생했습니다. ${error}`);
        }
    }
}

const authService = new AuthService();

export { authService };
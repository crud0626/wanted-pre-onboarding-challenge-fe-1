import { API_BASE_URL, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from "constants/api";
import { IAuthSuccess, IResponseFailed, IUserForm } from "types/auth.type";

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

class AuthService implements IAuthService {
    private END_POINT = `${API_BASE_URL}`;

    async login(loginData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${this.END_POINT}/login`, {
                method: "POST",
                headers: {
                    [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE,
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
            const response = await fetch(`${this.END_POINT}/create`, {
                method: "POST",
                headers: {
                    [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE,
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
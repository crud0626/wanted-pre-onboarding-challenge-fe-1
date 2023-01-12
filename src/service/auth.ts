import { API_BASE_URL, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from "constants/api";
import { IAuthSuccess, IResponseFailed, IUserForm } from "types/auth.type";

interface IAuthService {
    login(loginData: IUserForm): Promise<void | string>;
    signUp(loginData: IUserForm): Promise<void | string>;
}

/* 타입 가드 함수 */
function isFailed(arg: any): arg is IResponseFailed {
    return arg.details !== undefined;
}

function isSuccess(arg: any): arg is IAuthSuccess {
    return arg.token !== undefined;
}

class AuthService implements IAuthService {
    private END_POINT: string;

    constructor() {
        this.END_POINT = `${API_BASE_URL}/users`;
    }

    async login(userData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${this.END_POINT}/login`, {
                method: "POST",
                headers: { [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE },
                body: JSON.stringify(userData)
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccess(response)) return response.token;

            throw new Error("Undefined Error");
        } catch (error) {
            const reason = error instanceof Error ? error.message : error;
            console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
            alert("로그인에 실패했습니다.");
        }
    }

    async signUp(userData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${this.END_POINT}/create`, {
                method: "POST",
                headers: { [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE },
                body: JSON.stringify(userData)
            })
            .then(res => res.json());

            if(isFailed(response)) throw new Error(response.details);

            if(isSuccess(response)) return response.token;

            throw new Error("Undefined Error");
        } catch (error) {
            const reason = error instanceof Error ? error.message : error;
            console.error(`다음과 같은 에러가 발생했습니다. ${reason}`);
            alert("회원가입에 실패했습니다.");
        }
    }
}

const authService = new AuthService();

export { authService };
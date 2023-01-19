import { API_BASE_URL, CONTENT_TYPE_KEY, JSON_CONTENT_TYPE } from "constants/api";
import { IUserForm } from "types/auth.type";
import { checkErrorFromServer, handleError } from "utils/handleError";

interface IFetchOption {
    method: string;
    headers: HeadersInit;
    body: string;
}

interface IAuthService {
    login(loginData: IUserForm): Promise<void | string>;
    signUp(loginData: IUserForm): Promise<void | string>;
}

class AuthService implements IAuthService {
    private END_POINT: string;

    constructor() {
        this.END_POINT = `${API_BASE_URL}/users`;
    }

    private convertRequestBody(data: IUserForm): IFetchOption {
        return {
            method: 'POST',
            headers: { [CONTENT_TYPE_KEY]: JSON_CONTENT_TYPE },
            body: JSON.stringify(data)
        }
    }

    private checkResponse(res: any): string | Error {
        if('token' in res) return res.token;

        if(checkErrorFromServer(res)) return new Error(res.details);

        return new Error("Undefined Error");
    }

    async login(userData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${this.END_POINT}/login`, 
                this.convertRequestBody(userData)
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(typeof response === 'string') return response;
            
            throw response;
        } catch (error) {
            handleError(error, "로그인에 실패했습니다.");
        }
    }

    async signUp(userData: IUserForm): Promise<void | string> {
        try {
            const response = await fetch(`${this.END_POINT}/create`, 
                this.convertRequestBody(userData)
            )
            .then(res => res.json())
            .then(data => this.checkResponse(data));

            if(typeof response === 'string') return response;
            
            throw response;
        } catch (error) {
            handleError(error, "회원가입에 실패했습니다.");
        }
    }
}

const authService = new AuthService();

export { authService };
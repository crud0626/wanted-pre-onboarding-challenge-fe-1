export interface IUserForm {
    email: string;
    password: string;
}

export interface IAuthSuccess {
    message: string;
    token: string;
}

// 공통
export interface IResponseFailed {
    details: string;
}
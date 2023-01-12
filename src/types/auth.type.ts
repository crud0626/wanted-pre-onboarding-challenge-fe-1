export interface IUserForm {
    email: string;
    password: string;
}

export interface IAuthSuccess {
    message: string;
    token: string;
}

export interface IResponseFailed {
    details: string;
}
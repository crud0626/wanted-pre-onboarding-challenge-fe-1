import { IResponseFailed } from 'types/auth.type';

export function handleError(error: any, displayMsg?: string): void {
    const reason = error instanceof Error ? error.message : error;
    console.error(`다음과 같은 이유로 에러가 발생했습니다. ${reason}`);

    if (displayMsg) alert(displayMsg);
}

// 서버에서 발생한 에러인지 체크
export function checkErrorFromServer(res: any): res is IResponseFailed {
    return res.details !== undefined;
}
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";

/* 미들웨어의 타입을 추적하지 못하는 이슈를 해결하기 위함. */
export const useAppDispatch: () => AppDispatch = useDispatch;
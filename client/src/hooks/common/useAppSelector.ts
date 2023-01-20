import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store/store";

/* useSelector사용시 매번 state의 타입을 지정해줘야하는 불편함 해소 위함 */

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
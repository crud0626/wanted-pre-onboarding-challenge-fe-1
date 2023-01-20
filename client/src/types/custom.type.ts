/** Make some properties in T optional */
export type PickPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>; 
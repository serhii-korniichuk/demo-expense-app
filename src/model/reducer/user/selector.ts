import { RootStateType } from '../rootReducer';

export const userSelector = (state: RootStateType): RootStateType['user'] => state.user;

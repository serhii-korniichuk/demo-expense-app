import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	preloadedState: localStorage.getItem('reduxState')
		? JSON.parse(localStorage.getItem('reduxState') as string)
		: {},
});

store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

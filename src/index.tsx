import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	redirect,
} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { store } from './store/store';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { PageLayout } from './components/PageLayout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
				<RouterProvider
					router={createBrowserRouter(
						createRoutesFromElements(
							<Route path="/" element={<PageLayout />}>
								<Route index element={<HomePage />} />
								<Route path="authorization" element={<AuthPage />} />
								<Route path="*" loader={() => redirect('/')} />
							</Route>
						)
					)}
				/>
			</StyledEngineProvider>
		</Provider>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

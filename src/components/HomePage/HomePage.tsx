import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeading } from '../../shared/components/PageHeading';
import { Button } from '../../shared/components/Button';
import { logout, refreshAccessToken, setError } from '../../store/auth';
import workingProcess from '../../assets/working-process.png';
import classes from './HomePage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAuthUser } from '../../api';
import { INTERNAL_ERROR_MESSAGE } from '../../shared/constants';

enum AuthStage {
	NOT_STARTED = 'NOT_STARTED',
	PENDING = 'PENDING',
	SUCCESS = 'SUCCESS',
}

export const HomePage = () => {
	const { accessToken, refreshToken } = useAppSelector((state) => state.auth);
	const [authStage, setAuthStage] = useState<AuthStage>(AuthStage.NOT_STARTED);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const setAuthSuccess = () => setAuthStage(AuthStage.SUCCESS);
	const redirect = () => navigate('/authorization');

	const logoutHandler = () => dispatch(logout()).unwrap().then(redirect, redirect);

	const authErrorHandler = (isLoginRequired: boolean) => {
		dispatch(
			setError({
				title: 'Access is denied',
				description: isLoginRequired
					? 'This page can be viewed only by authorized user. Please, sign in'
					: INTERNAL_ERROR_MESSAGE,
			})
		);
		redirect();
	};

	const authWithRefresh = (token: string) =>
		dispatch(refreshAccessToken({ refreshToken: token }))
			.unwrap()
			.then((data) => getAuthUser(data))
			.catch((err) => {
				const isRefreshTokenNotAccepted = err.code === 'ERR_BAD_REQUEST';

				if (isRefreshTokenNotAccepted) {
					dispatch(logout());
				}

				authErrorHandler(isRefreshTokenNotAccepted);
			})
			.then(setAuthSuccess);

	useEffect(() => {
		if (authStage !== AuthStage.NOT_STARTED) {
			return;
		}

		setAuthStage(AuthStage.PENDING);

		if (accessToken && refreshToken) {
			getAuthUser({ accessToken })
				.then(setAuthSuccess)
				.catch((err) => {
					if (err.response.status === 401) {
						authWithRefresh(refreshToken);
					} else {
						authErrorHandler(false);
					}
				});
		} else if (refreshToken) {
			authWithRefresh(refreshToken);
		} else {
			authErrorHandler(true);
		}
	}, [authStage, accessToken, refreshToken]);

	return authStage === AuthStage.SUCCESS ? (
		<div className={classes['home-page']}>
			<PageHeading text="congradulations" className={classes['home-page__heading']} />
			<p className={classes['home-page__description']}>
				Now you are on the main page. Soon we will provide you with detailed feedback on the
				result of your work
			</p>
			<Button label="Log out" onClick={logoutHandler} />
			<img
				src={workingProcess}
				alt="working process"
				className={classes['home-page__decoration-image']}
			/>
		</div>
	) : (
		<div />
	);
};

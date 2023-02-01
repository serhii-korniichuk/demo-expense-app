import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { unsetError } from '../../store/auth';
import { useAppSelector } from '../../store/hooks';
import classes from './PageLayout.module.scss';
import { Button } from '../../shared/components/Button';

export const PageLayout = () => {
	const errors = useAppSelector((state) => state.auth.errors);
	const dispatch = useDispatch();
	return (
		<>
			<header className={classes['page-layout__header']}>
				<h2 className={classes['page-layout__logo']}>
					<strong className={classes['page-layout__logo-emphazing']}>InCode</strong>
					<br />
					Finance
				</h2>
			</header>
			<main className={classes['page-layout__content']}>
				<Outlet />
			</main>
			{errors.map(({ id, title, description }) => {
				const onClose = () => dispatch(unsetError({ id }));
				return (
					<Dialog
						key={id}
						open
						onClose={onClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						className={classes['page-layout__error-dialog']}
					>
						<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
						<DialogContent>{description}</DialogContent>
						<DialogActions>
							<Button label="OK" onClick={onClose} />
						</DialogActions>
					</Dialog>
				);
			})}
		</>
	);
};

import { Outlet } from 'react-router-dom';
import classes from './PageLayout.module.scss';

export const PageLayout = () => {
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
		</>
	);
};

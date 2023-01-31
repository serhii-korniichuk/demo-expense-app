import { PageHeading } from '../../shared/components/PageHeading';
import { Button } from '../../shared/components/Button';
import workingProcess from '../../assets/working-process.png';
import classes from './HomePage.module.scss';

export const HomePage = () => (
	<div className={classes['home-page']}>
		<PageHeading text="congradulations" className={classes['home-page__heading']} />
		<p className={classes['home-page__description']}>
			Now you are on the main page. Soon we will provide you with detailed feedback on the
			result of your work
		</p>
		<Button label="Log out" />
		<img
			src={workingProcess}
			alt="working process"
			className={classes['home-page__decoration-image']}
		/>
	</div>
);

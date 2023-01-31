import classNames from 'classnames';
import classes from './PageHeading.module.scss';

interface PageHeadingProps {
	text: string;
	className?: string;
}

export const PageHeading = ({ text, className }: PageHeadingProps) => (
	<h1 className={classNames(classes['page-heading'], className)}>{text}</h1>
);

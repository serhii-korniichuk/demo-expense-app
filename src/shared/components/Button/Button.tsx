import classNames from 'classnames';
import { default as MUIButton } from '@mui/material/Button';
import type { MouseEventHandler } from 'react';
import classes from './Button.module.scss';

export enum ButtonVariant {
	CONTAINED = 'contained',
	TEXT = 'text',
}

export enum ButtonType {
	BUTTON = 'button',
	SUBMIT = 'submit',
}

interface ButtonProps {
	label: string;
	variant?: ButtonVariant;
	type?: ButtonType;
	className?: string;
	onClick?: MouseEventHandler;
}

export const Button = ({
	label,
	className,
	variant = ButtonVariant.CONTAINED,
	type,
	onClick,
}: ButtonProps) => (
	<MUIButton
		className={classNames(
			classes.button,
			{
				[classes['button--contained']]: variant === ButtonVariant.CONTAINED,
				[classes['button--text']]: variant === ButtonVariant.TEXT,
			},
			className
		)}
		variant={variant}
		type={type}
		onClick={onClick}
	>
		{label}
	</MUIButton>
);

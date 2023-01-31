import {
	FormControl,
	FormHelperText,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import type { FormEventHandler, MouseEvent } from 'react';
import { useState } from 'react';
import classes from './AuthInput.module.scss';

enum AuthInputType {
	TEXT = 'text',
	PASSWORD = 'password',
}

interface AuthInputProps {
	name: string;
	label: string;
	value: string;
	error?: string;
	onChange?: FormEventHandler;
	isValueProtected?: boolean;
}

export const AuthInput = ({
	name,
	label,
	value,
	error,
	onChange,
	isValueProtected,
}: AuthInputProps) => {
	const [isValueVisible, setValueVisibility] = useState<boolean>();

	const clickHandler = () => setValueVisibility((prevVisibility) => !prevVisibility);

	const mouseDownHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<FormControl variant="standard" error={Boolean(error)}>
			<InputLabel className={classes['auth-input__label']} htmlFor={name}>
				{label}
			</InputLabel>
			<Input
				name={name}
				className={classes['auth-input__input']}
				id={name}
				type={
					isValueProtected && !isValueVisible
						? AuthInputType.PASSWORD
						: AuthInputType.TEXT
				}
				value={value}
				onChange={onChange}
				endAdornment={
					isValueProtected && (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={clickHandler}
								onMouseDown={mouseDownHandler}
							>
								{isValueVisible ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					)
				}
			/>
			{error && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	);
};

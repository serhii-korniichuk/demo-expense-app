import { useState } from 'react';
import { Formik, Form } from 'formik';
import { object } from 'yup';
import { AuthInput } from '../AuthInput';
import { PageHeading } from '../../../shared/components/PageHeading';
import { Button, ButtonType, ButtonVariant } from '../../../shared/components/Button';
import classes from './AuthForm.module.scss';
import type { AuthType } from '../../../shared/types';

interface AuthFormProps<T> {
	authType: AuthType;
	fields: {
		name: string;
		label: string;
		defaultValue: string;
		validator: unknown;
		isValueProtected?: boolean;
	}[];
	switchType: () => void;
	submitAction: (values: T) => void;
	switchTypeMessage: {
		text: string;
		link: string;
	};
}

export const AuthForm = <T extends unknown>({
	authType,
	fields,
	switchType,
	submitAction,
	switchTypeMessage,
}: AuthFormProps<T>) => {
	/* 
	Purpose to save initial values in state is correct updating of form when props are changed.
	If initial values were saved in usual variable, re-render would be incorrect after 'authType' would have changed
	(The Formik issue related to controlled-uncontrolled components).
	*/

	const [initialValues] = useState(
		fields.reduce((obj, { name, defaultValue }) => ({ ...obj, [name]: defaultValue }), {})
	);

	type FieldName = keyof typeof initialValues;

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize
			validationSchema={object(
				fields.reduce((obj, { name, validator }) => ({ ...obj, [name]: validator }), {})
			)}
			onSubmit={(values) => submitAction(values as T)}
		>
			{({ values, errors, handleChange }) => (
				<Form className={classes['auth-form']}>
					<PageHeading text={authType} className={classes['auth-form__heading']} />

					{fields.map(({ name, label, isValueProtected }) => (
						<AuthInput
							key={name}
							name={name}
							label={label}
							error={errors[name as FieldName]}
							isValueProtected={isValueProtected}
							value={values[name as FieldName]}
							onChange={handleChange}
						/>
					))}

					<Button
						label={authType}
						className={classes['auth-form__submit']}
						type={ButtonType.SUBMIT}
					/>

					<p className={classes['auth-form__redirect']}>
						{switchTypeMessage.text}
						<Button
							className={classes['auth-form__redirect-button']}
							label={switchTypeMessage.link}
							variant={ButtonVariant.TEXT}
							onClick={switchType}
						/>
					</p>
				</Form>
			)}
		</Formik>
	);
};

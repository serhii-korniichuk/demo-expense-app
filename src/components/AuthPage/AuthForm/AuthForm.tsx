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
	const initialValues = fields.reduce(
		(obj, { name, defaultValue }) => ({ ...obj, [name]: defaultValue }),
		{}
	);

	type FieldName = keyof typeof initialValues;

	return (
		<Formik
			initialValues={fields.reduce(
				(obj, { name, defaultValue }) => ({ ...obj, [name]: defaultValue }),
				{}
			)}
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

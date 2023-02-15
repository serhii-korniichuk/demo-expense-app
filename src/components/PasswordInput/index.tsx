import React, { ChangeEvent, FC, useState } from 'react';
import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    FormHelperText
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './index.scss';

interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<any>) => void;
    errors: any;
    touched: any;
}

const PasswordInput: FC<Props> = (props) => {
    const { label, name, value, onChange, errors, touched } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <FormControl variant="standard" className='input-wrapper'>
            <InputLabel htmlFor="password">{label}</InputLabel>
            <Input
                type={showPassword ? 'text' : 'password'}
                color='primary'
                className='password-input'
                name={name}
                error={errors[name] && touched[name]}
                value={value}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {errors[name] && touched[name] ? <FormHelperText className='error-text'>{errors[name]}</FormHelperText> : null}
        </FormControl>
    )
}

export default PasswordInput;

import React, { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';

import'./index.scss';

interface Props {
    label: string;
    value: string;
    name: string;
    onChange: (e: ChangeEvent<any>) => void;
    errors: any;
    touched: any;
}

const TextInput: FC<Props> = (props) => {
    const { label, value, onChange, name, errors, touched } = props;
    return (
        <TextField
            className='text-field'
            label={label}
            name={name}
            error={errors[name] && touched[name]}
            helperText={errors[name] && touched[name] ? errors[name] : ''}
            variant='standard'
            fullWidth
            color='primary'
            value={value}
            onChange={onChange}
        />
    )
}

export default TextInput;

import React from 'react'

import { Box, TextField, TextFieldProps, Typography } from '@mui/material'
import classNames from 'classnames'
import { Field, FieldProps } from 'formik'

import FormikErrorMessage from 'src/components/formikErrorMessage'

import { useStyles } from './style'

interface IProps {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  passwordIcon?: React.ReactNode
  onIconClick?: () => void
}

export const SimpleInput: React.FC<TextFieldProps & IProps> = ({
  className,
  startAdornment,
  endAdornment,
  passwordIcon,
  onIconClick,
  ...props
}) => {
  const classes = useStyles()

  return (
    <Box className={classNames(classes.root, className)}>
      <Field name={props.name}>
        {({ form: { errors, touched } }: FieldProps) => (
          <TextField
            {...props}
            variant='standard'
            label={<Typography variant='info3'>{props.label}</Typography>}
            InputProps={{
              startAdornment: startAdornment,
              endAdornment: endAdornment
            }}
            error={!!props.name && !!touched[props.name] && !!errors[props.name]}
          />
        )}
      </Field>
      {props.name && <FormikErrorMessage name={props.name} className={classes.error} />}
      {!!passwordIcon && (
        <Box className={classes.iconWrap} onClick={onIconClick}>
          {passwordIcon}
        </Box>
      )}
    </Box>
  )
}

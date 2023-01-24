import React from 'react'

import classNames from 'classnames'
import { ErrorMessage } from 'formik'

import useStyles from './style'

interface FormikErrorMessageProps {
  name: string
  className?: string
}

const FormikErrorMessage: React.FC<FormikErrorMessageProps> = ({
  name,
  className
}) => {
  const classes = useStyles()

  return (
    <ErrorMessage
      component='div'
      className={classNames(className, classes.root)}
      name={name}
    />
  )
}

export default FormikErrorMessage

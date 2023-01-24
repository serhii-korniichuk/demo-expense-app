import React from 'react'

import { Button, ButtonProps, Typography } from '@mui/material'

import { theme } from 'src/utils/constants/ui'

interface IProps {
  text?: string
  textColor?: string
  textVariant?: ITypographyVariant
}

export const CustomButton: React.FC<IProps & ButtonProps> = ({
  text,
  textVariant = 'h5',
  variant = 'outlined',
  textColor = theme.palette.textPrimary.main,
  ...props
}) => {
  return (
    <Button variant={variant} {...props}>
      <Typography color={textColor} variant={textVariant}>
        {text}
      </Typography>
    </Button>
  )
}

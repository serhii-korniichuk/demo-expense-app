import React, { BaseSyntheticEvent } from 'react'

import classNames from 'classnames'

import { IconType } from 'src/types/enums'
import { getIcon } from 'src/utils/helpers/customIcon'

import useStyles from './style'

declare interface IconProps {
  className?: string
  type: IconType
  fill?: string
  stroke?: string
  onClick?: (e: BaseSyntheticEvent) => void
  disabled?: boolean
}

export const CustomIcon: React.FC<IconProps> = ({
  className,
  type,
  fill,
  stroke,
  onClick,
  disabled = false
}) => {
  const classes = useStyles({ fill, stroke, clickable: !!onClick, disabled })
  const Icon = getIcon(type)

  return (
    <Icon
      className={classNames(classes.root, className)}
      onClick={(e) => {
        if (!!onClick) {
          if (!disabled) {
            onClick(e)
          }
        }
      }}
    />
  )
}


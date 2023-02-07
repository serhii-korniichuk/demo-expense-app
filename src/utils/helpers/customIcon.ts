import React, { BaseSyntheticEvent } from 'react'

import { ReactComponent as decor } from 'src/assets/home/Decor.svg'
import { ReactComponent as peopleBlog } from 'src/assets/home/Image.svg'

import { IconType } from 'src/types/enums'

const icons = {
  [IconType.peopleBlog]: peopleBlog,
  [IconType.decor]: decor
}

interface IconProps {
  className?: string
  onClick?: (e: BaseSyntheticEvent) => void
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>
}

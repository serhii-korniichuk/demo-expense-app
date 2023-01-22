import { ReactNode } from 'react'

import Authorization1 from 'src/pages/publicPages/authorization'

export interface IRoute {
  path: string
  component: ReactNode
}

export const authorizedRouteList: IRoute[] = [
  {
    path: '/home',
    component: <Authorization1 />,
  }
]

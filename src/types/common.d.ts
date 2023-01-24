declare interface RequestDataWithFunc<T> {
  data: T
  func?: () => void
}

declare interface RequestWithFunc {
  func: () => void
}

declare interface QueriesData {
  password: 'string'
  username: 'string'
  displayName: 'string'
}

declare interface ApiWrapper {
  method: string
  url: string
  data?: any
  isFormData?: boolean
}

declare type ITypographyVariant = 'h1' | 'h2' | 'h3' | 'h5' | 'info2' | 'info3' | 'info4'

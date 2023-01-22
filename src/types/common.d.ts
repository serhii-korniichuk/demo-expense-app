declare interface RequestDataWithFunc<T> {
  data: T
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

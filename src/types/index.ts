export type Option = {
  label: string
  value: any
}

export type LogisticsCenter = {
  name: string
  code: string
}

export type GetLogisticsResponse = LogisticsCenter[]

export type Product = {
  id: number
  name: string
  amount: number
}

export enum ORDER_STATUS {
  validated = 'validated',
  not_validated = 'not_validated',
  canceled = 'canceled',
  failed = 'failed',
}

export type Order = {
  id: number
  status: ORDER_STATUS
  products: Product[]
}

export type GetOrdersResponse = Order[]

export type User = {
  userName: string
  code: string
  logistic_center: LogisticsCenter
}

export type LoginParams = {
  userName: string
  code: string
  password: string
  logistic_code: string
}

export type LoginResponse = User

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

// will Removed
export enum ORDER_STATUS {
  validated = 'validated',
  not_validated = 'not_validated',
  canceled = 'canceled',
  failed = 'failed',
}

export enum SCAN_STATUS {
  standby = 'STANDBY',
  complete = 'COMPLETE',
  orderCancel = 'ORDER_CANCEL',
  scanFail = 'SCAN_FAIL',
}

export type Order = {
  id: number
  status: ORDER_STATUS
  scanStatus: SCAN_STATUS
  orderDate: string
  updatedUserId: string
  quantity: number
  memo: string
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

export type Item = {
  id: string
  name: string
  count: number
  scanStatus: SCAN_STATUS
}

export type GetOrderParams = {
  orderId: number
}

export type Items = {
  itemList: Item[]
  orderId: number
  totalItemCount: number
}

export type GetOrderResponse = {
  items: Items
  order: Order
}

export type ScanParams = {
  imageUrl: string
  orderId: number
  loginId: string
}

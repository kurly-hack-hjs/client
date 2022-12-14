import { ScanStatus } from 'aws-sdk/clients/ecr'

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
  scanning = 'SCANNING',
  reset = 'RESET',
  countError = 'COUNT_ERROR',
  etc = 'ETC',
}

export type Sort = {
  sorted: boolean
  unsorted: boolean
  empty: boolean
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

export type GetOrdersResponse = {
  content: Order[]
  empty: false
  number: number
  numberOfElements: number
  sort: Sort
}

export type User = {
  loginId: string
  staffCode: string
  centerName: string
}

export type LoginParams = {
  loginId: string
  staffCode: string
  password: string
  centerName: string
}

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
  snapshotList: Snapshot[]
}

export type ScanParams = {
  imageUrl: string
  orderId: number
  loginId: string
  tryCount: number
}

export type Snapshot = {
  orderId: number
  tryCount: number
  itemList: Item[]
  foundedItem: Item[]
  satisfied: boolean
}

export type ScanResponse = {
  foundItemsFromPicture: Item[]
  order: Order
  thisTurnSnapshot: {
    orderId: number
    snapshots: Item[]
  }
}

export type UpdateConfirmResultParams = {
  loginId: string
  memo: string
  newOrderScanStatus: SCAN_STATUS
  orderId: number
}

export type Message = {
  text: string
  type: 'error' | 'warning' | 'info' | 'success'
}

export type Error = {
  status: string
  data: string
}

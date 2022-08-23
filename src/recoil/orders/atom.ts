import { Order } from '@src/types'
import { atom } from 'recoil'

const orderListAtom = atom<Order[]>({
  key: 'orderList',
  default: [],
})

export const orderIdAtom = atom({
  key: 'orderId',
  default: '',
})

export default orderListAtom

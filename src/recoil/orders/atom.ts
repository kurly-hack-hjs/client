import { OrderList } from '@src/types'
import { atom } from 'recoil'

export const orderListAtom = atom<OrderList>({
  key: 'orderList',
  default: [],
  // effects: [
  //   ({ setSelf }) => {
  //     setSelf(getOrders())
  //   },
  // ],
})

export const orderIdAtom = atom({
  key: 'orderId',
  default: '',
})

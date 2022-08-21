import { GetOrdersResponse } from '@src/types'
import { atom } from 'recoil'
import { getOrders } from '@apis/order'

export const orderListAtom = atom<GetOrdersResponse>({
  key: 'orderList',
  default: [],
  // effects: [
  //   ({ setSelf }) => {
  //     setSelf(getOrders())
  //   },
  // ],
})

export const keywordAtom = atom({
  key: 'keyword',
  default: '',
})

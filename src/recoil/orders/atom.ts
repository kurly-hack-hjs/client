import { Order } from '@src/types'
import { atom } from 'recoil'

const orderListAtom = atom<Order[]>({
  key: 'orderList',
  default: [],
})

export const searchKeywordAtom = atom({
  key: 'searchKeyword',
  default: '',
})

export default orderListAtom

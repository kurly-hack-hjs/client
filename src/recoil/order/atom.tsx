import { GetOrderResponse } from '@src/types'
import { atomFamily } from 'recoil'

const orderAtomFamily = atomFamily<GetOrderResponse | undefined, number>({
  key: 'order',
  default: undefined,
})

export default orderAtomFamily

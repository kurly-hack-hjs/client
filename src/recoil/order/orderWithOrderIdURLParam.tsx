import { selectorFamily } from 'recoil'
import { GetOrderResponse } from '@src/types'
import orderAtomFamily from './atom'

const orderWithOrderIdURLParam = selectorFamily<GetOrderResponse | undefined, string | undefined>({
  key: 'orderWithOrderIdURLParam',
  get:
    orderId =>
    ({ get }) => {
      if (!orderId || isNaN(parseInt(orderId))) {
        return undefined
      }
      return get(orderAtomFamily(parseInt(orderId)))
    },
})

export { orderWithOrderIdURLParam }

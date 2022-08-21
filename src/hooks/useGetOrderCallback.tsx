import * as OrderAPI from '@apis/order'
import orderAtomFamily from '@recoil/order'
import { GetOrderParams } from '@src/types'
import { useRecoilCallback } from 'recoil'

const useGetOrderCallback = () =>
  useRecoilCallback(
    ({ set, snapshot }) =>
      async ({ orderId }: GetOrderParams) => {
        const order = await snapshot.getPromise(orderAtomFamily(orderId))
        if (order) return
        const data = await OrderAPI.getOrder({ orderId })
        set(orderAtomFamily(orderId), data)
      },
    [orderAtomFamily],
  )

export { useGetOrderCallback }

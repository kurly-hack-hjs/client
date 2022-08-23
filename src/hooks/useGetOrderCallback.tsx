import * as OrderAPI from '@apis/order'
import orderAtomFamily from '@recoil/order'
import { GetOrderParams } from '@src/types'
import { useRecoilCallback } from 'recoil'
import isLoadingAtom from '@recoil/global'

const useGetOrderCallback = () =>
  useRecoilCallback(
    ({ set, snapshot }) =>
      async ({ orderId }: GetOrderParams) => {
        const order = await snapshot.getPromise(orderAtomFamily(orderId))
        if (order) return
        set(isLoadingAtom, true)
        try {
          const data = await OrderAPI.getOrder({ orderId })
          set(orderAtomFamily(orderId), data)
        } catch (e) {
          console.log(e)
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [orderAtomFamily],
  )

export { useGetOrderCallback }

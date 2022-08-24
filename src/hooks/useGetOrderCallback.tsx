import * as OrderAPI from '@apis/order'
import orderAtomFamily from '@recoil/order'
import { GetOrderParams } from '@src/types'
import { useRecoilCallback } from 'recoil'
import isLoadingAtom, { messageAtom } from '@recoil/global'

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
        } catch (e: any) {
          set(messageAtom, { text: e.message, type: 'error' })
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [orderAtomFamily],
  )

export { useGetOrderCallback }

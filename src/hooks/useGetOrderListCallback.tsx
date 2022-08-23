import * as OrderAPI from '@apis/order'
import isLoadingAtom from '@recoil/global'
import orderListAtom from '@recoil/orders'
import { useRecoilCallback } from 'recoil'

const useGetOrderListCallback = () =>
  useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        const orderList = await snapshot.getPromise(orderListAtom)
        if (orderList.length > 0) return
        set(isLoadingAtom, true)
        try {
          const { content } = await OrderAPI.getOrders()
          set(orderListAtom, content)
        } catch (e) {
          console.log(e)
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [orderListAtom],
  )

export { useGetOrderListCallback }

import * as ConfirmAPI from '@apis/confirm'
import isLoadingAtom from '@recoil/global'
import orderListAtom from '@src/recoil/orders'
import orderAtomFamily from '@src/recoil/order'
import { UpdateConfirmResultParams } from '@src/types'
import { useNavigate } from 'react-router-dom'
import { useRecoilCallback } from 'recoil'

const useUpdateConfirmResultCallback = () => {
  const navigate = useNavigate()
  return useRecoilCallback(
    ({ set, snapshot }) =>
      async ({ loginId, orderId, newOrderScanStatus, memo }: UpdateConfirmResultParams) => {
        set(isLoadingAtom, true)
        const orderInfo = await snapshot.getPromise(orderAtomFamily(orderId))
        const orderList = await snapshot.getPromise(orderListAtom)
        if (!orderInfo) return
        try {
          await ConfirmAPI.updateConfirmResult({ loginId, orderId, newOrderScanStatus, memo })

          set(orderAtomFamily(orderId), {
            ...orderInfo,
            order: {
              ...orderInfo.order,
              memo,
              scanStatus: newOrderScanStatus,
            },
          })

          const newOrderList = orderList.map(order => {
            if (order.id === orderId) {
              return {
                ...order,
                memo,
                scanStatus: newOrderScanStatus,
              }
            }
            return order
          })

          set(orderListAtom, newOrderList)
          navigate(-1)
        } catch (error) {
          console.log('UpdateConfirmResultCallback')
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [orderAtomFamily, orderListAtom],
  )
}

export { useUpdateConfirmResultCallback }

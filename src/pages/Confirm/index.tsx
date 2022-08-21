import { ConfirmHeader, ConfirmList, ConfirmPicture } from '@src/feature'
import { useGetOrderCallback } from '@src/hooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { orderWithOrderIdURLParam } from '@recoil/order'
import style from './index.module.scss'
import { useRecoilValue } from 'recoil'

const Confirm = () => {
  const { orderId } = useParams()
  const getOrderCallback = useGetOrderCallback()
  const orderInfo = useRecoilValue(orderWithOrderIdURLParam(orderId))

  useEffect(() => {
    if (orderId) getOrderCallback({ orderId: parseInt(orderId) })
  }, [orderId, getOrderCallback])

  if (!orderInfo) {
    return <div>can not found</div>
  }
  const { order, items } = orderInfo
  return (
    <div className={style.container}>
      <ConfirmHeader order={order} />
      <ConfirmList items={items} />
      <ConfirmPicture />
    </div>
  )
}

export { Confirm }

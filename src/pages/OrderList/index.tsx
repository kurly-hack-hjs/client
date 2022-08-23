import { PurpleLogo } from '@components'
import { OrderAlertDialog, OrderSearch } from '@feature'
import { useGetOrderListCallback } from '@hooks'
import { orderWithSearch } from '@recoil/orders'
import { RightArrowIcon } from '@src/assets/svgs'
import { getScanStatusString } from '@src/services'
import { Order, SCAN_STATUS } from '@types'
import cx from 'classnames'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import userAtom from '@recoil/user'
import style from './index.module.scss'

const OrderList = () => {
  const orderList = useRecoilValue<Order[]>(orderWithSearch)
  const user = useRecoilValue(userAtom)
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const [selectedOrder, selectOrder] = useState<Order | undefined>(undefined)

  const getOrderListCallback = useGetOrderListCallback()

  useEffect(() => {
    getOrderListCallback()
  }, [getOrderListCallback])

  const handleAlertOpen = (order: Order) => {
    selectOrder(order)
    setAlertOpen(true)
  }

  const handleAlertClose = () => {
    selectOrder(undefined)
    setAlertOpen(false)
  }

  const getScanStatusInCircle = (scanStatus: SCAN_STATUS) => {
    const str = getScanStatusString(scanStatus)
    return str.split(' ').join('\n')
  }

  const renderOrders = () =>
    orderList.map(order => (
      <li
        key={order.id}
        className={cx(style.orderList, style[order.scanStatus])}
        onClick={() => handleAlertOpen(order)}>
        <div className={style.circle}>{getScanStatusInCircle(order.scanStatus)}</div>
        <dl>
          <dt>주문번호:{order.id}</dt>
          <dd>-{order.memo}</dd>
        </dl>
        <RightArrowIcon className={style.rightArrow} />
      </li>
    ))

  if (!orderList) return null

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.filterWrap}>
          <PurpleLogo />
        </div>
        <OrderSearch />
        <p className={style.notice}>
          <b>{user?.loginId}</b> 님의 검증을 기다리고 있는 주문입니다.
        </p>
      </div>
      <ul className={style.orderUl}>{renderOrders()}</ul>
      <OrderAlertDialog open={alertOpen} onClose={handleAlertClose} value={selectedOrder} />
    </div>
  )
}

export { OrderList }

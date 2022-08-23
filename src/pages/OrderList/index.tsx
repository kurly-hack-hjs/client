import { useState } from 'react'
import cx from 'classnames'
import style from './orderList.module.scss'
import { getOrders } from '@apis/order'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { orderListAtom } from '@recoil/orders'
import { SearchIcon, RightArrowIcon } from '@src/assets/svgs'
import { PurpleLogo } from '@src/components/PurpleLogo'
import OrderAlertDialog from '@src/feature/OrderAlertDialog'
import OrderSearch from '@src/feature/OrderSearch'

const OrderList = () => {
  const [orderList, setOrderList] = useRecoilState(orderListAtom)
  const [alertOpen, setAlertOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [todayShow, setTodayShow] = useState(true)

  useEffect(() => {
    ;(async () => {
      const data = await getOrders()
      setOrderList(data.content)
    })()
  }, [setOrderList])

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen)
  }

  const handleAlertOpen = () => {
    setAlertOpen(true)
  }
  const handleAlertClose = () => {
    setAlertOpen(false)
  }
  if (!orderList) return null

  return (
    <div className={style.wrapper}>
      <OrderSearch />
      <div className={style.container}>
        <div className={style.filterWrap}>
          <PurpleLogo />
          <ul className={style.buttonList}>
            <li>
              <button type="button" onClick={handleSearchOpen}>
                <SearchIcon />
              </button>
            </li>
          </ul>
        </div>
        <p className={style.notice}>
          <b>이소담</b> 님의 검증을 기다리고 있는 주문입니다.
        </p>
      </div>
      <ul className={style.orderUl}>
        {Array.isArray(orderList) ? (
          orderList.map(order => (
            <li key={order.id} className={cx(style.orderList, style[order.scanStatus])} onClick={handleAlertOpen}>
              <div className={style.curcle}>{order.scanStatus}</div>
              <dl>
                <dt>주문번호:{order.id}</dt>
                <dd>-{order.memo}</dd>
              </dl>
              <RightArrowIcon className={style.rightArrow} />
              {todayShow && <OrderAlertDialog open={alertOpen} onClose={handleAlertClose} value={order} />}
            </li>
          ))
        ) : (
          <li className={cx(style.orderList, style[orderList.scanStatus])} onClick={handleAlertOpen}>
            <div className={style.curcle}>{orderList.scanStatus}</div>
            <dl>
              <dt>주문번호:{orderList.id}</dt>
              <dd>-{orderList.memo}</dd>
            </dl>
            <RightArrowIcon className={style.rightArrow} />
          </li>
        )}
      </ul>
    </div>
  )
}

export { OrderList }

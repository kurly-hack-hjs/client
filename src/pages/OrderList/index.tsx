import { getOrders } from '@apis/order'
import { orderListAtom } from '@recoil/orders'
import { FilterIcon, RightArrowIcon, SearchIcon } from '@src/assets/svgs'
import { PurpleLogo } from '@src/components/PurpleLogo'
import FilterDialog from '@src/feature/FilterDialog'
import OrderAlertDialog from '@src/feature/OrderAlertDialog'
import cx from 'classnames'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import style from './orderList.module.scss'

const OrderList = () => {
  const [orderList, setOrderList] = useRecoilState(orderListAtom)
  const [orderId, setOrderId] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filter, setFilter] = useState('주문번호')
  const [alertOpen, setAlertOpen] = useState(false)
  const [todayShow, setTodayShow] = useState(true)

  useEffect(() => {
    ;(async () => {
      const data = await getOrders()
      setOrderList(data)
    })()
  }, [setOrderList])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.currentTarget.value)
  }
  const handleSearchOpen = () => {}

  const handleFilterOpen = () => {
    setFilterOpen(true)
  }

  const handleFilterClose = () => {
    setFilterOpen(false)
  }
  const handleAlertOpen = () => {
    setAlertOpen(true)
  }
  const handleAlertClose = () => {
    setAlertOpen(false)
  }
  if (!orderList) return null
  console.log(alertOpen)
  return (
    <div className={style.wrapper}>
      <FilterDialog keepMounted open={filterOpen} onClose={handleFilterClose} value={filter} />
      <div className={style.container}>
        <div className={style.filterWrap}>
          <PurpleLogo />
          <ul className={style.buttonList}>
            <li>
              <button type="button" onClick={handleSearchOpen}>
                <SearchIcon />
              </button>
            </li>
            <li>
              <button type="button" onClick={handleFilterOpen}>
                <FilterIcon />
              </button>
            </li>
          </ul>
        </div>
        <p className={style.notice}>
          <b>이소담</b> 님의 검증을 기다리고 있는 주문입니다.
        </p>
      </div>
      <ul className={style.orderUl}>
        {orderList.map(order => (
          <li key={order.id} className={cx(style.orderList, style[order.status])} onClick={handleAlertOpen}>
            <div className={style.curcle}>{order.status}</div>
            <dl>
              <dt>주문번호:{order.id}</dt>
              <dd>-{order.status}</dd>
            </dl>
            <RightArrowIcon className={style.rightArrow} />
            {todayShow && <OrderAlertDialog open={alertOpen} onClose={handleAlertClose} value={order} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { OrderList }

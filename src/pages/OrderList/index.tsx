import style from './orderList.module.scss'
import { getOrders } from '@apis/order'
import React, { ChangeEvent, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { orderListAtom } from '@recoil/orders'
import { useState } from 'react'
import { GetOrdersResponse } from '@src/types'
import { FilterIcon, SearchIcon, RightArrowIcon } from '@src/assets/svgs'

const OrderList = () => {
  const [orderList, setOrderList] = useRecoilState(orderListAtom)
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await getOrders()
      setOrderList(data)
    })()
  }, [setOrderList])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.currentTarget.value)
  }

  if (!orderList) return null
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <p className={style.notice}>
          <b>이소담</b> 님의 검증을 기다리고 있는 주문입니다.
        </p>
        <div className={style.filterWrap}>
          <form className={style.searchForm}>
            <input type="text" onChange={onChangeInput} placeholder="주문번호 입력" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          <button type="button">
            <FilterIcon />
          </button>
        </div>
      </div>
      <ul className={style.orderUl}>
        {orderList.map(order => (
          <li key={order.id}>
            <div className={order.status === 'validated' ? style.validated : style.noValidated}>
              {order.status === 'validated' ? '검증' : '미검증'}
            </div>
            <dl>
              <dt>주문번호:{order.id}</dt>
              <dd>-{order.status}</dd>
            </dl>
            <RightArrowIcon className={style.rightArrow} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { OrderList }

import { useGetOrderCallback } from '@src/hooks'
import { useParams, useSearchParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { orderListAtom, orderIdAtom } from '@recoil/orders'
import { orderWithOrderIdURLParam } from '@recoil/order'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as OrderAPI from '@apis/order'
import styles from './orderSearch.module.scss'

const OrderSearch = () => {
  const [orderList, setOrderList] = useRecoilState(orderListAtom)
  const [searchParams, setSearchParams] = useSearchParams()
  const [orderId, setOrderId] = useState(searchParams.get('orderId') ?? '')

  const getOrderCallback = useGetOrderCallback()
  const orderInfo = useRecoilValue(orderWithOrderIdURLParam(orderId))

  useEffect(() => {
    if (orderId) getOrderCallback({ orderId: parseInt(orderId) })
  }, [orderId, getOrderCallback])

  if (!orderInfo) {
    return <div>can not found</div>
  }
  const { order } = orderInfo

  setOrderList(order)

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (!orderId) {
      // eslint-disable-next-line no-alert
      alert('검색어를 입력해주세요')
      return
    }
    setSearchParams({ orderId: orderId })
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.currentTarget.value)
  }

  return (
    <div className={styles.searchBarWrap}>
      <form onSubmit={handleSubmit} className={styles.searchBarFixed}>
        <input onChange={handleSearchChange} type="text" name="orderId" value={orderId} />
      </form>
    </div>
  )
}

export default OrderSearch

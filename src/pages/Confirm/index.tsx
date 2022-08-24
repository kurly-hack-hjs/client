import Button from '@mui/material/Button'
import { orderWithOrderIdURLParam } from '@recoil/order'
import { ConfirmHeader, ConfirmList, ConfirmPicture } from '@src/feature'
import { useGetOrderCallback } from '@src/hooks'
import { SCAN_STATUS } from '@src/types'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import style from './index.module.scss'

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
  const { order, items, snapshotList } = orderInfo
  const itemList = snapshotList.length == 0 ? items.itemList : snapshotList[snapshotList.length - 1].itemList
  const disabled = itemList.some(item => item.scanStatus !== SCAN_STATUS.complete)
  console.log(disabled)
  return (
    <div className={style.container}>
      <ConfirmHeader order={order} />
      <ConfirmList items={{ ...items, itemList }} />
      <ConfirmPicture snapshotList={snapshotList} />
      <div className={style.wrap_button}>
        <Button sx={{ color: '#6200EE' }}>검증실패</Button>
        <Button variant="contained" sx={{ backgroundColor: '#6200EE' }} disabled={disabled}>
          검증완료
        </Button>
      </div>
    </div>
  )
}

export { Confirm }

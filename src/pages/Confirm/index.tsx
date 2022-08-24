import { useUpdateConfirmResultCallback } from '@hooks'
import Button from '@mui/material/Button'
import { orderWithOrderIdURLParam } from '@recoil/order'
import { ConfirmHeader, ConfirmList, ConfirmPicture } from '@src/feature'
import { useGetOrderCallback } from '@src/hooks'
import { SCAN_STATUS } from '@src/types'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import style from './index.module.scss'

const Confirm = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const getOrderCallback = useGetOrderCallback()
  const orderInfo = useRecoilValue(orderWithOrderIdURLParam(orderId))
  const UpdateConfirmResultCallback = useUpdateConfirmResultCallback()

  useEffect(() => {
    if (orderId) getOrderCallback({ orderId: parseInt(orderId) })
  }, [orderId, getOrderCallback])

  if (!orderInfo) {
    return <div>can not found</div>
  }
  const { order, items, snapshotList } = orderInfo
  const itemList = snapshotList.length == 0 ? items.itemList : snapshotList[snapshotList.length - 1].itemList
  const disabled = itemList.some(item => item.scanStatus !== SCAN_STATUS.complete)
  const onSubmit = () => {
    UpdateConfirmResultCallback({
      orderId: orderInfo.order.id,
      loginId: 'young',
      newOrderScanStatus: SCAN_STATUS.complete,
      memo: 'complete',
    })
  }
  return (
    <div className={style.container}>
      <ConfirmHeader order={order} />
      <ConfirmList items={{ ...items, itemList }} />
      <ConfirmPicture snapshotList={snapshotList} order={order} />
      <div className={style.wrap_button}>
        <Button sx={{ color: '#6200EE' }} onClick={() => navigate(`/fail/${orderId}`)}>
          검증실패
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#6200EE' }} disabled={disabled} onClick={onSubmit}>
          검증완료
        </Button>
      </div>
    </div>
  )
}

export { Confirm }

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './index.module.scss'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useRecoilValue } from 'recoil'
import { orderWithOrderIdURLParam } from '@recoil/order'
import { useGetOrderCallback, useUpdateConfirmResultCallback } from '@hooks'
import { getScanStatusString } from '@src/services'
import { Select } from '@components'
import { SCAN_STATUS } from '@src/types'
import Button from '@mui/material/Button'

const ConfirmFail = () => {
  const [memo, setMemo] = useState<string>('')
  const [status, setStatus] = useState<SCAN_STATUS>(SCAN_STATUS.etc)
  const { orderId } = useParams()
  const orderInfo = useRecoilValue(orderWithOrderIdURLParam(orderId))
  const navigate = useNavigate()
  const getOrderCallback = useGetOrderCallback()
  const UpdateConfirmResultCallback = useUpdateConfirmResultCallback()
  console.log(status)
  useEffect(() => {
    if (orderId) getOrderCallback({ orderId: parseInt(orderId) })
  }, [orderId, getOrderCallback])

  useEffect(() => {
    if (orderInfo) {
      setStatus(orderInfo.order.scanStatus)
    }
  }, [orderInfo])

  if (!orderInfo) {
    return <div>can not found</div>
  }

  const onChangeStatus = (value: SCAN_STATUS) => {
    setStatus(value)
  }
  const { order } = orderInfo
  const { scanStatus, id } = order
  const options = Object.values(SCAN_STATUS).map(value => ({
    label: getScanStatusString(value),
    value: value,
  }))

  const onSubmit = () => {
    UpdateConfirmResultCallback({ orderId: orderInfo.order.id, loginId: 'young', newOrderScanStatus: status, memo })
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <button className={style.btn_close} onClick={() => navigate(-1)}>
          <img src="/images/close.svg" />
        </button>
        <span>검증실패 사유 입력</span>
      </div>
      <div className={style.content}>
        <div className={style.order_info}>
          <p>주문 번호: {id}</p>
          <p>
            현재 상태: <em>{getScanStatusString(scanStatus)}</em>
          </p>
        </div>
        <div className={style.wrap_memo}>
          <span> 담당자 메모 </span>
          <TextareaAutosize aria-label="minimum height" onChange={e => setMemo(e.target.value)} value={memo} />
        </div>
        <Select value={status} onChange={onChangeStatus} placeholder="Status" options={options} block />
        <p className={style.info}>*임의로 지정할 검증상태 선택</p>
      </div>
      <div className={style.footer}>
        <Button sx={{ color: '#6200EE' }} onClick={() => navigate(-1)}>
          CANCEL
        </Button>
        <Button sx={{ color: '#6200EE' }} onClick={onSubmit}>
          SAVE
        </Button>
      </div>
    </div>
  )
}

export { ConfirmFail }

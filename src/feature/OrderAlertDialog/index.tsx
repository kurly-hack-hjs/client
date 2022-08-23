import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import { Order } from '@src/types'
import styles from './orderAlertDialog.module.scss'
import { checkmarkImg, errorImg } from '@src/assets/pngs'
import { useNavigate } from 'react-router-dom'

export interface ConfirmationDialogRawProps {
  value: Order | undefined
  open: boolean
  onClose: (value?: string) => void
}

const OrderAlertDialog = (props: ConfirmationDialogRawProps) => {
  const { onClose, value, open } = props
  const navigate = useNavigate()
  const handleClose = () => {
    onClose()
  }

  const onOk = () => {
    if (!value) return
    navigate(`/confirm/${value.id}`)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">정방향 사진을 등록해주세요.</DialogTitle>
        <DialogContent>
          <ul className={styles.alertUl}>
            <li>
              <img className={styles.alertImg} src={`${process.env.REACT_APP_AWS_S3_END_POINT}/example2.jpeg`} />
              <img src={checkmarkImg} />
            </li>
            <li>
              <img className={styles.alertImg} src={`${process.env.REACT_APP_AWS_S3_END_POINT}/example3.jpeg`} />
              <img src={errorImg} />
            </li>
          </ul>
          <FormControlLabel control={<Checkbox defaultChecked />} label="안내 오늘은 더이상 보지않기" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={onOk} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { OrderAlertDialog }

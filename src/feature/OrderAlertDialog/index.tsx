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

export interface ConfirmationDialogRawProps {
  value: Order
  open: boolean
  onClose: (value?: string) => void
}

export default function OrderAlertDialog(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">정방향 사진을 등록해주세요.</DialogTitle>
        <DialogContent>
          <p>{valueProp.id}</p>
          <ul className={styles.alertUl}>
            <li>
              <div className={styles.alertImg}></div>
              <img src={checkmarkImg} />
            </li>
            <li>
              <div className={styles.alertImg}></div>
              <img src={errorImg} />
            </li>
          </ul>
          <FormControlLabel control={<Checkbox defaultChecked />} label="안내 오늘은 더이상 보지않기" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

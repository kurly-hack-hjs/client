import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { messageAtom } from '@recoil/global'
import React from 'react'
import { useRecoilState } from 'recoil'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Notification = () => {
  const [message, setMessage] = useRecoilState(messageAtom)
  const handleClose = () => {
    setMessage(undefined)
  }
  return (
    <Snackbar open={message != undefined} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={message?.type} sx={{ width: '100%' }} onClose={handleClose}>
        {message?.text}
      </Alert>
    </Snackbar>
  )
}

export { Notification }

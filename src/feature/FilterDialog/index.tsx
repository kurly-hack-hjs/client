import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useEffect, useRef, useState } from 'react'

const options = ['주문번호', '검증여부', '결과', '날짜순']

export interface ConfirmationDialogRawProps {
  keepMounted: boolean
  value: string
  open: boolean
  onClose: (value?: string) => void
}

export default function FilterDialog(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = useState(valueProp)
  const radioGroupRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}>
      <DialogTitle>Filter</DialogTitle>
      <DialogContent dividers>
        <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
          {options.map(option => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>APPLY</Button>
      </DialogActions>
    </Dialog>
  )
}

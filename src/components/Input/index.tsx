import { FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'
import style from './index.module.scss'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: any
  type: string
  placeholder?: string
}

const Input = ({ onChange, value, type, placeholder }: InputProps) => (
  <FormControl variant="outlined">
    <TextField className={style.container} {...{ onChange, value, type, placeholder, label: placeholder }} />
  </FormControl>
)

export { Input }

import { FormControl } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import style from './index.module.scss'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: any
  type: string
  placeholder?: string
}

const Input = ({ onChange, value, type, placeholder }: InputProps) => (
  <FormControl variant="outlined">
    <OutlinedInput className={style.container} {...{ onChange, value, type, placeholder }} />
  </FormControl>
)

export { Input }

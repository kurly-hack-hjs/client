import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { default as MSelect } from '@mui/material/Select'
import { Option } from '@types'
import style from './index.module.scss'

type SelectProps = {
  onChange: (value: any) => void
  value?: string
  placeholder?: string
  options?: Option[]
}

const Select = ({ onChange, value, placeholder, options }: SelectProps) => {
  const renderOptions = () => {
    if (!options) return null
    return options.map(option => (
      <MenuItem key={option.value} value={option.value} className={style.text}>
        {option.label}
      </MenuItem>
    ))
  }

  return (
    <FormControl className={style.container}>
      <InputLabel id="demo-simple-select-helper-label">{placeholder}</InputLabel>
      <MSelect
        value={value}
        label="물류센터"
        onChange={e => {
          onChange(e.target.value)
        }}>
        {renderOptions()}
      </MSelect>
    </FormControl>
  )
}

export { Select }

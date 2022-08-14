import { Option } from '@types'
import { useState } from 'react'
import style from './index.module.scss'

type SelectProps = {
  onChange: (value: any) => void
  value?: Option
  placeholder?: string
  options?: Option[]
}

const defaultOptions: Option[] = [
  { label: '송파', value: 'C-01' },
  { label: '항동', value: 'C-02' },
  { label: '김포', value: 'C-03' },
  { label: '화도', value: 'C-04' },
  { label: '죽전', value: 'C-05' },
]

type DropdownProps = {
  options: Option[]
  onChange: (value: any) => void
  value?: Option
}

const Dropdown = ({ options, onChange, value }: DropdownProps) => {
  const renderOptions = () =>
    options.map(option => (
      <li className={value && value.value === option.value ? style.selected : ''} onClick={() => onChange(option)}>
        {option.label}
      </li>
    ))
  return <ul className={style.dropdown}>{renderOptions()}</ul>
}

const Select = ({ onChange, value, placeholder, options = defaultOptions }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => {
    setIsOpen(open => !open)
  }
  const onClickOption = (option: Option) => {
    setIsOpen(false)
    onChange(option)
  }
  return (
    <div className={style.container}>
      <div className={style.wrap_select} onClick={toggleOpen}>
        <img className={style.img_center} src="./images/center.svg" alt="center" />
        <label className={style.text}>{value ? value.label : placeholder}</label>
        <img className={style.img_arrow_down} src="./images/arrow-down.svg" alt="open" />
      </div>
      {isOpen && <Dropdown options={options} onChange={onClickOption} value={value} />}
    </div>
  )
}

export { Select }

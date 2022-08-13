import { useState } from 'react'
import style from './index.module.scss'

type Option = {
  label: string
  value: any
}

type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: Option
  placeholder?: string
  options: Option[]
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
}

const Dropdown = ({ options }: DropdownProps) => {
  const renderOptions = () => options.map(option => <li>{option.label}</li>)
  return <ul className={style.dropdown}>{renderOptions()}</ul>
}

const Select = () => {
  const [selectedValue, setSelectedValue] = useState<Option | undefined>(undefined)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => {
    setIsOpen(open => !open)
  }
  return (
    <div className={style.container}>
      <div className={style.wrap_select} onClick={toggleOpen}>
        <img className={style.img_center} src="./images/center.svg" alt="center" />
        <label className={style.text}>{selectedValue ? selectedValue.label : '물류센터를 선택해주세요'}</label>
        <img className={style.img_arrow_down} src="./images/arrow-down.svg" alt="open" />
      </div>
      {isOpen && <Dropdown options={defaultOptions} />}
    </div>
  )
}

export { Select }

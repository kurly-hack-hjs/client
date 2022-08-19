import style from './index.module.scss'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: any
  type: string
  placeholder?: string
}

const Input = ({ onChange, value, type, placeholder }: InputProps) => (
  <input className={style.container} {...{ onChange, value, type, placeholder }} />
)

export { Input }

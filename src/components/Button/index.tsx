import style from './index.module.scss'

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>
  children?: React.ReactNode
  block?: boolean
}

const Button = ({ onClick, children, block }: ButtonProps) => {
  return (
    <button className={`${style.container} ${block && style.block}`} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }

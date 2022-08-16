import style from './index.module.scss'

type LogoProps = {
  size?: 'small' | 'large'
  primary?: boolean
}

const Logo = ({ size = 'large', primary = false }: LogoProps) => (
  <div className={style.container}>
    <img
      alt="logo"
      src={primary ? '/images/logo_primary.svg' : '/images/logo.svg'}
      className={size == 'small' ? style.small : ''}
    />
  </div>
)

export { Logo }

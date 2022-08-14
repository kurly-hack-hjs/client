import { Logo } from '@components'
import { LoginForm } from '@src/feature'
import style from './index.module.scss'

const Login = () => (
  <div className={style.container}>
    <Logo />
    <LoginForm />
  </div>
)

export { Login }

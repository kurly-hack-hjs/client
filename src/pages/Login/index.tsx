import { Logo } from '@components'
import { LoginForm } from '@src/feature'
import { Suspense } from 'react'
import style from './index.module.scss'

const Login = () => (
  <div className={style.container}>
    <img alt="logo" src={'/images/mainLogo.png'} className={style.mainLogo} />
    <Suspense>
      <LoginForm />
    </Suspense>
  </div>
)

export { Login }

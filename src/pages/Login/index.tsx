import { Logo } from '@components'
import { LoginForm } from '@src/feature'
import { Suspense } from 'react'
import style from './index.module.scss'

const Login = () => (
  <div className={style.container}>
    <Logo />
    <Suspense>
      <LoginForm />
    </Suspense>
  </div>
)

export { Login }

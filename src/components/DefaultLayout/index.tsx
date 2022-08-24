import style from './index.module.scss'
import { Footer, Loading, Notification } from '@components'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div className={style.container}>
    <Notification />
    <Loading />
    <div className={style.content}>{children}</div>
    <Footer />
  </div>
)

export { DefaultLayout }

import { ConfirmHeader, ConfirmList, ConfirmPicture } from '@src/feature'
import style from './index.module.scss'

const Confirm = () => (
  <div className={style.container}>
    <ConfirmHeader />
    <ConfirmList />
    <ConfirmPicture />
  </div>
)

export { Confirm }

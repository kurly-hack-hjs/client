import style from './index.module.scss'
import { Logo } from '@components'

const ConfirmHeader = () => (
  <div className={style.container}>
    <div className={style.header}>
      <button className={style.btn_close}>
        <img src="/images/close.svg" />
      </button>
      <Logo primary size="small" />
    </div>
    <p className={style.info}>
      <em>이소담</em>님,
      <br />
      주문번호 <em>227732112014 (미검증)</em>
      <br />
      검증을 시작합니다.
    </p>
  </div>
)

export { ConfirmHeader }

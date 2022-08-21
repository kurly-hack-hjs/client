import style from './index.module.scss'
import { Logo } from '@components'
import { Order } from '@src/types'
import { getScanStatusString } from '@services'

type ConfirmHeaderProps = {
  order: Order
}

const ConfirmHeader = ({ order }: ConfirmHeaderProps) => {
  const { id, scanStatus } = order
  return (
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
        주문번호{' '}
        <em>
          {id} ({getScanStatusString(scanStatus)})
        </em>
        <br />
        검증을 시작합니다.
      </p>
    </div>
  )
}

export { ConfirmHeader }

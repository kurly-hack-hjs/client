import { getScanStatusString } from '@src/services'
import { Items, SCAN_STATUS } from '@src/types'
import style from './index.module.scss'

type ConfirmListProps = {
  items: Items
}

const ConfirmList = ({ items }: ConfirmListProps) => {
  const { itemList, totalItemCount, orderId } = items
  const failedCount = itemList.filter(item => item.scanStatus === SCAN_STATUS.scanFail).length
  const renderItemList = () => (
    <ul className={style.validation_list}>
      {itemList.map(({ id, name, count, scanStatus }) => {
        const classNames: string[] = [style.validation_result]
        if (scanStatus == SCAN_STATUS.complete) {
          classNames.push(style.success)
        } else if (scanStatus == SCAN_STATUS.standby) {
          classNames.push(style.warning)
        }
        return (
          <li key={`${orderId}_${id}`}>
            <div className={classNames.join(' ')}>
              <img />
              <span>{getScanStatusString(scanStatus)}</span>
            </div>
            <p>{name}</p>
            <span>수량: {count}</span>
          </li>
        )
      })}
    </ul>
  )
  return (
    <div className={style.container}>
      <div className={style.section_header}>
        <em className={style.section_title}>주문물품</em>
        <div className={style.validation_info}>
          <em>총 주문수량</em>
          <span>{totalItemCount}개</span>
        </div>
        <div className={style.validation_info}>
          <em>오류항목</em>
          <span>{failedCount}개</span>
        </div>
      </div>
      {renderItemList()}
    </div>
  )
}

export { ConfirmList }

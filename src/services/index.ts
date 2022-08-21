import { SCAN_STATUS } from '@src/types'

export const getScanStatusString = (scanStatus: SCAN_STATUS) => {
  switch (scanStatus) {
    case SCAN_STATUS.complete:
      return '검증완료'
    case SCAN_STATUS.orderCancel:
      return '검증불필요'
    case SCAN_STATUS.scanFail:
      return '재검증필요'
    case SCAN_STATUS.standby:
      return '미검증'
  }
}

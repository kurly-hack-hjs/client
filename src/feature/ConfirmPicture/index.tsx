import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '@mui/material/Button'
import { uploadImage } from '@services'
import { useFileUpload, useScanCallback } from '@src/hooks'
import { Order, Snapshot } from '@src/types'
import { useEffect } from 'react'
import style from './index.module.scss'

type ConfirmResultProps = {
  snapshot: Snapshot
}

const ConfirmResult = ({ snapshot }: ConfirmResultProps) => {
  const { satisfied, foundedItem } = snapshot
  const itemCntMap = foundedItem.reduce((acc: { [key: string]: number }, cur) => {
    if (acc[cur.name]) {
      acc[cur.name] += 1
    } else {
      acc[cur.name] = 1
    }
    return acc
  }, {})
  return (
    <div className={style.result_content}>
      <p>
        현재상태: <em>{satisfied ? '검증 완료' : '재검증 필요'}</em>
      </p>

      <div>
        결과
        <ul>
          {Object.entries(itemCntMap).map(([name, count], i) => (
            <p>
              {i + 1}. {name} (감지된 개수: {count})
            </p>
          ))}
        </ul>
      </div>
    </div>
  )
}

enum STEP_STATUS {
  success,
  warning,
  none,
}

type ConfirmStepProps = {
  stepCnt: number
  children?: React.ReactNode
  status: STEP_STATUS
}

const ConfirmStep = ({ children, stepCnt, status }: ConfirmStepProps) => {
  const getStatusClassName = () => {
    switch (status) {
      case STEP_STATUS.success:
        return style.success
      case STEP_STATUS.warning:
        return style.warning
      default:
        return ''
    }
  }
  return (
    <li className={`${style.confirm_result} ${getStatusClassName()}`}>
      <div className={style.result_header}>
        <img className={style.circle} />
        <p>{stepCnt}차 검증 결과</p>
        <img className={style.icon} />
      </div>
      <div className={style.result_container}>{children}</div>
    </li>
  )
}

type ConfirmPictureProps = {
  snapshotList: Snapshot[]
  order: Order
}

const ConfirmPicture = ({ snapshotList, order }: ConfirmPictureProps) => {
  const { DummyElement, fileInfo, uploadFile, clearFile } = useFileUpload()
  const scanCallback = useScanCallback()
  const { id: orderId } = order
  useEffect(() => {
    if (!fileInfo) return
    uploadImage(fileInfo.file)
    const upload = async () => {
      const response = await uploadImage(fileInfo.file)
      clearFile()
      const { Location } = response
      await scanCallback({ orderId, imageUrl: Location, tryCount: snapshotList.length, loginId: 'sodam' })
    }
    upload()
  }, [fileInfo, scanCallback, orderId, snapshotList, clearFile])

  const renderStepper = () => {
    const elements = []
    const getStatus = (idx: number) => {
      if (idx >= snapshotList.length) return STEP_STATUS.none
      return snapshotList[idx].satisfied ? STEP_STATUS.success : STEP_STATUS.warning
    }
    for (let i = 1; i <= 5; i++) {
      const status = getStatus(i)
      elements.push(
        <ConfirmStep stepCnt={i} status={status}>
          {i < snapshotList.length ? (
            <ConfirmResult snapshot={snapshotList[i]} />
          ) : (
            <Button
              sx={{ backgroundColor: '#6200EE' }}
              variant="contained"
              onClick={() => uploadFile()}
              disabled={i > snapshotList.length}
              startIcon={<PhotoCamera />}>
              검증하기
            </Button>
          )}
        </ConfirmStep>,
      )
      if (status == STEP_STATUS.success) break
    }
    return <ul>{elements}</ul>
  }

  return (
    <div className={style.container}>
      <h3 className={style.section_title}>사진 검증</h3>
      <p className={style.section_desc}>시범 운영모드는 주문당 5번의 사진 검증을 지원합니다.</p>
      {renderStepper()}
      <DummyElement />
    </div>
  )
}

export { ConfirmPicture }

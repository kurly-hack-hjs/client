import style from './index.module.scss'
import { useFileUpload } from '@src/hooks'
import { Button } from '@src/components'
import { useEffect } from 'react'
import { uploadImage } from '@services'

const ConfirmPicture = () => {
  const { DummyElement, fileInfo, uploadFile } = useFileUpload()
  useEffect(() => {
    if (!fileInfo) return
    uploadImage(fileInfo.file)
  }, [fileInfo])
  return (
    <div className={style.container}>
      <h3 className={style.section_title}>사진 검증</h3>
      <p className={style.section_desc}>시범 운영모드는 주문당 5번의 사진 검증을 지원합니다.</p>
      <ul>
        <li className={`${style.confirm_result} ${style.warning}`}>
          <div className={style.result_header}>
            <img className={style.circle} />
            <p>1차 검증 결과</p>
            <img className={style.icon} />
          </div>
          <div className={style.result_container}>
            <div className={style.result_content}></div>
          </div>
        </li>
        <li className={`${style.confirm_result} ${style.success}`}>
          <div className={style.result_header}>
            <img className={style.circle} />
            <p>2차 검증 결과</p>
            <img className={style.icon} />
          </div>
          <div className={style.result_container}>
            <div className={style.result_content}></div>
          </div>
        </li>
        <li className={`${style.confirm_result} ${style.before}`}>
          <div className={style.result_header}>
            <img className={style.circle} />
            <p>3차 검증 결과</p>
            <img className={style.icon} />
          </div>
          <div className={style.result_container}>
            <Button block onClick={() => uploadFile()}>
              검증하기
            </Button>
          </div>
        </li>
        <li className={`${style.confirm_result} ${style.before}`}>
          <div className={style.result_header}>
            <img className={style.circle} />
            <p>4차 검증 결과</p>
            <img className={style.icon} />
          </div>
          <div className={style.result_container}>
            <Button block>검증하기</Button>
          </div>
        </li>
        <li className={`${style.confirm_result} ${style.before}`}>
          <div className={style.result_header}>
            <img className={style.circle} />
            <p>5차 검증 결과</p>
            <img className={style.icon} />
          </div>
          <div className={style.result_container}>
            <Button block>검증하기</Button>
          </div>
        </li>
      </ul>
      <DummyElement />
    </div>
  )
}

export { ConfirmPicture }

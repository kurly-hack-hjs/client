import AWS from 'aws-sdk'
import { SCAN_STATUS } from '@src/types'

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
})

export const getScanStatusString = (scanStatus: SCAN_STATUS) => {
  switch (scanStatus) {
    case SCAN_STATUS.complete:
      return '검증 완료'
    case SCAN_STATUS.orderCancel:
      return '검증 불필요'
    case SCAN_STATUS.scanFail:
      return '재검증 필요'
    case SCAN_STATUS.standby:
      return '미검증'
    case SCAN_STATUS.scanning:
      return '검증 진행중'
    case SCAN_STATUS.reset:
      return '리셋'
    case SCAN_STATUS.countError:
      return '수량 에러'
    case SCAN_STATUS.etc:
    default:
      return '기타'
  }
}

export const uploadImage = async (file: File) => {
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME || '',
      Key: file.name,
      Body: file,
    },
  })
  const response = await upload.promise()
  return response
}

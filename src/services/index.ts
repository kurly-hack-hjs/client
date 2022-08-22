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
      return '검증완료'
    case SCAN_STATUS.orderCancel:
      return '검증불필요'
    case SCAN_STATUS.scanFail:
      return '재검증필요'
    case SCAN_STATUS.standby:
      return '미검증'
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

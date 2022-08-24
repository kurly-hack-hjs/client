import endpoint from './endpoint'
import { ScanParams, ScanResponse, UpdateConfirmResultParams } from '@src/types'

const scan = async (params: ScanParams): Promise<ScanResponse> => {
  const response = await endpoint.post('scan', params)
  const { data } = response
  return data
}

const updateConfirmResult = async (params: UpdateConfirmResultParams) => {
  await endpoint.post(`/order/update`, params)
}

export { scan, updateConfirmResult }

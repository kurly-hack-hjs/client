import endpoint from './endpoint'
import { ScanParams, ScanResponse } from '@src/types'

const scan = async (params: ScanParams): Promise<ScanResponse> => {
  const response = await endpoint.post('scan', params)
  const { data } = response
  return data
}

export { scan }

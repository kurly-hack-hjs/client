import endpoint from './endpoint'
import { ScanParams } from '@src/types'

const scan = async (params: ScanParams) => {
  const response = await endpoint.post('scan', params)
  const { data } = response
  return data
}

export { scan }

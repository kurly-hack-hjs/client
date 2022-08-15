import endpoint from './endpoint'
import { GetLogisticsResponse } from '@src/types'

const getLogistics = async (): Promise<GetLogisticsResponse> => {
  const response = await endpoint.get('/logistics')
  const { data } = response
  return data
}

export { getLogistics }

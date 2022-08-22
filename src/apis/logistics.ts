import { GetLogisticsResponse } from '@src/types'
import endpoint from './endpoint'

const getLogistics = async (): Promise<GetLogisticsResponse> => {
  const response = await endpoint.get('/logistics')
  const { data } = response
  return data
}

export { getLogistics }

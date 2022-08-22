import { GetLogisticsResponse } from '@src/types'
import axios from 'axios'

const getLogistics = async (): Promise<GetLogisticsResponse> => {
  // for mock API
  const response = await axios.get('/logistics')
  const { data } = response
  return data
}

export { getLogistics }

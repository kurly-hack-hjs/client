import endpoint from './endpoint'
import { GetOrdersResponse } from '@src/types'

const getOrders = async (): Promise<GetOrdersResponse> => {
  const response = await endpoint.get('/orders')
  const { data } = response
  return data
}

export { getOrders }

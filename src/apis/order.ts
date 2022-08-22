import endpoint from './endpoint'
import { GetOrdersResponse, GetOrderParams, GetOrderResponse } from '@src/types'

const getOrders = async (): Promise<GetOrdersResponse> => {
  const response = await endpoint.get('/orders')
  const { data } = response
  return data
}

const getOrder = async ({ orderId }: GetOrderParams): Promise<GetOrderResponse> => {
  const response = await endpoint.get(`/order/${orderId}`)
  const { data } = response
  return data
}

export { getOrders, getOrder }

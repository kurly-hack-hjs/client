import endpoint from './endpoint'
import { LoginParams, LoginResponse } from '@src/types'

const login = async (params: LoginParams): Promise<LoginResponse> => {
  const response = await endpoint.post('/login', params)
  const { data } = response
  console.log(response)
  return data
}

export { login }

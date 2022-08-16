import endpoint from './endpoint'
import { LoginParams, LoginResponse } from '@src/types'

const login = async ({ userName, password, code }: LoginParams): Promise<LoginResponse> => {
  const response = await endpoint.post('login', { userName, password, code })
  const { data } = response
  return data
}

export { login }

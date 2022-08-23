import endpoint from './endpoint'
import { LoginParams, LoginResponse } from '@src/types'

const login = async (params: LoginParams): Promise<void> => {
  await endpoint.post('/login', params)
}

export { login }

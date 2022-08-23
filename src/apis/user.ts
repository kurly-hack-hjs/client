import { LoginParams } from '@src/types'
import endpoint from './endpoint'

const login = async (params: LoginParams): Promise<void> => {
  await endpoint.post('/login', params)
}

export { login }

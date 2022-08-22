import * as UserAPI from '@apis/user'
import { LoginParams } from '@src/types'
import userAtom from '@recoil/user'
import { useRecoilCallback } from 'recoil'

const useLoginCallback = () =>
  useRecoilCallback(({ set }) => async ({ userName, password, code, logistic_code }: LoginParams) => {
    const data = await UserAPI.login({ userName, password, code, logistic_code })
    set(userAtom, data)
  })

export { useLoginCallback }

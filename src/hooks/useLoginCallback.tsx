import * as UserAPI from '@apis/user'
import { LoginParams } from '@src/types'
import userAtom from '@recoil/user'
import { useRecoilCallback } from 'recoil'

const useLoginCallback = () =>
  useRecoilCallback(({ set }) => async ({ loginId, password, staffCode, centerName }: LoginParams) => {
    const data = await UserAPI.login({ loginId, password, staffCode, centerName })
    set(userAtom, data)
  })

export { useLoginCallback }

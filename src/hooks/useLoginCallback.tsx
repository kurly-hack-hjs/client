import * as UserAPI from '@apis/user'
import isLoadingAtom, { messageAtom } from '@recoil/global'
import userAtom from '@recoil/user'
import { LoginParams } from '@src/types'
import { useNavigate } from 'react-router-dom'
import { useRecoilCallback } from 'recoil'

const useLoginCallback = () => {
  const navigate = useNavigate()
  return useRecoilCallback(
    ({ set }) =>
      async ({ loginId, password, staffCode, centerName }: LoginParams) => {
        set(isLoadingAtom, true)
        try {
          await UserAPI.login({ loginId, password, staffCode, centerName })
          set(userAtom, { loginId, staffCode, centerName })
          set(messageAtom, { text: '로그인 성공', type: 'success' })
          navigate('/list')
        } catch (error: any) {
          set(messageAtom, { text: '로그인 실패', type: 'error' })
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [userAtom],
  )
}

export { useLoginCallback }

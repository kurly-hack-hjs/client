import * as UserAPI from '@apis/user'
import isLoadingAtom from '@recoil/global'
import userAtom from '@recoil/user'
import { LoginParams } from '@src/types'
import { useNavigate } from 'react-router-dom'
import { useRecoilCallback } from 'recoil'

const useLoginCallback = () => {
  const navigate = useNavigate()
  return useRecoilCallback(({ set }) => async ({ loginId, password, staffCode, centerName }: LoginParams) => {
    set(isLoadingAtom, true)
    try {
      await UserAPI.login({ loginId, password, staffCode, centerName })
      set(userAtom, { loginId, staffCode, centerName })
      navigate('/list')
    } catch (error) {
      console.log('error in Login')
    } finally {
      set(isLoadingAtom, false)
    }
  })
}

export { useLoginCallback }

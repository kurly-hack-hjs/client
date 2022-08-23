import * as UserAPI from '@apis/user'
import { LoginParams } from '@src/types'
import userAtom from '@recoil/user'
import { useRecoilCallback } from 'recoil'
import { useNavigate } from 'react-router-dom'

const useLoginCallback = () => {
  const navigate = useNavigate()
  return useRecoilCallback(({ set }) => async ({ loginId, password, staffCode, centerName }: LoginParams) => {
    try {
      await UserAPI.login({ loginId, password, staffCode, centerName })
      set(userAtom, { loginId, staffCode, centerName })
      navigate('/list')
    } catch (error) {
      console.log('error in Login')
    }
  })
}

export { useLoginCallback }

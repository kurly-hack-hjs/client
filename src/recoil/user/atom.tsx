import { atom } from 'recoil'
import { LoginResponse } from '@src/types'

const userAtom = atom<LoginResponse | undefined>({
  key: 'user',
  default: undefined,
})

export default userAtom

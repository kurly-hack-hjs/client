import { atom } from 'recoil'
import { User } from '@src/types'

const userAtom = atom<User | undefined>({
  key: 'user',
  default: undefined,
})

export default userAtom

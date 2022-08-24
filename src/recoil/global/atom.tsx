import { atom } from 'recoil'
import { Message } from '@types'

const isLoadingAtom = atom<boolean>({
  key: 'isLoading',
  default: false,
})

export const messageAtom = atom<Message | undefined>({
  key: 'message',
  default: undefined,
})

export default isLoadingAtom

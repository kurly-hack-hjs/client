import { atom } from 'recoil'
import * as LogisticsAPI from '@apis/logistics'
import { GetLogisticsResponse } from '@src/types'

const logisticsAtom = atom<GetLogisticsResponse>({
  key: 'logistics',
  default: [],
  effects: [
    ({ setSelf }) => {
      setSelf(LogisticsAPI.getLogistics())
    },
  ],
})

export default logisticsAtom

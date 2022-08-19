import { selector } from 'recoil'

import { orderListAtom, keywordAtom } from './atom'

const orderWithSearch = selector({
  key: 'orderWithSearch',
  get: ({ get }) => {
    const order = get(orderListAtom)
    const keyword = get(keywordAtom)

    return (order = order.filter(order => order.id.includes(keyword)))
  },
})

export default orderWithSearch

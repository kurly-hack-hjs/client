import { selector } from 'recoil'

import orderListAtom, { orderIdAtom } from './atom'

const orderWithSearch = selector({
  key: 'orderWithSearch',
  get: ({ get }) => {
    const order = get(orderListAtom)
    const keyword = get(orderIdAtom)

    return (order = order.filter(order => order.id.includes(keyword)))
  },
})

export default orderWithSearch

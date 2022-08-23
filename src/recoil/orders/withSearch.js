import { selector } from 'recoil'

import orderListAtom, { searchKeywordAtom } from './atom'

const orderWithSearch = selector({
  key: 'orderWithSearch',
  get: ({ get }) => {
    const orders = get(orderListAtom)
    const keyword = get(searchKeywordAtom)
    if (keyword === '') return orders
    return orders.filter(({ id }) => {
      const idStr = id.toString()
      return idStr.includes(keyword)
    })
  },
})

export default orderWithSearch

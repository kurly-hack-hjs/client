import { rest } from 'msw'

const logistics = [
  { label: '송파', value: 'C-01' },
  { label: '항동', value: 'C-02' },
  { label: '김포', value: 'C-03' },
  { label: '화도', value: 'C-04' },
  { label: '죽전', value: 'C-05' },
]

const orders = [
  {
    id: 0,
    status: 'validated',
    products: [
      {
        id: 0,
        name: '[폴바셋] 바리스타 돌체라떼 330ml',
        amount: 1,
      },
      {
        id: 1,
        name: '데이&곤약젤리 레몬 깔라만시 제품명...',
        amount: 2,
      },
      {
        id: 2,
        name: '[고래사어묵] 김치 우동전골',
        amount: 3,
      },
    ],
  },
  {
    id: 1,
    status: 'not_validated',
    products: [
      {
        id: 0,
        name: '[폴바셋] 바리스타 돌체라떼 330ml',
        amount: 2,
      },
      {
        id: 1,
        name: '데이&곤약젤리 레몬 깔라만시 제품명...',
        amount: 1,
      },
      {
        id: 2,
        name: '[고래사어묵] 김치 우동전골',
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    status: 'canceled',
    products: [
      {
        id: 0,
        name: '[폴바셋] 바리스타 돌체라떼 330ml',
        amount: 3,
      },
      {
        id: 1,
        name: '데이&곤약젤리 레몬 깔라만시 제품명...',
        amount: 2,
      },
      {
        id: 2,
        name: '[고래사어묵] 김치 우동전골',
        amount: 5,
      },
    ],
  },
  {
    id: 3,
    status: 'failed',
    products: [
      {
        id: 0,
        name: '[폴바셋] 바리스타 돌체라떼 330ml',
        amount: 2,
      },
      {
        id: 1,
        name: '데이&곤약젤리 레몬 깔라만시 제품명...',
        amount: 1,
      },
      {
        id: 2,
        name: '[고래사어묵] 김치 우동전골',
        amount: 1,
      },
    ],
  },
]

export const handlers = [
  // 물류센터
  rest.get('/logistics', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(logistics))
  }),

  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders))
  }),
]

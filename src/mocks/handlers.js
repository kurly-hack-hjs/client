import { rest } from 'msw'
import orders from './data/orders'
import logistics from './data/logistics'
import user from './data/user'

export const handlers = [
  // 물류센터
  rest.get('/logistics', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(logistics))
  }),

  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders))
  }),

  rest.post('/login', async (req, res, ctx) => {
    const { userName, code, password } = await req.json()
    if (user.userName != userName || user.code != code || user.password != password) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Failed to log in: username or password are invalid',
        }),
      )
    }
    return res(ctx.status(200), ctx.json(user))
  }),
]

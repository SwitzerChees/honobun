import { User, fullName } from '@honobun/common'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()
app.use('/*', cors())
app.use(logger())

const rootRoute = app.get('/', (c) => {
  return c.text('Hello Hono!')
})
const nameRoute = app.get('/user/:name', (c) => {
  const user: User = {
    id: '2',
    name: fullName(c.req.param('name'), 'Michel'),
    email: 'example@gmail.com',
    role: 'user',
  }
  return c.json(user)
})
const moinRoute = app.get('/moin', (c) => {
  return c.text('Moin Moin!')
})
const numberRoute = app.get('/number', (c) => {
  return c.json(52)
})

export type AppType = typeof rootRoute | typeof nameRoute | typeof moinRoute | typeof numberRoute
export default {
  port: 4200,
  fetch: app.fetch,
}

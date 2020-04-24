import Koa from 'koa'
import middleware from './middleware'
import router from './routes'

const app = new Koa()

app.use(middleware)

app.use(router())

app.listen(3000)
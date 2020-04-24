import path from 'path'
import {
  isDev
} from './utils'
import koaCompose from 'koa-compose'
import koaHelmet from 'koa-helmet'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import koaCors from '@koa/cors'
import koaStatic from 'koa-static'
import koaCompress from 'koa-compress'

const middleware = [
  koaBody(),
  koaStatic(path.join(__dirname, "../public")),
  koaCors(),
  koaJson({
    pretty: false,
    param: 'pretty'
  }),
  koaHelmet()
]

!isDev && middleware.unshift(koaCompress())

export default koaCompose(middleware)
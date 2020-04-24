import combineRouters from 'koa-combine-routers'
import userRouter from './user/index'

export default combineRouters(
  userRouter
)

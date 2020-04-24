import Router from 'koa-router'
import userController from '../../controller/user'

const router = new Router()
const { createUser, checkAuth, checkNameAndEmail } = userController

router.post('/api/user', checkAuth, checkNameAndEmail, createUser)

export default router
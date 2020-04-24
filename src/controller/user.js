 class User {
   
   async createUser(ctx) {
     const {
       name,
       email
     } = ctx.app
     ctx.body = {
       code: 200,
       data: {
         name,
         email
       },
       msg: '上传成功'
     }
   }

   async checkAuth(ctx, next) {
     const {
       role
     } = ctx.request.headers
     if (role == 'admin') next()
     else ctx.body = {
       code: 401,
       msg: 'unauthorized post'
     }
   }

   async checkNameAndEmail(ctx, next) {
     const {
       name,
       email
     } = ctx.request.body
     if (name && email) {
       ctx.app.name = name
       ctx.app.email = email
       next()
     } else {
       ctx.body = {
         code: 404,
         msg: 'name 和 email 不能为空'
       }
     }
   }
 }

 export default new User()
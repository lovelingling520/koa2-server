const router = require('koa-router')()
const sql = require('../../sql/user.sql')


router
    .get('/user',async (ctx, next) => {
        // const token = ctx.header.authorization
        let body = ctx.url.split('?')[1];
        let data = body.split('&').map(v => v.split('='))
        await sql.getUserData(data[0][1], data[1][1])
                .then(res => {
                    ctx.body = res
                })
                .catch(err => {
                    ctx.body = err
                })
    })
    .put('/user',async (ctx,next) => {
        
    })

module.exports = router
import Koa from 'koa'
import views from 'koa-views'


const app = new Koa();

app.use(views(__dirname, { extension: 'jade' }))



app.use(async function (ctx) {
  await ctx.render('index')
})

app.listen(3000);
console.log('listen port 3000')
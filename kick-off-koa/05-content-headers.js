var koa = require('koa')

var app = koa()

app.use(function *(next) {
	this.body = this.request.is('json')
		? {message: 'hi!'}
		: 'ok'
})

app.listen(process.argv[2])
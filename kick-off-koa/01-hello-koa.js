var koa = require('koa')
var app = koa()

app.use(function *() {
	// you can set the response body in handler like this
	this.body = 'hello koa';
})

app.listen(process.argv[2])
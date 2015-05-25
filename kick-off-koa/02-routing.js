var koa = require('koa')
var app = koa()

app.use(function *(next) {
	if(this.path == '/'){
		this.body = 'hello koa'
	} else {
		return yield next;
	}
})

app.use(function *(next) {
	if(this.path == '/404'){
		this.body = 'page not found'
	} else {
		return yield next;
	}
})

app.use(function *(next) {
	if(this.path == '/500'){
		this.body = 'internal server error'
	} else {
		return yield next;
	}
})

app.listen(process.argv[2])
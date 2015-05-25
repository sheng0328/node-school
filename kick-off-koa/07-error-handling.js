var koa = require('koa')
var app = koa()

app.use(errorHandler())

app.use(function *() {
	if(this.path == '/error') throw new Error('Ooops')
	this.body = 'OK'
})

function errorHandler() {
	return function *(next) {
		try{
			yield next
		}catch(err) {
			// set response status
			this.status = 500
			// set response body
			this.body = 'internal server error'			
			// can emit on app for log
			// this.app.emit('error', err, this);
		}		
	}
}

app.listen(process.argv[2])
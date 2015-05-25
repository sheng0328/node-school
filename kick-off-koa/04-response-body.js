var koa = require('koa')
var fs = require('fs')

var app = koa()

app.use(function *(next) {
	if(this.path == '/stream'){
		this.body = fs.createReadStream(process.argv[3])
	} else {
		return yield next
	}
})


app.use(function *(next) {
	if(this.path == '/json'){
		this.type = 'application/json; charset=utf-8'
		
		var result = new Object();
		result.foo = 'bar'
		this.body = JSON.stringify(result)
		
		//this.body = { foo: 'bar' }
	} else {
		return yield next
	}
})

app.listen(process.argv[2])
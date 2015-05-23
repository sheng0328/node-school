var http = require('http')
var url = process.argv[2]
//console.log(url)

var result = ''
var req = http.get(url, function(res) {
	res.setEncoding('utf-8')
	res.on('data', function(chunk) {
		result += chunk
	})
	res.on('error', function(err) {
		// error event
	})
	res.on('end', function() {
		console.log(result.length)
		console.log(result)
	})
})
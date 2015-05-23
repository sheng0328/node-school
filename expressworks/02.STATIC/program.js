var path = require('path')
var express = require('express')

//console.log('2 = ' + process.argv[2])
//console.log('3 = ' + process.argv[3])

var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

/*
app.get('/', function(req, res) {
	res.end('Hello World!')
})
*/


app.listen(process.argv[2])
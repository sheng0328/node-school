var express = require('express')
var fs = require('fs')

var app = express()

app.get('/books', function(req, res){
	var filename = process.argv[3]
	fs.readFile(filename, function(err, data) {
		if (err) return res.send(500)
		try {
			jsonObj = JSON.parse(data)
		} catch (e) {
			res.send(500)
		}
		res.json(jsonObj) // or res.send(jsonObj)
		// if error
		// res.status(400).send('error message')
	})
})

app.listen(process.argv[2])
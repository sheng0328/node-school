var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var extname = '.' + process.argv[3]

fs.readdir(dir, function(err, list) {
	if(err) throw err
	
	list.forEach(function (file) {
		if (extname === path.extname(file)) {
			console.log(file)
		}
	})
})
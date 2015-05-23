var fs = require('fs')
var path = require('path')

module.exports = function(dirnm, extnm, callback) {

	var fileList = new Array()
	var i = 0;
	
	fs.readdir(dirnm, function(err, list) {
		if(err) return callback(err)
		
		// solution 1
		list = list.filter(function(file) {
			return '.' + extnm == path.extname(file)
		})
		return callback(null, list)
		
		// solution 2
		/*
		list.forEach(function (file) {
			if ('.' + extnm == path.extname(file)) {
				fileList[i] = file
				i++
			}
		})
		return callback(null, fileList)
		*/
	})
}
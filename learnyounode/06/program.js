var modular = require('./modular.js')

var dirnm = process.argv[2]
var extnm = process.argv[3]
	
modular(dirnm, extnm, function(err, list) {
	if(err) return err
		
	list.forEach(function (file) {
		console.log(file)
	})
})
var http = require('http')

var resultList = new Array()
var count = 0;

function printResults() {
	for(var i = 0; i < resultList.length; i++){
		console.log(resultList[i])
	}
}

function getResult(index) {
	var url = process.argv[index + 2]
	//console.log('url = ' + url)
	var result = '';
	var req = http.get(url, function(res) {
		res.setEncoding('utf-8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('error', function(err) {
			// error event
		})
		res.on('end', function() {
			count++;
			resultList[index] = result
			
			if(count == 3){
				printResults()
			}
		})
	})
}

for (var i = 0; i < 3; i++){
	getResult(i)
}
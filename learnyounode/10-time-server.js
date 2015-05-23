var net = require('net')
var listenPort = Number(process.argv[2])

// console.log('listenPort = ' + listenPort)

var server = net.createServer(function (socket) {
	socket.write(getNowTime())
	socket.end()
})

server.listen(listenPort)

function getNowTime() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var result = pad(year, 4) + '-' + pad(month, 2) + '-' + pad(day, 2) + ' ' + pad(hours, 2) + ':' + pad(minutes, 2) + '\n';
	return result
}

function pad(number, zeroes) {
	var lotsOfZeroes = '00000000000000000000';
	return (lotsOfZeroes + number.toString()).slice(-zeroes);
}
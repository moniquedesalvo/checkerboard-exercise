//Random Colors
var hexString = "0123456789ABCDEF"

function colorGenerator(hexString) {
	var hexCode = ['#'];
	for (var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * 16)
		hexCode.push(hexString[random])
	}
	return hexCode.join('');
}

console.log(colorGenerator(hexString))

function makeCheckerBoard() {
	for (var i = 0; i < 63; i++) {
		var tile = document.createElement('div');
		tile.style.width = '11.1%';
		tile.style.float = 'left';
		tile.style.paddingBottom = '11.1%';
		tile.style.backgroundColor = colorGenerator(hexString);
		document.body.appendChild(tile);
	}
}
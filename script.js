//Gradient
function makeCheckerBoard() {
	for (var i = 0; i < 63; i++) {
		var tile = document.createElement('div');
			tile.style.width = "11.1%";
			tile.style.float = "left";
			tile.style.paddingBottom = "11.1%";
			tile.style.opacity = (i + 10) / 63;
			document.body.style.backgroundColor = 'blue';
		if (i % 2 === 0) {
			tile.style.backgroundColor = 'purple';
		} else {
			tile.style.backgroundColor = 'cyan';
		}		
		document.body.appendChild(tile);
	}
}
makeCheckerBoard();
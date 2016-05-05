//Red and Black
function makeCheckerBoard() {
	for (var i = 0; i < 63; i++) {
		var tile = document.createElement('div');
			tile.style.width = "11.1%";
			tile.style.float = "left";
			tile.style.paddingBottom = "11.1%";
		if (i % 2 === 0) {
			tile.style.backgroundColor = "red";
		} else {
			tile.style.backgroundColor = "black";
		}
	document.body.appendChild(tile);
	}
}
makeCheckerBoard()



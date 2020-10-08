snake = new Snake(1);
snakes.push(snake);



function spMode() {
	displayBoard();
	snake.update();
	snake.show();
}

function displayBoard() {
	fill(255);
	rect(width/6, height/6, (width/3) * 1.5,(width/3) * 1.5);
	fill(0);
	rect((width/6)+2, (height/6)+2, ((width/3) * 1.5)-4,((width/3) * 1.5)-4);
}
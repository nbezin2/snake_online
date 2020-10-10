var mode = 1;
var snakes = [];
var walls = [];
var boardW = 0;
var boardH = 0;

board = new Board(0,0,0,0);
snake = new Snake(1, board);


function setup() {
	createCanvas(windowWidth,windowHeight);
	spButton = createButton("SINGLE PLAYER");
	mpButton = createButton("MULTIPLAYER");
	loButton = createButton("LOCAL");
	onButton = createButton("ONLINE");
	walls = [windowWidth/6, windowHeight/6, (windowWidth/6) + ((windowWidth/5) * 1.5), (windowHeight/6) + ((windowWidth/5) * 1.5)];
	boardW = walls[2] - walls[0];
	boardH = walls[3] - walls[1];
	board.update(boardW, boardH, walls[0], walls[1]);
	snake.updateSizes(board);
	snakes.push(snake);
	
	frameRate(10);
	
	background(0);
}

function draw() {
	background(0);
	if(mode == 1) {
		fill(255)
		textSize(width/15);
		text('SNAKE ONLINE', width/4, height/4);
		fill(155);
	
		spButton.size(width/3, height/15);
		spButton.position(width/3, height/4+30);
		spButton.mousePressed(runSinglePlayer);
		
		mpButton.size(width/3, height/15);
		mpButton.position(width/3, (height/4+30) + 70);
		mpButton.mousePressed(menu2);
	}
	else if (mode == 2) {
		fill(255)
		textSize(width/15);
		text('Multiplayer Options', width/4, height/4);
		fill(155);
	
		loButton.size(width/3, height/15);
		loButton.position(width/3, height/4+30);
		//loButton.mousePressed(runSinglePlayer);
		
		onButton.size(width/3, height/15);
		onButton.position(width/3, (height/4+30) + 70);
		onButton.mousePressed(menu2);
	}
	else if (mode == 3) {
		spMode();
	}
}

function runSinglePlayer() {
	mode = 3;
	spButton.hide();
	mpButton.hide();
	loButton.hide();
	onButton.hide();
}

function menu2() {
	mode = 2;
	spButton.hide();
	mpButton.hide();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	walls = [windowWidth/6, windowHeight/6, (windowWidth/6) + ((windowWidth/5) * 1.5), (windowHeight/6) + ((windowWidth/5) * 1.5)];
	boardW = walls[2] - walls[0];
	boardH = walls[3] - walls[1];
	board.update(boardW, boardH, walls[0], walls[1]);
	board.show();
	
	if (mode == 3) { //If game playing
		for (let i = 0; i < snakes.length; i++) {
			snakes[i].updateSizes(board);
		}
		
	}
	background(0);
}

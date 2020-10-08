var mode = 1;
var snakes = [];
var boards = [][]

function setup() {
	createCanvas(windowWidth,windowHeight);
	spButton = createButton("SINGLE PLAYER");
	mpButton = createButton("MULTIPLAYER");
	loButton = createButton("LOCAL");
	onButton = createButton("ONLINE");
	walls = [width/6, height/6, (width/6) + ((width/3) * 1.5), (height/6) + ((width/3) * 1.5];
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
	if (mode == 3) { //If game playing
		for (let i = 0; i < snakes.lenght; i++) {
			snakes[i].changeBodySize(walls);
		}
		
	}
	background(0);
}

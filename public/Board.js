class Board {
	constructor(w, h , x, y) {
		this.width = w - (w%40);
		this.height = w - (w%40);
		this.xPos = x;
		this.yPos = y;
		this.posSize = (w - (w%40))/40;
		this.walls = [this.x, this.x+this.width, this.y, this.y + this.height];
	}
	
	update(w, h, x, y) {
		
		this.posSize = (w - (w%40))/40;
		
		this.width = w - (w%40);
		this.height = w - (w%40);
		this.xPos = x;
		this.yPos = y;
		
		this.walls = [this.x, this.x+this.width, this.y, this.y + this.height];
	}
	
	show() {
		fill(0);
		stroke(255);
		rect(this.xPos, this.yPos, this.width, this.height);
	}
	
	getWidth() {
		return this.width;
	}
	
	getPosSize() {
		return this.posSize;
	}
	
	getY() {
		return this.yPos;
	}
	
	getX() {
		return this.xPos;
	}
	
	getWalls() {
		return this.walls;
	}
	
	
}
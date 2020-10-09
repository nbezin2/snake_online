class Board {
	constructor(w, h , x, y) {
		this.width = w;
		this.height = h;
		this.xPos = x;
		this.yPos = y;
		this.posSize = this.width/100;
		this.walls = [this.x, this.x+this.width, this.y, this.y + this.height];
	}
	
	update(w, h, x, y) {
		this.width = w;
		this.height = h;
		this.xPos = x;
		this.yPos = y;
		this.posSize = this.width/100;
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
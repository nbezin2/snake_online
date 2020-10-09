class Body {
	constructor(x, y, d, row, col) {
		this.cord = [row, col];
		this.xPos = x;
		this.yPos = y;
		this.width = d;
		this.height = d;
	}
	
	getCord() {
		return this.cord;
	}
	
	setCord(xy) {
		this.cord = xy;
	}
	
	getH() {
		return this.height;
	}
	
	getW() {
		return this.width;
	}
	
	setD(d) {
		this.width = d;
		this.height = d;
	}
	
	getX() {
		return this.xPos;
	} 
	
	getY() {
		return this.yPos;
	}
	
	setX(x) {
		this.xPos = x;
	}
	
	setY(y) {
		this.yPos = y;
	}
}
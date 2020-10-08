class Body {
	constructor(x, y) {
		this.xPos = x;
		this.yPos = y;
		this.width = 10;
		this.height = 10;
	}
	
	getH() {
		return this.height;
	}
	
	getW() {
		return this.width;
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
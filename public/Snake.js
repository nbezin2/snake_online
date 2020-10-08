class Snake {
	constructor(pNum) {
		this.body = [];
		this.bodySize = (wall[2]-wall[0])/20;
		this.len = 3;
		this.pNum = pNum;
		this.dirX = 0;
		this.dirY = 0;
		
		if (this.pNum == 1) {
			for (var i = 0; i < this.len; i++) {
				this.body.push(new Body(wall[0],wall[1]));
			}
			this.dirX = 1;
			this.dirY = 0;
		}
		//else if (pNum == 2) {
		//	
		//}
		//else if (pNum == 3) {
		//	
		//}
		//else {
		//	
		//}
		
	}
	
	getBody() {
		
	}
	
	changeBodySize(walls) {
		
	}
	
	update() {
		for (var i = this.len-1; i > 0; i--) {
			this.body[i].setX(this.body[i-1].getX());
			this.body[i].setY(this.body[i-1].getY());
		}
		
		this.body[0].setX(this.body[0].getX()+(10*this.dirX));
		this.body[0].setY(this.body[0].getY()+(10*this.dirY));
	}
	
	show() {
		for (var i = 0; i < this.len; i++) {
			fill(255);
			stroke(0);
			rect(this.body[i].getX(), this.body[i].getY(), this.body[i].getW(), this.body[i].getH());
		}
	}
}
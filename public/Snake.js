class Snake {
	constructor(pNum, b) {
		this.body = [];
		
		this.len = 3;
		this.pNum = pNum;
		this.dirX = 0;
		this.dirY = 0;
		this.board = b;
		this.bodySize = b.getWidth()/30;
		
		if (this.pNum == 1) {
			for (var i = 0; i < this.len; i++) {
				this.body.push(new Body((b.getWalls()[0]+1), (b.getWalls()[2]+1), this.bodySize, 0, i+1));
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
	
	updateSizes(b) {
		this.board = b;
		
		for (var i = 0; i < this.len; i++) {
			let r = this.body[i].getCord()[0];
			let c = this.body[i].getCord()[1];
			this.body[i].setD(this.board.getWidth()/30);
			this.body[i].setX(this.board.getX()+(this.board.getPosSize()*c));
			this.body[i].setY(this.board.getY()+(this.board.getPosSize()*r));
		}
		
	}
	
	update() {
		for (var i = this.len-1; i > 0; i--) {
			this.body[i].setX(this.body[i-1].getX());
			this.body[i].setY(this.body[i-1].getY());
			this.body[i].setCord(this.body[i-1].getCord());
		}
		
		this.body[0].setX(this.body[0].getX()+(10*this.dirX));
		this.body[0].setY(this.body[0].getY()+(10*this.dirY));
		this.body[0].setCord([this.body[0].getCord()[0], this.body[0].getCord()[1]+1]);
	}
	
	show() {
		for (var i = 0; i < this.len; i++) {
			fill(255);
			stroke(0);
			rect(this.body[i].getX(), this.body[i].getY(), this.body[i].getW(), this.body[i].getH());
		}
	}
}
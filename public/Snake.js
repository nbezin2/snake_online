class Snake {
	constructor(pNum, b) {
		this.body = [];
		
		this.len = 3;
		this.pNum = pNum;
		this.dirX = 0;
		this.dirY = 0;
		this.board = b;
		this.bodySize = b.getPosSize();
		
		if (this.pNum == 1) {
			for (let i = 0; i < this.len; i++) {
				this.body.push(new Body((b.getX()+1)+(((this.len-(i+1))*this.bodySize)), b.getY()+1, this.bodySize, 0, this.len-i));
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
		this.bodySize = b.getPosSize();
		
		for (var i = 0; i < this.len; i++) {
			let r = this.body[i].getCord()[0];
			let c = this.body[i].getCord()[1];
			this.body[i].setD(this.bodySize);
			this.body[i].setX((this.board.getX()+1)+(this.board.getPosSize()*(c-1)));
			this.body[i].setY((this.board.getY()+1)+(this.board.getPosSize()*(r-1)));
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
			stroke(0);
			fill(255);
			rect(this.body[i].getX(), this.body[i].getY()+this.bodySize, this.body[i].getW(), this.body[i].getH());
		}
	}
}
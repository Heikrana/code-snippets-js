/*
*	Static data members and functions of a class are called by class name. As they donot
-	go down in protypal chain.

*	We write add function where we add y to x i.e. x.add(y)
*	now, if we want, we cannot store sum of x and y in z i.e. z = x + y & z = x.add(y) are different.
*	So, we write add function as static which does the above. Eg. Math.random() is a static function.

!	Note:
	*	I have a doubt as to why we use static, we can accomplish the above task without using static functions.
	*	I asked this doubt in comments of The Coding Train's static functions video on YouTube.
		-(https://www.youtube.com/watch?v=YN8Q-QEmQ8Y)
*/

let x = 5;
let step = 2;

while (x < 10) x = x + step;
console.log(x);

let a = 5;
let jump = 2;

let newA = a + jump;
console.log(newA, a);
console.log("--------");

class Pos {
	constructor(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}

	addPosX(step) {
		this.posX = this.posX + step;
	}

	addPosY(step) {
		this.posY = this.posY + step;
	}

	static addPosY(posY, step) {
		return posY + step;
	}

	getPosX() {
		return this.posX;
	}

	getPosY() {
		return this.posY;
	}
}

let position = new Pos(5, 5);

while (position.getPosX() < 10) position.addPosX(2);
console.log(position.getPosX());

let newPos = Pos.addPosY(position.getPosY(), 2);
console.log(newPos, position.getPosY());

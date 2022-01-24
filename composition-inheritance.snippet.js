/*
* INHERITANCE V/S COMPOSITION

* In inheritance, you describe what objects are and how they are related.
* In composition, you describe what an object can do.

* Inheritance is usually done using classes and/or constructor functions with prototypes.
* Composition can be done using factory functions, you create an object and use it in
  whatever new object you want to create.

* Inheritance is used in "is-a" relationship where as Composition is used in "has-a" relationship.
*/

//? Code example taken from WebDevSimplified (https://www.youtube.com/watch?v=nnwD5Lwwqdo)

// ! -----------  INHERITANCE  -------------

class Monster {
	constructor(name) {
		this.name = name;
	}

	attack() {
		console.log(`${this.name} attacked`);
	}

	walk() {
		console.log(`${this.name} walked`);
	}
}

class FlyingMonster extends Monster {
	fly() {
		console.log(`${this.name} flew`);
	}
}

class SwimmingMonster extends Monster {
	swim() {
		console.log(`${this.name} swam`);
	}
}

const bear = new Monster("bear");
bear.walk();
bear.attack();

const eagle = new FlyingMonster("eagle");
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster("shark");
shark.walk();
shark.attack();
shark.swim();

// ! -----------  COMPOSITION  -------------

function swimmer({ name }) {
	return {
		swim: () => console.log(`${name} swam`),
	};
}

function flyer({ name }) {
	return {
		fly: () => console.log(`${name} flew`),
	};
}

function attackerAndWalker({ name }) {
	return {
		attack: () => console.log(`${name} attacked`),
		walked: () => console.log(`${name} walked`),
	};
}

function swimmingMonsterCreator(name) {
	const monster = { name };

	return {
		...monster,
		...swimmer(monster),
	};
}

function flyingSwimmingMonsterCreator(name) {
	const monster = { name };

	return {
		...monster,
		...attackedrAndWalker(monster),
		...swimmer(monster),
		...flyer(monster),
	};
}

const obj = flyingSwimmingMonsterCreater("Monster");
obj.attack();
obj.walk();
obj.swim();
obj.fly();

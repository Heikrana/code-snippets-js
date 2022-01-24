/*
*		Being able to access variables declared outside the current scope is called closure.
*		i.e. a function can access variable declared in global namespace.

*		Common use case is fetch().then() where .then() can access variable in the outer scope
		(outside function or fetch)
*/

// Example 1

let a = 10;
function closure1() {
	console.log("access using closure, " + a);
}

closure1();

// Example 2 --> Taken from webdevsimplified (https://www.youtube.com/watch?v=3a0I8ICR1Vg)

function outerFunction(outerVariable) {
	function innerFunction(innerVariable) {
		console.log("Outer Variable: " + outerVariable);
		console.log("Inner Variable: " + innerVariable);
	}
}

const newFunction = outerFunction("outside");
newFunction("inside");

// Example 3 --> Using fetch().then()

function outerFunction(url) {
	fetch(url).then(() => console.log(url));
	// accessing variable using closure
}

/*

-> Promises came in ES6 (2015) JS standard and they are mainly used to solve the problems with
   using callbacks namely //*callback hell*.

-> A promise is written by using Promise class i.e. const someVar = new Promise().
   A promise takes 2 arguments, resolve and reject. Resolve is called when the promise is executed
   successfully and reject is called when the promise failes during execution.

-> A promise works by nesting (tailing) ".then" and ".catch" after the function call.
   When we get a success i.e. promise is resolved, the code inside ".then" is executed.
   But when we get a failure i.e. promise is rejected, the code inside ".catch" is executed.

-> promise.all() is called when we have multiple promises (requests) to perform. They all are executed
   asyncronusly and simultaneously
   promise.race() is similar to promise.all() but instead of waiting for all the promises to resolve or
   reject, we race them and which ever promise is resolved/rejected first, we return that as the output.

*/

//! Code Snippet
// Example taken from WebDevSimplified
// https://www.youtube.com/watch?v=DHvZLI7Db8E

function watchTutorialPromise(userLeft) {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: "User Left",
				message: "WebDevSimplified < Cat",
			});
		} else {
			resolve("Thumbs up and Subscribe");
		}
	});
}

watchTutorialPromise(false)
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log(error.name + " " + error.message);
	});

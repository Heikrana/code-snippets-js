/*

-> Callback functions are normal functions. As the name suggests, they are call backed i.e.
   instead of calling them when they are first written, they are called after some time (code).

-> As functions are first class citizens, they can be passed as variables. So, we pass them as variables
   to other functions and then we call them back at a later point of time in our code flow.

-> BEWARE of Callback Hell

*/

//! Code Snippet

// anonymous callback function
const callMeBack = function (name) {
	console.log(`Hello I'm ${name}, and I'm calling from a callback function`);
	return true;
};

// let's assume this is in another file, so no access to callBackFunction
function normalFunction(callBackFunction) {
	console.log("This is a normal function call");

	const name = "John Doe";
	const isCallbackSuccessful = callBackFunction(name);

	if (isCallbackSuccessful) return "CallBack Successful";
	else return new Error("CallBack Unsuccessful");
}

const result = normalFunction(callMeBack); // callMeBack is a callback function
result;

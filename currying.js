/*

-> //* Definition
   Let's say, we write a function that requires 2 arguments. We split the function into 2 functions,
   first function requires first argument and based on that argument, returns a function that requires the
   second argument. This breaking of function is called //? currying.

-> //* Use
   We can use it when we already have some prebuilt or pre-written function sending one of the arguments.
   So, we can send a curry function to that and the arguments will be taken care of.

*/

//! Code Snippet

//? Simple example, taken from FunFunFuctions
// (https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)

//* Non curry function
const nonCurryDragon = (name, size, element) =>
	name + " is a " + size + " dragon that breathes " + element + "!";

console.log(nonCurryDragon("fluffykins", "tiny", "lightning"));

//* Curry Function
const curryDragon = (name) => (size) => (element) =>
	name + " is a " + size + " dragon that breathes " + element + "!";

const fluffykinsDragon = curryDragon("Fluffykins");
const tinyDragon = fluffykinsDragon("tiny");

console.log(tinyDragon("lightning"));

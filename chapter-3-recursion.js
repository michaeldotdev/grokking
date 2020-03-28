// ######### Exercises #########

/*
3.1 - Two function calls, greet is the first one and greet2 is another inside
      of the greet function

3.2 - You get something call the stack overflow, where your stack is running
      out of memeory to support the function call you are currently making.

*/

function factorial(x) {
  // base case
  if (x === 1) {
    return 1;
    // recursive case
  } else return x * factorial(x - 1);
}

console.log(factorial(10));

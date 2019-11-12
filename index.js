// Javascript is a synchronous programming language but we can also execute the code asynchronously by following the following methods

// Lets start with synchronous example

count = 0;
setTimeout(function(){

	count = count + 1;
});
console.log(count);  // It is showing 0 because javascript does not wait previous statements.


// Lets start with Asynchronous example
count = 0;
mypromise = new Promise(function(resolve,reject){
	setTimeout(function(){

	count = count + 1;
resolve(count);
	},1000);
	
});

mypromise.then(function(result){
	console.log(result);   // It waits until promise resolve and prints the result as "1"
})




// We can achieve promise for a normal function by using async function. It is just similar to promise the difference is that we can apply it for a normal function.
async function f() {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  result = await promise; // wait until the promise resolves (*) 
  console.log(result); // "done!"
} 
f();
# Intro - `.then()`

In the previous step, you should have gotten the following:

```javascript
> var myNum = 10;
> var promise = new Promise(function (resolve, reject) {
...   if ( myNum % 2 === 0 ) {
.....     resolve('even');
.....   } else {
.....     reject('odd');
.....   }
... });
> promise
Promise { 'even' }
```

While the calculation happened correctly, the result is still a Promise. In order to return the value, we'll need to call `.then()` with the appropriate arguments. First though, let's create a function that will allow for us to dynamically set the variable we'll be checking for odd and even.

```javascript
var evenPromise = function (num) {
  return new Promise(function (resolve, reject) {
    if ( num % 2 === 0 ) {
      resolve('even');
    } else {
      reject('odd');
    }
  });
};

evenPromise(10);
evenPromise(13);
```

While we can now dynamically change the number being evaluated, it's still wrapped in a Promise. In order to log the real result, take a look at [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) on the `.then()` function.

* * *

##### Before moving on to the next section, answer the following:

1. Change the above function so that it responds with the number if it is even and responds with `false` if it is not.
1. Chain `.then()` onto the promise you're creating with `evenPromise()` and pass in functions that `console.log()` out the result. How do you get the `reject` result to run?
1. Take a look at the `example.spec.js` file inside of the `spec/` folder. Remove the 'x' from the first two tests that are related to `simplePromise`. Create that functionality in the accompanying `src/example.js` file and get the tests to pass!
  * If you're having trouble getting the `resolve()` test to pass, re-read above and look at how the test is formatted inside of `spec/example.spec.js`.
  * If you're having trouble getting the `reject()` test to pass, check out [this hint](step-1a.md) before giving up!

  (^^^^ Quite a hard section to do, especially with .catch() coming up. Do they need to go through all this? I found it hard logically)

[[Back](step-0.md)] - [[Continue](step-2.md)]

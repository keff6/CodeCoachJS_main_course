# Generator Functions

---

### Reading

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

### Video

https://www.loom.com/share/efbaa936006e4407b077ee92b1b3c449

### Your Turn

1. Why on earth would someone want to use a generator function?
2. What are some practical use cases you can think of for generator functions?

# Written Response
## My response:

### before
generator functions are functions that can be yielded and then call the next() method to get the next iteration or part of the function. It can be executed step by step.


### after
generator functions are functions that can be exited and continued after that. returns an iterator object with the value and the status of "done". This functions can also be exited calling return() or throws(), and can be executed step by step with the yield keyword and the next() method.

This kind of methods are useful for asyncronous operations, however, with the addition of async/await and promises we have cleaner ways to do that.

## Improved response:

A generator function is a special type of function declared with function* that can pause and resume its execution. When called, it does not run immediately; instead, it returns a generator object, which is an iterator.

Execution is controlled using the next() method, and each yield pauses the function and returns a value in the form { value, done }.

Generators can also be terminated early using return() or throw().

They were historically used to manage asynchronous control flow before async/await, although generators themselves are synchronous.

ONE LINER::
A generator function is a function that can pause and resume execution using yield, returning an iterator that produces values on demand via next().
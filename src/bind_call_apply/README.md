# Bind, Call, Apply and This

---

### Reading

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

https://www.javascripttutorial.net/javascript-this/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

### Your Turn

1. What is the difference between bind, call and apply? (record on loom)
2. What about arrow functions? How is `this` treated differently there? (record on loom)

# Written Response
## My response:

1: bind, call, and apply are used to control the this value when invoking a function. call and apply are very similar, in both of them the first argument will be the 'this' but in case of apply, the rest of the arguments to call the function has to be passed inside and array, as the second argument whilst in call you just add those arguments comma separated.

call and apply are immediately invoked, while bind returns a function 'binded' thio the 'this' context that can be called whenever you want.

2: In case of arrow functions, they dont have a binding to the this object, they inherited from the outer function in wich the arrow function was declared instead. 

## Improved response:

1: bind, call, and apply are used to control the this value when invoking a function.

call and apply invoke the function immediately. In both cases, the first argument sets the this context. The difference is that call takes arguments comma-separated, while apply expects them as an array.

bind does not invoke the function. Instead, it returns a new function with this permanently bound to the provided context, which can be called later.

2: Arrow functions do not have their own this binding. Instead, they capture this lexically from the surrounding scope in which they are defined. This means their this value is fixed at creation time and does not change based on how the function is called.

# Map, Filter && Reduce

---

### Video

https://www.loom.com/share/b5235cd972dc425eaa87b99d0ff14ebc

### Reading

https://medium.com/@kavisha.talsania/top-10-es6-features-every-javascript-developer-must-know-4c81ec54bbcd

https://stackoverflow.com/questions/56155922/how-to-delete-property-from-spread-operator

https://www.javascripttutorial.net/es6/javascript-spread/

### Your Turn

1. What is the difference between `forEach`, `reduce`, `map` and `filter`? Which are considered non-mutating and what the heck does that mean?
2. Let's say you want to update an array of objects to add a property to each object. Which method would you use to do this? Why?

# Written Response
## My response:

### before
1 - forEach, unlike reduce, map, and filter, mutates the original array. THe others just return a new array or result but the original array remains the same. When we say mutate, we mean that the original array being referenced in memory changes regarding waht we do in each iteration of a forEach loop.

2 - I will use map because with map we iterate through all those objects inside the array and easily add the new property there.

### after
forEach, unlike reduce, map, and filter, CAN mutate the original array if cutation code is inside the loop. THe others just return a new array or result but the original array remains the same. When we say mutate, we mean that the original array being referenced in memory changes regarding waht we do in each iteration of a forEach loop.
mutate is not a good practice because it alters the original data and that data can be needed in other parts of the code. Sometimes mutation can be what we want but we have to be careful.

## Improved response:

map, filter, and reduce are non-mutating array methods because they return new values and do not change the original array. forEach does not return anything and is typically used for side effects. While none of these methods mutate the array by default, mutation can occur if you explicitly modify the array inside the callback. Non-mutating means the original array remains unchanged in memory.
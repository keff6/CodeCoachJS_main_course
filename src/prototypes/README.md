# Prototypal Inheritance

---

### Video

https://www.loom.com/share/b95008fe94164f62be4ce1aad176a08f?sharedAppSource=personal_library

### Reading

https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

### Your Turn

Create a short video explaining prototypal inheritance and how it differs from class inheritance and send to your mentor via slack.

# Written Response
My response:

class inheritance is tightly coupled, that can be inflexible to future changes and can get us in the gorilla/banana dilemma: "I want a Banana but to get the banana I also get the gorilla aand the whole jungle" 
Prototypal ih=nheritance favours composition, with help us extend objects not because of what they are, but because of what they do, allowing us to addd features to the objects that can be shared between objects as we need.

Improved response:

Class inheritance is tightly coupled and can be inflexible, often leading to the “gorilla/banana” problem — you want a small piece of functionality but end up inheriting an entire hierarchy you don’t need.

Prototypal inheritance works by having objects directly delegate behavior to other objects through a prototype chain, rather than inheriting from classes. This makes it more flexible, because objects can be extended at runtime and share behavior only when needed.

This model encourages composition and behavior reuse based on what objects do, not what they are, reducing unnecessary coupling and making systems easier to evolve.

+ Class inheritance

Objects are instances of classes

Behavior is defined upfront

Inheritance is static

You inherit everything, whether you want it or not

+ Prototypal inheritance

Objects inherit directly from other objects

Behavior is delegated at runtime

You can extend objects incrementally

Sharing happens via the prototype chain

# Object Oriented Programming (OOP)
Is a programming model with the goal of organizing code into objects, in an effort to streamline and simplify development and maintance. Its organization giving way for better methods of collaborative work.  

## Structure
The structure of object oriented programs are as follows:
* Classes - Which are the blueprints for objects.
* Objects - Which are the instances of the classes.
* Methods - Which are the functions that are part of the objects.
* Attributes - Which represent the data that is stored within the objects. 

## Principles
The principles of OOP are an effort to increase reusability of code, make it easier to maintain, and to be efficient in the both development and deployment.
* Encapsulation - The idea of encapsulation is to hide the implementation details of an object from the user. So that only select information may be exposed to the user.
* Abstraction - The idea of abstraction is to hide the implementation details of an object from the user. So that only select information may be exposed to the user.
* Inheritance - The idea of inheritance is to reuse the code of a parent class in a child class.
* Polymorphism - The idea of polymorphism is to allow a class to have multiple forms.


## Example of a Class
Following, we will take a look at some basic structure, as well as surface level implementation of OOP.
Taking a look at [user.js](user.js) we can extrapolate som key information about the structure of which we are going to be using. Starting off on the first 10 lines of code:
```
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```
We are defining a class which will house both the constructor(the definition of what data we are working with) as well as a proceeding function in getFullName(). By itself we can see that this User class isn't holding any valueable information for us to take part in. But using this class' constructor we can create some using its' guidelines.
```
const user1 = new User('John', 'Doe');
```
Using this line of code we can create a new instance of the User class, by inputting information within the function call according to its constructor.
```
Console.log(user1.getFullName()); //"John Doe"
```
Will return the firstName and lastName of user1, giving us "John Doe".
We can later extrapolate this class constrictor and functions to be more useful than this of course. Giving it more information like Username, Password, Email etc.
```
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}


//Create new user
function CreateUser(req, res) {
    //declare variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    let password = req.body.password;

    //Hash password
    password = bcrypt.hashSync(password, 10);

    //Create user
    const user = new User(firstName, lastName, email, password);

    //Save user
    user.save()
        .then(() => res.status(201).json({ message: 'User created'})
        .catch(error => res.status(400).json({error})
    ));
}

## Inheritance
Inheritance is a way to reuse code from a parent class in a child class.
Let's study the [inheritance.js](inheritance.js) file to see how it works.
By using the person class we can declare some basic information that all persons will have. In this instance, firstName and lastName. 
```
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    introduceSelf() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
    }
}
```
We're also creating a function that all objects with the class Person can take advantage of. *introduceSelf()*. 
Next off we're creating a class called Professor, which with the keyword "Extends" we can *extend* into the Person class. Inheriting its functionality, namely its constructor and methods associated with it.
```
class Professor extends Person {
    constructor(firstName, lastName, teaches) { //Inherit the properties of the Person class
        super(firstName, lastName); //Call the parent constructor
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log('Hi, I'm ${this.firstName} ${this.lastName} and I teach ${this.teaches}');
    }

    grade(paper) {
        const grade = Math.random() * 5;
        console.log(grade);
    }
}
```
By using the syntax "super" we are declaring the classes "super" constructor, a better word for this would be "parent", if i were to have created this language myself. In either case the super constructor is used to inherit properties of its parent. Proceeding that we continue delcaring new properties as we wish, in this case, only one, "teaches".

As you can see we've also redeclared the introduceSelf() function. Doing this **overwrites** the function that it **would have had** from its parent when it extended onto it. Had we not redeclared and changed the function, it would have simply did whatever the parents function did. 

We have also added a new function to the professor class, **grade(paper)**. Which only the professor can use. 

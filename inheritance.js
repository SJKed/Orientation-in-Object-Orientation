class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    introduceSelf() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
    }
}

class Professor extends Person {
    constructor(firstName, lastName, teaches) { //Inherit the properties of the Person class
        super(firstName, lastName); //Call the parent constructor
        this.teaches = teaches;
    }

    //Overwrites the introduceSelf method from the Person class
    introduceSelf() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName} and I teach ${this.teaches}`);
    }

    //Function specific to the Professor class
    grade(paper) {
        const grade = Math.random() * 5;
        console.log(grade);
    }
}
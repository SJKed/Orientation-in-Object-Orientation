class Person {
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }
}

class Employee extends Person {
    constructor(name, adress) { //Inherit the properties of the Person class
        super(name, adress); //Call the super class constructor
    }

    //logic unique to Employee
}
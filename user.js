class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new User('John', 'Doe');
const user2 = new User('Jane', 'Doe');
console.log(user1.getFullName());
console.log(user2.getFullName());
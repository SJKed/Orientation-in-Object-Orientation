class Product {
    //A constructor function that initializes the properties of following data types
    constructor(name, price, salesRatio) {
        this.name = name;
        this.price = price;
        this.salesRatio = salesRatio;
    }
    //Methods
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    getSalesRatio() {
        return this.salesRatio;
    }
    setSalesRatio(ratio) {
        this.salesRatio = ratio;
    }
    getSalesPrice() {
        return this.price * (1 - this.salesRatio);
    }
}

const product1 = new Product('iPhone', 1000, 0.2);
const product2 = new Product('Samsung', 800, 0.1);

console.log(product1.getName() + ' ' + product1.getPrice() + ' ' + product1.getSalesRatio());
product1.setPrice(1200);
product1.setSalesRatio(0.3);
console.log(product1.getName() + ' ' + product1.getPrice() + ' ' + product1.getSalesRatio() + ' ' + product1.getSalesPrice());
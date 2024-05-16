// QUESTION 130:
export function addition(num1, num2) {
    console.log(num1 + num2);
}
// QUESTION 131:
export class student {
    name;
    age;
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    greet() {
        console.log(`hello, my name is ${this.name}, and my age is ${this.age}`);
    }
}
// QUESTION 131:
export default class calculator {
    num;
    constructor(num) {
        this.num = num;
    }
}


// QUESTION 130:
export function addition(num1: number, num2: number) {
  console.log(num1 + num2);
}

// QUESTION 131:
export class student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(`hello, my name is ${this.name}, and my age is ${this.age}`);
  }
}

// QUESTION 131:
export default class calculator{
num:number;
constructor(num:number){
    this.num=num
}
}
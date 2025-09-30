// Cách viết thường
const sum1 = function(a, b) {
  return a + b;
};

// Arrow Function
const sum2 = (a, b) => a + b;

console.log(sum2(3, 4)); // 7

// ==============================


// Với Object
const user = { name: "Hào", age: 22 };
const { name, age } = user;
console.log(name, age); // Hào 22

// Với Array
const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first, third); // 10 30


// ==============================

let x = 5;     // có thể gán lại
x = 10;

const PI = 3.14;  // hằng số, không được gán lại
// PI = 3.14159; ❌ lỗi

// ==============================

const product = "Laptop";
const price = 1500;

console.log(`Sản phẩm: ${product}, Giá: $${price}`);
// Sản phẩm: Laptop, Giá: $1500

// ==============================
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2]; 
console.log(arr3); // [1, 2, 3, 4]


const obj1 = { name: "Hào" };
const obj2 = { age: 22 };
const user = { ...obj1, ...obj2 };
console.log(user); // { name: "Hào", age: 22 }


const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// ==============================


// file main.js
let greet = "Xin chào ES6!";
const PI = 3.14;

function multiplyNumbers(a, b) {
    return a * b;
}
// Xuất các biến và hàm
export { greet, PI, multiplyNumbers };


// file app.js
import { greet, PI, multiplyNumbers } from './main.JS';

alert(greet); //Xin chào ES6!
alert(PI); // 3.14
alert(multiplyNumbers(2, 3)); // 6


// ==============================

async function hello() {
  return "Xin chào";
}
hello().then(msg => console.log(msg)); // "Xin chào"




function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Bắt đầu");
  await wait(2000);  // chờ 2 giây
  console.log("Kết thúc sau 2s");
}
run();



async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data.title);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}
getData();


// ==============================

const user = { profile: { email: "hao@example.com" } };
console.log(user.profile?.email); // "hao@example.com"

const user2 = {};
console.log(user2.profile?.email); // undefined (không bị lỗi)



// ==============================

let username = null;
let displayName = username ?? "Khách vãng lai";
console.log(displayName); // "Khách vãng lai"

let input = 0;
let value = input ?? 100;
console.log(value); // 0 (khác với || vì 0 không bị coi là falsy ở đây)



// ==============================

class Person {
  // Hàm khởi tạo (constructor)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Phương thức (method)
  sayHello() {
    console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi`);
  }
}

// Khởi tạo đối tượng
const p1 = new Person("Hào", 22);
p1.sayHello(); // 👉 Xin chào, tôi là Hào, 22 tuổi


// ==============================

function greet(name = "bạn") {
  console.log(`Xin chào, ${name}!`);
}

greet();           // 👉 Xin chào, bạn!
greet("Hào");      // 👉 Xin chào, Hào!
greet(undefined);  // 👉 Xin chào, bạn!

// ==============================


const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));
// 1 2 3



// ==============================

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]



// ==============================

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]



// ==============================

const users = [
  { id: 1, name: "Hào" },
  { id: 2, name: "An" }
];

console.log(users.find(u => u.id === 2)); 
// { id: 2, name: "An" }

console.log(users.findIndex(u => u.id === 2)); 
// 1


// ==============================

const numbers = [1, 2, 3, 4];

console.log(numbers.some(n => n > 3));  // true (vì có 4)
console.log(numbers.every(n => n > 0)); // true (tất cả > 0)



// ==============================

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10




// ==============================

const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false



// ==============================

const arr = [1, [2, [3]]];
console.log(arr.flat());      // [1, 2, [3]]
console.log(arr.flat(2));     // [1, 2, 3]

const arr2 = [1, 2, 3];
console.log(arr2.flatMap(x => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]



// ==============================


console.log(Array.from("hello")); // ['h','e','l','l','o']
console.log(Array.of(1, 2, 3));   // [1, 2, 3]



// ==============================

const age = 18;

const canVote = age >= 18 ? "Được bầu cử" : "Chưa đủ tuổi";

console.log(canVote); // 👉 "Được bầu cử"












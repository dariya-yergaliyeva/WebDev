// const input = require('fs').readFileSync(0, 'utf8').trim();
// const arr = input.split(' ').map(Number);
// const number = 3;
// let result = null;
// for ( let i =0; i < arr.length;i++){
//     if(arr[i]>number){
//         result = arr[i];
//         break;
//     }
// }
// console.log(result);

// const input = require('fs').readFileSync(0, 'utf8').trim();
// const sortNumbers = (str) => {
//     const result=str.split(' ').map(Number).sort((a, b) => a-b).join(',');
//     console.log(result);
// }
// sortNumbers(input);

// class Shape {
//   constructor() {
//     this.type = "shape";
//   }
// }

// class Rectangle extends Shape {
//   constructor(a, b) {
//     super(); 
//     this.a = a;
//     this.b = b || a; 
//   }

//   area() {
//     return this.a * this.b;
//   }
// }


// const rect = new Rectangle(10, 5);
// console.log("Rect area:", rect.area()); 

// const sq = new Rectangle(7); 
// console.log("Square area:", sq.area()); 

// const processUser = (userData) => {
//   const name = userData.name || "guest";
//   const role = userData.role || "user";
  
//   console.log(`Name: ${name}, Role: ${role}`);
// };

// processUser({name: "Alex"}); // Name: Alex, Role: user
// processUser({});             // Name: guest, Role: user

// const checkEmail = (data) => {
//   // Проверяем наличие всех полей через optional chaining
//   if (data?.name?.surname?.email) {
//     console.log(data.name.surname.email);
//   } else {
//     console.log("N/A");
//   }
// };

// const sentence = "hello my friend";

// const reverseStr = (str) => {
//   const result = str.split(' ').reverse().join(' ');
//   console.log(result); // "friend my hello"
// };

// reverseStr(sentence);

// const countVowels = (str) => {
//   const vowels = str.match(/[aeiouyаеёиоуыэюя]/gi);
//   const count = vowels ? vowels.length : 0;
//   console.log(count);
// };

// countVowels("Hello World");


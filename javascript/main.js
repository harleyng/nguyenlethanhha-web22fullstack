// console.log("Hello world!");

// const a = 10;

// console.log(a);

// // a = "Hello";

// let b = 10;
// var c = 15;

// console.log(b);

// b = true;

// console.log(b);

// const obj = {
//     b: 100,
//     c: "Hello"
// };

// console.log(obj.b);
// console.log(obj["b"]);

// obj.d = true;
// obj["e"] = 1000;
// obj.b = {
//     a: 1000
// };
// delete obj.c;


// console.log(obj); 

// const arr = [213, "Hello", 2130, true];

// arr.push("100");

// console.log(arr);

// // arr[0]

// const number = 100.234789273984;
// const char = "ldfjslkdfjslDJFSLJISLJFljsdlfkj";
// char.toLowerCase;
// char.toUpperCase;
// console.log(char.length);
// console.log(number.toFixed(2));

// const now = new Date();
// console.log(now.getDate());
// console.log(now.getHours());

// console.log(/([A-Z])\w+/.test("Iasdjoiad"));

// const err = new Error("Day la loi");

// throw err;

// var a = 100;

// function aFunc() {
//     var b = 50;

//     function bFun() {
//         var c = 15;
//     }

//     bFun();

//     console.log(a);
//     console.log(b);
//     console.log(c);

//     return true;
// }

// const result = aFunc();

// console.log(result);

// console.log(a);
// console.log(b);

// setTimeout(function() {
//     console.log("1s");
// }, 3000);

// setInterval(function() {
//     console.log("1s")
// }, 1000);

// function countDown(count) {
//     for(let i = count; i >= 0; i--) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000*(count-i));
//     }
// }

// function print(num, time) {
//     setTimeout(function() {
//         console.log(num);
//     }, 1000*time);
// }

// function countDown(count) {
//     for(var i = count; i >= 0; i--) {
//         print(num, count-i);
//     }
// }
// block scope {}

// countDown(7);

// var a = 10;

// if(true) {
//     var b = 15;
// }

// console.log(a);
// console.log(b);

// console.log("begin");

// setTimeout(function() {
//     console.log("1s")
// }, 0)
 
// // Callback Queue, Web APIS
// console.log("end");

// function print(message) {
//     console.log(message);
// }

// print("Hello");

// const printClone = print; // gan mot function thanh bien -> bien thanh function

// printClone("World");

// function print(message, time, cb) {
//     setTimeout(function() {
//         console.log(message);
//         if(cb) cb();
//     }, time); 
// }

// print("Danh rang", 2000);
// print("Rua mat", 1500);

// print("Danh rang", 2000, function() {
//     print("Rua mat", 1500);
// });

const elem = document.createElement('p');
elem.innerText = "Hello";
console.log(elem);

const bodyElem = document.querySelector('body');

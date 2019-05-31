// require("fs").writeFile("test.txt","Hello world",(err) => {
//     if(err) console.log(err)
//     else console.log("Write file success");
// });

// function funcName() {

// }

// const funcName = function () {

// }

// const funcName = () => {

// }

// const fs = require("fs");


// fs.readFile("test.txt", {encoding: 'utf-8'}, (err, data) => {
//     if(err) console.log(err)
//     // else console.log(data+"");
//     else console.log(data+"");
// });

// const data = fs.readFileSync("test.txt", {encoding: 'utf-8'});
// console.log(data)

// const obj = {
//     name: "Ha",
//     age: 19
// };

// const jsonObj = JSON.stringify(obj);

// fs.writeFileSync("test.txt", jsonObj);

// const data = fs.readFileSync("test.txt", {encoding: "utf-8"});
// try {
//     const objData = JSON.parse(data);
//     console.log(objData);
//     console.log(objData.name);
// } catch (error) {
//     console.log(error);
// }

// console.log("Hello");

const fileController = require("./fileController");

fileController.writeFile('./test.txt', 'Hello world');
// console.log(fileData);
/**
 * const,let当の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能

// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// //val3 = "const上書き";

// //val3 = "constを再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// // const val4 = {
// //   name:"kaito",
// //   age:26,
// // };
// // val4.name = "かいつ";
// // val4.address = "Tokyo";
// // console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列

// const name = "kaito";
// const age = 28;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

//従来の関数
// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1desy"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("fun2!!"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入

// const myProfile = {
//   name: "kaito",
//   age: 28,
// };

// const message1 = `my name is ${myProfile.name}. ${myProfile.age}years old`;
// console.log(message1);

// const{name,age} = myProfile;
// const message2 = `my name is ${name}. ${age}years old`;
// console.log(message2);

const myProfile = ["kaito", 28];

const message3 = `my name is ${myProfile[0]} ${myProfile[1]} years old`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `my name is ${name} ${age} years old ver4`;
console.log(message4);

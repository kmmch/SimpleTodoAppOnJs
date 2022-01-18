/**
 * テンプレート文字列
 */
// const name = "masaya";
// const age = 24;

// 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("ああああ"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("iiiii"));

// 引数が一つの時は、引数の（）なくてもOK
// returnを省略可能。
// const func2 = (str) => str;

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "masaya",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message２ = `名前は${name}です。年齢は${age}です。`;
// console.log(message２);

// const myProfile = ["masaya", 24];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
const SayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
SayHello("じゃけぇ");

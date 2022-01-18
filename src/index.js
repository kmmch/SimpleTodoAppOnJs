/**
 * テンプレート文字列
 */
const name = "masaya";
const age = 24;

// 従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
// console.log(func1("ああああ"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("iiiii"));

// 引数が一つの時は、引数の（）なくてもOK
// returnを省略可能。
// const func2 = (str) => str;

const func3 = (num1, num2) => {
  return num1 + num2;
};
const func4 = (num1, num2) => num1 + num2;
console.log(func4(10, 20));

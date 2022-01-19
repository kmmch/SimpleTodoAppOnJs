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

/**
 *
 */

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
 *
 */

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
 *
 */

/**
 * デフォルト値、引数
 */
// const SayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
// SayHello("じゃけぇ");

/**
 *
 */

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);
// // ...は配列の中身を順番に取り出してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// -> 参照が引き継がれる
// arr8[0] = 100;
// console.log(arr4);

/**
 *
 */

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["masaya", "kemmochi", "じゃけぇ"];
// for (let index=0; index<nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num%2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name ==="じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 *
 */

/**
 * 三項演算子
 */
// 条件 ? trueの処理 : falseの処理
// const val1 = 1 > 0 ? "TRUE" : "FALSE";
// console.log(val1);

// const val2 = 1 < 0 ? "TRUE" : "FALSE";
// console.log(val2);

// const num = 1300;
// num.toLocaleString() -> ３桁ごとにカンマ区切りにしてくれる

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです。';
// }
// console.log(checkSum(50,40));

/**
 *
 */

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if(flag1 || flag2) {
//   console.log('1または2はtrueです。');
// }

// if(flag1 && flag2) {
//   console.log('1も2もtrueです。');
// }

// -> または、かつ、という意味ではない！

// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);
// || は左側がfalseの時に右側を返す

// const num2 = 100;
// const fee2 = num2 && "金額設定中";
// console.log(fee2);
// && は左側がtrueの時に右側を返す

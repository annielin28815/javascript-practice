let pi = Math.PI();
let exponential = Math.E(); // 自然常數

let ceil = Math.ceil(3.56789);  // 無條件進位
let floor = Math.floor(3.56789);  // 無條件捨棄
let round = Math.round(3.56789);  // 四捨五入

let absoulte = Math.abs(3.56789); // 取絕對值

let max = Math.max(6, 3, 8, 100, 0);  //取最大值
let min = Math.min(6, 3, 8, 100, 0);  //取最小值

// 取亂數(有小數點)
let foo = Math.random();  // 0~1，不含1
let foo2 = Math.random() * 10;  // 0~10，不含10
let foo3 = Math.random() * 10 + 1;  // 1~11，不含11
// 取亂數(沒有小數點)
let foo4 = Math.floor(Math.random() * 10 + 1);  // 0~10，不含10
let foo5 = Math.floor(Math.random() * 10 + 1);  // 1~11，不含11

// number to string(取到整數)
let str11 = 123;
let str12 = str11.toFixed();  // "123"
// number to string(取到小數點第1位)
let str21 = 123.45;
let str22 = str22.toFixed(1);  // "123.5"
// number to string(取到小數點第5位)
let str01 = 123.45;
let str02 = str01.toFixed(5); // "123.45000"

// 判斷是否為 n 的倍數，以 2 為範例
let num = 8
let num2  = 9
let is2mutiple = (num % 2 === 0); // 會返回 true/fasle

// 1 + 2 + 3 + ... + n = sum -> 等差級數
function fun1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function fun2(n) {
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
fun1(10000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`It takes ${timeDiff1} seconds to run fun1.`);  // 0.03540000000596046

let time3 = window.performance.now();
fun2(10000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`It takes ${timeDiff2} seconds to run fun2.`);  // 0.00010000000894069671

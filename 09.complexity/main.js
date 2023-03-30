function example(n) {
  let counter = 0;
  for (let i = 0; i < 3 * n; i++) {
    console.log("Hello"); // 6
    counter++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("Hello"); // 2*2 = 4
      counter++;
    }
  }

  console.log("Hello"); // 1
  console.log("Hello"); // 1
  console.log("Hello"); // 1
  console.log("Hello"); // 1
  counter += 4

  return counter;
}

example(2); // total -> 14


// 如果要知道執行 example 時帶多少的數字進去會印出幾個 'Hello'
for (let n = 2; n < 10; n++) {
  console.log('example(n) =>', `example${n} will print out ` + example(n) + 'Hellos.');
}
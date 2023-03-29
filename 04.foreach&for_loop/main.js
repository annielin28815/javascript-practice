let arr = ['John', 'Andy', 'Lisa'];

// foreach
arr.forEach((name, index) => {
  console.log('name =>', name); // 依序印出名字
  console.log('index =>', index); // 依序印出索引值
})

// for loop
for(let i = 0; i < arr.length; i++){
  console.log('arr[i] =>', arr[i]); // 依序印出名字
  console.log('i =>', i); // 依序印出索引值
}

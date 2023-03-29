let Harry = {
  name: 'Harry Porter',
  age: 18,
  job: 'student',
  sayHHello() {
    console.log('the function =>', 'Hello !!!');
  }
};

console.log('1 =>', Harry['name']); // 印出該 property 對應的 value 值
console.log('2 =>', Harry.name); // 印出該 property 對應的 value 值


Harry.sayHHello();  // 執行該 object 裡指定的 method
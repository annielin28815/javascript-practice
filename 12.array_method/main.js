const family = [
  'Cathy',
  'Jack',
  'Lisa'
];

// 查詢長度
const len = family.length;

// 查詢第n個元素
const name = family[2];

// 查詢元素在第n個
const position = family.indexOf('Jack');

// 判斷某變數是否為array
const bool = Array.isArray(family);

// 在陣列中「最後面」新增項目
family.push('Olive');

// 在陣列中「最前面」新增項目
family.upshift('Rucy');

// 在陣列中移除「最後面」的項目，並把原陣列項目變少
const tailElement = family.pop();
console.log('tailElement =>', tailElement); // 'Olive', ['Cathy', 'Jack', 'Lisa']

// 在陣列中移除「最前面」的項目，並把原陣列項目變少
const tailElement = family.shift();
console.log('tailElement =>', tailElement); // 'Olive', ['Cathy', 'Jack', 'Lisa']

// 倒序陣列
const reverseFamily = family.reverse();

// 一般排序：按照英文字母或中文的utf8順序
const sortFamily = family.sort();
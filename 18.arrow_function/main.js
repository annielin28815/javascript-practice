let arr = [1, 2, 3, 4, 5];
let squareArr = arr.map((n) => n * n);

console.log('squareArr =>', squareArr); // [1, 4, 9, 16, 25]

// 找出句子中最長的單字
var sentence = 'Save time and money with the cloud platform loved by developers';
const findLongest = (s) => {
  var words = s.split(' ');
  var longestStr = words[0];

  for(var i = 1; i < words.length; i++){
    if(words[i].length > longestStr.length){
      longestStr = words[i]
    }
  }
  return longestStr;
};

console.log('findLongest(sentence) =>', findLongest(sentence)); // 'developers'

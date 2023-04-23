/*
* A: 90 以上
* B: 80-89
* C: 70-79
* D: 60-49
* E: 60 以下
* -: 其他非 0-100
*/ 

const score = 300;

// 記得遵從錯誤先行原則(fasle first)，可讓程式負擔更小
if(score < 0 || score > 100){
  console.log('-');
}else if(score >= 90){
  console.log('A');
}else if(score >= 80){
  console.log('B');
}else if(score >= 70){
  console.log('C');
}else if(score >= 60){
  console.log('D');
}else{
  console.log('E');
}
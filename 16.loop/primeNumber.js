// 找出質數的練習
let x = 10;

let isNotPrime = false; // flag
for( let i = 2; i <= x -1; i = i + 1 ){
  if( x % i === 0){
    isNotPrime = true;
    break;
  }
}

if(isNotPrime){
  console.log('`${x} 不是質數` =>', `${x} 不是質數`);
}else{
  console.log('`${x} 是質數` =>', `${x} 是質數`);
}
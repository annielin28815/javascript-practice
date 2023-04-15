// break 跳脫
const x = 1;
while(x < 5){
  console.log('x =>', x);
  if(x == 2){
    break;
  }
  x = x + 1
}

// continue 繼續
const y = 1;
while(y < 5){
  y = y + 1;
  console.log('y =>', y);
  if(y == 2){
    continue;
  }
  console.log('after continue =>', `after continue + ${y}`);
}
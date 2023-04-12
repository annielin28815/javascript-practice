// 使用 switch 較 if 可讀性高，注意每個情形後方要加 break。
// 春天(3.4.5)、夏天(6.7.8)、秋天(9.10.11)、冬天(12.1.2)

const month = 3;

switch(month){
  case 3:
  case 4:
  case 5:
    console.log('春天 =>', month);
    break

  case 6:
  case 7:
  case 8:
    console.log('夏天 =>', month);
    break

  case 9:
  case 10:
  case 11:
    console.log('秋天 =>', month);
    break

  case 12:
  case 1:
  case 2:
    console.log('冬天 =>', month);
    break

  default:
    console.log('不合法月份 =>', '不合法月份');
}
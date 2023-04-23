const isLogin = true;
const role = 'member';

if(isLogin){
  console.log('已登入 =>', '已登入');

  if(role == 'admin'){
    console.log('admin =>', 'admin');
  }else{
    if(role === 'vip'){
      console.log('歡迎光臨 =>', '歡迎光臨');
    }else if(role === 'admin'){
      console.log('管理員您好 =>', '管理員您好');
    }else{
      console.log('未知角色 =>', role);
    }
  }
}else{
  console.log('請登入 =>', '請登入');
}
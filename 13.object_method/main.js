const friend = {
  firstName: 'Annie',
  lastName: 'Lin',
  age: 18,
  addr: {
    city: 'taipei',
    postCode: 102
  },
  'nick name': 'Annieeeeeeeee'
};

// 常用取值方式
const name = friend.firstName;  // Annie
const code = friend.addr.postCode;  // 102
// 第二種取值方式(通常用在key有空格情形)
const nickName = friend['nick name']; // Annieeeeeeeee

// 取所有key值
const keys = Object.keys(friend); // ['firstName', 'lastName', 'age', 'addr', 'nick name']

// 加入其他值
friend.birth = '2000-01-01';

// 不可以assign整包新的object內容給原本就存在的object`,會error
friend = {
  firstName: 'Lisa',
  lastName: 'Ru',
  age: 18,
  addr: {
    city: 'taipei',
    postCode: 102
  },
  'nick name': 'Lsaaaaaaaaa'
};

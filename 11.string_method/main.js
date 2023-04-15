const firstName = "Annie";
const LastName = "Lin";
const department = "RD";

// template string(模板字串) -> 使用反折號：組裝字串、空格或已知變數
const intro = `Hi! ${firstName} ${LastName} is from ${department}`;

// 轉換全大寫
const upper = intro.toUpperCase();
// 轉換全小寫
const lower = intro.toLowerCase();

// 取某字元在字串中「第一次」出現的位置
const location = intro.indexOf('Annie');  // 4
const location2 = intro.indexOf('!'); // 2
const location3 = intro.indexOf('?'); // -1 -> 代表沒有
// 取某字元在字串中「最後一次」出現的位置
const location4 = intro.lastIndexOf('i');

// 以位置取字元
const str = intro.charAt(1);  // i

// 取子字串的方式(substring)
const len = intro.length; // 先查詢字串總字元數
const name = intro.slice(3, 9); // Annie
// 取字串中倒數回來的字
const lastWord = intro.slice(-2); // RD -> 其實是(-2, 0)，0可選擇不寫

// 切割字串
const piece = intro.split(' '); // ["Hi!", "Annie", "Lin", "is", "from", "RD"]

// 替換
const change = intro.replace('!', '?'); // Hi? Annie Lin is from RD

// 查詢是否包含某單字的方法
const check = intro.indexOf('Hello') >= 0;  // false
const check2 = intro.includes('Hello'); // false
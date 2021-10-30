# JavaScript 照片牆切換

此次練習分四步驟循序漸進優化切換特效與程式碼，以下依次介紹差異：

## 01.html

- 透過更改指定的 DOM 元素，改變指定的樣式的背景圖片
- 用字串將連結包起來

```javascript=
a1.addEventListener("click", function(){
    phone.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
});
```

## 02.html

- 觸發那個物件本身，改變指定的樣式的背景圖片。
- 使用一個 function 與 if... else... 實作一個共用的方法。

```javascript=
a1.addEventListener("click", showPhoto);
a2.addEventListener("click", showPhoto);

function showPhoto(){
    // this -> 等於觸發的那個物件本身
    if(this.id == "a1"){
        phone.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
    }else if(this.id == "a2"){
        phone.style.backgroundImage = 'url("../images/05/big/a2.jpg")';
    }
}
```

## 03.html

## 04.html

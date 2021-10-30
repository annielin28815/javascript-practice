# JavaScript - 增加、移除、切換 class 屬性

## 增加 class 屬性 - add

```javascript
menu.classList.add("open");
```

## 移除 class 屬性 - remove

```javascript
menu.classList.remove("open");
```

## 切換同一個 class 屬性 - toggle

```javascript
app.classList.toggle("open");
```

## 檢查 class 屬性有幾個 - length

```javascript
console.log(document.getElementById("myBtn").classList.length);
```

## 檢查 class 屬性是否存在 - contains

```javascript
menuBtn.addEventListener("click", function () {
  app.classList.contains("open"); // 檢查class屬性，會回傳true或false
});

// 邏輯一：
if (app.classList.contains("open") === false) {
  // if判斷式僅能放true或false的判斷結果
  window.open("https://www.google.com.tw/"); // 另開視窗(網址或路徑)
}

// 邏輯二：
if (app.classList.contains("open") !== true) {
  window.open("https://www.google.com.tw/");
}

// 邏輯三：
if (!app.classList.contains("open")) {
  window.open("https://www.google.com.tw/");
}
```

## 應用 1 - 選取狀態時 切換 class 屬性

```JavaScript
for(var i = 0; i < nav.length; i++){
	nav[i].addEventListener("click", menuClick);	// 可以取得點擊的那個物件本身
}

function menuClick(){
	for(var s = 0; s < nav.length; s++){
		nav[s].classList.remove("active");		// 先對原本有active屬性的，全部都做移除
	}
	this.classList.add("active");			// 再為點擊的該物件，添加active屬性
}

```

## 應用 2 - 選取狀態時 切換並增加 class 屬性

```JavaScript
var page = document.getElementByClassName('page');	// 取得一個陣列的pages
var pageIdx = 0;

page[pageIdx].style.display = "flex";			// style.display可更改指定元素的inline style的顯示方式

for(var i = 0; i < nav.length; i++){
	navBtn[i].addEventListener("click", menuClick);	// 可以取得點擊的那個物件本身
}

function menuClick(){
	for(var s = 0; s < nav.length; s++){
		nav[s].classList.remove("active");		// 先對原本有active屬性的，全部都做移除
		page[s].style.display = "none";
	}
	this.classList.add("active");			// 再為點擊的該物件，添加active屬性
	var idx = Number(this.id.substr(1));		// 擷取page那個陣列的id值，並將陣列轉換型別為數字
	page[Idx - 1].style.display = "flex";
}
```

## 補充 - style.display

[參考值](https://www.w3school.com.cn/htmldom/prop_style_display.asp)

```javascript
myBtn.style.display = "none";
myBtn.style.display = "flex";
myBtn.style.display = "block";
myBtn.style.display = "inline";
```

window.onload = function(){
    
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var phone = document.getElementById("contentPhone");

    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);

    function showPhoto(){
        // 透過字串組合的方式·可以將「值」活用在路由上面
        // 因為在HTML的id和圖片名稱有妥善搭配·所以可以使程式碼更加倍活用
        phone.style.backgroundImage = 'url("../images/05/big/' + this.id +'.jpg")';
    }

}
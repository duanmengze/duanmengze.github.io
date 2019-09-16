window.onload = function () {
    var menu = document.getElementById("menu");
    var hui = document.getElementById("hui");
    // var panle = document.getElementById("aside");
    menu.addEventListener('click', function () {
        slide();
    }, false);
    hui.addEventListener('click', function () {
        slides();
    }, false);
    function slide() {
        console.log("ok");
        aside.style.transform = "translateX(0px)";
        document.body.style.background = "rgba(0,0,0,0.5)";
    };
    function slides() {
        console.log("ok");
        aside.style.transform = "translateX(-250px)";
        document.body.style.background = "rgba(0,0,0,0)";
    }
    // document.getElementById("menu1").onclick = function () {
    //     aside.style.transform = "translateX(-250px)";
    // }
}


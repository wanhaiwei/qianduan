var $aPic = $(".m-banner .pic>li");
var $aWrap = $(".m-banner .wrap>li");
var $aBtn = $(".m-banner .btn>li");
var $oBox = $(".m-banner");
var len =$aWrap.length;
var first = 0;
var timer;
// alert(len);
//初始化
$aPic.eq(0).show();//显示第一张图片
$aWrap.eq(0).addClass("on");//显示第一个轮播点
//wrap
$aWrap.click(function(){
    var x = $(this).index();
    if(x != first){
        change(x)
    }
})

//左右按键
$aBtn.click(function(){
    var x = first;
    if($(this).index()){
        x++;
        x %= len;// x = x % len
    }else{
        x--;
        if(x < 0)x = len - 1;
    }
    change(x);
})
//自动轮播
auto();
$oBox.hover(
    function(){
        clearInterval(timer);
    },auto);
function auto(){
    timer = setInterval(function(){
        var x = first;
        x ++;
        x %= len;
        change(x);
        console.log("1")
    },3000)};
//变换函数
function change(i){
    $aPic.eq(first).fadeOut(1000);
    $aWrap.eq(first).removeClass("on");
    first = i;
    $aPic.eq(first).fadeIn(1000);
    $aWrap.eq(first).addClass("on");
}

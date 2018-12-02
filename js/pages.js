    var $aPage = $(".page-list>li");//页面
    var $aNav = $(".n-list>li" );//导航
    var f = 0;
    // //初始化
    // $aPage.eq(0).addClass("page-show");
    $aPage.eq(0).show();
    $aNav.eq(0).addClass("nav-on");
    //  $aNav.eq(0).css({color:"red"})
    $aNav.click(function(){
        var x = $(this).index();
        if(x != f){
        // $aPage.eq(f).removeClass("page-show");
           $aPage.eq(f).fadeOut(1);
        $aNav.eq(f).removeClass("nav-on");
        f = x;
        // $aPage.eq(f).addClass("page-show");
             $aPage.eq(f).fadeIn(1);
        $aNav.eq(f).addClass("nav-on");
        }
    })
$('#ithere').click(function(){
    this.innerText = "已签到";
})

// 右下帮助菜单
$(document).ready(function(){
    $(".side ul li").hover(function(){
        $(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"orange"})    
    },function(){
        $(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})
    });
});
//回到顶部
function goTop(){
    $('html,body').stop().animate({'scrollTop':0},600);
    // $(".side").fadeOut();
}


// 右下角人物
// var seebox = document.getElementById('seebox');
// var sl = document.getElementById('sl');
// seebox.onmouseover = function(){

//     this.children[0].src = 'images/seelogo2.png';
//     // console.log(this.src);
// }
// seebox.onmouseout = function(){
//     this.children[0].src = 'images/seelogo.png';
//     // console.log(this.src);
// };


// 帮助菜单隐藏



//顶部导航下拉菜单（未完成）
var $lis = $(".there>ul>li");
$lis.mouseenter(function () {
  $(this).children(".there").stop().slideDown(1000);
});

$lis.mouseleave(function () {
  $(this).children(".there").stop().slideUp(1000);
});



// banner渐入渐出轮播（鼠标移入停止未完成）
// $(window).load(function(){
//   var index=0;
//   var $lis=$('#cBanner li');
//   $('.banner_arrow_right').click(function(){
//     if (index===$lis.length-1) {
//       index=-1;
//     }
//     index++;
//     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//   });
//   $('.banner_arrow_left').click(function(){
//     if (index===0) {
//       index=$lis.length;
//     }
//     index--;
//     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//   });
//   var timer=null;
//     timer=setInterval(function(){
//        if (index===$lis.length-1) {
//       index=-1;
//     }
//     index++;
//     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//   },2000)
// });


//注册与登陆
$('#zcid').click(function(){
    this.value = "";
});
$('#zcmm').click(function(){
    this.value = "";
});
$('#dlid').click(function(){
    this.value = "";
});
$('#dlmm').click(function(){
    this.value = "";
});

$('#zce').mouseover(function(){
    $('#zhuce').stop().fadeIn(500,function(){});
}).mouseout(function(){
    $('#zhuce').stop().fadeOut(500,function(){});
});
$('#dlu').mouseover(function(){
    $('#dl').stop().fadeIn(500,function(){});
}).mouseout(function(){
    $('#dl').stop().fadeOut(500,function(){});
});



//登陆-用户名框-点击时清空默认文字
var dlid = document.getElementById('dlid');
$('dlid').click(function(){
    dlid.value = "";
});
//登陆-密码框-点击时清空默认文字
var dlmm = document.getElementById('dlmm');
$('dlid').click(function(){
    dlmm.value = "";
});
//登陆-输入账号密码后
$('.lingqu_img').click(function(){
    var idcard = document.getElementById('Community_self');
    var dlid = document.getElementById('dlid');
    var dlmm = document.getElementById('dlmm');
    if (dlid.value == "请输入用户名" || dlmm.value == "请输入密码") {
        alert('请输入用户名与密码');
        dlid.value = "请输入用户名";
        dlmm.value = "请输入密码";
    }else{
        $('.lingqu_img').fadeIn().attr("src","images/yilingwan.png");
        dlid.value = "请输入用户名";
        dlmm.value = "请输入密码";
        idcard.innerHTML = '<li><a>' + '已登录！' + '</a></li>';
    }
});
//注册-用户名框-点击时清空默认文字
var zcid = document.getElementById('zcid');
$('zcid').click(function(){
    zcid.value = "";
});
//注册-密码框-点击时清空默认文字
var zcmm = document.getElementById('zcmm');
$('zcid').click(function(){
    zcmm.value = "";
});
$('.zhuce_img').click(function(){
    var zcid = document.getElementById('zcid');
    var zcmm = document.getElementById('zcmm');
    if (zcid.value == "请输入用户名" || zcmm.value == "请输入密码") {
        alert('请输入用户名与密码');
        zcid.value = "请输入用户名";
        zcmm.value = "请输入密码";
    }else{
        $('.zhuce_img').fadeIn().attr("src","images/yizhuce.png");
        zcid.value = "请输入用户名";
        zcmm.value = "请输入密码";
    }
});





// 完整轮播图淡入淡出（不含点）
// 左右箭头切换banner
var index=0;
var $lis=$('#cBanner li');
$('.banner_arrow_right').click(function(){
  if (index===$lis.length-1) {
    index=-1;
  }
  index++;
  $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
$('.banner_arrow_left').click(function(){
  if (index===0) {
    index=$lis.length;
  }
  index--;
  $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
//设置定时器，轮播banner
var timer=null;
timer=setInterval(function(){
    if (index===$lis.length-1) {
    index=-1;
    }
index++;
    $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
},3000);
//鼠标移入停止，移出开始轮播
$('#cBanner').mouseover(function(){
    clearInterval(timer);
}).mouseout(function(){
    timer=setInterval(function(){
        if (index===$lis.length-1) {
        index=-1;
        }
    index++;
        $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    },3000);
});


// small_img
$(".content") .hover(function(){
        $(this) .children(".txt").stop() .animate({height:"360px"},200);
        $(this) .parent(".teacherPic") .css({"background":"url(images/"+($(this).attr('id'))+".jpg) no-repeat","-webkit-transition":"all 0.8s ease 0.2s","transition":"all 0.8s ease 0.2s"});
/* $(this) .parent(".teacherPic") .css("background","url(images/"+($(this).attr('id'))+".jpg) no-repeat");*/
        $(this) .find(".txt h3").stop() .animate({paddingTop:"150"},550);
        $(this) .find(".txt p").stop() .show();
},function(){
        $(this) .children(".txt").stop() .animate({height:"122px"},200);
        $(this) .find(".txt h3").stop().animate({paddingTop:"0px"},550);
        $(this) .find(".txt p").stop() .hide();
    })


//播放图标
setInterval(function(){
    $('document').ready(function(){
        $('#bo').animate({left:'-=4px'},100);
    });
    $('document').ready(function(){
        $('#bo').animate({left:'+=4px'},100);
    });
},1000);


//banner中小广告抖动效果
// setInterval(function(){
//     $('document').ready(function(){
//         $('#bannerlink').animate({left:'-=4px'},100);
//     });
//     $('document').ready(function(){
//         $('#bannerlink').animate({top:'-=10px'},100);
//     });
//     $('document').ready(function(){
//         $('#bannerlink').animate({left:'+=4px'},100);
//     });
//     $('document').ready(function(){
//         $('#bannerlink').animate({top:'+=10px'},100);
//     });
// },4000);



// 阅读文章span



// 手风琴效果
$('#beautiful li').mouseover(function(){
    if(!$(this).hasClass('curr')){
        $('#beautiful li').removeClass('curr');
        $(this).addClass('curr');
        // 切换背景
        $('#beautiful li').each(function(index){
            if($(this).hasClass('curr')){
                $('.bg').fadeOut(500);
                $('.bg:eq(' + index + ')').fadeIn(700);
            }
        });
        $('.curr').stop().animate({
            width: 730
        }, 500, 'linear');
        $('#beautiful li').not('.curr').stop().animate({
            width: 50
        }, 500, 'linear');
    }
});




// var index = 0;
// var $lis = $('#cBanner li');
// $('.banner_arrow_right').click(function(){
//     if (index === $lis.length - 1) {
//         index = -1;
//     }
//     index ++;
//     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
// });
// $('.banner_arrow_left').click(function(){
//     index === 0 ? (index = $lis.length - 1) : index--;
//     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);       
// });


// // banner 2秒轮播
// var pic = document.getElementById('banner_img');
// var i = 0;
// var time1 = setInterval(function(){
//     i ++;
//     if (i > 4) {
//         i = 1;
//     }
//     pic.src = 'images/banner_'+i+'.jpg';
// },1600);





//点击tab栏，网页自动移动到tab栏区域
// var hd_span = document.getElementById('hd_span');
// var spans = hd_span.children;
// spans.onclick = function(){
//     $('document')animate({marginTop:'1000px'},1000);
// };



//点击回到阅读(删除)
// var top_top = document.getElementById('top_top');
// top_top.onclick = function(){
//     $('html,body').stop().animate({scrollTop:668},1200);
// };


// 收藏


// 发表
    //鼠标移入，出现'发表窗口'
    $('.write_topic').mouseover(function(){
        $('.write_topic_k').stop().slideDown();
        $('#fabiao').fadeIn().attr("src","images/fabiao.png");
    });
    
    //关闭发表
    $('#closeit').click(function(){
        $('.write_topic_k').stop().slideUp();
    });
    
    
    // 发表(未输入时点击‘发表’提示请输入内容)--未完成
    $('#fabiao').click(function(){
        var go = document.getElementById('go');
        if (go.value == null || go.value == "") {
            alert("您还没有输入");
        }else{
        //点击'发表'，图片变为'发表成功'
            // $('#fabiao').click(function(){
                $('#fabiao').stop().fadeOut();
                $('#fabiao').fadeIn().attr("src","images/chenggong.png");
                //发表完成后，清空内容
                go.value = '';
                //1秒后关闭
                setTimeout(function() {
                    $('.write_topic_k').stop().slideUp();
                }, 1000)
            // });
        };
    });



// 新闻右移


//写传记
// $('.write_topic').mouseover(function(){
//     $('#gifImg').stop().animate({left:1000},2000);
// });



//话题翻转效果
// var b1 = document.querySelector(".b1");
// var b2 = document.querySelector(".b2");
// b1.onclick = function() {
//   b1.style.transform = "rotateY(180deg)";
//   b2.style.transform = "rotateY(0deg)";
// }
// b2.onclick = function() {
//   b2.style.transform = "rotateY(-180deg)";
//   b1.style.transform = "rotateY(0deg)";
// }



// 新闻后缀抖动
setInterval(function(){
$('document').ready(function(){
$('.newsUl .new').animate({left:'+=10px'},200);
})
$('document').ready(function(){
    $('.newsUl .new').animate({left:'-=10px'},300);
})
},400);
setInterval(function(){
$('document').ready(function(){
    $('.newsUl2 .hot').animate({left:'+=10px'},300);
})
$('document').ready(function(){
    $('.newsUl2 .hot').animate({left:'-=10px'},100);
})
},400);



// video





// 游侠客攻略推荐度文字跳动(插件实现)
// $(document).ready(function() {
//     $('content p').bumpyText();
// }); 



// // 点击小图换大图
// var bigImg = document.getElementById('banner_img');
// var ul = document.getElementById('small_pic_choose');
// var imgs = ul.getElementsByTagName('img');
// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].onmouseover = function(){
//         bigImg.src = 'images/banner_' + this.alt + '.jpg';
//         clearInterval(time1);//鼠标悬停小图时，大图停止自动轮播
//     }
// }







// 内容tab栏
createTab('topic');
function createTab(id) {
    var box = document.getElementById(id);
    var sps = hd_span.children;
    // var sps = box.getElementsByTagName("span");
    var lis = box.getElementsByTagName("li");
    for (var i = 0; i < sps.length; i++) {
      sps[i].index = i;
      sps[i].onclick = function () {
        for (var i = 0; i < sps.length; i++) {
        sps[i].className = "";
        lis[i].className = "";
        }
        this.className = "currt";
        lis[this.index].className = "show";
      };
    }
};

// var speedinT = document.querySelector('.speedin-T');
// var generalT = document.querySelector('.general-T');
$('.general-T').click(function(){ //点击普通登录时
    $('.login').show();             //普通登录界面显示
    $('.login1-T').hide();          //快速登录界面隐藏
    $('.general-T').css({"background":"#b42025", 
    "color":"#fff",
    "font-weight":"800"
});
    $('.speedin-T').css({"background":"#f5f5f5",
    "color":"#656565",
    "font-weight":"500"
});
})
$('.speedin-T').click(function(){//点击快速登录时
    $('.login1-T').show();          //快速登录界面显示
    $('.login').hide();             //普通登录界面隐藏
    var show_num = [];
    draw(show_num); 
    $('.speedin-T').css({"background":"#b42025",
    "color":"#fff",
    "font-weight":"800"
});
    $('.general-T').css({"background":"#f5f5f5",
    "color":"#656565",
    "font-weight":"500"
});
})

//快速登录
// 请输入手机号  限制只能输入11位数字
var ev = event;
    var inpT = document.querySelector('.inp-T');
    inpT.oninput = function (ev) {
        var content = this.value;
        // var content = this.value;
        if (content.length > 11) {
            this.value = content.substring(0,11);
        }
    }

    var show_num = [];
    draw(show_num);
   function dj(){
    draw(show_num);   
    } 
      function draw(show_num) {
           var canva_width=document.getElementById('canva').clientWidth;
           var canva_height=document.getElementById('canva').clientHeight;
           var canva = document.getElementById("canva");//获取到canvas的对象，演员
           var context = canva.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
           canva.width = canva_width;
           canva.height = canva_height;
           var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
           var aCode = sCode.split(",");
           var aLength = aCode.length;//获取到数组的长度
               
           for (var i = 0; i <= 4; i++) {
               var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
               var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
               var txt = aCode[j];//得到随机的一个内容
               show_num[i] = txt;
               var x = 10 + i * 20;//文字在canvas上的x坐标
               var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
               context.font = "bold 23px 微软雅黑";
   
               context.translate(x, y);
               context.rotate(deg);
   
               context.fillStyle = randomColor();
               context.fillText(txt, 0, 0);
   
               context.rotate(-deg);
               context.translate(-x, -y);
           }
           for (var i = 0; i <= 5; i++) { //验证码上显示线条
               context.strokeStyle = randomColor();
               context.beginPath();
               context.moveTo(Math.random() * canva_width, Math.random() * canva_height);
               context.lineTo(Math.random() * canva_width, Math.random() * canva_height);
               context.stroke();
           }
           for (var i = 0; i <= 30; i++) { //验证码上显示小点
               context.strokeStyle = randomColor();
               context.beginPath();
               var x = Math.random() * canva_width;
               var y = Math.random() * canva_height;
               context.moveTo(x, y);
               context.lineTo(x + 1, y + 1);
               context.stroke();
           }
       }
   function randomColor() {//得到随机的颜色值
           var r = Math.floor(Math.random() * 256);
           var g = Math.floor(Math.random() * 256);
           var b = Math.floor(Math.random() * 256);
           return "rgb(" + r + "," + g + "," + b + ")";
       }
   

    //  ajax  登录
    $('.TTT').click(function(){
        $.ajax({
            url: 'js/login2.php',
            type: 'get',
            data: 'act=login&user=' +$('#AAA').val()+ '&pass='+$('#BBB').val(),
            dataType:'json',
            success: function (data){
                // con.innerHTML = '姓名：'+json.name;
                location.href="https://www.baidu.com/";
                alert('登录成功啦')
            },
            failed: function (status){
                alert('请求失败');
            }
        });
        })
        
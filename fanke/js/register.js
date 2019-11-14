    //文本框聚焦，显示文字、、文本框失焦，文字隐藏
    var oneT = document.querySelector('.oneT');
    var twoT = document.querySelector('.twoT');
    var inp03T = document.querySelector('.inp03-T');
    var inp04T = document.querySelector('.inp04-T');
    var inp05T = document.querySelector('.inp05-T');
    var threeT = document.querySelector('.threeT');
    var fourT = document.querySelector('.fourT');
    
// 请输入手机号  限制只能输入11位数字
var ev = event;
var inp02T = document.querySelector('.inp02-T');
var zheng=/^[0-9]{11}$/
inp02T.oninput = function (ev) {
    var content = this.value;
    // var content = this.value;
    if (content.length > 11) {
        this.value = content.substring(0,11);
    }
    if(zheng.test(content)){

    }else{
        oneT.style.color = 'red';
    }
}

    inp02T.onfocus = function(){
        // this.value = '123';
        oneT.style.color = '#a2a2a2'
    }
    inp02T.onblur = function(){
        // this.value = '123';
        oneT.style.color = '#fff'
    }

    inp03T.onfocus = function(){
        // this.value = '123';
        twoT.style.color = '#a2a2a2'
    }
    inp03T.onblur = function(){
        // this.value = '123';
        twoT.style.color = '#fff'
    }

    inp04T.onfocus = function(){
        // this.value = '123';
        threeT.style.color = '#a2a2a2'
    }
    inp04T.onblur = function(){
        // this.value = '123';
        threeT.style.color = '#fff'
    }
    
    inp05T.onfocus = function(){
        // this.value = '123';
        fourT.style.color = '#a2a2a2'
    }
    inp05T.onblur = function(){
        // this.value = '123';
        fourT.style.color = '#fff'
    }

    //立即注册显示
    var checkboxT = document.querySelector('.checkbox-T');
    var butT = document.querySelector('.ZC-but-T');
    var abc = '';

    // checkboxT.onfocus = function () {
    //     butT.style.background = '#b52024';
    // }
    // checkboxT.onblur = function () {
    //     butT.style.background = '#9a9a9a';
    // }
    checkboxT.onclick = function () {
        if (checkboxT.checked == true) {
            butT.style.background = '#b52024';
        }else{
            butT.style.background = '#9a9a9a';
        }
    }

    var show_num = [];
 draw(show_num);
function dj(){
 draw(show_num);   
 }   
     
    function draw(show_num) {
        var canvas_width=document.getElementById('canvas').clientWidth;
        var canvas_height=document.getElementById('canvas').clientHeight;
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度
        
        for (var i = 0; i <= 5; i++) {
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
             abc += txt
            
            
        }

        for (var i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
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

    var yzmT = document.querySelector('#yzm-T');
    //判断验证码是否正确
    $('.inp01-T').blur(function () {        
        if ($('.inp01-T').val() == abc) {
            butT.disabled=false;        
        }else{
            // alert('验证码错误')
            // $('#yzm-T').css({"color":"red"})
            butT.disabled=true;
            yzmT.style.color = 'red';
        }
        if (butT.disabled) {
            butT.style.background = '#9a9a9a';
        } else {
            // butT.style.background = '#b52024';
            yzmT.style.color = '#FFF';
            
        }
    })

    //验证密码是否正确
    //第一次密码  inp04-T
    //第二密码   inp05-T
    $('.inp04-T').blur(function(){
        if (inp04T.value == inp05T.value) {
            butT.disabled=false;
        }else{
            butT.disabled = true;
            fourT.style.color = 'red';
        }    
    })
    $('.inp05-T').blur(function(){
        if (inp04T.value == inp05T.value) {
            butT.disabled=false;
        }else{
            butT.disabled = true;
            fourT.style.color = 'red';
        }    
    })
    // ajax引入
    // 用户名 inp02T
    // 密码  inp04T
    console.log(inp02T.value,inp03T.value,inp04T.value)
    var ZCbutT = document.querySelector('.ZC-but-T');
    ZCbutT.onclick = function(){
        console.log(inp02T.value,inp03T.value,inp04T.value)
        //判断验证码
    $.ajax({
        url: '../php/login2.php',
        type: 'get',
        data: 'act=add&user=' +inp02T.value+ '&pass='+inp04T.value,
        //data:{'user':inp02T.value,'pwd':inp04T.value},
        dataType:'json',
        success: function (data){
            console.log(data)
            // con.innerHTML = '姓名：'+json.name;
            alert('注册成功');
            location.href="../vew/login.html";
        },
        failed: function (status){
            alert('请求失败');
        }
    });
}





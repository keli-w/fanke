var minDiv = document.querySelector(".smallDiv");
var maxDiv = document.querySelector(".bigDiv");
var mask = document.querySelector(".mask");
var maxImg = document.querySelector(".bigDiv img");
var maxImgs = document.querySelectorAll(".bigDiv img");
//获取元素到body左侧或顶部的距离
function distance(dom) {
    var cLeft = 0;
    var cTop = 0;
    var cl = dom.clientLeft;//元素左边框宽度
    var ct = dom.clientTop;//元素上边框宽度
    while (dom) {
        cLeft = cLeft + dom.offsetLeft + dom.clientLeft;
        cTop = cTop + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;
    }
    return { left: cLeft - cl, top: cTop - ct };
}

minDiv.onmouseenter = function () {
    mask.style.display = "block";
    maxDiv.style.display = "block";
}
minDiv.onmouseleave = function () {
    mask.style.display = "none";
    maxDiv.style.display = "none";
}
minDiv.onmousemove = function (ev) {
    var e = ev || event;
    //移动蒙版
    var maskLeft = e.pageX - distance(minDiv).left - mask.clientWidth / 2;
    var maskTop = e.pageY - distance(minDiv).top - mask.clientHeight / 2;
    console.log(maskLeft,maskTop)
    if (maskLeft <= 0) {
        maskLeft = 0;
    }
    if (maskLeft >= (minDiv.clientWidth - mask.clientWidth)) {
        maskLeft = (minDiv.clientWidth - mask.clientWidth);
    }
    if (maskTop <= 0) {
        maskTop = 0;
    }
    if (maskTop >= (minDiv.clientHeight - mask.clientHeight)) {
        maskTop = (minDiv.clientHeight - mask.clientHeight)
    }

    mask.style.left = maskLeft + "px";
    mask.style.top = maskTop + "px";

    //移动大图
    var moveX = maskLeft / (minDiv.clientWidth - mask.clientWidth);
    var moveY = maskTop / (minDiv.clientHeight - mask.clientHeight);

    var maxLeft = moveX * (maxImg.clientWidth - maxDiv.clientWidth);
    var maxTop = moveY * (maxImg.clientHeight - maxDiv.clientHeight);

    maxImg.style.left = -maxLeft + "px";
    maxImg.style.top = -maxTop + "px";
    for(var i=1;i<maxImgs.length;i++){
        maxImgs[i].style.left=maxLeft+"px";
        maxImgs[i].style.top=maxTop+"px";
    }

}

//鼠标滑入最左侧图标，放大镜图片改变
var tits = document.querySelectorAll('.graph-ul .c-lp');
var cons = document.querySelectorAll('.smallDiv img');
var bigcons = document.querySelectorAll(".bigDiv img");
for (var i = 0, len = tits.length; i < len; i++) {
    tits[i].index = i;
    tits[i].onmouseenter = function () {
        for (var i = 0, len = cons.length; i < len; i++) {
            cons[i].className = '';
        }
        cons[this.index].className = 'show';
        for (var i = 0, len = bigcons.length; i < len; i++) {
            bigcons[i].className = '';
        }
        bigcons[this.index].className = 'show';
    }
}

//点击颜色图片切换数据
/********获取商品信息*********/
var id1=localStorage.getItem('ID')
$(function (){
    $.ajax({
        url: '../fanke.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            $.each(json,function (index,item){
                if(item.id==id1){
                    console.log(item)
                    $('.priceLeft').find('strong').html(item.price)
                    $('.operation').find('h2').html(item.title)
                }

            });
        }
    });
});


//储存数据格式
//[{'ID':id,'size':'S','color':'red','num':1},{'ID':id,'size':'M','color':'blue','num':1}]
var totalData=JSON.parse(localStorage.getItem('data'))
var dataArr=[];
$.each(totalData,function(k,exek){
    dataArr.push(exek)
})
choiceGoods();
function choiceGoods(){
    $('.add').click(function() {
        var size=$('.youSize').html()
        var num=$('.numChoice').children('select').val()
        var object={'ID':id1,'size':size,'num':num}
        var Data=JSON.parse(localStorage.getItem('data'))
        var arr=[]//将json对象转为数组
        var flag=true;
        for (const k in Data) {
            arr.push(Data[k])
        }
        console.log(arr,arr.length)
        if(!size==""){
            if(!!Data){
                for(var i=0;i<arr.length;i++){
                    console.log(i,arr[i].size,arr[i].ID,arr.length)
                    if(size==arr[i].size&&id1==arr[i].ID){
                        console.log(Data)
                        if(i==0){
                            Data.shift()
                        }else{
                            Data.splice(i,1)
                        }
                        Data.push(object)
                        console.log(Data)
                        dataArr=[];
                        $.each(Data,function(j,exej){
                            dataArr.push(exej)
                        })
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    dataArr.push(object)
                }
            }else{
                console.log(111)
                dataArr.push(object)
            }
            //console.log(id1,size,num)
            showTanchuan();
        }
        localStorage.setItem('data',JSON.stringify(dataArr))
    })
}
//localStorage.removeItem('ID')













//点击尺寸切换数据
var changeSizes = document.querySelectorAll(".sizeBox")
var sizeSpan = document.querySelector(".youSize");
for (var m = 0, leng = changeSizes.length; m < leng; m++) {
    changeSizes[m].count = m;
    changeSizes[m].onclick = function () {
        for (var n = 0, leng = changeSizes.length; n < leng; n++) {
            changeSizes[n].style.border = "";
        }
        changeSizes[this.count].style.border = "1px solid red";
        sizeSpan.innerHTML = changeSizes[this.count].children[0].innerHTML;
    }
}

//点击加入购物车，弹窗显示
function showTanchuan(){
    var str='';
    //$('.add').click(function() {
        str=`<div class="tanchuan">
        <h2>商品成功放入购物车<i style="cursor: pointer;">×</i></h2>
        <div>
            <div class="car"></div>
            <div class="btn">
                <a href="home.html" class="goShopp">《 继续购物</a>
                <a href="shoppCar.html" class="goCar">去购物车 》</a>
            </div>
        </div>
        </div>`
        $('body').append(str)
        $('.tanchuan').children('h2').find('i').click(function () {
            $('.tanchuan').remove()
        })
   // })
}
































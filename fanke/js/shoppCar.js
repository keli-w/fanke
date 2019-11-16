/**********获取商品信息*********/
var Data=localStorage.getItem('data')
// var idArr=[];
// var sizeArr=[];
// var numArr=[]
var DataArr=[]
$.each(JSON.parse(Data),function(i,obj){
    DataArr.push(obj)
    // idArr.push(obj.ID)
    // sizeArr.push(obj.size)
    // numArr.push(obj.num)
})
$(function(){
    $.ajax({
        url: '../fanke.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results='';
            $.each(JSON.parse(Data),function(i,obj){
                $.each(json,function(index,exe) {
                    if(obj.ID==exe.id){
                        //console.log(obj.ID)
                        results+=`
                        <div class="goods_info" id="${exe.id}">
                        <input type="checkbox" class="one">
                        <a href=""><img src="${exe.url}" alt="法兰绒 衬衫式连衣裙 保罗格红蓝"></a>
                        <b class="title">${exe.title}</b>
                        <p class="size">${obj.size}</p>
                        <p class="p">￥<span class="price">${exe.price}</span></p>
                        <div>
                            <a href="javascript:;" class="cut">-</a>
                            <input type="text" class="num" value=${obj.num}>
                            <a href="javascript:;" class="add">+</a>
                        </div>
                        <p>-</p>
                        <p>￥<span class="Subtotal">${exe.price*obj.num}</span></p>
                        <p class="delete">删除</p>
                        </div>`
                    }
                })
            })
            $('.content').append(results)
            selectAll()
            selectOne()
            zong1()
        }
    })
})

/**********全选*********/
function selectAll(){
    $('.all').click(function(){
        if($(this).prop('checked')==true){
            $('.one').prop('checked',true);
            $('.all').prop('checked',true)
            AllDel();
            zong()
            $('.c-bottom').children('p').find('span').html(zong)
        }else if($(this).prop('checked')==false){
            $('.one').prop('checked',false);
            $('.all').prop('checked',false)
            $('.c-bottom').children('p').find('span').html(0)
        }
    })
    Cut();
    Add();
    Total();
    oneDel();
}
/**********单选*********/
/* function selectOne(){
    var one=document.querySelectorAll('.one')
    var all=document.querySelectorAll('.all')
    var checkOK = false;//所有的都没被选中了
    var checkNO = false;//所有的都被选中
    $('.one').click(function(){
        var zong=0;
        $.each(one,function(index,ele){
            if(ele.checked==false){
                $.each(all,function(i,e){
                    e.checked=false;
                })
        }else{
                var sub=Number($(this).siblings('p').find('.Subtotal').html())
                zong+=sub
                $('.c-bottom').children('p').find('span').html(zong)
                flag=true;
            }
        })
    })
    if(!flag){
        all.checked=true;
    }
}
 */






    //单选
function selectOne() {
    $('.one').click(function () {
        var zong=0;
        var checkOK = false;//所有的都没被选中了
        var checkNO = false;//所有的都被选中
        $('.one').each(function (index, ele) {
            if ($(ele).prop("checked")) {
                checkOK = true;
                var sub=Number($(this).siblings('p').find('.Subtotal').html())
                zong+=sub
                $('.c-bottom').children('p').find('span').html(zong)
            } else {
                checkNO = true;
            }
        });
        if (checkOK) {
            $('.all').prop("disabled", false).prop("checked", false);
        } else {
            $('.all').prop("cheked", false);
            $('.c-bottom').children('p').find('span').html(0)
        }
        if (!checkNO) {//所有的都被选中了
            $('.all').prop("disabled", true).prop("checked", true);
        } else {//最少有一个未被选中
            $('.all').prop("disabled", false).prop("checked", false);
        }
    })
}
















/**********单个商品数量和*********/
function Cut(){
    //单个商品递减
    $('.cut').click(function(){
        var num=$(this).siblings('input').val()
        var id2=$(this).parents('.goods_info').attr('id')
        var size2=$(this).parents('div').siblings('.size').html()
        //console.log(num)
        if(num>1){
            num--;
            $(this).siblings('input').val(num)
        }else{//删除节点
            $(this).parents('.goods_info').remove()
            Del(DataArr,id2,size2)
        }
        //console.log($(this).parents('div').siblings('p').find('.price').html())
        var smallSum=Number($(this).parents('div').siblings('p').find('.price').html())*Number($(this).siblings('input').val())
        $(this).parents('div').siblings('p').find('.Subtotal').html(smallSum)
        Total();
        if($(this).parents('div').siblings('input').prop('checked')==true){
            zong();
        }
    })
}
function  Add(){
    //单个商品递增
    $('.add').click(function(){
        var num=$(this).siblings('input').val()
        var smallSum;
        num++;
        $(this).siblings('input').val(num)
        //小计
        smallSum=Number($(this).parents('div').siblings('p').find('.price').html())*Number($(this).siblings('input').val())
        $(this).parents('div').siblings('p').find('.Subtotal').html(smallSum)
        Total();
        if($(this).parents('div').siblings('input').prop('checked')==true){
            zong();
        }
    })
}


/**********总商品数量和*********/
function Total() {
    var nums=document.querySelectorAll('.num')
    var sum=0;
    $.each(nums,function(inex,ele){
        sum+=Number(ele.value)
    })
    localStorage.setItem("sum",sum)
    $('.Total').html(sum)
}

/**********总价*********/
function zong() {
    var sub=document.querySelectorAll('.Subtotal')
    var zong=0;
    $.each(sub,function(index,ele){
        zong+=Number(ele.innerHTML)
    })
    $('.c-bottom').children('p').find('span').html(zong)
}
//存储总价
function zong1() {
    var sub1=document.querySelectorAll('.Subtotal')
    var zong1=0;
    $.each(sub1,function(index,ele){
        zong1+=Number(ele.innerHTML)
    })
    console.log(zong1)
    localStorage.setItem('zong',JSON.parse(zong1))
}



/**********全删除*********/
function AllDel(){
    //删除节点
    $('.allDel').click(function(){
        $('.goods_info').remove()
        //删除储存数据
        localStorage.removeItem('data')
        localStorage.removeItem('sum')
    })
}
/**********单删除*********/
 function oneDel(){
    //删除节点
    $('.delete').click(function(){
        $(this).parents('.goods_info').remove()
        var id2=$(this).parents('.goods_info').attr('id')
        var size2=$(this).siblings('.size').html()
        Del(DataArr,id2,size2)
    })
}
function Del(DataArr,id2,size2){
    for(var i=0;i<DataArr.length;i++){
        if(id2==DataArr[i].ID&size2==DataArr[i].size){
            DataArr.splice(i,1)
            break;
        }
    }
    if(DataArr.length==0){
        localStorage.removeItem('data')
        localStorage.removeItem('sum')
    }
    localStorage.setItem('data',JSON.stringify(DataArr))
}
var name=localStorage.getItem('name')
if(name!=null){
    $('.name').html(name)
    $('.header_R').children('p').find('b').html('退出登录').css({'color':'red','cursor':'pointer'})
    $('.header_R').children('p').find('b').click(function(){
        localStorage.removeItem('name')
        location.href="home.html"
    })

}
if(name=="null"){
    var str=`
    <a href="login.html">登录</a>
    |
    <a href="register.html">注册</a>`
    $('.header_R').children('p').find('b').html(str).css('color','#3e3e3e')
    $('.name').html('')
}

/********获取商品信息*********/
$(function (){
    $.ajax({
        url: '../fanke.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            var results1 = '';
            var results2 = '';
            var results3 = '';
            var results4 = '';
            $.each(json,function (index,item){
                //console.log(item.id)
                var id=Number(item.id)
                if(id>=157&&id<=173){
                    results+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <p>
                                <span>${item.title}</span>
                                <i style="text-decoration:none">￥${item.price}</i>
                            </p>
                        </div>`
                }
                if(id>=174&&id<=190){
                    results1+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <p>
                                <span>${item.title}</span>
                                <i style="text-decoration:none">￥${item.price}</i>
                            </p>
                        </div>`
                }
                if(id>=191&&id<=223){
                    results2+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <p>
                                <span>${item.title}</span>
                                <i style="text-decoration:none">￥${item.price}</i>
                            </p>
                        </div>`
                }
                if(id>=224&&id<=256){
                    results3+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <p>
                                <span>${item.title}</span>
                                <i style="text-decoration:none">￥${item.price}</i>
                            </p>
                        </div>`
                }
                if(id>=257&&id<=278){
                    results4+=`
                        <div class="good" id=${item.id}>
                            <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" alt="">
                            <a href="details.html" class="link"><img src="${item.url}" alt=""></a>
                            <p>
                                <span>${item.title}</span>
                                <i style="text-decoration:none">￥${item.price}</i>
                            </p>
                        </div>`
                }                
            });
            $('.New_products').html(results);
            $('.Oxford').html(results1);
            $('.Flannel').html(results2);
            $('.Corduroy').html(results3);
            $('.Hemp').html(results4);
            details()
            Hover()
        }
    });
});
$('.type').children('p').click(function(){
    var i=document.createElement('i')
    $(this).css({'background':'#b80001'}).siblings().css({'background':'#ddd'})
    $(this).find('a').css('color','#fff').siblings().find('a').css('color','black')
    $(this).append(i).siblings().find('i').remove()
})
/*********点击商品图片跳转详情**********/
function details(){
    var arr=[];
    [{}]
    $('.link').click(function(){
        var id=$(this).parent('.good').attr('id')
        console.log(id)
        localStorage.setItem('ID',id)
    })
}


/*********划过商品**********/
function Hover(){
    $('.good').hover(function(){
        $(this).css({'background':'pink'})
    },function(){
        $(this).css({'background':'#fff'})
    })
}





/*********轮播图**********/
var mySwiper = new Swiper('#mySwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})  
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
} 
var mySwiper = new Swiper('#mySwiper', {

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}     
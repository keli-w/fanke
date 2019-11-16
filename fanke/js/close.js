$.ajax({
    type: 'get',
    url: '../closes.json',
    dataType: 'json',
    cache: false, //不使用缓存
    success: function (data) {
        var result = "";
        $.each(data, function (index, item) {
            result += `<li>
            <div class="imgDiv"> <a href=""> <img
                        src="${item.url}"
                        alt=""> </a>
                <div class="bigDiv"> <img
                        src="${item.url}"
                        alt="">
                    <h5>${item.word}</h5>
                    <p class="num"><span>产品编号</span><span>98234198</span></p>
                    <div class="pro">
                        <div class="oLeft">
                            <span>${item.price}</span>
                        </div>
                        <div class="oRight">
                            <span>好评率</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
            </div>
            <p> <a href="" title="">${item.word}</a> </p>
            <div class="priDiv"> <span class="price">${item.price}</span> </div>
        </li>`
        });
        // console.log(data)
        $('.main').children('ul').append(result);

    }

});
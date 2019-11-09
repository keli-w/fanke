$(function () {
    // 加载商品列表的数据
    $.ajax({
        url: 'data/sy.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = '';
            $.each(json, function (index, item) {
                results += `<div class="goods">
                <a href="">
                    <img src="${item.imgurl}" alt="">
                    <h3>${item.title}</h3>
                    <del>${item.hide}</del>
                    <span>
                        <p>${item.price}</p><strong>充值后<b>49</b>元</strong>
                    </span>
                </a>
            </div>`;

            });
            $('.content').html(results);
        }
    });

});

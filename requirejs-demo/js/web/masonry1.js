define(['jquery', './masonry/masonry.pkgd.min', './imagesloaded/imagesloaded'], function($, Masonry, imagesloaded) {
    var container = document.getElementById("container");
    var more = document.getElementById("more");
    var msnry = new Masonry(container);
    // layout Masonry again after all images have loaded
    imagesloaded(container, function() {
        msnry.layout();
    });
    $(more).on("click", addItem);

    function addItem() {
        var html = $('<div class="item">img</div><div class="item">新添加</div>');
        //添加到dom
        $(container).append(html);
        //正在加载中...
        // $(".icon").addClass("loading");
        imagesloaded(container, function() {
            //加载完成...
            // $(".icon").removeClass("loading");
            msnry.appended(html);
        });
    }
})

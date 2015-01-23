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
        var html = $('<div class="item">新添加</div><div class="item">新添加</div>');
        //添加到dom
        $(container).append(html);
        //通知masonry已添加的dom元素
        msnry.appended(html);
    }
})

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    }
})(jQuery);

var PageTitle = "";

function Load_Page() {
    if (PageTitle == "") {
        PageTitle = $('title').html();
    }

    //添加标题
    $('title').html(PageTitle + " - LZAHS");
    $('title').after("<link rel='icon' href='Imgs/Icon.png'/>");

    //写入菜单脚注
    $('.top-banner').append(header);
    $('.btm-banner').append(footer);
}
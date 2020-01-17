function WriteRecommends() {

    //写入框架
    for (var a in divList) {
        $('.main').append("<div class='recommend " + divList[a].ClassName + "'><h2 class='sec-title' ID='" + divList[a].ID + "'>" + divList[a].Description + "</h2><div class='content'></div></div>");
        $('.' + divList[a].ClassName).append("<a href='Products.html#" + divList[a].ID + "' class='goto' >Product List</a><span class='or'> Or </span><a onclick=\"Toggle('" + divList[a].ClassName + "')\" class='goto show' >Show All</a>");
    }

    for (var i in menuItems) {
        var tmp = divList[i].ClassName;
        for (var j in menuItems[i]) {
            $('.' + tmp + " .content").append("<a class='recommend-item' onclick=\"Open("+i+","+j+",'"+menuItems[i][j].Name+"')\"><div class='image' style='background-image: url(" + menuItems[i][j].LogoHref + ")'></div><div class='text'><h2 class='title-inside'>" + menuItems[i][j].Name + "</h2><p class='description'>" + menuItems[i][j].Description + "</p></div></a>");
        }
    }
}

function ChangePosition() {
    if ($('.top-banner').css("position") == "fixed") {
        $('.top-banner').css("position", "");
        $('.top-banner').css("top", "");
        $('.top-banner').css("left", "");
        $('.main').css("margin-top", "");
    } else {
        $('.top-banner').css("position", "fixed");
        $('.top-banner').css("top", "0");
        var left = (parseFloat($('body').width()) - parseFloat($('.top-banner').width())) / 2;
        console.log($('body').width());
        console.log($('.top-banner').width());
        $('.top-banner').css("left", left + "px");
        $('.main').css("margin-top", "66px");
    }
}

function Toggle(ClassName) {
    if ($('div.' + ClassName + " .content").css("max-height") != "none") {
        $('div.' + ClassName + " .content").css("max-height", "none");
        $('div.' + ClassName + " .show").html("Show Less");
    } else {
        $('div.' + ClassName + " .content").css("max-height", "190px");
        $('div.' + ClassName + " .show").html("Show All");
    }
}
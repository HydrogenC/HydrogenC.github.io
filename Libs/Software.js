var current = null;

function GetUrlVar() {
    var i = $.getUrlParam("vi");
    var j = $.getUrlParam("vj");
    $('p.title').html(menuItems[i][j].Name);
    $('img.big-logo').attr("src", menuItems[i][j].LogoHref);
    PageTitle = menuItems[i][j].Name;
    current = softwares[i][j];
}

function Load_Items() {
    for (var i = 0; i < current.length; i += 1) {
        var clas;
        if (i === 0) {
            clas = "selected-roll-item";
        } else {
            clas = "roll-item";
        }
        $('.roll').append("<a class='" + clas + "' ID='" + i + "' onclick='Switch(" + i + ")'><p class='container'>" + current[i].Name + "</p></a>");
    }
    Switch(0);
}

function Switch(index) {
    $('.name').html("Name: " + current[index].Name);
    $('.ver').html("Latest Version: " + current[index].Version);
    $('.size').html("File Size: " + current[index].Size);
    $('.description').html(current[index].Description);
    $('.big-title').html("Download " + current[index].Name);

    $('.internal-links').html("");
    $('.external-links').html("");

    for (var i in current[index].Files) {
        $('.internal-links').append("<div class='download-item'><div class='download-icon'></div><a class='download-link' href='" + current[index].Files[i].Path + "'>" + current[index].Files[i].Name + "</a></div>");
    }

    for (var j in current[index].ExternalHrefs) {
        $('.external-links').append("<div class='download-item'><div class='download-icon'></div><a class='download-link' href='" + current[index].ExternalHrefs[j].Path + "'>" + current[index].ExternalHrefs[j].Name + "</a></div>");
    }

    $('.selected-roll-item').attr("class", "roll-item");
    $('#' + index).attr("class", "selected-roll-item");
}

function SeeMore() {
    $('.roll').css("height", "auto");
    $('.see-more').html("↑ Hide");
    $('.see-more').attr("onclick", "SeeLess()");
}

function SeeLess() {
    $('.roll').css("height", "50px");
    $('.see-more').html("↓ More");
    $('.see-more').attr("onclick", "SeeMore()");
}
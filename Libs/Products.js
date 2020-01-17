function Load() {
    for (var i = 0; i < divList.length; i += 1) {
        $('.main').append("<div class='section' id='" + divList[i].ID + "'><h2 class='category'>" + divList[i].Description + "</h2></div>");
    }

	for (var i in menuItems) {
        var $temp = $('#' + divList[i].ID);
        for (var j in menuItems[i]) {
            $temp.append("<a class='item' onclick=\"Open(" + i + "," + j + ",'"+menuItems[i][j].Name+"')\"><div class='inner' title='" + menuItems[i][j].Description + "'><img class='icon' src='" + menuItems[i][j].LogoHref + "'/><span class='spn'>" + menuItems[i][j].Name + "</span></div></a>");
        }
    }
}

function Close(){
	$('.select').empty();
	$('.mask').hide();
	$('.download-section').hide();
	$('.next-step').html("Next Step");
	$('.next-step').attr("onclick","NextStep()");
}

var vi,vj,vl;

function Open(i,j,txt){
	$('.mask').show();
	$('.download-section').show();
	$('.one').show();
	$('.two').hide();
	$('.ds-title').html(txt);
	$('.legacy-page').attr("href","Software.html?vi=" + i + "&vj=" + j);
	for(var s in softwares[i][j]){
		$('.select').append("<option value='"+s+"'>"+softwares[i][j][s].Name+"</option>");
	}
	vi=i;
	vj=j;
	Change(0);
}

function Change(value){
	if(value=="none"){
		return;
	}else{
		vl=parseInt(value);
		$('.nme').html(softwares[vi][vj][vl].Name);
		$('.size').html(softwares[vi][vj][vl].Size);
		$('.vsn').html(softwares[vi][vj][vl].Version);
	}
}

function NextStep(){
	if($('.select').val()=="none"){
		alert("Please select one! ");
		return;
	}else{
		$('.one').hide();
		$('.two').show();
		$('.next-step').html("Finish");
		$('.next-step').attr("onclick","Close()");
		$('.lnks').empty();
		for(var s in softwares[vi][vj][vl].Files){
			$('.lnks').append("<a class='text' href='"+softwares[vi][vj][vl].Files[s].Path+"'>"+softwares[vi][vj][vl].Files[s].Name+"</a>");
		}
		$('.lnks').append("<p class='first'>External Downloads</p>");
		for(var s in softwares[vi][vj][vl].ExternalHrefs){
			$('.lnks').append("<a class='text' href='"+softwares[vi][vj][vl].ExternalHrefs[s].Path+"'>"+softwares[vi][vj][vl].ExternalHrefs[s].Name+"</a>");
		}
	}
}
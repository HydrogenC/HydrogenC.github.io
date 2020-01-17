var vi,vj,vl;

$(window).resize(function(){
	AdjustPosition();
});

function Load_DSection(){
	$('.top-banner').after(dsection);
	AdjustPosition();
}

function Close(){
    $('.select').empty();
    $('.mask').fadeOut(250);
    $('.download-section').fadeOut(250);
	$('.next-step').html("Next Step");
	$('.next-step').attr("onclick","NextStep()");
}

function Open(i, j, txt) {
    $('.mask').fadeIn(250);
    $('.download-section').fadeIn(250);
	$('.one').show();
	$('.two').hide();
	$('.ds-title').html(txt);
	$('.legacy-page').attr("href","Software.html?vi=" + i + "&vj=" + j);
	$('div.icon').css("background-image","url("+menuItems[i][j].LogoHref+")")
	for(var s in softwares[i][j]){
		$('.select').append("<option value='"+s+"'>"+softwares[i][j][s].Name+"</option>");
	}
	vi=i;
	vj=j;
	Change(0);
}

function Change(value){
	if(value==="none"){
		return;
	}else{
		vl=parseInt(value);
		$('.des').html(softwares[vi][vj][vl].Description);
		$('.nme').html(softwares[vi][vj][vl].Name);
		$('.size').html(softwares[vi][vj][vl].Size);
		$('.vsn').html(softwares[vi][vj][vl].Version);
	}
}

function NextStep(){
	if($('.select').val()==="none"){
		alert("Please select one! ");
		return;
	}else{
		$('.one').hide();
		$('.two').show();
		$('.next-step').html("Finish");
		$('.next-step').attr("onclick","Close()");
		$('.lnks').empty();
		for(var s in softwares[vi][vj][vl].Files){
			$('.local').append("<a class='text' href='"+softwares[vi][vj][vl].Files[s].Path+"'>"+softwares[vi][vj][vl].Files[s].Name+"</a>");
		}
		for(var u in softwares[vi][vj][vl].ExternalHrefs){
			$('.ext').append("<a class='text' href='"+softwares[vi][vj][vl].ExternalHrefs[u].Path+"'>"+softwares[vi][vj][vl].ExternalHrefs[u].Name+"</a>");
		}
	}
}

function AdjustPosition(){
	$('.mask').css("height",window.innerHeight+"px");
	$('.mask').css("width",window.innerWidth+"px");
	var top=(parseFloat(window.innerHeight)-parseInt($('.download-section').css("height")))/2;
	$('.download-section').css("top",top+"px");
	var left=(parseFloat(window.innerWidth)-parseInt($('.download-section').css("width")))/2;
	$('.download-section').css("left",left+"px");
}
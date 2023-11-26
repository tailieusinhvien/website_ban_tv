 $(function(){
	 	khoisp = $('.nhieusp').isotope({
	  // options
	  itemSelector: '.motsp',
	  layoutMode: 'fitRows'
	});
	 	khoisp.imagesLoaded().progress( function() {
        khoisp.isotope('layout');
});
 	$('.tieude a').click(function() {
 		dulieu = $(this).data('sp');
 		khoisp.isotope({ filter: dulieu})
 		return false;
 	});
 	// hàm set độ cao theo div
 	// soluongdiv = $('.motmon').length;
 	// docao = soluong * $('.motmon').height();
 	// $('.noidungchitiet').css('height', docao);
 	new WOW().init();
 	jQuery('.slide').show().revolution({
 
    stopLoop: 'off',
    stopAfterLoops: -1,
    stopAtSlide: -1,
 
    /* ****************** */
    /* settings continued */
    /* ****************** */
 
});
})  

function testname()
{
	var regt=/^([A-Z]{1}[a-z]{1,10}\s){1,5}[A-Z]{1}[a-z]{1,10}$/;
	var name= document.getElementById("txtname").value;
	if(regt.test(name))
	{
		document.getElementById("er1").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er1").innerHTML="Error";
		return false;
	}
}
function testmail()
{
	var regt=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	var mail= document.getElementById("txtmail").value;
	if(regt.test(mail))
	{
		document.getElementById("er2").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er2").innerHTML="Error";
		return false;
	}
}
function testphone()
{
	var regt=/^[0][3,8,9,7,5][0-9]{8}$/;
	var phone= document.getElementById("txtphone").value;
	if(regt.test(phone))
	{
		document.getElementById("er3").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er3").innerHTML="Error";
		return false;
	}
}
function testaddress()
{
	var regt=/^([A-Za-z0-9](.[A-Za-z0-9]){0,3}){0,1}(([a-zA-Z0-9]{1,10}\s){1,5}[a-zA-Z0-9]{1,10}\s){1,4}([a-zA-Z0-9]{1,10}.){1,5}[a-zA-Z0-9]{1,10}$/;
	var address= document.getElementById("txtaddress").value;
	if(regt.test(address))
	{
		document.getElementById("er4").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er4").innerHTML="Error";
		return false;
	}
}
function testuser()
{
	var regt=/^[a-zA-Z0-9]{6,20}$/;
	var us= document.getElementById("user").value;
	if(regt.test(us))
	{
		document.getElementById("er5").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er5").innerHTML="Error";
		return false;
	}
}
function testpass()
{
	var regt=/^[a-zA-Z0-9]{4,8}$/;
	var pw= document.getElementById("pass").value;
	if(regt.test(pw))
	{
		document.getElementById("er6").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er6").innerHTML="Error";
		return false;
	}
}
function testrepass()
{
	var pw= document.getElementById("pass").value;
	var repw= document.getElementById("repass").value
	if(repw==pw)
	{
		document.getElementById("er7").innerHTML="";
		return true;
	}
	else
	{
		document.getElementById("er7").innerHTML="Error";
		return false;
	}
}

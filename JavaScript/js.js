var Photos = ["Images/Canvas_Background/research.jpg","Images/Canvas_Background/brand.jpg","Images/Canvas_Background/web_development.jpg","Images/Canvas_Background/business.jpg","Images/Canvas_Background/marketing.jpg"];

function next(){
	var este = $("div.services ul li.current");
	indx = este.index();
	
	if(este.is(":last-child")){
		var next = $("div.services ul li:first-child");
	}else{
		var next = este.next();
	}
	
	$("div.services-canvas").css("background-image", "url("+Photos[next.index()]+")");
	este.removeClass("current");
	next.addClass("current");
}


$(function(){
	
	//setTimeout(next(), 2000);
	
	$("div.services ul li").click(function(){
		indx = $(this).index();

		
		/*
		$("div.services-canvas").css("background-image", "url("+Photos[indx]+")");
		*/
		
		$("div.services-canvas img").removeClass("current");
		$("div.services-canvas img:eq("+indx+")").addClass("current");
		///
		
		$("div.services ul li").removeClass("current");
		$(this).addClass("current");
	});
});
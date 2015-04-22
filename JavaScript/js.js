var Photos = ["Images/Canvas_Background/research.jpg","Images/Canvas_Background/brand.jpg","Images/Canvas_Background/web_development.jpg","Images/Canvas_Background/business.jpg","Images/Canvas_Background/marketing.jpg"];

var Quotes = ["<span class='strong'>Build</span> <span class='center'>your Business on a Solid Rock Foundation</span>", "Get your brand <span class='strong'>moving</span>", "Refresh your <span class='strong'>online</span> <span class='right'>presence</span>", "Secure new <span class='strong'>streams of revenue</span>", "Increase your <span class='strong'>revenue</span> <span class='right'>year by year</span>"];

var timer;

function next(){
	var este = $("div.services ul li.current");
	indx = este.index();
	
	if(este.is(":last-child")){
		var nextt = $("div.services ul li:first-child");
	}else{
		var nextt = este.next();
	}
	
	$("div.services-canvas img").removeClass("current");
	$("div.services-canvas img:eq("+nextt.index()+")").addClass("current");
	$("div.services-canvas div.service-comment p").html(Quotes[nextt.index()]);
	este.removeClass("current");
	nextt.addClass("current");
	timer = setTimeout(next, 4000);
}

function stop(){
	clearTimeout(timer);
	timer = 0;
}


$(function(){
	
	next();
	
	$("div.services ul li").click(function(){
		stop();
		
		indx = $(this).index();
		
		$("div.services-canvas img").removeClass("current");
		$("div.services-canvas img:eq("+indx+")").addClass("current");
		
		$("div.services-canvas div.service-comment p").html(Quotes[indx]);
		///
		
		$("div.services ul li").removeClass("current");
		$(this).addClass("current");
	});
});
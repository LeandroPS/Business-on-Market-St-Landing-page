var Photos = ["../Images/Canvas_Background/research.jpg","Images/Canvas_Background/brand.jpg","Images/Canvas_Background/web_development.jpg","Images/Canvas_Background/business.jpg","Images/Canvas_Background/marketing.jpg"];

$(function(){
	$("div.services ul li").click(function(){
		indx = $(this).index();
		//alert(Photos[indx]);
		$("div.services-canvas").css("background-color", "green");
	});
});
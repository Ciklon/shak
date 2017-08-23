
// СЛАЙДЕР КОРЗИНА
$(document).ready(function(){

$('.js-slider').owlCarousel({
		nav: true,
		margin: 0,
		dots: false,
		navText: [ , ],
		items : 1
	});

});



$(document).ready(function() {


if ($('body > div').is('#pagepiling')) {
	$('#pagepiling').pagepiling({
		navigation: false
	});
}

if ($('body > div').is('#fullpage')) {
	$('#fullpage').fullpage({
		scrollOverflow: true
	});
}

});


$('.first-section').scroll(function(){
	var sss = $('.first-section').scrollTop();
	console.log(sss);
});







// $(function($) {
//     $("img.lazy").Lazy({
//     	// enableThrottle: false,
//     	threshold: 0 ,
//     	// effect: 'fadein'
//     });
// });



// $(document).ready(function() {
// 	$('#pagepiling').pagepiling({
// 		navigation: false,
// 		afterRender : function() {
//    	 $("img.lazyload").lazyload();
// 	}
// 	});
// });





$(function() {
    $("img.lazy").lazyload();
});
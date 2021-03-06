$(".link, .portfolio-button").click(function() {
	var anchor = $(this).attr("href");

	$(".link").removeClass("link-active")
	$(this).addClass("link-active");

    $('html, body').animate({ scrollTop: $(anchor).offset().top}, 1000);
    return false;

});

$(window).scroll(function () {

	var sections = $("section");
	var sectionOffset = sections.offset();
	var moved = $(window).scrollTop();
	var menuItems = $(".link");


// console.log(sections.eq(i));

	for( var i = 0; i < sections.length; i++){
		if(moved > 800 * (i + 1)) {
// if(moved > ($("section").get(1).offsetTop)) {
			$(".link").removeClass("link-active")

			var link = $(".link").get(i + 1);

			$(".page-number").text("0" + (i + 2) + " ");
			$(".page-title").text("/ " + $(sections)[i + 1].id);
			$(link).addClass("link-active");


		}else if (moved < 800) {
			var link = $(".link").get(0);
			$(".page-number").text("01 ");
			$(".page-title").text("/ " + $(sections)[0].id);
			$(".link").removeClass("link-active")
			
			$(link).addClass("link-active");
		}
	}
});

$('.link').on('blur', function () {

	$(".link").removeClass('link-active');

}).on('focus', function(){
  
	$(this).addClass('link-active');
});


	$( ".burger, .link" ).click(function() {
		$(".menu__container").toggleClass(function () {
			if ($(this).is(".closed")) {
				$(this).removeClass("closed");
				return "open";
			} else {
				$(this).removeClass("open");
				return "closed";
			}
		})
	});
let style = getComputedStyle(document.body);

function alignBody() {
	// $("body").css("width", "100%");
}

function smoothScroll(element) {
	const target = $(element.getAttribute("href"));

	$("html,body").animate(
		{
			scrollTop: target.offset().top,
		},
		800,
		"swing"
	);
}

function setHeaderState(element) {
	const header = $("header");

	if (window.scrollY > $(window).height() - 10) {
		header.css({
			opacity: 1,
			"background-color": style.getPropertyValue("--transparent-pastel-blue"),
		});
	} else if (window.scrollY > 10) {
		header.css({ opacity: 0 });
	} else {
		header.css({ "background-color": "#00000000", opacity: 1 });
	}
}

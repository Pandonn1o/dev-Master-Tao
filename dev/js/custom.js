const burger = document.querySelector(".hamburger");
burger.addEventListener("click", function () {
	burger.classList.toggle("is-active");
});

// slider
$(".first-screen-slider").slick({
	dots: true,
	infinite: true,
	appendArrows: ".first-screen-nav",
	responsive: [
		{
			breakpoint: 991,
			settings: {
				arrows: false,
			},
		},
	],
});

//upload-file

mobileOnlySlider("#advantages-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick",
			},
		],
	};

	$(".template-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	});

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
} // Mobile Only Slider

document.getElementById("fileInput").onchange = function () {
	//short name
	// document.getElementById('file-name').innerHTML = this.files[0].name;
	document.getElementById("file-name").innerHTML = this.value;
};

const checkButton = document.querySelectorAll('[type="checkbox"]');

checkButton.forEach((item, index) => {
	/*item.closest(".input-column").style.marginBottom = "-10px";*/
	index === 0 ? item.closest(".input-box").classList.add("pos-checkbox") : null;
});

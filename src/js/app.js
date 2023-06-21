jQuery(document).ready(function ($) {
	testWebPFunction();
	initAccordion();
	initMobileMenu();
	initReadMore();
	initScrollTo();
	if ($('.stages-slider').length > 0 || $('.reviews-slider').length > 0) {
		initSwiper();
	}
	if ($('.logos-slider').length > 0) {
		initSlick();
	}
});

function initMobileMenu() {
	const headerBurger = $('.header__burger');
	const headerMenu = $('.header__menu');
	const body = $('body');
	const headerMenuLink = $('.header__link');
	const headerBtnConsultation = $('.header .btn-full');
	const headerOverlay = $('.overlay');


	headerBurger.on('click', function () {
		headerBurger.toggleClass('active');
		headerMenu.toggleClass('active');
		body.toggleClass('lock');
	});

	headerOverlay.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerMenuLink.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerBtnConsultation.on('click', function(){
		console.log('test');
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});
}

function testWebPFunction() {
	//Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}

function initAccordion() {
let acc = document.getElementsByClassName("accordion__btn");
let i;

function openFirstAccordion() {
  if (window.innerWidth >= 1200 && acc.length > 0) {
    acc[0].classList.add("active");
    let panel = acc[0].nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

openFirstAccordion();

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let isActive = this.classList.contains("active");

    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      let panel = acc[j].nextElementSibling;
      panel.style.maxHeight = null;
    }

    if (!isActive) {
      this.classList.add("active");
      let panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

window.addEventListener("resize", openFirstAccordion);


}

function initSwiper(){

	let swiperStages = new Swiper('.stages-slider', {
		slidesPerView: 'auto',
		scrollbar:{
			el:'.swiper-scrollbar',
			draggable: true,
		},
		breakpoints:{
			320:{
				spaceBetween: 16,
				loop: false,
			},
			1200	:{
				spaceBetween: 24,
				loop: false,
			}
		}
	});

	let swiperReviews = new Swiper('.reviews-slider', {
		slidesPerView: 'auto',
		scrollbar:{
			el:'.swiper-scrollbar',
			draggable: true,
		},
		breakpoints:{
			320:{
				spaceBetween: 16,
				loop: false,
			},
			1200	:{
				spaceBetween: 24,
				loop: false,
			}
		}
	});
}

function initReadMore() {
	const more = $(".read-more");
 
	if (more) {
	  more.click(function (e) {
		 var currentMoreBtn = jQuery(this);
		 var contentHolder = currentMoreBtn.closest(".reviews-slide__inner");
		 var content = contentHolder.find(".content-inner");
		 var contentFull = contentHolder.find(".content-full");
		 var open = currentMoreBtn.hasClass('show');
 
		 if (open) {
			content.removeAttr("style");
			currentMoreBtn.removeClass('show');
		 } else {
			content.css("max-height", contentFull.height());
			currentMoreBtn.addClass('show');
		 }
	  });
 
	  $(".reviews-slide__inner").mouseleave(function () {
		 var currentContentHolder = jQuery(this);
		 var currentMoreBtn = currentContentHolder.find(".read-more");
 
		 if (currentMoreBtn.hasClass('show')) {
			currentContentHolder.find(".content-inner").removeAttr("style");
			currentMoreBtn.removeClass('show');
		 }
	  });
	}
}

function initSlick(){
	$('.logos-slider').slick({
		dots: false,
		arrows:false,
		autoplay: true,
		infinite: true,
		speed: 400,
		autoplaySpeed: 2000,
		variableWidth: true,
	 });
}

function initScrollTo() {
	$("a.scroll-to").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 700,
			easing: "swing"
		});
		return false;
	});
}


if ($('[data-fancybox=""]').length > 0) {
Fancybox.bind('[data-fancybox]', {
});  
}





let mybutton = document.getElementById("btn-up");
window.onscroll = function() {
		scrollFunction();
	 };
	 
function scrollFunction() {
		if (document.body.scrollTop > document.body.scrollHeight * 0.5 || document.documentElement.scrollTop > document.documentElement.scrollHeight * 0.5) {
		  mybutton.style.display = "block";
		} else {
		  mybutton.style.display = "none";
		}
	 }
	 
function topFunction() {
		if (document.documentElement.scrollTop || document.body.scrollTop) {
		  scrollToTop();
		}
	 }
	 
function scrollToTop() {
		const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
		if (currentScroll > 0) {
		  window.requestAnimationFrame(scrollToTop);
		  window.scrollTo(0, currentScroll - currentScroll / 24);
		}
	 }



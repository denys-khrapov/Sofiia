jQuery(document).ready(function ($) {
	testWebPFunction();
	initAccordion();
	initSwiper();
	initReadMore();
});

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
 

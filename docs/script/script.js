// 스크롤이벤트 (header)
function Topbar_Scroll() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#header").addClass("f-header");
    } else {
      $("#header").removeClass("f-header");
    }
  });
}
Topbar_Scroll();

// 슬라이딩 메뉴
var menuBtn = document.querySelector(".menu-btn");
var nav = document.querySelector("#sliding-menu");
var lineOne = document.querySelector("#sliding-menu .menu-btn .line--1");
var lineTwo = document.querySelector("#sliding-menu .menu-btn .line--2");
var lineThree = document.querySelector("#sliding-menu .menu-btn .line--3");
var link = document.querySelector("#sliding-menu .menu-box");
menuBtn.addEventListener("click", () => {
	nav.classList.toggle("nav-open");
	lineOne.classList.toggle("line-cross");
	lineTwo.classList.toggle("line-fade-out");
	lineThree.classList.toggle("line-cross");
	link.classList.toggle("fade-in");
});

// 아코디언 메뉴
function MenuBox1__init() {
	$(".menu-box ul > li").click(function () {
		let $this = $(this);

		$this.siblings(".active").find(" ul").stop().slideUp(300);
		$this.siblings(".active").removeClass("active");

		if ($this.hasClass("active")) {
			$this.find(" ul").stop().slideUp(300);
			$this.find(".active").removeClass("active");
			$this.removeClass("active");
		} else {
			$this.addClass("active");
			$this.find(" > ul").stop().slideDown(300);
		}
	});

	$(".menu-box-1 ul").click(function () {
		return false;
	});
}
MenuBox1__init();

// 배너 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".swiper-1", {
		slidesPerView: 1, // 개수

		loop: true, // 슬라이드 반복 재생 여부

		spaceBetween: 50, // 여백

		centeredSlides: true, // 센터모드

		autoplay: {
			// 자동 슬라이드
			delay: 7000, // 시간
			disableOnInteraction: false // 자동 재생
		},

		pagination: {
			// 호출
			el: ".swiper-pagination",
			clickable: true // 버튼 클릭
		}
	});
});

// 지금 베스트 25 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".swiper-2", {
		slidesPerView: 2, // 개수

		slidesPerGroup: 2, // 그룹으로 묶을 개수

		loop: false, // 슬라이드 반복 재생 여부

		spaceBetween: 10, // 여백

		centeredSlides: false, // 센터모드

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},

		breakpoints: {
			768: {
				slidesPerView: 3, // 개수

				slidesPerGroup: 3, // 그룹으로 묶을 개수
			},
			1024: {
				slidesPerView: 5, // 개수

				slidesPerGroup: 5 // 그룹으로 묶을 개수
			}
		}
	});
});

// 아멜리 처음세트
$(document).ready(function () {
	$(".tit-1").on("mouseenter", function () {
		$(".cont-img img.active").removeClass("active");
		$(".img-1").addClass("active");
	});

	$(".tit-2").on("mouseenter", function () {
		$(".cont-img img.active").removeClass("active");
		$(".img-2").addClass("active");
	});

	$(".tit-3").on("mouseenter", function () {
		$(".cont-img img.active").removeClass("active");
		$(".img-3").addClass("active");
	});

	$(".tit-4").on("mouseenter", function () {
		$(".cont-img img.active").removeClass("active");
		$(".img-4").addClass("active");
	});
});

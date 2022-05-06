/* header */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("header").css("backgroundColor", "#000000e6");
    } else {
      $("header").css("backgroundColor", "transparent");
    }
  });
});

/* top-btn scroll */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#top-btn").fadeIn();
    } else {
      $("#top-btn").fadeOut();
    }
  });

  $("#top-btn").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      200
    );
    return false;
  });
});
/* typeIt */
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".title")
    .pause(500)
    .go();
});

/* section1 slide */
var swiper = new Swiper(".intro", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* healing-slide */
var swiper = new Swiper(".healing-cont", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* nft-slide */
var swiper = new Swiper(".artplatform-slide", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 200,
  slidesPerView: "auto",
  loop: true,
  loopFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* menu-slide PC */
var swiper = new Swiper(".menu-slide", {
  slidesPerView: 4,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* menu-slide mobile */
var swiper = new Swiper(".menu-mobile", {
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* section3-popup */
const modals = document.getElementsByClassName("popup-wrap");
const btns = document.getElementsByClassName("image-grid__item");
const spanes = document.getElementsByClassName("popup-btn");
const funcs = [];

function Modal(num) {
  return function () {
    btns[num].onclick = function () {
      modals[num].style.display = "block";
      console.log(num);
    };
    spanes[num].onclick = function () {
      modals[num].style.display = "none";
      console.log(num);
    };
  };
};

for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수 호출
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}

// Modal 영역 밖을 클릭하면 Modal close
window.onclick = function (event) {
  if (event.target.className == "popup-wrap") {
    event.target.style.display = "none";
  }
};

/* healing PC */
function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".healing-slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();
document.addEventListener("DOMContentLoaded", function () {
  let heroSplide = new Splide("#hero-splide", {
    type: "loop",
    cover: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: false,
    rewind: true,
    width: "100vw",
  });

  let arivalsSplide = new Splide("#arivals-splide", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    pagination: false,
    autoplay: true,
    interval: 5000,
    rewind: true,
    gap: "20px",
    classes: {
      pagination: "arivals-splide__pagination",
      page: "splide__pagination__page arivals-splide__pagination__page",
    },
    breakpoints: {
      767: {
        perPage: 1,
        arrows: false,
        pagination: true,
      },
      1320: {
        perPage: 3,
        gap: "15px",
      },
    },
  });

  let partnersSplide = new Splide("#partners-splide", {
    type: "loop",
    perPage: 9,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    gap: "20px",
    pagination: false,
    rewind: true,
    breakpoints: {
      767: {
        perPage: 2,
        gap: "20px",
        arrows: false,
        pagination: true,
      },
      1320: {
        perPage: 6,
        gap: "10px",
      },
    },
  });

  partnersSplide.mount();
  arivalsSplide.mount();
  heroSplide.mount();
});

let burger = document.querySelector(".menu");
let navList = document.querySelector(".header-nav__list");

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

burger.addEventListener("click", openNav);

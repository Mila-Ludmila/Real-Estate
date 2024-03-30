const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

//  ТАБИ

const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActive = null;
  let newActive = null;
  if (targetElement.closest(".tabs-deals__button")) {
    console.log("click");
    tabNavItems.forEach((tabNavItems, index) => {
      if (tabNavItems.classList.contains("active")) {
        currentActive = index;
        tabNavItems.classList.remove("active");
      }
      if (tabNavItems === targetElement) {
        newActive = index;
      }
    });
    targetElement.classList.add("active");
    tabItems[currentActive].classList.remove("active");
    tabItems[newActive].classList.add("active");
  }
});

// Third/-companies Slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.25,
      spaceBetween: 17
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 17
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 17
    },
  }
});
// second slider

 /* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
    console.log(
      'slideChange',
      swiper.previousIndex,
      '->',
      swiper.activeIndex
    );
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });
}

// Init Swiper
var swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 17
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 17
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 17
    },
  },
  // Enable debugger
  // debugger: true,
});
// First Slider
var swiper = new Swiper('.mySwiper1', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5
    },
  },
  // Enable debugger
  // debugger: true,
});




// =============================================
// var swiper = new Swiper(".mySwiper1", {
//   slidesPerView: 1,
//   spaceBetween: 5,

//   hashNavigation: {
//     watchState: true,
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: "#swiper-button-next-1",
//     prevEl: "#swiper-button-prev-1",
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 5
//     },
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 5
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 5,
//       clickable: false
//     },
//   }
// });





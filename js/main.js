document.addEventListener("DOMContentLoaded", () => {
  // === Review Swiper (основной слайдер отзывов) ===
  const reviewSwiper = new Swiper(".review__slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".review__arrow--next",
      prevEl: ".review__arrow--prev",
    },
    breakpoints: {
      0: { 
        slidesPerView: 1.1,
        spaceBetween: 12
      },
      768: { 
        slidesPerView: 2,
        spaceBetween: 16
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
  });

  // === Specialists Swiper ===
  const specialistsSwiper = new Swiper(".specialists__slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".specialists__arrow--next",
      prevEl: ".specialists__arrow--prev",
    },
    breakpoints: {
      0: { 
        slidesPerView: 1,
        spaceBetween: 12
      },
      768: { 
        slidesPerView: 1,
        spaceBetween: 16
      },
      1024: { 
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      1200: { 
        slidesPerView: 1,
        spaceBetween: 20
      },
    },
  });
// === Article Swiper (использует те же настройки что и review) ===
const articleSwiper = new Swiper(".article__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".article__arrow--next",
    prevEl: ".article__arrow--prev",
  },
  breakpoints: {
    0: { 
      slidesPerView: 1.1,
      spaceBetween: 12
    },
    768: { 
      slidesPerView: 2,
      spaceBetween: 16
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
});

// === Article Swiper (использует те же настройки что и review) ===
const aricleSmall = new Swiper(".article-small__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  breakpoints: {
    0: { 
      slidesPerView: 1.1,
      spaceBetween: 12
    },
    768: { 
      slidesPerView: 2,
      spaceBetween: 16
    },
    1024: { 
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});
  // === SUIT CARD SLIDER (адаптивный для мобильных) ===
  let suitSlider;

  function initSuitSlider() {
    const breakpoint = window.matchMedia("(max-width: 1200px)");
    const suitList = document.querySelector(".suit__card-list");

    if (!suitList) return; // Если элемента нет - выходим

    const enableSlider = () => {
      if (!suitList.classList.contains("swiper-initialized")) {
        suitList.classList.add("swiper");
        suitList.classList.add("suit__card-slider");
        suitList.innerHTML = `
          <div class="swiper-wrapper">
            ${[...suitList.querySelectorAll(".suit__card-list-item")]
              .map(item => `<div class="swiper-slide">${item.outerHTML}</div>`)
              .join("")}
          </div>
        `;

        suitSlider = new Swiper(".suit__card-slider", {
          slidesPerView: 1.2,
          spaceBetween: 10,
          grabCursor: true,
          breakpoints: {
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          },
        });
      }
    };

    const disableSlider = () => {
      if (suitSlider) {
        suitSlider.destroy(true, true);
        suitSlider = null;

        // возвращаем HTML в исходный вид
        suitList.innerHTML = `
          ${[...suitList.querySelectorAll(".swiper-slide")]
            .map(slide => slide.innerHTML)
            .join("")}
        `;
        suitList.classList.remove("swiper", "suit__card-slider", "swiper-initialized");
      }
    };

    const checkBreakpoint = () => {
      if (breakpoint.matches) {
        enableSlider();
      } else {
        disableSlider();
      }
    };

    breakpoint.addEventListener("change", checkBreakpoint);
    checkBreakpoint();
  }

  initSuitSlider();

  // === FAQ Accordion ===
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const toggle = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("open");

      if (isOpen) {
        answer.classList.remove("open");
        toggle.classList.remove("active");
      } else {
        answer.classList.add("open");
        toggle.classList.add("active");
      }
    });
  });

  // === BURGER MENU ===
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const closeBtn = document.querySelector(".header__menu-close");
  const body = document.body;

  function closeMenu() {
    menu.classList.remove("active");
    burger.classList.remove("active");
    body.classList.remove("no-scroll");
  }

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  }

  // Закрытие по кнопке крестика
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Закрытие по клавише Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
    }
  });
});


const toggleButton = document.getElementById('toggleFilters');
const filterPanel = document.getElementById('filterPanel');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeFilters');

// Проверяем наличие элементов перед добавлением обработчиков
if (toggleButton && filterPanel && overlay && closeButton) {
  // Открыть/закрыть панель
  function toggleFilterPanel() {
    filterPanel.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  // Закрыть по клику на оверлей
  overlay.addEventListener('click', toggleFilterPanel);

  // Закрыть по клику на кнопку "Закрыть"
  closeButton.addEventListener('click', toggleFilterPanel);

  // Открыть по клику на кнопку "Фильтры"
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleFilterPanel);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Открытие попапа по клику на триггер
  document.querySelectorAll('.specialist__popup-trigger').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const imgSrc = this.dataset.src;
      const popup = document.getElementById('specialistPopup');
      const popupImg = document.getElementById('specialistPopupImg');
      
      // Только открываем, если есть валидный src
      if (popup && popupImg && imgSrc) {
        popupImg.src = imgSrc;
        popup.classList.add('active');
      }
    });
  });

  // Функция закрытия
  function closePopup() {
    const popup = document.getElementById('specialistPopup');
    const popupImg = document.getElementById('specialistPopupImg');
    
    if (popup) {
      popup.classList.remove('active');
    }
    if (popupImg) {
      popupImg.src = '';
    }
  }

  // Закрытие через крестик
  const closeBtn = document.getElementById('closeSpecialistPopup');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closePopup();
    });
  }

  // Закрытие по клику на затемнённый фон (оверлей)
  const popup = document.getElementById('specialistPopup');
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === this) {
        closePopup();
      }
    });
  }

  // Закрытие по клавише Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      const popup = document.getElementById('specialistPopup');
      if (popup && popup.classList.contains('active')) {
        closePopup();
      }
    }
  });

});

 // Функция для определения размера экрана
 function getScreenSize() {
    return window.innerWidth > 768 ? 'desktop' : 'mobile';
  }

  // Функция для динамической загрузки изображения
  function loadDynamicImage() {
    var screenSize = getScreenSize();
    var imageElement = document.getElementById('dynamicImage');

    if (screenSize === 'desktop') {
      imageElement.src = 'img/hoody.gif';
    } else {
      imageElement.src = 'img/hoody_mob.gif';
    }
  }

  // Вызываем функцию при полной загрузке DOM
  document.addEventListener('DOMContentLoaded', loadDynamicImage);

  // Вызываем функцию при изменении размера окна
  window.onresize = loadDynamicImage;
window.onload = function () {
  // Скрываем прелоадер
  $('#loading-bar-container').fadeOut('slow', function () {
      // Показываем основное содержимое
      $('#content').fadeIn('slow');
      
      // Функция анимации SVG - 1
      function animateSVG1() {
          var paths1 = document.querySelectorAll('#word_anim path, #word_anim mask path');

          paths1.forEach(function (path, index) {
              var length = path.getTotalLength();

              gsap.set(path, {
                  strokeDasharray: length,
                  strokeDashoffset: length,
                  fill: 'unset'
              });

              gsap.fromTo(path, { strokeDashoffset: length, fill: 'none' }, {
                  strokeDashoffset: 0,
                  fill: '#fff',
                  duration: 1,
                  ease: "power2.inOut",
                  delay: 0.05 * index
              });
          });
      }

      // Функция анимации SVG - 2
      function animateSVG2() {
          var paths2 = document.querySelectorAll('#word_anim3 path, #word_anim3 mask path');

          paths2.forEach(function (path, index) {
              var length = path.getTotalLength();

              gsap.set(path, {
                  strokeDasharray: length,
                  strokeDashoffset: length
              });

              gsap.fromTo(path, { strokeDashoffset: length }, {
                  strokeDashoffset: 0,
                  duration: 1.2,
                  ease: "power2.inOut",
                  delay: 0.2 * index
              });
          });
      }

      // Функция анимации мерцания
      function flicker() {
          gsap.to('.blik', {
              keyframes: [
                  { opacity: 1, duration: 0.1 },
                  { opacity: 0, duration: 0.15 },
                  { opacity: 1, duration: 0.1 },
                  { opacity: 0.7, duration: 0.2 },
                  { opacity: 1, duration: 0.1 },
                  { opacity: 0, duration: 0.1 },
                  { opacity: 1, duration: 2 }
              ],
              onComplete: function () {
                  gsap.to('.blik', { opacity: 1, duration: 0, onComplete: flicker });
              }
          });
      }

      // Запускаем анимацию SVG - 1 после 5 секунд
      setTimeout(function () {
          animateSVG1();
      }, 4000);

      // Запускаем анимацию SVG - 2 после 7 секунд
      setTimeout(function () {
          animateSVG2();
      }, 6000);

      // Устанавливаем начальное значение opacity в 0
      gsap.set('.blik', { visibility: 'visible', opacity: 0 });

      // Запускаем анимацию мерцания после 6.8 секунд
      setTimeout(flicker, 6000);
  });
};  


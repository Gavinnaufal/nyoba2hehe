let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/* teks animasi yang setelah saya*/
const texts = ["Gavin ", "Siswa ", "Programmer ", "Desainer ", "Pelajar "];
    const textElement = document.getElementById("dynamic-text");
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {
      const fullText = texts[index];

      if (isDeleting) {
        currentText = fullText.substring(0, charIndex--);
      } else {
        currentText = fullText.substring(0, charIndex++);
      }

      textElement.textContent = currentText;

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 1000); // Pause before typing next word
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }

    function ensureLastCharVisible() {
      const lastChar = texts[index].slice(-1);
      if (!isDeleting && textElement.textContent.slice(-1) !== lastChar) {
        textElement.textContent = texts[index];
      }
    }

    // Start the typing animation
    typeEffect();
    setInterval(ensureLastCharVisible, 100);
// swipe
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30, 
      loop: true,
      grabCursor: 'true',
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0: {
          slidesPerView: 1, 
        },
        520: {
          slidesPerView: 2, 
        },
        950: {
          slidesPerView: 3, 
        },
      },
    });
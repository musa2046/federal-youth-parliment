// Toggle mobile menu
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
//  for hero slide show
  const slides = document.querySelectorAll("#slideshow img");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("opacity-100");
    slides[index].classList.add("opacity-0");

    index = (index + 1) % slides.length;

    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");
  }, 3000);

  // for news section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
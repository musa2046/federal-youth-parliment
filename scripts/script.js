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
  }, 3000); // 5 seconds per slide
// Toggle mobile menu
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
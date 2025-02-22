const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const backToTopButton = document.getElementById("backToTopBtn"); // Assuming backToTopBtn is the correct ID
let lastScrollTop = 0;

// Toggle the menu on click
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  menuIcon.style.display = navLinks.classList.contains("nav-open") ? "none" : "block";
});

// Throttle function for scroll event to improve performance
function throttle(func, delay) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func();
  };
}

// Scroll event handler
function onScroll() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Handle navbar visibility and menu icon display based on scroll direction
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("nav-hidden");
    menuIcon.style.display = "block"; // Show menu icon on scroll down
  } else {
    navbar.classList.remove("nav-hidden");
    menuIcon.style.display = "none"; // Hide menu icon on scroll up
  }

  // Show or hide the back-to-top button based on scroll position
  backToTopButton.style.display = scrollTop > 200 ? "block" : "none";

  lastScrollTop = scrollTop;
}

// Apply throttling to the scroll event handler
window.addEventListener("scroll", throttle(onScroll, 100));

// Scroll smoothly to the top when the back-to-top button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

import "./imageSlider.css";

const sliderContainer = document.querySelector(".slider-container");
const sliderImages = document.querySelectorAll(".slider-image");
const sliderBtnLeft = document.querySelector(".slider-btn.arrow-left");
const sliderBtnRight = document.querySelector(".slider-btn.arrow-right");

let currentSlide = 0;

sliderImages.forEach((image, index) => {
  if (index !== 0) image.style.display = "none";
});

function displayNextSlide() {
  sliderImages[currentSlide].style.display = "none";

  currentSlide += 1;

  if (currentSlide == sliderImages.length) currentSlide = 0;

  sliderImages[currentSlide].style.display = "flex";
}

function displayPreviousSlide() {
  sliderImages[currentSlide].style.display = "none";

  if (currentSlide == 0) currentSlide = sliderImages.length;

  currentSlide -= 1;

  sliderImages[currentSlide].style.display = "flex";
}

sliderBtnLeft.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  displayPreviousSlide();
  autoSlideInterval = startAutoSlide(); // Restart auto-slide
});

sliderBtnRight.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  displayNextSlide();
  autoSlideInterval = startAutoSlide(); // Restart auto-slide
});

const sliderNav = document.createElement("div");
sliderNav.classList.add("slider-nav");

createSliderNavigation();

sliderContainer.append(sliderNav);

function createSliderNavigation() {
  for (let i = 0; i < sliderImages.length; i++) {
    const sliderNavItem = document.createElement("div");
    sliderNavItem.classList.add("slider-nav-item");
    sliderNavItem.setAttribute("slide-index", i);
    sliderNav.append(sliderNavItem);

    sliderNavItem.addEventListener("click", (event) => {
      clearInterval(autoSlideInterval); // Stop auto-slide on manual navigation
      navigateToSlide(event);
      autoSlideInterval = startAutoSlide(); // Restart auto-slide
    });
  }
}

function navigateToSlide(event) {
  const index = parseInt(event.target.getAttribute("slide-index"));
  sliderImages[currentSlide].style.display = "none";

  currentSlide = index;

  sliderImages[currentSlide].style.display = "flex";
}

// Auto-slide function that loops every 5 seconds
function startAutoSlide() {
  return setInterval(displayNextSlide, 5000);
}

// Start auto-slide on load
let autoSlideInterval = startAutoSlide();

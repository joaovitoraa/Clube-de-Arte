const slider = document.getElementById('slider');
const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slider.children.length;

const updateSlider = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  progress.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
};
prevButton.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex =
    currentIndex < totalSlides - 1 ? currentIndex + 1 : totalSlides - 1;
  updateSlider();
});

// Initialize progress bar
updateSlider();

// // scroll suave //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

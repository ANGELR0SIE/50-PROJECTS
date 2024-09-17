const bannerWrapper = document.querySelector('.banner-wrapper');
const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let index = 0;
const slideWidth = slides[0].clientWidth;  // Get the width of one slide

// Clone the first and last slides to make the scrolling seamless
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);
banner.appendChild(firstSlide);
banner.insertBefore(lastSlide, slides[0]);

// Update bannerWrapper width to accommodate all slides
banner.style.width = `${(slides.length + 2) * slideWidth}px`;
bannerWrapper.scrollLeft = slideWidth; // Start with the first slide visible

// Button functionality to scroll to next/previous slides
nextButton.addEventListener('click', () => {
  scrollNext();
});

prevButton.addEventListener('click', () => {
  scrollPrev();
});

function scrollNext() {
  if (index >= slides.length) {
    bannerWrapper.scrollLeft = slideWidth; // Reset to start
    index = 1;
  } else {
    index++;
    bannerWrapper.scrollLeft = index * slideWidth;
  }
}

function scrollPrev() {
  if (index <= 0) {
    bannerWrapper.scrollLeft = bannerWrapper.scrollWidth - (2 * slideWidth); // Move to last
    index = slides.length - 1;
  } else {
    index--;
    bannerWrapper.scrollLeft = index * slideWidth;
  }
}

// Automatic slide when scrolling manually
let isDragging = false;
let startX;
let scrollLeft;

// Drag to scroll functionality
bannerWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - bannerWrapper.offsetLeft;
  scrollLeft = bannerWrapper.scrollLeft;
});

bannerWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
});

bannerWrapper.addEventListener('mouseup', () => {
  isDragging = false;
});

bannerWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - bannerWrapper.offsetLeft;
  const walk = (x - startX) * 2;  // Scroll speed
  bannerWrapper.scrollLeft = scrollLeft - walk;
});

// Smooth scroll to the next slide
bannerWrapper.addEventListener('scroll', () => {
  index = Math.round(bannerWrapper.scrollLeft / slideWidth);
  if (index >= slides.length + 1) {
    index = 1;
    bannerWrapper.style.transition = "none";
    bannerWrapper.scrollLeft = slideWidth;
    setTimeout(() => {
      bannerWrapper.style.transition = "transform 0.5s ease";
    }, 0);
  } else if (index <= 0) {
    index = slides.length - 1;
    bannerWrapper.style.transition = "none";
    bannerWrapper.scrollLeft = bannerWrapper.scrollWidth - (2 * slideWidth);
    setTimeout(() => {
      bannerWrapper.style.transition = "transform 0.5s ease";
    }, 0);
  }
});

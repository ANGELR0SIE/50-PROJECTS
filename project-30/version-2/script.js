const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.slide');

// Clone the first and last slides for smooth transition
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

// Append the first clone to the end and prepend the last clone to the beginning
banner.appendChild(firstSlide);
banner.insertBefore(lastSlide, slides[0]);

// Adjust starting point
let index = 1;
banner.style.transform = `translateX(-${index * 100}%)`;

// Automatic sliding function
function startAutoSlide() {
  setInterval(() => {
    index++;
    banner.style.transition = "transform 0.5s ease";
    banner.style.transform = `translateX(-${index * 100}%)`;

    // Reset the position when reaching the cloned first slide (Ad 1 after Ad 4)
    banner.addEventListener('transitionend', () => {
      if (index === slides.length + 1) {
        index = 1;
        banner.style.transition = "none";
        banner.style.transform = `translateX(-${index * 100}%)`;
      }
    });
  }, 3000); // Set to 3 seconds per slide; you can adjust this time
}

// Start the automatic slide
startAutoSlide();

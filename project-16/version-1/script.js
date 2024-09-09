const glasses = document.querySelectorAll(".glass");

function toggleGlassRating(clickedIndex) {
    // Determine if we need to toggle on or off
    const allActive = Array.from(glasses).every(glass => glass.classList.contains('active'));
    
    // If all elements are active or the clicked element is active, remove 'active' class from all
    if (allActive || glasses[clickedIndex].classList.contains('active')) {
        glasses.forEach(glass => glass.classList.remove('active'));
    } else {
        // Add 'active' class to clicked element and all previous elements
        glasses.forEach((glass, index) => {
            if (index <= clickedIndex) {
                glass.classList.add('active');
            }
        });
    }
}

glasses.forEach((element, index) => {
    element.addEventListener('click', () => {
        toggleGlassRating(index);
    });
});

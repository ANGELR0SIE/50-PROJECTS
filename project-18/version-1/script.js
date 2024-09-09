const slide = document.querySelectorAll(".slide");
const container = document.querySelector(".slider-container");
const right = document.querySelector(".right-arrow");
const left = document.querySelector(".left-arrow");
let currentActiveDiv = 0;

right.addEventListener("click", incrementfun);

left.addEventListener("click", decrementfun);

function incrementfun() {
    if (currentActiveDiv < slide.length - 1) {
        currentActiveDiv++;
    } else {
        currentActiveDiv = 0;
    }
    
    slide.forEach((div) => {
        div.classList.remove('active');
    });

    const k = slide[currentActiveDiv];
    k.classList.add('active');
    console.log(k);

    const style = window.getComputedStyle(k);
    const backgroundImage = style.backgroundImage;
    container.style.backgroundImage = backgroundImage;
}

function decrementfun() {
    // if (currentActiveDiv > 0) {
    //     currentActiveDiv--;
    // } else {
    //     currentActiveDiv = 0;
    // }
    currentActiveDiv--;
    slide.forEach((div) => {
        div.classList.remove('active');
    });

    const k = slide[currentActiveDiv];
    k.classList.add('active');
    console.log(k);

    const style = window.getComputedStyle(k);
    const backgroundImage = style.backgroundImage;
    container.style.backgroundImage = backgroundImage;
}

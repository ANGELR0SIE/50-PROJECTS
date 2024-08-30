const splits = document.querySelectorAll('.split');
splits.forEach((side) => {
    side.addEventListener('click',addActive);
});

function addActive(){
        removeActive()
        event.currentTarget.classList.add('active');
}

function removeActive(){
    splits.forEach((side) => {
        side.classList.remove('active')
    }); 
}
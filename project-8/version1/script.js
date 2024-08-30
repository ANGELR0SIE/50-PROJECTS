const input = document.querySelectorAll('.form-control');
console.log(input);

input.forEach(item => {
    item.addEventListener('click', () => {
        removeClass(); 
        item.classList.add('hidden');
    });
});

function removeClass() {
    input.forEach(item => item.classList.remove('hidden'));
}


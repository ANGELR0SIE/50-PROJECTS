

const text = document.querySelector('.container');
const choices = document.querySelector('.choices');
const array = []; 

text.addEventListener('input', read);

function read() {
    const input = text.value;
    console.log(input)
    if (input.includes(',')) {
        const values = input.split(',').filter(Boolean); 
        array.push(values)
        choices.innerHTML = array.map(item => `<span>${item}</span>`).join('');
        text.value = '';
    } else {
        console.log(array); 
    }
}

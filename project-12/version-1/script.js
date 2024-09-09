const button1=document.querySelectorAll(".open-btn");
button1.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.parentNode.classList.add('selected')
    })
})

const button2=document.querySelectorAll(".close-btn");
button2.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.parentNode.classList.remove('selected')
    })
})
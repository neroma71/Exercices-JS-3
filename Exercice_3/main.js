let green = document.querySelector('.green');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let text = document.querySelector('p');

green.addEventListener('click', ()=>{
    text.style.color ="green";
})
red.addEventListener('click', ()=>{
    text.style.color ="red";
})
blue.addEventListener('click', ()=>{
    text.style.color ="blue";
})
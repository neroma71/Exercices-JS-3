let text = document.querySelector('p');

let link1 = document.querySelector('#afficher');
let link2 = document.querySelector('#masquer');

link1.addEventListener('click', ()=>{
    text.style.display = "block";
});
link2.addEventListener('click', ()=>{
    text.style.display = "none";
});

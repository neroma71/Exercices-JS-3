let pic = document.querySelector('#image1');

pic.addEventListener('mouseenter', ()=>{
    pic.classList.add('bdr');
})
pic.addEventListener('mouseleave', ()=>{
    pic.classList.remove('bdr');
})
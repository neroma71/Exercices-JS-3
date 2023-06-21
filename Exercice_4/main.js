let psw = document.querySelector('#password');
let cfpsw = document.querySelector('#confirmPassword');
let sub = document.querySelector('button');

sub.addEventListener('click', changeBorder);

function changeBorder(){
    if(psw.value != cfpsw.value){
        psw.style.borderColor = "red";
        cfpsw.style.borderColor = "red";
    }
    else{
        psw.style.borderColor = "green";
        cfpsw.style.borderColor = "green";
    }
}

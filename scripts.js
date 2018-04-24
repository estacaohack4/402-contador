let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');

document.querySelector('#div1 button').onclick = function(){
    new Contador(div1);
}

document.querySelector('#div2 button').onclick = function(){
    new Contador(div2);
}

green.addEventListener('click', verde);
yellow.addEventListener('click', amarelo);
red.addEventListener('click', vermelho);

const auto = document.getElementById('none');
var sa
auto.onclick = () => {
    sa = setInterval(sas, 2000)
}

var a

function verde () {
    imag.src = "/imgs/verde.png";
    a = 2
    clearInterval(sa) 
}

function amarelo () {
    imag.src = "/imgs/amarelo.png";
    a = 3
    clearInterval(sa)
}

function vermelho () {
    imag.src = "/imgs/vermelho.png";
    a = 1
    clearInterval(sa)
}



function sas() {

    if (a == 1) {
        imag.src = "/imgs/verde.png"
        a++
    }
    else
    if (a == 2) {
        a++
        imag.src = "/imgs/amarelo.png"
    }
    else
    if (a == 3) {
        imag.src = "/imgs/vermelho.png"
        a = 1
        
    }


}
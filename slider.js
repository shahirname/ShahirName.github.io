var Imagenes = [
    "Images/mini Yao.JPG",
    "Images/My_Mates (1).jpg",
    "Images/My_Mates (2).jpg",
    "Images/My_Mates (3).jpg",
    "Images/My_Mates (4).jpg",
    "Images/My_Mates (5).jpg",
    "Images/Draw.jpg"
];

document.Imagen.src = Imagenes[0];

var contador = 0;
//var SliderDerecha = document.querySelector(".icono-derecho");
//var SliderIzquierda = document.querySelector(".icono-izquierdo");

function moverDerecha(){
    
    contador ++;
    
    if(contador > Imagenes.length - 1){
        contador = 0;
    }

    document.Imagen.src = Imagenes[contador];
}

function moverIzquierda(){
    
    contador --;

    if(contador < 0 ){
        contador = Imagenes.length - 1;
    }

    document.Imagen.src = Imagenes[contador];

}

var intervalo = setInterval(moverDerecha, 2500);

function derechaIntervalo(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 2500);    
}

function izquierdaIntervalo(){
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverDerecha, 2500);    
}

//SliderDerecha.addEventListener("click", derechaIntervalo);
//SliderIzquierda.addEventListener("click", izquierdaIntervalo);

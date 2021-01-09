"use strict"

var rondas = 0;
var aciertos = 0;
var verdadera = 0;


function iniciar(){
    nuevaRonda();
}

function nuevaRonda(){
    rondas++;
    var imgR = Math.floor((Math.random() * 27) + 1);
    var imgF = Math.floor((Math.random() * 30) + 1);

    verdadera = Math.floor((Math.random() * 2) + 1);
    var izquierda = document.createElement("IMG");
    var derecha = document.createElement("IMG");     
     

    if(verdadera == 1){
        izquierda.src = "../images/fotos/r" + imgR + ".jpg";
        izquierda.style.width = "500px";
        izquierda.style.height = "500px";

        derecha.src = "../images/fotos/f" + imgF + ".jpg";
        derecha.style.width = "500px";
        derecha.style.height = "500px";
    }

    else{
        izquierda.src = "../images/fotos/f" + imgF + ".jpg";
        izquierda.style.width = "500px";
        izquierda.style.height = "500px";

        derecha.src = "../images/fotos/r" + imgR + ".jpg";
        derecha.style.width = "500px";
        derecha.style.height = "500px";
    }

    if(rondas > 1){
        document.getElementById('1').removeChild(document.getElementById('1').firstChild);
        document.getElementById('2').removeChild(document.getElementById('2').firstChild);
    }
    document.getElementById('1').appendChild(izquierda);
    document.getElementById('2').appendChild(derecha);
}

function comprobacion(id){
    if(id == verdadera){
        aciertos++;
        document.getElementById("aciertos").innerHTML = "SI";
    }
    else{
        document.getElementById("aciertos").innerHTML = "NO";
    }

    nuevaRonda();
}
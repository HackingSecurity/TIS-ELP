import('./constantesIteracion.js')

class Iteracion{

    //COnstructor
    constructor(){
        //this.siguienteNivel = this.siguienteNivel.bind(this)
        this.inicializar()
        this.generarFotos()
        this.agregarEventosClick()
    }


    inicializar(){
        this.comprobarEleccion = this.comprobarEleccion.bind(this)
        this.generarFotos = this.generarFotos.bind(this)
        let correctas = null
        let incorrectas =  null
        let aleatorioGenerado = 0
        let orden = false;
        let verdadera = null
    }

    generarFotos(){

        console.log(this.correctas)

        if(this.correctas == null){
            this.correctas = 0
            this.incorrectas = 0
        }

        this.aleatorioGenerado = Math.floor((Math.random() * 27) + 1)
        const img = ".jpg"
        left.setAttribute('data-lado', 'left')
        right.setAttribute('data-lado', 'right')

        if(this.orden){
            this.verdadera = "right"
            left.src = srcFotoIA + this.aleatorioGenerado + img
            right.src = srcFotoReales + this.aleatorioGenerado + img
            this.orden = false
        }else{
            this.verdadera = "left"
            left.src = srcFotoReales + this.aleatorioGenerado + img
            right.src = srcFotoIA + this.aleatorioGenerado + img
            this.orden = true
        }
    }

    comprobarEleccion(ev){
        //comprobamos el estatus de la data-lado 
        var data_lado = String(ev.target.dataset.lado)
        var comprobacion = String(this.verdadera)

        console.log(this.verdadera)
        console.log(data_lado)
        //console.log(this.aleatorioGenerado)
        // console.log(this.correctas)
        // var nuevo = String(this.correctas)
        

        if(comprobacion == data_lado){
            this.correctas++
            console.log("Acertado " + this.correctas)
            if((comprobacion == data_lado) && (data_lado == "left")){
                left.src = srcFotoCorrecta
            }else if((comprobacion == data_lado) && (data_lado == "right")){
                right.src = srcFotoCorrecta
            }

            setTimeout(this.generarFotos, 300)

            // this.generarFotos()

        }else{
            if((comprobacion != data_lado) && (data_lado == "left")){
                left.src = srcFotoIncorrecta
            }else if((comprobacion != data_lado) && (data_lado == "right")){
                right.src = srcFotoIncorrecta
            }

            this.incorrectas++
            setTimeout(this.generarFotos, 300)
        }

        if(this.incorrectas > 2){
            window.location.href = "../ayuda.html";
        }else if(this.incorrectas + this.correctas > 9){
            window.location.href = "../ayuda.html";
        }
    }

    incrementar(){
        console.log(this.correctas)
    }

    agregarEventosClick(){

        left.addEventListener('click', this.comprobarEleccion) //.bind(_this))
        right.addEventListener('click', this.comprobarEleccion)
    }


}

//Creamos la clase donde está el meollo

function empezarIteracion() {
    iteracion = new Iteracion()
    btn.classList.add('hide')
}

//Precarga de nuestra programa

function preIteracion(){
    cargarImagen()
    agregarElementoImg()
}

function cargarImagen(){
    left.src = srcIniImg
    right.src = srcIniImg
}

function agregarElementoImg(){
    document.getElementById('left').appendChild(left)
    document.getElementById('right').appendChild(right)
}
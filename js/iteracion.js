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
        let verdadera = null
        let imgR = null
        let imgF = null

    }

    generarFotos(){
        if(this.correctas == null){
            this.correctas = 0
            this.incorrectas = 0
        }
        const img = ".jpg"

        left.setAttribute('data-verdadera', '1')
        right.setAttribute('data-verdadera', '2')

        this.imgR = Math.floor((Math.random() * 27) + 1)
        this.imgF = Math.floor((Math.random() * 30) + 1)


        //Se decide aleatoriamente en que posición va a estar la imagen real:
        this.verdadera = Math.floor((Math.random() * 2) + 1)

        if(this.verdadera == 1){
            left.src = srcFotoReales + this.imgR + img
            right.src = srcFotoIA + this.imgF + img
        }
        else{
            left.src = srcFotoIA + this.imgF + img
            right.src = srcFotoReales + this.imgR + img
        }

    }

    comprobarEleccion(ev){
        //comprobamos el estatus de la data-lado
        var data_lado = (ev.target.dataset.verdadera)
        var comprobacion = String(this.verdadera)

        console.log(this.verdadera)
        console.log(data_lado)

        //console.log(this.aleatorioGenerado)
        // console.log(this.correctas)
        // var nuevo = String(this.correctas)

        if(comprobacion == data_lado){
            this.correctas++
            if((comprobacion == data_lado) && (comprobacion == "1")){
                left.src = srcFotoCorrecta
            }else if((comprobacion == data_lado) && (comprobacion == "2")){
                right.src = srcFotoCorrecta
            }

            setTimeout(this.generarFotos, 300)

            // this.generarFotos()

        }else{

            if((comprobacion != data_lado) && (data_lado == "1")){
                left.src = srcFotoIncorrecta
            }else if((comprobacion != data_lado) && (data_lado == "2")){
                right.src = srcFotoIncorrecta
            }

            this.incorrectas++
            setTimeout(this.generarFotos, 300)
        }

        console.log("Incorrecta " + this.incorrectas)

        if(this.incorrectas > 2){
            confirm("Has fallado 3");
            window.location.href = "ayuda.html";
        }else if(this.incorrectas + this.correctas > 5){
            window.location.href = "ayuda.html";
        }

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

//CALCULADORA DE MASA CORPORAL 

function calcularMasa() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    let masaCorporal = peso / (altura * altura);
    let resultado = "hola , el estado actual de tu masa corporal es " + masaCorporal;


    if (masaCorporal < 18.5) {
        resultado += " estas bajito de peso "
    }

    else if (masaCorporal >= 18.5 && 24.9) {
        resultado += " estas Normal";
        console.log(resultado + "estas bajto de orml")

    } else if (masaCorporal >= 25.0 && 29.9) {
        resultado += " Ojito estas en sobre peso";


    } else if (masaCorporal > 30) {
        resultado += " estas muy gordo";
    }
    document.getElementById("respuesta_1").value = masaCorporal
    document.getElementById("mensaje").value = resultado

}




//CALCULADORA DE DIVISAS

function calcularMonedas() {
    const cambio = parseInt(document.getElementById("cantidad").value);
    const deMoneda = document.getElementById("theMoneda").value;
    const aMoneda = document.getElementById("toMoneda").value;


    tiposDeCambio = {
        USD: {
            COL: 3886.31,
            ARG: 880.75,
            USD: 1
        },
        COL: {
            ARG: 0.23,
            COL: 1,
            USD: 0.00026


        },
        ARG: {
            USD: 0.0011,
            ARG: 1,
            COL: 4.41

        }

    };

    let conversion = tiposDeCambio[deMoneda][aMoneda];
    let rest = cambio * conversion;

    document.getElementById("solucion").textContent = "$"+ rest.toFixed(2) ;


}

//BLOG DE NOTAS

let array=[]

let agregarNotas = {
    id:1,
    titulo:"sacar bsura",
    texto: "mi mama me  retar si no lohago",
    realizada:false

}   



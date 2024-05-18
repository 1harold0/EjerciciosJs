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

    document.getElementById("solucion").textContent = "$" + rest.toFixed(2);


}

//BLOG DE NOTAS

let arrayNotas = [{
    id: 1,
    titulo: "sacar bsura",
    texto: "mi mama me  retar si no lohago",
    realizada: false

},
{
    id: 2,
    titulo: "ejercicio",
    texto: "salir a correr",
    realizada: false
},
{
    id: 3,
    titulo: "comer",
    texto: "hacer el desayuo",
    realizada: false
},
{
    id: 4,
    titulo: "barrer la casa",
    texto: "mi mama me  retar si no lohago",
    realizada: false
}
]
let idGlobal = 4;

function pintarNotas() {
    let contenedor = document.getElementById('contenedorNotas');
    contenedor.innerHTML = '';

    if (arrayNotas.length === 0) {
        contenedor.innerHTML = "<p>No hay notas para mostrar</p>";
        return;
    }


    arrayNotas.forEach(function (nota) {
        let notaCard = document.createElement('div');
        notaCard.className = 'card m-3';
        notaCard.style.width = "18rem";
        notaCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${nota.titulo}</h5>
                <p class="card-text">${nota.texto}</p>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
                    <label class="form-check-label">Realizada</label>
                </div>
                <button class="btn btn-danger mt-2" onclick="borrarNota(${nota.id})">Borrar Nota</button>
            </div>
        `;
        contenedor.appendChild(notaCard);
    });
}
pintarNotas();

function guardarNota() {
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;

    if (titulo === '' || texto === '') {
        alert('Que quieres que guarde si no escribes nada :(');
        return;
    }

    idGlobal++;
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    arrayNotas.push(nuevaNota);
    limpiarCampos();
    pintarNotas();
}

function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
}

function borrarNota(id) {
    arrayNotas = arrayNotas.filter(function (nota) {
        return nota.id !== id;
    });
    pintarNotas();
}

function marcarRealizada(id) {
    let nota = arrayNotas.find(function(nota) {
        return nota.id === id;
    });
    if (nota) {
        nota.realizada = !nota.realizada;
        let tituloElement = document.getElementById(`titulo-${id}`);
        let textoElement = document.getElementById(`texto-${id}`);
        if (nota.realizada) {
            tituloElement.classList.add('textoRealizado');
            textoElement.classList.add('textoRealizado');
        } else {
            tituloElement.classList.remove('textoRealizado');
            textoElement.classList.remove('textoRealizado');
        }
    }
} 
function filtrarNotas() {
    let textoBusqueda = document.getElementById('search').value.toLowerCase();
    let filtroRealizadas = document.getElementById('filtroRealizadas').checked;

    let notasFiltradas = arrayNotas.filter(function (nota) {
        let coincideTexto = nota.titulo.toLowerCase().includes(textoBusqueda) || nota.texto.toLowerCase().includes(textoBusqueda);
        let coincideRealizada = !filtroRealizadas || (filtroRealizadas && nota.realizada);
        return coincideTexto && coincideRealizada;
    });

    let contenedor = document.getElementById('contenedorNotas');
    contenedor.innerHTML = '';

    if (notasFiltradas.length === 0) {
        contenedor.innerHTML = "<p>No as echo un cul* , apurele</p>";
        return;
    }

    notasFiltradas.forEach(function (nota) {
        let notaCard = document.createElement('div');
        notaCard.className = 'card nota';
        notaCard.style.width = "18rem";
        notaCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title ${nota.realizada ? 'textoRealizado' : ''}" id="titulo-${nota.id}">${nota.titulo}</h5>
                <p class="card-text ${nota.realizada ? 'textoRealizado' : ''}" id="texto-${nota.id}">${nota.texto}</p>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
                    <label class="form-check-label">Realizada</label>
                </div>
                <button class="btn btn-danger mt-2" onclick="borrarNota(${nota.id})">Borrar Nota</button>
            </div>
        `;
        contenedor.appendChild(notaCard);
    });
}


// 1. Duplicar cada número en un array
//  - Objetivo: Utilizar `map()` para crear un nuevo array donde cada elemento sea el doble del 
// elemento correspondiente en el array original.

let numeros1 = [1, 2, 3, 4, 5];

let Duplicar = numeros1.map(numero => numero * 2);

console.log(Duplicar)




// 2. Convertir un array de cadenas a mayúsculas:
//  - Objetivo: Utilizar `map()` para crear un nuevo array donde cada cadena sea convertida a 
// mayúsculas.

let palabras = ['hola', 'mundo', 'javascript'];

let mayusculas = palabras.map(letras => letras.toUpperCase())

console.log(mayusculas)

// 3. Extraer las edades de un array de objetos:
//  - Objetivo: Utilizar `map()` para crear un nuevo array que contenga solo las edades de cada objeto 
// en el array original.

let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
];
let edades = personas.map(años => años.edad);

console.log(edades)


// 4. Crear un nuevo array combinando dos arrays existentes:
//  - Objetivo: Utilizar `map()` para combinar dos arrays existentes en un nuevo array donde cada
// elemento sea una combinación de un elemento de cada array.

const numeros = [1, 2, 3];
const letras = ['a', 'b', 'c'];

let combinación = numeros.map((numero, i) => (numero + letras[i]))

console.log(combinación)


// 5. Aplicar una función de transformación compleja a un array de objetos:
//  - Objetivo: Utilizar `map()` para aplicar una función de transformación a cada objeto en el array
// original y crear un nuevo array con los resultados.

let productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
]

let promociones = productos.map(producto => {
    let descuentos = producto.precio * 0.10
    let conDescuento = producto.precio - descuentos
    return {
        nombre: producto.nombre.toUpperCase(),
        precio: producto.precio,
        descuento: conDescuento

    }
})
console.log(promociones)




// 1. Entrega un arreglo de los nombres que contengan la letra “a” y ordena ese arreglo 
// alfabéticamente.
let nombres = ['Ana', 'Carlos', 'David', 'Elena', 'Beto']

let nombresOrdenados = nombres.filter(nombre => nombre.includes('a')).sort();

console.log(nombresOrdenados);
// 2. Entrega un arreglo de los libros con más de 300 páginas. El arreglo debe estar organizado de 
// forma descendente según el número de páginas.
let libros = [{
    titulo: 'Harry Potter',
    paginas: 400
},
{
    titulo: 'El Hobbit',
    paginas: 300
},
{
    titulo: 'Cien años de soledad',
    paginas: 500
}]

let organizar = libros.filter(libro => libro.paginas > 300).sort((a, b) => b.paginas - a.paginas)
console.log(organizar)



// 3. Entrega un arreglo de los productos que estén disponibles, con sus precios a un 30% de
// descuento y organizados de forma alfabética DESCENDENTE.
productos = [
    {
        nombre: 'Camisa',
        precio: 20,
        disponible: true
    }, {
        nombre: 'Pantalón',
        precio: 30,
        disponible: false
    }, {
        nombre: 'Zapatos',
        precio: 50,
        disponible: true
    }]


let tienda = productos.filter(producto => producto.disponible === true).map(producto => {
    let descuentos = producto.precio * 0.30;
    let Descuentoo = producto.precio - descuentos;
    return {
        nombre: producto.nombre,
        precio: Descuentoo

    }

}).sort((a,b) => b.nombre.localeCompare(a.nombre));


console.log(tienda)



equipos=[
    {
        nombre:colombia,
        puntos:25,
        goles:10
    },
    {
        nombre:brazil,
        puntos:14,
        goles:4
    },
    {
        nombre:francia,
        puntos:16,
        goles:8
    },
    {
        nombre:peru,
        puntos:16,
        goles:10
    }
]
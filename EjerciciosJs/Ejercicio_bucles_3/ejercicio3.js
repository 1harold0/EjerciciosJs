// Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos)")

console.log("------Ejercicio1-----")
let numero = parseInt(prompt("ingrese w numero que desea mutplicar"))

for (let i = 0; i <= 10; i) {
let resultado = numero *i
console.log(resultado)
  
}


// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.
// console.log("------Ejercicio 2-----")
// 
let suma = 0;
let num2 = 1;

while (numero !== 0) {
numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
suma += numero;
}

alert("La suma de los números es: " + suma);



// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.
console.log("------Ejercicio 3----")
let adivinadoNumero;
let numeroAdivinar = 35;
let intentos = 0;

do {
adivinadoNumero = parseInt(prompt("ingrese un numero del 1 - 100 :"))
   
intentos++

if (adivinadoNumero > numeroAdivinar) {
console.log(parseInt(prompt("cerca pero el numero es menor:")))

} else if  (adivinadoNumero < numeroAdivinar){
 console.log(parseInt(prompt("cerca pero el numero es mayor:")))   
 }

} while (adivinadoNumero !== numeroAdivinar);
console.log("ganaste el numero es " + numeroAdivinar +" utilizaste solo " + intentos + " intentos")

 

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.
console.log("------Ejercicio 4-----")
let numeroPrimo = prompt("ingrese un numero ") 
let esPrimo = true;

if (numeroPrimo <= 1) {
    esPrimo = false; 
} else {
    for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
        if (numeroPrimo % i === 0) {
            esPrimo = false; 
            break; 
        }
    }
}

if (esPrimo) {
    console.log(numeroPrimo + " es primo");
} else {
    console.log(numeroPrimo + " no es primo");
}




// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.
console.log("------Ejercicio 5-----")

const numeroDivisores = prompt("ingrese un numero")

console.log("Los divisores de " + numeroDivisores + " son:");
for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        console.log(i);
    }
}



// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.
console.log("------Ejercicio 6-----")

let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array6.length; i++) {
console.log(array6[i]);
}


// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.
console.log("------Ejercicio 7 -----")

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array7.length; i++) {
console.log(array7[i] * 2);
}


// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.
console.log("------Ejercicio 8-----")


let familia = [
{ nombre: "carlos", edad: 30, relacion: "Padre", ocupacion: "futbolista" },
{ nombre: "María", edad: 28, relacion: "Madre", ocupacion: "profesora" },
{ nombre: "salomon", edad: 10, relacion: "Hijo", ocupacion: "Estudiante" },
{ nombre: "natha", edad: 8, relacion: "Hija", ocupacion: "Estudiante" },
{ nombre: "carla", edad: 60, relacion: "Abuela", ocupacion: "Jubilada" }
];
for (let i = 0; i < familia.length; i++) {
console.log("Hola, soy " + familia[i].nombre + ", tengo " + familia[i].edad + " años, soy " + familia[i].relacion + " y soy " + familia[i].ocupacion + ".");
}

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.
console.log("------Ejercicio 9-----")
let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array9.length; i++) {
if (array9[i] % 2 !== 0) {
console.log(array9[i]);
}
}
 
 
// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.
console.log("------Ejercicio 10-----")
let sumaPares = 0;
let sumaImpares = 0;
let numeroIngresado;
do {
numeroIngresado = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
if (numeroIngresado % 2 === 0) {
sumaPares += numeroIngresado;
} else {
sumaImpares += numeroIngresado;
}
} while (numeroIngresado !== 0);

console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.
console.log("------Ejercicio 11-----")
let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array11.length; i++) {
    if (array11[i] % 2 !== 0) {
        console.log(array11[i]);
    }
}




// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.
console.log("------Ejercicio 12----")

let numeros1 = [15, 20, 7, 43, 98, 32, 65, 11, 77, 5];
let minimo = numeros1[0];

for (let i = 1; i < numeros1.length; i++) {
    if (numeros1[i] < minimo) {
        minimo = numeros1[i];
    }
}

console.log("El número más pequeño es: " + minimo);


// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.
console.log("------Ejercicio 13----")

let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");
let manoJugador1;
let manoJugador2;

do {
    manoJugador1 = prompt(jugador1 + ", ingrese (piedra, papel o tijeras):");
    manoJugador2 = prompt(jugador2 + ", ingrese (piedra, papel o tijeras):");

    if (manoJugador1 === manoJugador2) {
        console.log(" chis, bum, papas ");
    } else {

        if ((manoJugador1 === "piedra" && manoJugador2 === "tijeras") ||
            (manoJugador1 === "papel" && manoJugador2 === "piedra") ||
            (manoJugador1 === "tijeras" && manoJugador2 === "papel")) {
            console.log(jugador1 + "GANASTEEE la partida!");
        } else {
            console.log(jugador2 + " GANASTEEE la partida!");
        }
    }
} while (manoJugador1 === manoJugador2);




// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
console.log("------Ejercicio1 14----")
for (let i = 1; i <= 5; i++) {
    let asteriscos = "";
    for (let j = 1; j <= i; j++) {
        asteriscos += "* ";
    }
    console.log(asteriscos);
}


// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.
console.log("------Ejercicio 15-----")

for (let i = 5; i >= 1; i--) {
    let invertidos = "";
    for (let j = 1; j <= i; j++) {
        invertidos += "* ";
    }
    console.log(invertidos);
}


// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR
console.log("------Ejercicio 16-----")

let orden = [15, 20, 7, 43, 98, 32, 65, 11, 77, 5 , 66,22 ,35,1];
for (let i = 0; i < orden.length - 1; i++) {
    for (let j = 0; j < orden.length - i - 1; j++) {
        if (orden[j] > orden[j + 1]) {
            let temp = orden[j];
            orden[j] = orden[j + 1];
            orden[j + 1] = temp;
        }
    }
}

console.log("El array ordenado es: " + orden);
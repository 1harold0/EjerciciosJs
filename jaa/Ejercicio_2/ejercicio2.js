//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

let num1 = 5
let num2 = 75

if (num1 > num2) { console.log("El primer número es mayor que el segundo.") }
else {
    console.log("El primer número no es mayor que el segundo.")
}



//2. Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

if (num1 === num2) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números son diferentes.");
}


//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

if (num1 > num2) {
    console.log("El primer número es mayor que el segundo.");
} else if (num1 < num2) {
    console.log("El segundo número es mayor que el primero.");
} else {
    console.log("Los números son iguales.");
}


//4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.
let numero = 10;
let numero2 = 5;
let numero3 = 8;

if (numero <= numero2 && numero3 <= numero3) {
    console.log("El número más chico es: ");
} else if (num2 <= num1 && num2 <= num3) {
    console.log("El número más chico es: ");
} else {
    console.log("El número más chico es: ");
}

//5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual  es la de mayor edad.

persona1 = {
    nombre: "pepito",
    edad: 22,
    altura: 1.80
}
persona2 = {
    nombre: "raul",
    edad: 44,
    altura: 1.55
}

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alto que " + persona2.nombre);
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es más alto que " + persona1.nombre);
} else {
    console.log("Ambas personas tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre);
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre);
} else {
    console.log("Ambas personas tienen la misma edad.");
}


//6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

let nombre = prompt("ingrese su nombre")
let edad = prompt("ingrese su edad")
let vision = prompt("ingrese el esado de su vision en un rango de 1 a 10")
let altura = prompt("ingrese su altura")

if (edad >= 18 && altura > 150 && vision >= 8) { console.log(nombre + "si puede manejar") }
else { console.log(nombre + "lo siento no esta capaciado para manejar") }


7//. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida

let entrada = ["normal", "vip"]
let minombre = "andres"
let plata = 1000
let nombreee = prompt("ingrese su nombre")

if (nombreee === minombre || entrada === "vip") {
    console.log("bienenido" + nombre)
    if (entrada.vip) {
        console.log("¡Tiene entrada! ¿quiere utilizarla?");
    } else {
        console.log("¿quiere comprar una entrada?");
        if (plata >= 1000) {
            console.log(" ¡Bienvenido, " + nombre);
        } else {
            console.log("Lo siento, no tienes suficiente dinero :(");
        }
    }
} else {
    console.log(nombre + "quiere comprar una entrada?");
    if (plata >= 1000) {
        console.log("compra exitosa Bienvenido, " + nombre);
    } else {
        console.log("saldo  insuficionte ");
    }
}


// 8Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente

let numeroIncognita = 6
let numeroIngresado = prompt("ingrese un numero del 1 al 10")


if (numeroIngresado === numeroIncognita) {
    console.log("¡GANASTEEE!");
} else {
    if (numeroIngresado < numeroIncognita) {
        console.log("mmm casi pero el numero es menor");
    } else {
        console.log("uff cerca pero el numero es mayor intenta de nuevo");
    }

    numeroIngresado = parseInt(prompt("segundo intento Ingresa otro número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
        console.log("GANASTEEE:)))");
    } else {
        if (numeroIngresado < numeroIncognita) {
            console.log("El número ingresado es menor casi ");
        } else {
            console.log("uff cerca pero el numero es mayor intenta de nuevo");
        }

        numeroIngresado = parseInt(prompt("Último intento. Ingresa otro número del 1 al 10:"));

        if (numeroIngresado === numeroIncognita) {
            console.log("¡Ganaste! ¡Adivinaste el número!");
        } else {
            console.log("la cagaste el numero es " + numeroIncognita + "suerte para la proxima :)");
        }
    }
}


//9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

let edadd = prompt("ingrese edad")

if (edadd >= 0 || edad <= 12) console.log("Eres un infante")
else if (edadd >= 13 || edadd <= 18) console.log("Eres un adolecente")
else if (edadd >= 19 || edadd <= 45) console.log("Eres un joven")
else if (edadd >= 45) console.log("Eres un anciano")
else (edadd >= 100); console.log("sigue vivo?")

///10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

let jugador1 = prompt("ingrese piedra Papel o Tijera")
let jugador2 = prompt("ingrese piedra papel o tijera")

switch (juego) {
    case jugador1 === jugador2:
        console.log("Empate");
        break;
    case (jugador1 === "piedra" && jugador2 === "tijera") || (jugador1 === "papel" && jugador2 === "piedra") || (jugador1 === "tijera" && jugador2 === "papel"):
        console.log("Jugador 1 Gana :)");
        break;
    case (jugador2 === "piedra" && jugador1 === "tijera") || (jugador2 === "papel" && jugador1 === "piedra") || (jugador2 === "tijera" && jugador1 === "papel"):
        console.log("Jugador 2 Gana :)");
        break;
    default:
        console.log("¡Uno de los jugadores está haciendo trampa!");
}
//11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta decolor, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

let color = prompt("ingrese un color")

switch (color) {
    case "negro":
    case "blanco":
        console.log("Fala color ")
        break;

    case "verde":

        console.log("el color naturaleza ")

        break;
    case "rojo":
        console.log("Fuegooo")

        break;
    case "Amarillo":
        console.log("Solo solecitooo")
        break;
    case "Marron":
        console.log("colos tierra")
        break;
    default:
        console.log("No lo habia pensado ")
        break;

}


///12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada(suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado.En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.


let numero1 = prompt("ingrese un numero")
let numeroo2 = prompt("ingrese un numero")
let operacion = prompt("ingrese que operacion desea realizar Suma Resta Divicion")

let resultado;

switch (operacion) {
    case "resta": resultado = numero1 - numeroo2
        console.log(resultado)
        break;

    case "suma": resultado = numero1 + numeroo2
        console.log(resultado)
        break;
    case "divicion":
        if (numero2 !== 0) { resultado = numero1 / numeroo2 }
        console.log(resultado)
        break

}

//13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos.En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos  mostrar un mensaje que diga: vuelva a intentarlo en 1 mes

let persona = {
    Noombree: prompt("ingrese su nombre"),
    Dni: prompt("ingrese su numero de DNI"),
    Cuil: prompt("ingrese su numero de Cuil"),
    Nacionalidad: prompt("ingrese su nacionalidad"),
    FechaDeNacimiento: prompt("ingre  su fecha de nacimineto"),
    domicilio: prompt("ingrese su domicilio")
}

console.log(persona)

let confirmacion = prompt("¿Los datos ingresados son correctos? (Si/Noo):");
if (confirmacion === "Si") {
    console.log("Registro exitoso:");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}





// Ejercico 1
console.log("Ejecicio1--------------")
let nombre= "Harold Andres"
console.log(nombre)

// Ejercico 2
console.log("Ejecicio2-------------")
let lastName="Gutierrez de Piñeres Diaz"
console.log(lastName)

// Ejercico 3

console.log("Ejecicio 3 -----")
let myAge=24
console.log(myAge)

// Ejercico 4
console.log("Ejercicio 4--------")
let myPet = "Rengar"
console.log(myPet)
// Ejercico 5
console.log("ejecicio 5---------")
let agePet = 1
console.log(agePet)

// Ejercico 6
console.log("ejecicio 6---------")
console.log(nombre,lastName,myAge,myPet,agePet)
// Ejercico 7
console.log("ejecicio 7---------")
let fullName= nombre +  lastName
console.log(fullName)

// Ejercico 8
console.log("ejecicio 8---------")
let textoPresentacion = nombre + lastName+ myPet + agePet + fullName 

// Ejercico 9
console.log("ejecicio 9---------")
let sumaEdades = myAge + agePet
let restaedades =   myAge - agePet
let producoEdades =   myAge * agePet
let diviciones =    myAge / agePet


// Ejercico 10
console.log("ejecicio 10---------")
let name = prompt("igrese su  nombre")
let apellido = prompt("ingrese su apellido")
let  edad  =  parseInt(prompt("ingresesu Edad"))
let mascota = prompt("ingrese el nombre de su mascota")
let edadMascota = parseInt(prompt("ingrese la edadde su mascota"))

console.log(name,apellido,edad, mascota,edadMascota)

let nombreCompleto = name + apellido
let presenacion = name+ apellido + edad+ mascota+edadMascota

let sumedad = edad + edadMascota
let resedaes =  edad - edadMascota
let proedades =  edad * edadMascota
let divedades = edad / edadMascota

// Ejercico 11
console.log("ejecicio 11---------")

let alumno = {
    nombree: "Juan",
    apellidoo: "pepito",
    edaad: 25,
    curso: "Programación",
    notas: [8, 9, 10]
  };
  console.table(alumno)

  console.log("Nombree:", alumno.nombree)
  console.log("Apellidoo:", alumno.apellidoo)
  console.log("Edaad:", alumno.edaad)
  console.log("Curso:", alumno.curso)
  console.log("Notas:", alumno.notas)

// Ejercico 12
console.log("ejecicio 12---------")
let peet ={
    nombrePett: "bochi",
    animal:"gato",
    color: "blanco",
    raza : "criollo",
    peso: "3"
}
console.table(peet)

// Ejercico 13
console.log("ejecicio 13---------")

let frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Pera"];

console.log( frutas);
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])


// Ejercico 14
console.log("ejecicio 14---------")
let numeros = ["1","2","3","4","5"]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
// Ejercico 15
console.log("ejecicio 15---------")
let familia = [
    { nombre: "maria", edad: 30 },
    { nombre: "juanto", edad: 25 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "carla", edad: 35 },
    { nombre: "Luisa", edad: 20 }
  ];

  console.log( familia);
  console.log(familia[0])
  console.log(famnila[1])
  console.log(familia[2])
  console.log(famnila[3])
  console.log(familia[4])


// Ejercico 16
console.log("ejecicio 16---------")

let textoAleatorio = frutas[2] + numeros[4] + familia[5]

console.log(textoAleatorio)
// Ejercico 17
console.log("ejecicio 17---------")
let miEdad = parseInt(prompt("Ingresa tu edad:"));
let edadCompanero = parseInt(prompt("Ingresa la edad de tu compañero:"));


let edadesIguales = miEdad === edadCompanero;
let soyMayor = miEdad > edadCompanero;
let soyMenor = miEdad < edadCompanero;

console.log( edadesIguales);
console.log( soyMayor);
console.log( soyMenor);

// Ejercico 18
console.log("ejecicio 18---------")

let edaaad = parseInt(prompt("Ingresa tu edad:"));
let soyMayorDeEdad = edad >= 18;
console.log("Soy mayor de edad:", soyMayorDeEdad);


// Ejercico 19
console.log("ejecicio 19---------")

let edadPersona = parseInt(prompt("Ingresa la edad de la persona:"));
let alturaPersona = parseFloat(prompt("Ingresa la altura de la persona en cm:"));

let puedeSubir = edadPersona > 6 && alturaPersona >= 120;
console.log("Puede subir a la atracción:", puedeSubir);

// Ejercico 20
console.log("ejecicio 20---------")
let pasePersona = prompt("(VIP, NORMAL, LIMITADO):");
let saldoPersona = parseInt(prompt("Ingresa el saldo disponible de la persona:"));

let puedePasar = pasePersona === "VIP" || saldoPersona > 1000;
console.log("La persona puede pasar:", puedePasar);



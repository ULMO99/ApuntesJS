//Esto es lo que tendríamos que hacer si no usamos destructuración:
let numeros = [1, 2, 3];

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

//Esto es lo que tendríamos que hacer si usamos destructuración:
//Ejemplo con arreglos

const [one, two, three] = numeros;

//Ejemplo con objetos
let persona = {
    nombre: "Ulises",
    apellido: "Moreno",
    edad: 25,
};

let { nombre, apellido, edad } = persona;

console.log(nombre); //----> Me devuelve "Ulises"
console.log(apellido); //----> Me devuelve "Moreno"
console.log(edad); //----> Me devuelve 25
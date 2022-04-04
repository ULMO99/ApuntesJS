# Destructuración.

Surge desde el estándar **ECMASCRIPT 6**. Es una nueva forma de asignar valores a **arreglos** y **objetos**. Esto es especialmente útil cuando usas librerias o frameworks como **Angular**, **React** o **Vue**.

Veamos algunos ejemplos de la síntaxis:

```Javascript
//Esto es lo que tendríamos que hacer si no usamos destructuración:
let numeros = [1, 2, 3];

let uno = numeros[0]
    dos = numeros[1]
    tres = numeros[2]; 
```


```Javascript
//Esto es lo que tendríamos que hacer si usamos destructuración:


//Ejemplo con arreglos
let numeros = [1, 2, 3];

let [one, two, three] = numeros;

//Ejemplo con objetos
const persona = {
    nombre: "Ulises",
    apellido: "Moreno",
    edad: 25
}
let {nombre, apellido, age} = persona;

console.log(nombre); //----> Me devuelve "Ulises"
console.log(apellido); //----> Me devuelve "Moreno"
console.log(age); //----> Me devuelve Undefined, porque "age" no existe en el objeto persona
```

Nota: para que la **destructuración** funcione en los objetos, tenemos que nombrar a la variable igual que el **value** al que hacemos referencia. También debemos respetar el orden en el que los **values** están en el arreglo para poderlos asignar a una nueva variable.
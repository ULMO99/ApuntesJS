# Prototipos

Antes de los prototipos, debemos entender que en Programación Orientada a Objetos (POO) hay 4 conceptos que debemos entender:

**Clases:** es un modelo a seguir en el que nos basamos para generar **instancias** (una instancia es una "copia" de la **clase** [modelo a seguir]).

**Objetos:** es una instancia de una **clase**.

Los **objetos** a su vez van a tener dos características que son:

**Atributos:** es una característica o propiedad del **objeto**. **Podría decirse que son variables dentro de un objeto**.

**Métodos:** son las acciones que un objeto puede realizar. Generalmente los métodos son gramaticalmente son verbos, por ejemplo **getElementById**. En resumidas cuenta son **funciones** dentro de un **objeto**.

**Prototipo:** es un mecanismo por el cual un **objeto** va a poder heredar desde un **objeto padre** características como **atributos** y **métodos**.

```Javascript
const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal); //----> { nombre: 'Snoopy', sonar: ƒ sonar() }
console.log(animal2); //----> { nombre: 'Lola Bunny', sonar: ƒ sonar() }

//Hacer lo de arriba no es del todo funcional, vamos a generar un prototipo para poder generar n cantidad de animales que queramos sin necesidad de crear una y otra vez un objeto diferente.

//Funcion constructora (las funciones en sí mismas generan un prototipo vacío):
//Para escribir una clase, es necesario usar el UpperCamelCase.

/*function Animal (nombre, genero) {
    //Atributos de mi función constructora
    this.nombre = nombre;
    this.genero = genero;

    //Métodos de la función constructora
    this.sonar = function() { //cuando usamos funciones constructoras es necesario usar la palabra reservada "this" asignar atributos y métodos
        console.log("Sonidos del animal");
    }
    this.saludar = function () {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
} */

//Función constructora donde asignamos los métodos al prototipo, no a la función como tal
function Animal (nombre, genero) {
    //Atributos de mi función constructora
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos agregados al prototipo de la función. Esto evita que las instancias que creemos dupliquen los métodos dentro de sí mismos, con esto se mejora el rendicmiento y el espacio en memoria dentro de la aplicación.
Animal.prototype.sonar = function() {
    console.log("Sonidos del animal");
    }
Animal.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
    }

const snoopy = new Animal("Snoopy", "Macho") //<---- La palabra reservada "new" nos permite crear una nueva instancia del tipo que le especifiquemos, en este caso una nueva variable basada en la función constructora Animal.
const lolaBunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy); /*Animal {
    nombre: 'Snoopy',
    genero: 'Macho',
    __proto__: {
      constructor: ƒ Animal(),
      sonar: ƒ (),
      saludar: ƒ ()
    }
  } */
  console.log(lolaBunny); /*Animal {
    nombre: 'Lola Bunny',
    genero: 'Hembra',
    __proto__: {
      constructor: ƒ Animal(),
      sonar: ƒ (),
      saludar: ƒ ()
    }
  } */
```

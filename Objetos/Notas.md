# Objetos Javascript []
Podemos definir un objeto como una "colección" de pares **key:value/llave:valor**. Pueden contener cualquier tipo de dato **funciones, strings, booleanos, números** e incluso otros **objetos**. Dentro de un objeto a las variables se le van a llamar **atributos** y a las funciones se les llama **métodos**.

Formas de declarar un **Objeto**:
```javascript
//Esta forma se declara accediendo directamente al Constructor de objetos de JS. Sin embargo, ya no es usada.
let a = new Object("Hola"); //----> Dentro de los paréntesis se coloca los valores que se quieren asignar al Objeto
```
```Javascript
const = perro {
    //Dentro de las llaves se deben poner los valores siempre usando los pares "key:value/clave:valor" y usando comas para agregar un nuevo par key:value.
    nombre: "Pippin"
}
```
Declaremos un **objeto**:

```javascript
const ulises = {
  nombre: "Ulises",
  apellido: "Moreno",
  edad: 25,
  contacto: {
    email: "ulises.moreno.mendoza@hotmail.com",
    twitter: "ulisesmemendoza",
    instagram: "ulisesmemendoza"
  }
  pasatiempos: ["crear música", "programar", "ejercicio", "videojuegos"],
  saludar: function () {
    return `Hola soy ${this.nombre} ${this.apellido} y me gusta ${this.pasatiempos[0]}`;
  },
};
```
Así es como podemos acceder a los datos dentro de un **objeto**:

```Javascript
ulises.nombre;                                    //-------> Muestra el value "Ulises"
ulises.saludar();                                 //-------> Muestra el value de la function "saludar"
console.log(Object.keys(ulises));                 //-------> Muestra todas las keys del Objeto ulises
console.log(Object.values(ulises));               //-------> Muestra todos los values del Objeto ulises
console.log(ulises.hasOwnProperty("nombre"));     //-------> Devuelve true ya que el objeto sí tiene la propiedad(key) "nombre"
console.log(ulises.hasOwnProperty("nacimiento")); //-------> Devuelve false ya que el objeto no tiene la propiedad(key) "nacimiento"
```
**El método hasOwnProperty busca si el objeto tiene la propiedad especificada en el paréntesis**

# Clases y Herencia

Desde **ECMAScript 6** nos han dado lo que se conoce como azúcar sintáctico, lo que esto quiere decir es que desde ese estándar, ya podemos escribir **clases**. Sin embargo como **JS** está basado en **prototipos**, aunque nosotros gramaticalmente escribamos **clases**, **JS** lo va a compilar como **prototipos**.

```Javascript
class Animal {
  //Las clases no reciben parámetros.
  //el constructor es un método especial que se ejecuta al momento de instancias la clase.
  //Atributos
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos. Los métodos sí pueden recibir parámetros en caso de necesitarlos.
  sonar() {
    console.log("Sonidos del animal");
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}
class Perro extends Animal {
  //debemos usar la palabra reservada "extends" es decir de qué vas a extenderte/heredar. En este caso es de Animal
  constructor(nombre, genero, tamanio) {
    //con el método super() se mandar a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    console.log("Ladrido");
  }
  ladrar() {
    console.log("Woof! Woof!");
  }
}

const mimi = new Animal("Mimi", "hembra"),
  scooby = new Perro("Scooby", "macho", "gigante");

console.log(mimi);

console.log(scooby);
scooby.sonar;
scooby.ladrar;

```
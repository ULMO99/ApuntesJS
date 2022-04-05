class Animal {
  //Atributos
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos.
  sonar() {
    console.log("Sonidos del animal");
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Ladrido");
  }
  ladrar() {
    console.log("Woof! Woof!");
  }
  //un método estático se puede ejecutar sin la necesidad de instanciar la clase, debemos usar la palabra reservada "static"
  static queEres() {
    console.log(
      "Los perros somos mamiferos pertenecientes a la familia de los cacinos"
    );
  }
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}
const mimi = new Animal("Mimi", "hembra"),
  scooby = new Perro("Scooby", "macho", "gigante");

scooby.setRaza = "Gran Danés";
scooby.getRaza;

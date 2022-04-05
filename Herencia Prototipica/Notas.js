function Animal (nombre, genero) {
    //Atributos de mi función constructora
    this.nombre = nombre;   
    this.genero = genero;
}
Animal.prototype.sonar = function() {
    console.log("Sonidos del animal");
}
Animal.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
}

//Herencia prototípica
function Perro(nombre, genero, tamanio) {
    this.super = Animal; // <----invoca el constructor Animal dentro de mi prototipo Perro.
    this.super(nombre, genero); //<---- ejecución del método super() lo que llama al constructor Animal
    this.tamanio = tamanio;
}

//Perro está heredando de Animal.
Perro.prototype = new Animal(); //<---- Esto me genera una nueva instancia del constructor Animal. Recordemos que la palabra reservada "new" nos genera una nueva instancia de la clase Animal.
Perro.prototype.constructor = Perro;

//sobreescritura de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Woof! Woof!")
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano");
const lolaBunny = new Animal("Lola Bunny", "hembra");


console.log(lolaBunny);
console.log(snoopy); /* Perro {
    super: ƒ Animal(),
    nombre: 'Snoopy',
    genero: 'Macho',
    tamanio: 'Mediano',
    __proto__: {
      nombre: 'Snoopy',
      genero: 'Macho',
      constructor: ƒ Perro(),
      sonar: ƒ (),
      ladrar: ƒ ()
    }
  } */
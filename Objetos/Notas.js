const ulises = {
  nombre: "Ulises",
  apellido: "Moreno",
  edad: 25,
  pasatiempos: ["crear música", "programar", "ejercicio", "videojuegos"],
  saludar: function () {
    return `Hola soy ${this.nombre} ${this.apellido} y me gusta ${this.pasatiempos[0]}`;
  }
};
ulises.nombre;
ulises.saludar();

console.log(Object.keys(ulises));                
console.log(Object.values(ulises));              
console.log(ulises.hasOwnProperty("nombre"));    
console.log(ulises.hasOwnProperty("nacimiento"));

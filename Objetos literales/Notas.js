let nombre = "Pippin",
    edad = 6;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("woof!")
    }
}

console.log(perro);
perro.ladrar();

//Podemos hace esto para simplificar lo anterior:

const dog ={
    nombre,
    edad,
    raza: "mestizo",
    ladrar(){
        console.log("woof! woof");
    }
}

console.log(dog);
dog.ladrar();
# Objetos literales.

No son más que una nueva forma de escribir **atributos** y **métodos**.

```Javascript
let nombre = "Pippin",
    edad = 6;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("woof!")
    }
}

console.log(perro); // ----> {nombre: 'Pippin', edad: 6, ladrar: ƒ ladrar()}
perro.ladrar();// ----> "woof!"
```

Todo lo anterior lo podemos simplificar de la siguiente mandera:

```Javascript
const dog = {
    nombre,
    edad,
    raza: "mestizo",
    ladrar(){ // ----> así es como podemos asignar funciones en los objetos literales
        console.log("woof! woof");
    }
}

console.log(dog); // ----> {nombre: 'Pippin', edad: 6, raza: 'mestizo', ladrar: ƒ ladrar() }
dog.ladrar(); // ----> "woof! woof"
```

Nota: como podemos ver en el ejemplo de arriba, en los **objetos literales** no hace falta nombrar a la **key**, podemos directamente poner el nombre de la **variable**. Así como tampoco tenemos que usar la pabrar clave **function**, con escribir directamente el nombre de la función seguida de paréntesis, es suficiente.

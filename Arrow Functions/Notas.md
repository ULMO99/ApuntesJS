# Arrow Functions

Es una forma de definir funciones anónimas (funciones anónimas expresadas). Una función expresada es cuando a una variable le asignas el vallor de una función anónima.

```Javascript
const saludar = function(){ //<---- función expresada
    console.log("Hola");
}


function despedirse(){ //<---- funcion declarada
    console.log("Adiós")
}

const nombre = () => console.log("Ulises"); //<---- Arrow function. Se omite la palabra clave "function". Cuando la función tiene una sola línea de instrucción, podemos omitir las llaves y dejarla directamente con la flecha.

const saluda = nombre => console.log(`Hola ${nombre}`); //<---- Podemos omitir los paréntesis cuando nuestra arrow function recibe UN SOLO parámetro.
saludar("Ulises") //---->"Hola Ulises"

const sumar = (a, b) => a + b; //---->En las arrow functions ya no es necesario usar la palabra reservada "return" porque la función en sí misma ya tiene un return.
sumar(10, 10);//---->retorna 20

const funcionDeVariasLineas = () => { //<----Cuando una arrow function es de varias líneas de instrucciones, podemos omitir las llaves, sin embargo si tiene más de una línea de código, debemos respetar el cuerpo de la función como si fuera una función "normal".
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(el, index) { //<----recordemos que el método forEach recibe una función en donde puede recibir el elemento a recorrer del arreglo y la posición para luego ejecutar algo.
    console.log(`${el} está en la posición ${index}`);
});

numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}`)); //<---- como solamente estamos ejecutando una línea de código, podemos omitir las llaves.

const perro = {
    nombre: "Pippin",
    ladrar: function(){
        console.log(this); //----> Apunta al contexto local del objeto perro.
    }
}

const perro1 = {
    nombre: "Pippin",
    ladrar: () => {
        console.log(this); // ---->Apunta al contexto global, no es considerado buena práctica declarar métodos en objetos literales usando arrow functions.
    }
}

```

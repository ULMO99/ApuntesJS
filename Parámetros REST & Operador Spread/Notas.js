//Parámetros REST

function sumar(a, b, ...c){
    let resultado = a + b;

    c.forEach(function (n){ // ----> c se vuelve un arreglo y lo tratamos con el método forEach que se ejecuta por cada uno de los elementos que haya dentro de c
        resultador += n
    });

    return resultado;
}

sumar(1, 1); // ----> 2
sumar(9, 6, 5); // ----> 20
sumar(3, 0, 3, 3); // ----> 9
sumar(9, 9, 5, 5, 10); // ----> 38


//Spread Operator
const array1 = [1, 2, 3, 4, 5],
    array2 = [6, 7, 8, 9, 0];

    const array3 = [...array1, ...array2];

console.log(array3) //----> Devuelve ambos arreglos "juntos" en uno solo, en lugar de devolver un arreglo con dos "sub arreglos"
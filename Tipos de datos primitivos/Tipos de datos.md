# Tipos de datos.

_Tipado dinámico:_ Las variables **no tienen un tipo de dato particular asociado.** Podemos asignarle y re-asignarle **cualquier valor** a **cualquier variable**.

_Tipado débil:_ podemos realizar operaciones entre distintos tipos de valores. Por ejemplo:

```javascript
//Sumar un número con un string
3 + "2"; // "32"
```

_Coerción de tipos:_ conversión implícita de dintintos tipos que realiza el motor de JavaScript para poder concretar una operación.

_Tipo de una variable:_ se determina cuando **se ejecute la línea de código** que contiene a esa variable. **Depende de la operación** que se esté realizando con ella.

## Tipos de datos primitivos.

_¿Qué es un tipo de dato primitivo?_ con primitivo nos referimos a básico. Los tipos de datos primitivos tienen dos características muy importantes:

_1- No poseen ni métodos ni propiedades._

_2- Son inmutables._

En resumen, los tipos de datos primitivos, son valores básicos, inmutables y que no poseen métodos ni propiedades.

Si queremos saber el tipo de dato de una variable, podemos usar la función `typeof`:

```javascript
var nombre = "Ulises";
typeof nombre; // "string"
typeof 29; // "number"
typeof true; // "boolean"
```

_¿Qué tipos de datos primitivos existen?_

- string: Cadenas de texto.
- number: Números.
- boolean: Verdadero o falso.
- null: Nulo.
- undefined: No definido.
- symbol: Símbolo. (nuevo en ECMAScript 6)

**Todo valor que no sea uno de los arriba enumerados, es un objeto.**

_String:_ sirven para representar tezto, debemos encerrarlos en comillas simples o comillas dobles (lo ideal es solo usar un tipo de comillas). El Backtick `` permite escribir en una sola línea. Para representarlos, JS usa la codificación **UTF-16**. Por ejemplo:

```javascript
var nombre = "Ulises";
var apellido = "Moreno";
var edad = 25;
var saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log(saludo); // Hola, mi nombre es Ulises Moreno y tengo 25 años.
```

También existe el string vacío, que por lo general se usa para darle un valor inicial a una variable.

```javascript
var nombre = "";
```

Para obtener un string a partir de una variable, podemos llamar al método toString o concatenarlo con el string vacío, pero para usar tostring, debemos asegurarnos que no contiene ni null ni undefined, de lo contrario obtendremos un error.

```javascript
var nombre = "Ulises";
nombre.toString(); // "Ulises"
```

_Number:_ sirve para representar tanto los enteros, los decimales y los negativos. Para representar los números, JavaScript usa un formato llamado IEEE 754. En este formato, cada número ocupa 64 bits en la memoria (8 bytes). cuando trabajamos con decimales en JavaScript, debemos usar la propiedad toFixed para detener los digitos después de la coma que le pasemos como parámetro. Para que nos regrese un número y no una string, debemos agregar un signo de `+` para convertirlo a tipo numérico.

```javascript
var numero1 = (0.1 + 0.2).toFixed(2); // "0.3"
var numero2 = +(0.1 + 0.2).toFixed(2); // 0.3
```

_boolean:_ solo puede tener dos valores, true o false. Podemos asigarle un boolean a una variable para iniciarlizarla o también podemos obtenerlo a partir de una comparación. Para obtener el valor opuestod e un booleano, podemos usar la función `!`:

```javascript
var falso = false;
!falso; // true
var verdadero = true;
!verdadero; // false
```

Se suelen usar mucho los booleanos desntro de declaraciones if, ciclos for y while. Si queremos saber si muchos valores son _true_, podemos usar el operador `&&` (AND). Y si queremos saber si solo uno de ellos es _true_, podemos usar el operador `||` (OR). Es importante saber que hay valores que no son de tipo boolean, pero pueden ser evaluado como si lo fueran, por ejemplo:

```javascript
var mensajes = 10;

function mensajesLeidos() {
  if (mensajes) {
    console.log(`Tienes ${mensajes} mensajes`);
  } else {
    console.log(`No tienes mensajes`);
  }
}
mensajesLeidos(); // Tienes 10 mensajes
```
**Nota:** los valores que no son de tipo boolean, pero pueden ser evaluados como si lo fueran, son los siguientes: 0, "", null, undefined, NaN, Infinity. Cualquier otro valor va a ser evaluado como true.
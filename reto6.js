/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let cadenaTexto = "Hola Mundo";
let arrayNuevaCadenaTexto=[];
let cadenaTextoInvertida="";
// convertimos nuestra cadena de texto en un array 
let arrayCadenaTexto = cadenaTexto.split(''); // generamos una nueva variable la cual contien el array, mediante la cadena de texto

for (let i = 0; i < arrayCadenaTexto.length; i++) {
    arrayNuevaCadenaTexto[i] = arrayCadenaTexto[arrayCadenaTexto.length-i-1] // al nuevo arreglo le vamos a poner por cada iteración, cada letra del array de la palabra original pero a la longitud del array, le vamos a restar el indice menos 1
}
//una vez que ya tenemos el arreglo con los caracteres invertidos, lo tenemos que hacer cadena de texto
cadenaTextoInvertida = arrayNuevaCadenaTexto.join(''); // a la variable cadenaTextoInvertida le damos el valor del array con el metodo .join, para que no salga con comas y se convierta en string
console.log(cadenaTextoInvertida);
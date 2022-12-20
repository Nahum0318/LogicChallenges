/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 * Ejemplo:
    let str1 = "abcdefghijk";
    let str2 = "aeiou"
    let out1 ="bcdfghjk";
    let out2 ="ou";
 */

let str1 = "abcdefghijk";
let str2 = "aeiou"
let arrayOut1 =[];
let arrayOut2 =[];

//primero convertimos cada cadena en un arreglo 
 let arrayString1 = str1.split('');
 let arrayString2 = str2.split('');

//* - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
for (let i = 0; i < str1.length; i++) { // recorre cada caracter del arreglo str1
    console.log("str1-"+ arrayString1[i]);
    for (let j = 0; j < str2.length; j++) { // recorre todo el arreglo del str2 por cada caracter del str1
        console.log("str2-"+ arrayString2[j]);
       if (arrayString1[i]!= arrayString2[j]) {
       }
    }
}

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let palabraNo1 = "cornisa";
let palabraNo2 = "cornisa";

function anagrama(palabra1,palabra2){
    //primero tenemos que convertir en arreglo cada palabra, para asi analizar letra por letra
    let strPalabraNo1 = palabra1.split(''); // convertimos la palabra 1 en un array
    let strPalabraNo2 = palabra2.split(''); // convertimos la palabra 2 en un array
    let acumulador = 0;
    // ahora vamos a comparar letra por letra
    for (let i = 0; i < strPalabraNo1.length; i++) {
        for (let j = 0; j < strPalabraNo2.length; j++) {
            if(strPalabraNo1[i]=== strPalabraNo2[j]){
                acumulador= acumulador+1; // acumula cuantas letras fueron correctas, si la palabra tiene 7 letras, el acumulador debe ser 7 y así sucesivamente
            }
        }
    }
    if(palabra1 === palabra2){ // como son las mismas, no son anagramas
        console.log("No es anagrama");
    }else if((acumulador == strPalabraNo1.length) && (acumulador == strPalabraNo2.length)){ // se compara el acumulador con la cantidad de letras que tiene el areglo de cada palabra, ya que el acumulador es el contador de cuantas veces una letra si estuvo comparandola con la otra letra de la palabra
        console.log("Anagrama");
    } else{
        console.log("No es anagrama");
    }
}

anagrama(palabraNo1,palabraNo2);
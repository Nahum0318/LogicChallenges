/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

let textoNatural = "Hola";
let arrayTextoNatural =[];
let arrayClaveMorse=[];
let claveMorse = "";

// convertimos el texto natural en un array
arrayTextoNatural = textoNatural.split('');

// recorremos el arreglo para analizar cada una de las letras y guardarlas en otro arreglo
for (let i = 0; i < textoNatural.length; i++) {
    if (arrayTextoNatural[i]=='a' || arrayTextoNatural[i] =="A") {
        arrayClaveMorse[i]=['.- '];
    }else if (arrayTextoNatural[i]=='b' || arrayTextoNatural[i] =="B") {
        arrayClaveMorse[i]=['-... '];
    }else if (arrayTextoNatural[i]=='c' || arrayTextoNatural[i] =="C") {
        arrayClaveMorse[i]=['-.-. '];
    }else if (arrayTextoNatural[i]=='d' || arrayTextoNatural[i] =="D") {
        arrayClaveMorse[i]=['-.. '];
    }else if (arrayTextoNatural[i]=='e' || arrayTextoNatural[i] =="E") {
        arrayClaveMorse[i]=['. '];
    }else if (arrayTextoNatural[i]=='f' || arrayTextoNatural[i] =="F") {
        arrayClaveMorse[i]=['..-. '];
    }else if (arrayTextoNatural[i]=='g' || arrayTextoNatural[i] =="G") {
        arrayClaveMorse[i]=['--. '];
    }else if (arrayTextoNatural[i]=='h' || arrayTextoNatural[i] =="H") {
        arrayClaveMorse[i]=['.... '];
    }else if (arrayTextoNatural[i]=='i' || arrayTextoNatural[i] =="I") {
        arrayClaveMorse[i]=['.. '];
    }else if (arrayTextoNatural[i]=='j' || arrayTextoNatural[i] =="J") {
        arrayClaveMorse[i]=['.--- '];
    }else if (arrayTextoNatural[i]=='k' || arrayTextoNatural[i] =="K") {
        arrayClaveMorse[i]=['-.- '];
    }else if (arrayTextoNatural[i]=='l' || arrayTextoNatural[i] =="L") {
        arrayClaveMorse[i]=['.-.. '];
    }else if (arrayTextoNatural[i]=='m' || arrayTextoNatural[i] =="M") {
        arrayClaveMorse[i]=['-- '];
    }else if (arrayTextoNatural[i]=='n' || arrayTextoNatural[i] =="Ñ") {
        arrayClaveMorse[i]=['-. '];
    }else if (arrayTextoNatural[i]=='ñ' || arrayTextoNatural[i] =="Ñ") {
        arrayClaveMorse[i]=['--.-- '];
    }else if (arrayTextoNatural[i]=='o' || arrayTextoNatural[i] =="O") {
        arrayClaveMorse[i]=['--- '];
    }else if (arrayTextoNatural[i]=='p' || arrayTextoNatural[i] =="P") {
        arrayClaveMorse[i]=['.--. '];
    }else if (arrayTextoNatural[i]=='q' || arrayTextoNatural[i] =="Q") {
        arrayClaveMorse[i]=['--.- '];
    }else if (arrayTextoNatural[i]=='r' || arrayTextoNatural[i] =="R") {
        arrayClaveMorse[i]=['.-.'];
    }else if (arrayTextoNatural[i]=='s' || arrayTextoNatural[i] =="S") {
        arrayClaveMorse[i]=['...'];
    }else if (arrayTextoNatural[i]=='t' || arrayTextoNatural[i] =="T") {
        arrayClaveMorse[i]=['-'];
    }else if (arrayTextoNatural[i]=='u' || arrayTextoNatural[i] =="U") {
        arrayClaveMorse[i]=['..-'];
    }else if (arrayTextoNatural[i]=='v' || arrayTextoNatural[i] =="V") {
        arrayClaveMorse[i]=['...-'];
    }else if (arrayTextoNatural[i]=='w' || arrayTextoNatural[i] =="W") {
        arrayClaveMorse[i]=['.--'];
    }else if (arrayTextoNatural[i]=='x' || arrayTextoNatural[i] =="X") {
        arrayClaveMorse[i]=['-..-'];
    }else if (arrayTextoNatural[i]=='y' || arrayTextoNatural[i] =="Y") {
        arrayClaveMorse[i]=['-.--'];
    }else if (arrayTextoNatural[i]=='z' || arrayTextoNatural[i] =="Z") {
        arrayClaveMorse[i]=['--..'];
    }else {
        console.log("caracter no valido");
    }
}

// convertimos el arreglo en string
claveMorse = arrayClaveMorse.join('');

console.log(claveMorse);
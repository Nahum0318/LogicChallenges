/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * [ ( c + d ) ] - 5 }
 */

let expresion = '{ a * [ ( c + d ) ] - 5 }'; 
let arrayExpresion = expresion.split(' '); // convertimos el string en array
let cantSignos=0; // catidad a comprobar, se le agregara 1 cada vez que exista un signo (), {}, [] y se comparará
let cantCumplida = 0; // catidad de condiciones cumplidas la cual se comprará y si es igual a la cantidad de signos, entonces la expresión es balanceada
//  ahora tenemos que condicionar si hay un "[" debe haber un "]" y cumplirla para () y {}
for (let i = 0; i < arrayExpresion.length; i++) {
    if ("{"==arrayExpresion[i]) {
        cantSignos++;// como existe un corchete se le agrega un 1 ya que despues se comparará con la variable cantCumplida
        for (let j = 0; j < arrayExpresion.length; j++) {
            if ("}"==arrayExpresion[j]) {
                cantCumplida ++;
            }
        }
    }else if ("["==arrayExpresion[i]) {
        cantSignos++;// como existe un corchete se le agrega un 1 ya que despues se comparará con la variable cantCumplida
        for (let j = 0; j < arrayExpresion.length; j++) {
            if ("]"==arrayExpresion[j]) {
                cantCumplida ++;
            }
        }
    } else if ("("==arrayExpresion[i]) {
        cantSignos++;// como existe un corchete se le agrega un 1 ya que despues se comparará con la variable cantCumplida
        for (let j = 0; j < arrayExpresion.length; j++) {
            if (")"==arrayExpresion[j]) {
                cantCumplida ++;
            }
        }
    }
}
// condición de comprobación, si la cantidad cumplida que es la cantidad de veces que se cumplio que un signo estuviera complementado, es igual a la cantidad de signos que hay en la expresión entonces esta balanceada
if (cantCumplida == cantSignos) {
    console.log("Expresión balanceada");
}else{
    console.log("Expresión no balanceada");
}



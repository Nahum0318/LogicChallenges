/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

// reglas de los números deciamels a binarios Para hacer la conversión de decimal a binario, 
//hay que ir dividiendo el número decimal entre dos y anotar en una columna a la derecha el resto 
//(un 0 si el resultado de la división es par y un 1 si es impar). La lista de ceros y unos leídos de abajo a arriba es el resultado.

var numeroDecimal  = 28; // número que deseamos convertir a binario
let i=0;
var arrayNumeroBinarioInvertido =[];//necesitamos un array inverso, porque los numeros nos los da al inverso, asi que a partir de este cambiamos su posición
var arrayNumeroBinario= []; // array que va a contener los números en el orden correcto
var numeroBinario =0; // variable que tendra el valor del array como número
do { // hacemos un dowhile ya que necesitamos como condición al número decimal
    if((numeroDecimal % 2)==0){ // si el número decimal es multiplo de dos
        arrayNumeroBinarioInvertido[i] = 0; // se le agrega un 0 en nuestro arreglo inverso,
    }else{
        arrayNumeroBinarioInvertido[i] = 1; // si no es multiplo de dos se agrega un 1
    }
    numeroDecimal =parseInt(numeroDecimal/2); // tenemos que estar cambiando el número decimal, por su mitad por cada iteración, ponemos el parse int para convertirlo a enetero
    i=i+1;// acumulador 
} while (numeroDecimal>0); // cuando se llegue al 0  se para la ejecución

// ahora vamos a usar el array invertido para invertirlo y que nos de la notación debida

for (let i = 0; i <arrayNumeroBinarioInvertido.length; i++) {
    arrayNumeroBinario[i]= arrayNumeroBinarioInvertido[arrayNumeroBinarioInvertido.length-i-1]; // le pasamos los numeros del array invertido al original
}
numeroBinario = arrayNumeroBinario.join('');// le damos a numeroBinario el valor del arreglo como un numero y nomo como numeros separados
console.log(numeroBinario);
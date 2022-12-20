// CONVERTIR LA CLAVE MORSE A TEXTO NATURAL
// cada letra enb clave morse esta separada pro un espacio 
// así que tendremos que generar un arreglo donde guardemos cada caracter y cuando haya un espacio poder separarlo para que sea una letra
let claveMorse =".- .- .- .-";
let arrayClaveMorse= [];
let textoNatural="";
let arrayTextoNatural = [' '];

// convertimos el string claveMorse en un array
arrayClaveMorse = claveMorse.split(' '); // este array cotiene cada simbolo en codigo morse, ahora solo es hacer un ciclo que recorra el arreglo
console.log(arrayClaveMorse);
for (let i = 0; i < arrayClaveMorse.length; i++) {
    if (arrayClaveMorse[i] = ['.-']){
        arrayTextoNatural[i]= 'a';
    }else if (arrayClaveMorse[i] = ['-...']){
        arrayTextoNatural[i]= 'b';
    }else if (arrayClaveMorse[i] = ['-.-.']){
        arrayTextoNatural[i]= 'c';
    }else if (arrayClaveMorse[i] = ['-..']){
        arrayTextoNatural[i]= 'd';
    }else if (arrayClaveMorse[i] = ['.']){
        arrayTextoNatural[i]= 'e';
    }else if (arrayClaveMorse[i] = ['..-.']){
        arrayTextoNatural[i]= 'f';
    }else if (arrayClaveMorse[i] = ['--.']){
        arrayTextoNatural[i]= 'g';
    }else if (arrayClaveMorse[i] = ['....']){
        arrayTextoNatural[i]= ['h'];
    }else if (arrayClaveMorse[i] = ['..']){
        arrayTextoNatural[i]='i';
    }else if (arrayClaveMorse[i] = ['.---']){
        arrayTextoNatural[i]= 'j';
    }else if (arrayClaveMorse[i] = ['-.-']){
        arrayTextoNatural[i]= 'k';
    }else if (arrayClaveMorse[i] = ['.-..']){
        arrayTextoNatural[i]= 'l';
    }else if (arrayClaveMorse[i] = ['--']){
        arrayTextoNatural[i]= 'm';
    }else if (arrayClaveMorse[i] = ['-.']){
        arrayTextoNatural[i]= 'n';
    }else if (arrayClaveMorse[i] = ['--.--']){
        arrayTextoNatural[i]= 'ñ';
    }else if (arrayClaveMorse[i] = ['---']){
        arrayTextoNatural[i]= 'o';
    }else if (arrayClaveMorse[i] = ['.--.']){
        arrayTextoNatural[i]= 'p';
    }else if (arrayClaveMorse[i] = ['--.-']){
        arrayTextoNatural[i]= 'q';
    }else if (arrayClaveMorse[i] = ['.-.']){
        arrayTextoNatural[i] = 'r';
    }else if (arrayClaveMorse[i] = ['...']){
        arrayTextoNatural[i] = 's';
    }else if (arrayClaveMorse[i] = ['-']){
        arrayTextoNatural[i] = 't';
    }else if (arrayClaveMorse[i]  = ['..-']){
        arrayTextoNatural[i] = 'u';
    }else if (arrayClaveMorse[i] = ['...-']){
        arrayTextoNatural[i] = 'v';
    }else if (arrayClaveMorse[i] = ['.--']){
        arrayTextoNatural[i] = 'w';
    }else if (arrayClaveMorse[i] = ['-..-']){
        arrayTextoNatural[i] = 'x';
    }else if (arrayClaveMorse[i] = ['-.--']){
        arrayTextoNatural[i] = 'y';
    }else if (arrayClaveMorse[i] = ['--..']){
        arrayTextoNatural[i] = 'z';
    }else{
        console.log("caracter no valido");
    }
}

textoNatural = arrayTextoNatural.join(''); // convertimos el array en un string
console.log(textoNatural);
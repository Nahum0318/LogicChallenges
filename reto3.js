/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// un numero primo solo se puede dividir entre el mismo y el 1, ejemplo el 2,3,5,7,11...
let numero =17;

if((numero ==2) || (numero ==3) || (numero ==5)){
    console.log("Es numero primo");
    
}else if(((numero % 2) !=0)&((numero % 3) !=0)&((numero % 5) !=0) & (numero >= 2)){
    console.log("es numero primo");
}else{
    console.log("no es numero primo");
}

// mostrar numeros primos entre 1 y 100

for (let i = 0; i < 100; i++) {
    if ((i == 2) || (i ==3) || (i==5)) {
        console.log(i);
    }else if( ((i % 2)!=0) & ((i % 3)!=0) & ((i % 5)!=0) & (i >=2)) {
        console.log(i);
    }
}
	
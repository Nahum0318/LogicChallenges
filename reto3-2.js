/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
// los números primos solo se pueden dividir entre si y entre 1;
// eso significa que excluye a todos los pares, tercias y quintas 
let numeroPrimo =67;
if(numeroPrimo == 2 || numeroPrimo == 3 || numeroPrimo == 5){
    console.log(numeroPrimo+ " es un numero primo");
}else if(((numeroPrimo % numeroPrimo)==0) & ((numeroPrimo % 1)==0) & ((numeroPrimo % 2)!=0) & ((numeroPrimo % 3)!=0) & ((numeroPrimo % 5)!=0)) { // que numero primo es divisible entre si y entre 1
 console.log(numeroPrimo+" es un numero primo");
}else{
    console.log("no es numero primo");
}
for (let i = 2; i <=100; i++) {
    if (i == 2  || i == 3 || i ==5) {
        console.log(i);
    } else if(((i% i)==0) & ((i % 1)==0) & ((i % 2)!=0) & ((i % 3)!=0) & ((i % 5)!=0)){
        console.log(i);
    }
}

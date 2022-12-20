/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
let posicion1=0; // posición 1
let posicion2=1; // posicion 2
let posicionSiguiente=0; // posocion siguiente
for (let i = 0; i < 50; i++) { // primeros 50 números
    console.log(posicionSiguiente); // imprimimimos la poscion para que inicie en 0
    posicionSiguiente= posicion1+posicion2; // la posición siguiente es la suma de los dos anteriores, osea p1 y p1
    posicion1=posicion2; // después la posición uno ahora será la posicion 2, así que le adjudicamos us valor
    posicion2=posicionSiguiente; // y ahora la posición 2 tendra el valor de nuesta posicion siguinete 
}
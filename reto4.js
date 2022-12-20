/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

let nombrePoligono ="Rectangulo";
let ladoN1 =12;
let ladoN2 =2;
let area =0;
function AreaPoligonos(poligono,lado1,lado2) {
    switch (poligono) {
        case "Triangulo":
            area =(lado1*lado2)/2;
            break;
        case "Cuadrado":
            area =lado1*lado2;
            break;
        case "Rectangulo":
            area =lado1*lado2;
            break;
        default:
            console.log("Dato incorrecto");
            break;
    }
    return area;
}
console.log(AreaPoligonos(nombrePoligono,ladoN1,ladoN2));

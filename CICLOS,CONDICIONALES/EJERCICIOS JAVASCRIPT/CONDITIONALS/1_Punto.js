/*Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/


var a, b, c
console.log('Ingrese tres numeros para comprobar cual de ellos es el numero de la mitad');

a = Math.round(Math.random() * 100);
console.log(`El primer numero es ${a}`)
b = Math.round(Math.random() * 100);
console.log(`El segundo numero es ${b}`)
c = Math.round(Math.random() * 100);
console.log(`El tercer numero es ${c}`)
console.log('___________________________')
if ((c < a && b > a) || (c > a && b < a)) {
    console.log(`El numero de la mitad es:  ${a}`)
} else if ((c < b && a > b) || (c > b && a < b)) {
    console.log(`El numero de la mitad es:  ${b}`)
} else if ((b < c && a > c) || (b > c && a < c)) {
    console.log(`El numero de la mitad es:  ${c}`)
} else {
    console.log('Todos los numeros son iguales')
}
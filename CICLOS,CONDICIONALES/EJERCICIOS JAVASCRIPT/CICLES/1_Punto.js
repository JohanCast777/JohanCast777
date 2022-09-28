/*1. Determinar los divisores de un número introducido por
teclado */
var x, y, z;
x = Math.round(Math.random() * 1000);
console.log('El numero es: ', x);
z = 0
console.log('_____________________________')
console.log('Los divisores son: ')
for (y = 1; y <= x; y += 1) {
    z = z + 1
    if (x % z == 0) {
        console.log(z);
    }
}
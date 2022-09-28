/*3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
exceda los límites emita un mensaje y finalice el programa*/

var a, contador = 0
a = Math.round(Math.random() * (0 - 9999) + 9999)
console.log('El numero es: ', a)
console.log('______________________________')

if (a <= 9999) {
    while (a >= 1) {
        contador = contador + 1
        a = a / 10
    }
    console.log(contador)
} else {
    console.log('El numero excede los limites')
}
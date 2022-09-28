/*2. Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/

var a, b, c
a = Math.round(Math.random() * 10)
b = Math.round(Math.random() * 10)
c = Math.round(Math.random() * 10)
console.log(`El primer numero es igual a: ${a}`)
console.log(`El segundo numero es igual a: ${b}`)
console.log(`El tercer numero es igual a: ${c}`)
console.log('__________________________________________')

if (a == b && b == c && a == c) {
    console.log('Los tres numeros son iguales')
} else if (a == b && a != c && c != b) {
    console.log('El primer y el segundo numero son iguales')
} else if (a != b && a == c && c != b) {
    console.log('El primer y el tercer numero son iguales')
} else if (a != b && a != c && c == b) {
    console.log('El segundo y el tercer numero son iguales')
} else {
    console.log('Los tres numeros son diferentes')
}
function saludo(hola) {
    document.write('Hola como estas____' + hola)
}
saludo('Hello man this is a test')

/*
1-Genere una medida de temperatura en grados celcius de forma aleatoria
y conviertala a Fahrenheit, Kelvin y Rankine.

2-Resolver la formula cuadratica generando a, b y c aleatoriamente. 
Defina ud un límite para las variables, por ejemplo de 0 a 100
*/


//1-Genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.
console.log('_________________________________________________________________________________________')
var celcius = Math.round(Math.random() * 100);
console.log('Los grados celcius son:  ' + celcius)
console.log('_________________________________________________________________________________________')

function transformacion(celcius) {
    console.log('Los grados celcius anteriormente asignados en grados fahrenheit son: ' + celcius + 'F°')
}
transformacion(celcius * 9 / 5 + 32)

function transformacion2(celcius) {
    console.log('Los grados celcius anteriormente asignados en grados Kelvin son: ' + celcius + 'K°')
}
transformacion2(celcius + 273.15)


function transformacion3(celcius) {
    console.log('Los grados celcius anteriormente asignados en grados Rankine son: ' + celcius + 'R°')
}
transformacion3(celcius * 9 / 5 + 491.67)

//---------------------------------------------------------------------------------------------------//

console.log('El programa generara una temperatura en grados celcius convirtiendola en diferentes medidas de temperatura')
var a = 1;
var b = 50;
var celcius = 38
console.log('La medida en grados celcius es: ', celcius, 'C°');

var fahrenheit = celcius * 9 / 5 + 32;
console.log('Los grados celcius anteriormente asignados en grados fahrenheit son: ', fahrenheit, 'F°');

var Kelvin = celcius + 273.15;
console.log('Los grados celcius anteriormente asignados en grados Kelvin son: ', Kelvin, 'K°');

var Rankine = celcius * 9 / 5 + 491.67;
console.log('Los grados celcius anteriormente asignados en grados Rankine son: ', Rankine, 'R°');

//2-Resolver la formula cuadratica generando a, b y c aleatoriamente. Defina ud un límite para las variables, por ejemplo de 0 a 100
var a = Math.round(Math.random() * 10)
var b = Math.round(Math.random() * 10)
var c = Math.round(Math.random() * 10)
var x = b * b
var form = -b + Math.sqrt((4 * a * c) - x)
var rest = form / (2 * a)

console.log('a:' + a + 'b:' + b + 'c:' + c)

function cuadratica(answer) {
    document.write('Hola como estas____' + answer)
}
cuadratica(form / (2 * a))







//---------------------------------------------------------------------------------------------------//

//(-b±√(b²-4ac))/(2a)

var form, answer, formx, answerx
var a = Math.round(Math.random() * 10)
var b = Math.round(Math.random() * 10)
var c = Math.round(Math.random() * 10)
var x = b * b
console.log('a:' + a + 'b:' + b + 'c:' + c)

form = -b + Math.sqrt((4 * a * c) - x)
answer = form / (2 * a)
console.log('SUMA' + Math.random(answer))

formx = -b - Math.sqrt((4 * a * c) - x)
answerx = formx / (2 * a)
console.log('RESTA' + Math.random(answerx))
/*Solicitar al usuario un número de hasta 9 dígitos e
imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576 */
//153746 => 647351
 
let num=153746;
console.log(num)
function invertirnum(num){
    return Number(num.toString().split('').reverse().join(''))
}
let num=153746;
console.log(num)
console.log(invertirnum(153746))
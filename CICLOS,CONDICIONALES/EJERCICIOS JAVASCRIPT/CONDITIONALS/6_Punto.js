/*Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.*/

a = Math.round(Math.random() * 365)
console.log('EL NUMERO ES:', a)
if (a <= 31) {
    console.log('El mes en el que estas es  ENERO')
} else if (a > 31 && a < 59) {
    console.log('El mes en el que estas es  FEBRERO')
} else if (a > 59 && a < 90) {
    console.log('El mes en el que estas es  MARZO')
} else if (a > 90 && a < 120) {
    console.log('El mes en el que estas es  ABRIL')
} else if (a > 120 && a < 151) {
    console.log('El mes en el que estas es  MAYO')
} else if (a > 151 && a < 181) {
    console.log('El mes en el que estas es  JUNIO')
} else if (a > 181 && a < 212) {
    console.log('El mes en el que estas es  JULIO')
} else if (a > 212 && a < 243) {
    console.log('El mes en el que estas es  AGOSTO')
} else if (a > 243 && a < 273) {
    console.log('El mes en el que estas es  SEPTIEMBRE')
} else if (a > 273 && a < 304) {
    console.log('El mes en el que estas es  OCTUBRE')
} else if (a > 304 && a < 334) {
    console.log('El mes en el que estas es  NOVIEMBRE')
} else if (a > 334 && a < 365) {
    console.log('El mes en el que estas es NOVIEMBRE')
} else {
    console.log('El numero es incorrecto')
}
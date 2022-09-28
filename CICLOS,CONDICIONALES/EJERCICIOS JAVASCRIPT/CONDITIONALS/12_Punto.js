/*
12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la
hora que será dentro de 1 segundo
*/

console.log('El usuario debe agregar las horas, minutos y segundos')

var h, m, s

h = Math.round(Math.random() * 24)
m = Math.round(Math.random() * 60)
s = Math.round(Math.random() * 60)
console.log(`Horas: ${h}`)
console.log(`Minutos: ${m}`)
console.log(`Segundos: ${s}`)
console.log('____________________')
console.log('El programa mostrara un segundo despues de la hora anteriormente asignada')
console.log('____________________')

if ((h < 24) && (m < 59) && (s < 59)) {
    console.log(`hh:${h} mm: ${m} ss: ${s+1}`)
} else if ((h < 24) && (s > 59)) {
    console.log(`hh:${h} mm: ${m+1} ss: ${s=00}`)

} else if ((h < 24) && (m > 59)) {
    console.log(`hh:${h+1} mm: ${m=00} ss: ${s=00}`)
} else { console.log('La hora es incorrecta') }
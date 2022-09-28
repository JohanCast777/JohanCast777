/*13. Solicite al usuario una cantidad numérica que expresa segundos (medida de
    tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso*/


var segundos_usu = Math.round(Math.random() * (1 - 100000) + 100000),
    segundos, minutos, horas
console.log(`Los segundos asignados por el usuario son: ${segundos_usu} segundos`)
console.log('_____________________________________________')

if (segundos_usu > 3600) {
    horas = segundos_usu / 3600
    segundos = segundos_usu % 3600
}
if (segundos > 60) {
    minutos = segundos / 60
    segundos = segundos_usu % 60
}

console.log('Las horas son iguales a:', Math.round(horas))
console.log('Los minutos son iguales a:', Math.round(minutos))
console.log('Los segundos son iguales a:', segundos)
/*Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que
permita calcular el costo de una llamada dados los minutos de duración.*/


var min, minlimit, pcosto, scosto, newvalor, avalor
min = Math.round(Math.random() * 15)
console.log('Los minutos de la llamada fuerón:', min, 'minutos')
console.log('___________________________________')
minlimit = 3

if (min <= minlimit) {
    pcosto = min * 200
    console.log(`El costo de la llamada en ${min} minutos es de ${pcosto} pesos`)
} else {
    pcosto = minlimit * 200
    newvalor = min - minlimit
    avalor = newvalor * 50
    scosto = pcosto + avalor
    console.log('Los minutos extra son', newvalor)
    console.log('___________________________________')
    console.log(`El costo de la llamada en ${min} minutos contando los ${newvalor} minutos extra es de ${scosto} pesos`)
}
/*Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
horas y $5000 por cada hora extra
*/


var salario_semanal = 0;
var horas = Math.round(Math.random() * 120)
console.log('Las horas trabajadas son:', horas)
console.log('___________________________________')
var limiteh = 40
var newvalor, salario_semanal_hex, hex

if (horas <= limiteh) {
    salario_semanal = horas * 2600
    console.log('Las ganancias obtenidas en las ', horas, 'horas son: ', salario_semanal)
} else {
    salario_semanal = limiteh * 2600
    newvalor = horas - limiteh
    hex = newvalor * 5000
    salario_semanal_hex = salario_semanal + hex
    console.log('Las ganancias de las horas extra son', hex)
    console.log('___________________________________')
    console.log('Las ganancias obtenidas en las ', horas, 'horas son de : ', salario_semanal_hex)
}
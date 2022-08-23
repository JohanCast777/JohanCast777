/*Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
horas y $5000 por cada hora extra
*/

var dias, b, i, suma, horaex, a
horaex=0
b=5000
dias=42
a=dias-40
suma=0
console.log('Los dias que va a trabajar la persona son: ', dias)

if(dias<=40){
  suma=dias*2500
  console.log('Las ganancias obtenidas en los ', dias,'dias es: ',suma)
}else if(dias>40){
  b=b*a
  horaex=dias+b
  console.log('Las ganancias obtenidas son: ', horaex) 
}
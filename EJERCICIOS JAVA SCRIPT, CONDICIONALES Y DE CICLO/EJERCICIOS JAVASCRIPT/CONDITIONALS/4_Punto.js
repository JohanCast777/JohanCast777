/*4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/


nota=prompt('Ingrese el numero')

if(nota==0){
   console.log('No aprobado')
}else if(nota==1){
   console.log('Insuficiente')
}else if(nota==2){
   console.log('Basico')
}else if(nota==3){
  console.log('Aceptable')
}else if(nota==4){
  console.log('Alto')
}else if(nota==5){
  console.log('Superior')
}else{
  console.log('El numero asignado no es permitido')
}
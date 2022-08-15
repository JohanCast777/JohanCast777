/*3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
exceda los límites emita un mensaje y finalice el programa*/

var a
a=prompt('Ingrese un numero entre el rango de 0 a 9.999')

if(a>9.999){
  console.log('El numero no es valido')
}else{
  console.log('El numero esta en el rango establecido')
}
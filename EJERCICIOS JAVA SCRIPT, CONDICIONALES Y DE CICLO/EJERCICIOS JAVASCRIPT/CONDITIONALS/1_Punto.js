/*Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/


var a, b, c
console.log('Ingrese tres numeros para comprobar cual de ellos es el numero de la mitad');

a = Math.round(Math.random()*100);
console.log(a)
b = Math.round(Math.random()*100);
console.log(b)
c = Math.round(Math.random()*100);
console.log(c)

if (a>b && b>c){
  console.log('El numnero de la mitad es: ', b)
}else if (b>a && a>c){
  console.log('El numnero de la mitad es: ', a)
}else if (a>c && c>b){
  console.log('El numnero de la mitad es: ', c)
}else if(a==b && b==c && a==c){
  console.log('Todos los numeros son iguales')
}
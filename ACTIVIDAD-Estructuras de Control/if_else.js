/* If se utiliza para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera en cambio
else es para especificar un bloque de código a ejecutar, si la misma condición es falsa*/

var ini=1;
var fin=100;

var n_alea=ini+Math.floor(Math.random()*fin);

console.log('El numero aleatoreo es:',  n_alea);

console.log('_______________________CONDICIONAL__________________')
if(n_alea>=50){
    console.log('El valor es mayor o igual a 50');
    
}
else{console.log('El valor es menor que 50')}
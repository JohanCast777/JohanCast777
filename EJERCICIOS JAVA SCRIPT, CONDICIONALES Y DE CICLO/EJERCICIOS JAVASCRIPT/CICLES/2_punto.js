//2. Determinar si un numero es o no es primo
var x ;
x=Math.round(Math.random()*100);
console.log('EL NUMERO ES: ', x);
if(x%2==0){
  console.log('El numero no es primo')
}else if(x%3==0){
  console.log('El numero no es primo')
}else if(x%5==0){
  console.log('El numero no es primo')
}else if (x%7==0){
  console.log('El numero no es primo')
}else if (x%11==0){
  console.log('El numero no es primo')
}else{
  console.log('El numero es primo')
}

/*2. Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/

var a,b , c
a=prompt('Ingresar primer numero')
b=prompt('Ingresar segundo numero')
c=prompt('Ingresar tercer numero')

if (a==b && b==c && a==c){
  console.log('Los tres numeros son iguales')
}else if(a==b &&  a!=c && c!=b){
  console.log('El primer y el segundo numero son iguales')
}else if(a!=b && a==c  && c!=b){
  consol.log('El primer y el tercer numero son iguales')
}else if(a!=b && a!=c  && c==b){
  consol.log('El segundo y el tercer numero son iguales')
}else{
  console.log('Los tres numeros son diferentes')
}

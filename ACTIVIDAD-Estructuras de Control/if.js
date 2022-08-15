var x=Math.round(Math.random()*50);

console.log(x);
if(x%2==0){
console.log('El numero es par');
}
else{
console.log('El numero es impar')

}

//EJERCICIO NMO MAYOR
var a = Math.round(Math.random()*10);
var b = Math.round(Math.random()*10);

if(a>b){
    console.log(a,'es el numero mayor')
    console.log(b, 'es el numero menor')
}else if(b>a){
   console.log(b, 'es el numero mayor')
   console.log(a, 'es el numero menor')

}else{console.log('Los dos numeros son iguales')}

var x = Math.round(Math.random()*100);
//let x=-19;
//let x=0; 
console.log(x);
if(x>0){
 console.log('El numero es positivo')

}else if(x<0){
    console.log('El numero es negativo')
}else{console.log('El numero es igual a Zero')}


//Menor sin operadores logicos
var a = Math.round(Math.random()*10);
var b = Math.round(Math.random()*10);
var c = Math.round(Math.random()*10);
console.log(a);
console.log(b);
console.log(c);

if(a<b){
    if(a<c){
     console.log(a,'Es el numero menor');
    }
}
else if(b<a){
    if(b<c){
      console.log(b,'Es el numero menor');
    }
}
else if(c<a){
    if(c<b){
      console.log(c,'Es el numero menor');
    }
}
else{console.log('To son igualesdos')}
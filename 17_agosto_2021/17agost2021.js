//Normal Function
//El programa identificara si un numero es o no es perfecto

var suma=0
function perfecto(num) {
    for (let i = 0; i < num; i++) {
        if(num%i==0){
            suma=suma+i
        }
    }
    if(suma==num){
        return `El numero ${num} si es perfecto`
    }else{
        return `El numero ${num} no es perfecto`
    }
}   
console.log(perfecto(5));   

//  Function
var name=(param)=> `Hello ${param} what's up `;
console.log(name('Johan')) 

/*
var suma=0
var perfecto= function (num) {
    for (let i = 0; i < num; i++) {
        if(num%i==0){
            suma=suma+i
        }
    }
    if(suma==num){
        return `El numero ${num} si es perfecto`
    }else{
        return `El numero ${num} no es perfecto`
    }
}   
console.log(perfecto(5));
*/

//Identificar el tipo de triangulo de un triangulo, escaleno, equilatero e isoceles
//Equilatero=Todos sus lados son iguales
//Isoceles=Dos de sus tres lados son iguales
//Excaleno=Todos sus lados son diferentes
/*
var lado1=Math.round(Math.random()*10)
var lado2=Math.round(Math.random()*10)
var lado3=Math.round(Math.random()*10)
*/
function triangulo(a,b,c){

    if((a == b)&& (a == c) && (b == c)){
        return ('Todos los datos son iguales, por tanto es Equilatero')
    }else if((a == b && a !=c) || (a==c && a !=c)) {
        return ('Solo dos de sus datos son iguales, por tanto es Isoceles')
    }else{
        return ('Todos sus lados sson distintos, por tanto es Excaleno')
    }
}

console.log(triangulo(1,3,2))

// Teorema de pitagoras Exercise

var c

function triangulo(x,z){
    return c=Math.sqrt(Math.pow(x,2)+Math.pow(z,2))
}
console.log(triangulo(4,3))

//Cicles, and conditionals Exercises

//Cicles


function primo(x) {
if((x%2==0) && (x%3==0) && (x%5==0)&& (x%7==0) ) {
    return('El numero no es primo')
}else{
    return('El numero es primo')
}
}
console.log(primo(11))
//Conditionals

/*6- Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.*/


function dia_año(a) { 
    if(a<=31){
        return('El mes en el que estas es en ENERO')
      }else if(a>31 && a<59){
        return('El mes en el que estas es en FEBRERO')
      }else if(a>59 && a<90){
        return('El mes en el que estas es en MARZO')
      }else if(a>90 && a<120){
        return('El mes en el que estas es en ABRIL')
      }else if(a>120 && a<151){
        return('El mes en el que estas es en MAYO')
      }else if (a>151 && a<181){
        return('El mes en el que estas es en JUNIO')
      }else if(a>181 && a<212){
        return('El mes en el que estas es en JULIO')
      }else if(a>212 && a<243){
        return('El mes en el que estas es en AGOSTO')
      }else if(a>243 && a<273){
        return('El mes en el que estas es en SEPTIEMBRE')
      }else if(a>273 && a<304){
        return('El mes en el que estas es en OCTUBRE')
      }else if(a>304 && a<334){
        return('El mes en el que estas es en NOVIEMBRE')
      }else if(a>334 && a<365){
        return('El mes en el que estas es en NOVIEMBRE')
      }else{
        return('El numero es incorrecto')
      }
}

console.log(dia_año(Math.round(Math.random()*360)))


/*10- Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
programa debe responder que hora será un segundo después. Ej: ingreso
11:59:59, el programa responde 12:00:00.    */

function horas(h,m,s) {
    if ((h < 24) && (m < 59) && (s < 59)) {
        return(`hh:${h} mm: ${m} ss: ${s+1}`)
    } else if ((h < 24) && (s > 59)) {
        return(`hh:${h} mm: ${m+1} ss: ${s=00}`)
    
    } else if ((h < 24) && (m > 59)) {
        return(`hh:${h+1} mm: ${m=00} ss: ${s=00}`)
    } else { return('La hora es incorrecta') }
}

console.log(horas(Math.round(Math.random()*24), Math.round(Math.random()*60), Math.round(Math.random()*60)))

var horas=(h,m,s)=>{
    if ((h < 24) && (m < 59) && (s < 59)) {
        return(`hh:${h} mm: ${m} ss: ${s+1}`)
    } else if ((h < 24) && (s > 59)) {
        return(`hh:${h} mm: ${m+1} ss: ${s=00}`)
    
    } else if ((h < 24) && (m > 59)) {
        return(`hh:${h+1} mm: ${m=00} ss: ${s=00}`)
    } else { return('La hora es incorrecta') }
}

console.log(horas(Math.round(Math.random()*24), Math.round(Math.random()*60), Math.round(Math.random()*60)))

/*

3 de cada uno Desviación estandar, moda, mediana



5 Condicional, 5 ciclos

*/
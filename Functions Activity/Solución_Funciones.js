/*
1-Relizar 5 ejercicios condicionales con funciones
2-Relizar 5 ejercicios de ciclos con funciones
3-Realizar tres ejercicios con moda, mediana y desviación estandar con funciones
*/

//----------------------------------------SOLUCIÓN_1-----------------------------------------------------------//

//1-Relizar 5 ejercicios condicionales con funciones


//-----------------------------------------PRIMERO---------------------------------------------------//
/*10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
programa debe responder que hora será un segundo después. Ej: ingreso
11:59:59, el programa responde 12:00:00.*/
var horas = (h, m, s) => {
    if ((h < 24) && (m < 59) && (s < 59)) {
        return (`hh:${h} mm: ${m} ss: ${s+1}`)
    } else if ((h < 24) && (s > 59)) {
        return (`hh:${h} mm: ${m+1} ss: ${s=00}`)

    } else if ((h < 24) && (m > 59)) {
        return (`hh:${h+1} mm: ${m=00} ss: ${s=00}`)
    } else { return ('La hora es incorrecta') }
}
console.log(horas(Math.round(Math.random() * 24), Math.round(Math.random() * 60), Math.round(Math.random() * 60)))

//---------------------------------------SEGUNDO---------------------------------------------------//
/*6. Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.*/

function dia_año(a) {
    if (a <= 31) {
        return ('El mes en el que estas es en ENERO')
    } else if (a > 31 && a < 59) {
        return ('El mes en el que estas es en FEBRERO')
    } else if (a > 59 && a < 90) {
        return ('El mes en el que estas es en MARZO')
    } else if (a > 90 && a < 120) {
        return ('El mes en el que estas es en ABRIL')
    } else if (a > 120 && a < 151) {
        return ('El mes en el que estas es en MAYO')
    } else if (a > 151 && a < 181) {
        return ('El mes en el que estas es en JUNIO')
    } else if (a > 181 && a < 212) {
        return ('El mes en el que estas es en JULIO')
    } else if (a > 212 && a < 243) {
        return ('El mes en el que estas es en AGOSTO')
    } else if (a > 243 && a < 273) {
        return ('El mes en el que estas es en SEPTIEMBRE')
    } else if (a > 273 && a < 304) {
        return ('El mes en el que estas es en OCTUBRE')
    } else if (a > 304 && a < 334) {
        return ('El mes en el que estas es en NOVIEMBRE')
    } else if (a > 334 && a < 365) {
        return ('El mes en el que estas es en NOVIEMBRE')
    } else {
        return ('El numero es incorrecto')
    }
}

console.log(dia_año(Math.round(Math.random() * 360)))
    //------------------------------------------TERCERO--------------------------------------------------//

/*2. Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/


var num = (x, y, z) => {
    if (x == y && x == z && y == z) {
        return 'Todos los numeros son iguales'
    } else if ((x == y && x != z) || (x == z && y != z) || (y == z && y != x)) {
        return 'Solo dos numeros son iguales'
    } else {
        return 'Todos los numeros son diferentes'
    }
}
console.log(num(1, 1, 1))

//--------------------------------------------CUARTO------------------------------------------------//
/*5. En un juego de preguntas a las que se responde “Si” o “No” gana quien
responda correctamente las tres preguntas. Si se responde mal a cualquiera de
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?*/

console.log('Responda las siguientes preguntas si son falsas responda no, y si son verdaderas responda si')

var a, b, c, v, f;
v = 'si';
f = 'no'

function preguntas(a, b, c) {
    if (a == v && b == v && c == v) {
        return 'Todas las respuestas son correctas'
    } else if (a == v && b == f && c == f) {
        return 'Solo la primer pregunta es correcta'
    } else if (a == f && b == v && c == f) {
        return 'Solo la segunda pregunta es correcta'
    } else if (a == f && b == f && c == v) {
        return 'Solo la tercera pregunta es correcta'
    } else if (a == v && b == v && c == f) {
        return 'La primera y la segunda son corretas'
    } else if (a == v && b == f && c == v) {
        return 'La primera y la tercera son corretas'
    } else if (a == f && b == v && c == v) {
        return 'La segunda y la tercera son corretas'
    } else if (a == f && b == f && c == f) {
        return 'Todas las respuestas son incorrectas'
    } else {
        return 'Ingresaste un valor incorrecto'
    }
}
alert(preguntas(prompt('1. Colon descubrió América?'), b = prompt('2. La independencia de Colombia fue en el año 1810?'), prompt('3. The Doors fue un grupo de rock Americano?')))

//-----------------------------------------------QUINTO----------------------------------------------//
/*3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
exceda los límites emita un mensaje y finalice el programa*/

var longitud = (a) => {
    if (a > 9.999) {
        return `La cantidad de cifras que tiene el numero ${a} son: ${Math. ceil(Math. log(a) / Math. LN10)}`
    } else {
        return 'El numero esta en el rango establecido'
    }
}
console.log(longitud(prompt('Ingrese un numero entre el rango de 0 a 9.999')))

//----------------------------------------SOLUCIÓN_2-----------------------------------------------------------//

//2-Relizar 5 ejercicios de ciclos con funciones


//-----------------------------------------PRIMERO---------------------------------------------------//
/*2. Determinar si un numero es o no es primo*/



const primo = (numero) => {
    if (numero == 0 || numero == 1 || numero == 4) return `El numero ${numero} no es primo`;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) return `El numero ${numero} no es primo`;
    }
    return `El numero ${numero} es primo`;
}
console.log(primo(2))




//-----------------------------------------SEGUNDO---------------------------------------------------//
/*3. Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este */
var suma = 0;

function perfecto(num) {
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            suma = suma + i
        }
    }
    if (suma == num) {
        return `El numero ${num} si es perfecto`
    } else {
        return `El numero ${num} no es perfecto`
    }
}
console.log(perfecto(6))

//-----------------------------------------TERCERO---------------------------------------------------//
/*9. Calcular la operación x n
sin utilizar la función pow*/

var resultado, potencia, numero
numero = 3
potencia = 2
resultado = numero
while (potencia > 1) {
    resultado = resultado * numero
    potencia--
}
console.log(resultado)







//----------------------------------------SOLUCIÓN_3-----------------------------------------------------------//

//3-Realizar tres ejercicios con moda, mediana y desviación estandar con funciones


//-----------------------------------------PRIMERO---------------------------------------------------//

arreglo = []
for (let i = 0; i <6; i++) {
    
    arreglo[i] =Math.floor(Math.random() * 20) 
}

console.log(arreglo)
var moda = [0,0]
var media = 0 
var mediana = 0
var suma = 0
var desviacion = 0
var sumatoria = 0
for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i]
    
}

media = suma / arreglo.length

console.log('La media es: '+media)

for (let e = 0; e < arreglo.length; e++) {
    sumatoria = sumatoria +(Math.pow(arreglo[e],2))
}

console.log(sumatoria)

desviacion = Math.sqrt((sumatoria / arreglo.length)-Math.pow(media,2))

console.log('La desviación estandar es: '+desviacion)


//------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < arreglo.length; i++) {
    repeticiones = 0
    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[i]==arreglo[j]) {
            repeticiones++;
        } 
    }
    if (repeticiones > moda[1]) {
        moda[0]=arreglo[i]
        moda[1]=repeticiones
    }
}

console.log(`el numero que mas se repite es ${moda[0]} esta rerpetido ${moda[1]} veces `)
arregloordenado = arreglo 
for (let i = 0; i < arregloordenado.length-1; i++) {
    for (let e = 0; e < arregloordenado.length-1-(i); e++) {
        momentaneo = arregloordenado[e]
        if (arregloordenado[e]>arregloordenado[e+1]) {
            arregloordenado[e]=arregloordenado[e+1]
            arregloordenado[e+1]=momentaneo
        }
    }
}
console.log(arregloordenado)
if (arregloordenado.length%2==0) {
    mediana=(arregloordenado[(Math.floor(arregloordenado.length/2))-1]+arregloordenado[(Math.floor(arregloordenado.length/2))])/2
} else {
    mediana=(arregloordenado[Math.floor(arregloordenado.length/2)])
}

console.log('La mediana es:'+ mediana)


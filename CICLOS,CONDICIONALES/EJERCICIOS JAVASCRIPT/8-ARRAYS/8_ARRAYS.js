/*operaciones para desarrollar con arreglos 
{Si copia código de internet, NO use funciones automáticas de JS. Ejemplo función sort para
 ordenar. O función map para otras operaciones}
1- Sumar todos los elementos de un arreglo 
2- Promediar los elementos de un arreglo 
3- Obtener el numero mayor de los elementos de un arreglo
4- Obtener el numero menor de los elementos de un arreglo
6- Buscar un elemento dentro de un arreglo 
7- ordenar un arreglo de menor a mayor (algoritmo de la burbuja)
8- ordenar un arreglo de mayor a menor (algoritmo de la burbuja)*/

//1- Sumar todos los elementos de un arreglo 

let array=[],
    total_n=Math.round((Math.random()*20-10)+10),
    suma=0
console.log('valor de variable t: '+total_n)
for (let i = 0; i < total_n; i++) {
    array[i]=Math.round(Math.random()*100)
}
console.log(array)
for (let i = 0; i < array.length; i++) {
    suma = suma + array[i]
}
console.log(suma)

//2- Promediar los elementos de un arreglo


let v=[],
    t=Math.round((Math.random()*20-10)+10),
    s=0,
    p=0
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let i = 0; i < v.length; i++) {
    s = s + v[i]
}
console.log('la suema es: '+s)
p = s/v.length
console.log('el promedio es: '+p) 

//3- Obtener el numero mayor de los elementos de un arreglo

let v=[],
    t=Math.round((Math.random()*20-10)+10),
    m=0
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
    if (v[i]>m) {
        m = v[i]
    }
}
console.log(v)
console.log('el numero mayor es: '+m)

//4- Obtener el numero menor de los elementos de un arreglo

//6- Buscar un elemento dentro de un arreglo 

//7- ordenar un arreglo de menor a mayor (algoritmo de la burbuja)


//8- ordenar un arreglo de mayor a menor (algoritmo de la burbuja)
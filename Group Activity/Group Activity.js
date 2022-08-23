/*
1-Agregar producto
2-Eliminar
3-Ordenar
4-Sobre escribir
5-Buscar
6-Salir
*/

var frutas = ['Manzana','Banano','Uva', 'Fresa','Naranja'];
console.log('Frutas:  ', frutas);
alert('Las instrucciones que se les puede dar al menu son las siguientes: agregar, eliminar, ordenar, sobre escribir, buscar, salir  ');
var insert=prompt('Agregue la instrucción que desea realizar')

var a='agregar'
var b='eliminar'
var c='ordenar'
var d='sobre escribir'
var e='buscar'
var f='salir'
var o

if (insert==a) {
    frutas.push(prompt('Agregar elemento'))
    console.log(frutas)
} else if (insert==b) {
    var x =prompt('Ingresar primeramente la posición que desea eliminar')
    var y =prompt('Ingresar cantidad de valores que desea eliminar')
    frutas.splice(x, y)
    console.log(frutas)
}else if (insert==c) {
    alert('El programa organizara los datos')
    frutas.sort();
    console.log(frutas)
}else if (insert==d) {
    var z =prompt('Ingresar posicion que desea sobre escribir')
    var x =prompt('Ingresar el valor que desee sobre escribir')
    frutas[z] = x;
    console.log(frutas)
}else if (insert==e) {
    if ( o = frutas.find(function(e) {return e === prompt('Ingresar el valor')})){

        console.log('El valor si se encuentra en el array') 
    }else {
        console.log('El valor si se encuentra en el array')
    }
}else if (insert==f)  {
    window.close()
}else{
    alert('La instrucción anteriormente asignada no es correcta')
}

/*11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de
DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y
1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco
billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de
dos mil.*/
var cantidad_dinero = Math.round(Math.random() * (10000 - 99999) + 99999),
    cincuentamil = 50000,
    veintemil = 20000,
    diezmil = 10000,
    cincomil = 5000,
    dosmil = 2000,
    mil = 1000,
    contador1 = 0,
    contador2 = 0,
    contador3 = 0,
    contador4 = 0,
    contador5 = 0,
    contador6 = 0
console.log(`La cantidad de dinero que tiene el usuario es de ${cantidad_dinero}`)
console.log('________________________________________')
console.log('La persona necesita un total de billetes como el siguiente:  ')
if (cantidad_dinero >= cincuentamil) {
    do {
        cantidad_dinero = cantidad_dinero - cincuentamil
        contador1 = contador1 + 1
    } while (cantidad_dinero >= cincuentamil);
    console.log(` ${contador1} billete de ${cincuentamil}`)

}
var cantidad_sobrante1 = cantidad_dinero
    ///////////////////////////////
if (cantidad_sobrante1 >= veintemil) {
    do {
        cantidad_sobrante1 = cantidad_sobrante1 - veintemil
        contador2 = contador2 + 1
    } while (cantidad_sobrante1 >= veintemil);
    console.log(`${contador2} billete de ${veintemil}`)

}
var cantidad_sobrante2 = cantidad_sobrante1
    ///////////////////////////////
if (cantidad_sobrante2 >= diezmil) {
    do {
        cantidad_sobrante2 = cantidad_sobrante2 - diezmil
        contador3 = contador3 + 1
    } while (cantidad_sobrante2 >= diezmil);
    console.log(` ${contador3} billete de ${diezmil}`)

}
var cantidad_sobrante3 = cantidad_sobrante2
    ///////////////////////////////
if (cantidad_sobrante3 >= cincomil) {
    do {
        cantidad_sobrante3 = cantidad_sobrante3 - cincomil
        contador4 = contador4 + 1
    } while (cantidad_sobrante3 >= cincomil);
    console.log(` ${contador4} billete de ${cincomil}`)

}
var cantidad_sobrante4 = cantidad_sobrante3
    ///////////////////////////////
if (cantidad_sobrante4 >= dosmil) {
    do {
        cantidad_sobrante4 = cantidad_sobrante4 - dosmil
        contador5 = contador5 + 1
    } while (cantidad_sobrante4 >= dosmil);
    console.log(`${contador5} billete de ${dosmil}`)

}
var cantidad_sobrante5 = cantidad_sobrante4
    ///////////////////////////////
if (cantidad_sobrante5 >= mil) {
    do {
        cantidad_sobrante5 = cantidad_sobrante5 - mil
        contador6 = contador6 + 1
    } while (cantidad_sobrante5 >= mil);
    console.log(` ${contador6} billete de ${mil}`)

}
var cantidad_sobrante6 = cantidad_sobrante5
console.log('________________________________________')
console.log(`El dinero sobrante es igual a: ${cantidad_sobrante6}`)
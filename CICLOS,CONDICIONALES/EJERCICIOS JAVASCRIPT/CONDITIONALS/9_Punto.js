/*9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
posterior*/


var day = 24
var month = 9
var year = 2022
var d, m, y
console.log('Dia, Mes y Año actual: ')
console.log(`Dia: ${day}, Mes: ${month},Año:${year}`)
console.log('________________________________________')

function dfaltantes(a, b, c) {
    console.log('Los datos que se van a consultar son los siguientes')
    console.log(`Dia:${a}, Mes:${b}, Año=${c}`)
    if (c < year) {
        y = year - c
    } else if (c > year) {
        y = c - year
    }
    if (b < month) {
        m = month - b
    } else if (b > month) {
        m = b - month
    }
    if (a < day) {
        d = day - a
    } else if (a > day) {
        d = a - day
    }

    if (year > c) {
        console.log('___________________________________')
        console.log(`Los dias faltantes para la fecha actual son ${d}, los meses son ${m} y los años son ${y}`)
        console.log('___________________________________')
    } else {
        console.log('___________________________________')
        console.log(`Los dias transcurridos desde la fecha actual hasta la consultada son ${d}, los meses son ${m} y los años son ${y}`)
        console.log('___________________________________')
    }


}
dfaltantes(Math.round(Math.random() * 31), Math.round(Math.random() * 12), Math.round(Math.random() * 10000))
function base() {
    return new Promise((resolve, reject) => {
        resolve();
        console.log('This is a test')

    });
}

base().then(() => {
    console.log('Hello bros')
})

//----------------------------------------------------------------
const base = new Promise((resolve, reject) => {
        resolve();
        console.log('This is a test')

    })
    .then(() => {
        console.log('Hello bros')
    })

//----------------------------------------------------------------

base().then(() => {
        console.log('This is a test')
    })
    .then((x) => {
        console.log()
    })

//----------------------------------------------------------------
/*
1-Crear una funcciómn que reciba como parametro dos callbacks y una
cadena de texto, una función cuenta la cantidad de mayusculas, y otra las minusculas

2- LLenarnar un array, con numeros aleatorios, sumar todos los numeros del array y sacar el promedio
*/

var may = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var cont = 0
var cont2 = 0
console.log('______________________________________________________________________________________________________________________________')

var text = 'HoasfjasHUISHFIAS'
const gral = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);

        setTimeout(() => {
            console.log('Todo el texto en mayusculas:', text.toUpperCase())
        }, 6000);
        setTimeout(() => {
            console.log('Todo el texto en minusculas:', text.toLowerCase())
        }, 9000);
    })
    .then(() => {
        for (let j = 0; j < may.length; j++) {
            for (let i = 0; i < text.length; i++) {
                if (text[i] == may[j]) {
                    cont = cont + 1
                }
            }

        }
        console.log('La cantidad de mayusculas es: ', cont)

    })
    .then(() => {
        for (let j = 0; j < min.length; j++) {
            for (let i = 0; i < text.length; i++) {
                if (text[i] == min[j]) {
                    cont2 += 1
                }
            }
        }
        console.log('La cantidad de minusculas es: ', cont2)
    })

//----------------------------------------------------------------

/*var array = [];
var x = Math.round(Math.random() * 10)
console.log('La cantidad de valores del array es:', x)
var sum = 0
var prom
console.log('______________________________________________')
for (let i = 0; i < x; i++) {
    array[i] = Math.round(Math.random() * 10)
}

for (let j = 0; j < array.length; j++) {
    sum = sum + array[j]
    prom = sum / array.length
}
console.log(array)
console.log('______________________________________________')
console.log('La suma de todos los valores del array es: ', sum)
console.log('______________________________________________')
console.log('El promedio del array es: ', prom)*/

//----------------------------------------------------------------

var array = [];
var x = Math.round(Math.random() * 10)
var sum = 0
var prom
console.log('______________________________________________')

const math = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
        setTimeout(() => {
            console.log('La cantidad de valores del array es:', x)
            console.log('______________________________________________')
        }, 2000);
    })
    .then(() => {
        for (let i = 0; i < x; i++) {
            array[i] = Math.round(Math.random() * 10)
        }
        console.log('El array es: ', array)
    })
    .then(() => {
        for (let j = 0; j < array.length; j++) {
            sum = sum + array[j]
            prom = sum / array.length
        }
        console.log('La suma de todos los valores del array es: ', sum)
        console.log('El promedio del array es: ', prom)
    })



//--READ PROMESAS AND ASIGN  AND AWAKE
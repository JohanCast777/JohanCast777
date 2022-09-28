/*

CREACIMIENTO EXPONENCIAL:


N=Tamaño poblaion 

 0=10

 r= cambio poblacional

 nacimientos merte

 R=Tasan ceecimiento
 R= nacimientos-muerte/N

r*N


______________

SOLUCION ALEBRAICA

N(t)=N(1+r)t

*/


var N = Math.round(Math.random() * (10000 - 1000) + 1000)
console.log('Población inicial:  ' + N)

console.log('________________________________________________')


var t, f

function avrg(tiempo) {
    t = (1 + 0.3)
    f = N * Math.pow(t, tiempo)
    console.log(`El aumento de especies en un tiempo de ${tiempo}, es `, f)
}

avrg(Math.round(Math.random() * (1 - 10) + 10))

/*
r=  MAX= 30% 

*/


var N = Math.round(Math.random() * (10000 - 1000) + 1000)
console.log('Población inicial:  ' + N)
console.log('_____________________________________')
var nacimiento = Math.round(Math.random() * (1 - 10) + 10)
console.log()
var mortandad = Math.round(Math.random() * (1 - 3) + 3)
var totalnacimiento = nacimiento * 100/N
var totalmortandad = mortandad * 100/N
var r = totalnacimiento - totalmortandad / N
console.log('Taza crecimiento', r)
console.log('________________________________________________')
var t, f

function avrg() {
    var tiempos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    t = Math.round((1 + r))
    for (let i = 0; i < tiempos.length; i++) {
        var a = N * Math.pow(t, tiempos[i])

        console.log(`El aumento de especies en el tiempo de ${tiempos[i]} , es igual a ${a} `)
    }
}
avrg()





/*  Hacer dor promesas con base en el ejercicio


10% poblacion final: entregar 1 casa 


Hacer 1 promesa=calcular cantidad población que tiene casa, con set time out con 5 minutos de retraso 

Hacer 2 promesa= Calcular crecimiento neto, con set time out con 5 minutos de retraso  

*/


var N = Math.round(Math.random() * (10000 - 1000) + 1000)
console.log('Población inicial:  ' + N)
console.log('_____________________________________')
var nacimiento = Math.round(Math.random() * (1 - 10) + 10)
console.log('Los nacimientos son iguales a: ',nacimiento,'%')
console.log('________________________________________________')
var mortandad = Math.round(Math.random() * (1 - 3) + 3)
console.log('La mortandad es igual a: ', mortandad,'%')
var totalnacimiento = nacimiento /100*N
console.log('________________________________________________')
console.log('El total de nacimiento es igual a: ',totalnacimiento)
console.log('________________________________________________')
var totalmortandad = mortandad / 100*N
console.log('El total de mortandad es igual a: ',totalmortandad)
console.log('________________________________________________')
var r = totalnacimiento - totalmortandad / N
console.log('Taza crecimiento', r)
console.log('________________________________________________')
var t, f

const prom1=()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()    
        }, 3000);
    })
}




prom1()
    .then(()=>{
        var tiempos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    t = Math.round((1 + r))
    for (let i = 0; i < tiempos.length; i++) {
        var a = N * Math.pow(t, tiempos[i])
        console.log(`El aumento de especies en el tiempo de ${tiempos[i]} , es igual a ${a} `)
        console.log('__________________________')
    }   
    })
    .then(()=>{
        var tiempos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // TNcrecimiento ===   (valorfinal - valor inicial/valor inicial)*100
        var tncrecimiento= ((tiempos[9]-tiempos[0])/tiempos[0])*100
        console.log('El crecimiento neto es igual a: ', tncrecimiento)
    })

    const prom2=()=>{
        return new Promise((resolve)=>{
            
        })
    }

    prom2()
    .then(()=>{

    })
//SETTIMEOUT

setTimeout(() => {
    console.log('Esto es una prueba');
}, 3000);

//SETINTERVAL

setInterval(() => {
    console.log('Esto es una prueba');
}, 3000);


//SETCLEAR

var a = setInterval(() => {
    console.log('This is a test of the setinterval');
}, 2000);

clearInterval(a);
//----------------

var test = setInterval(function(){
   console.log('This is a short test')
},3000);

var test = setInterval(()=>console.log('This is a test'), 3000);

setTimeout(() => {
    clearInterval(test)
}, 7000);



//CALLBACK /*Función utilizada como parametro en otra función*/

function mensaje(nombre) {
    nombre();
}

function callback() {
    console.log('Yo soy un callback')
}

mensaje(callback)

//----------------

function f1() {
    setTimeout(function() {
        console.log('Mensaje1')
    }, 2000)
}

function f2() {
    console.log('Mensaje2')
}
f1()
f2()

//--------

function f1(fn) {
    setTimeout(function() {
        console.log('Mensaje1')
        fn()
    }, 2000)
}                  

function f2() {
    console.log('Mensaje2')
}

f1(f2)


//Escriba un programa que escriba un contador de 1 a 1, donde cada numero se muestre cada dos segundos

for (let i = 0; i < 10; i++) {
 setTimeout(() => {
    console.log(i);
  },i*1000);
}

/*function receptora(callback, parametro){
    setTimeout(()=>)
}*/ 



/*Crear una funcciómn que reciba como parametro dos callbacks y una
cadena de texto, una función cuenta la cantidad de mayusculas, y otra las minusculas*/


var may = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let min = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o','p','q','r','s','t','u','v','w','x','y','z']
var cont=0
var cont2=0
//var text='HoasfjasHUISHFIAS'

//console.log('La cadena de texto es:',text|)
console.log('______________________________________________________________________________________________________________________________')

function gral(callback1, callback2, text){   
    
    console.log('El texto que se va a ejecutar es:',text)
    setTimeout(() => {
        callback1(text)
    }, 3000);
    setTimeout(() => {
        callback2(text)
    }, 5000);
    
    setTimeout(() => {
        console.log('Todo el texto en mayusculas',text.toUpperCase())    
    }, 7000);
    setTimeout(() => {
        console.log('Todo el texto en minusculas',text.toLowerCase())
    }, 9000);
    
}

function mayusculas(a){
    for (let j= 0; j< may.length; j++) {
        for (let i= 0; i < a.length; i++) {
            if(a[i]==may[j]){
                cont= cont +1    
            }
        }    
    
    }
    console.log('La cantidad de mayusculas es: ',cont)
    
}

function minusculas(b){
    for (let j= 0; j< min.length; j++) {
        for (let i= 0; i < b.length; i++) {
            if(b[i]==min[j]){
                cont2 += 1    
                
            }
        }    
    }
    console.log('La cantidad de minusculas es: ',cont2)
    
}

gral(mayusculas,minusculas, 'HoasfjasHUISHFIAS')


/*
var may = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let min = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o','p','q','r','s','t','u','v','w','x','y','z']

var text='HolaHHH'
var cont=0

for (let j= 0; j< may.length; j++) {
    for (i= 0; i < text.length; i++) {
        if(text[i]==may[j]){
            cont= cont +1    

        }
    }    

}
console.log(cont)
*/


new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
.then(() => {
    throw new Error('Algo falló');

    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});



/*
angulllar 
reactjs
vuejs
*/
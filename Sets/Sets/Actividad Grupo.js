var may = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let min = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o','p','q','r','s','t','u','v','w','x','y','z']
var cont=0
var cont2=0
var text='HoasfjasHUISHFIAS'

console.log('La cadena de texto es:',text)
console.log('______________________________________________________________________________________________________________________________')

function gral(callback1, callback2){    
    setTimeout(() => {
        callback1()
        callback2()
    }, 2000);
    
    console.log(text.toUpperCase())
    console.log(text.toLowerCase())
}

function mayusculas(){
    for (let j= 0; j< may.length; j++) {
        for (let i= 0; i < text.length; i++) {
            if(text[i]==may[j]){
                cont= cont +1    
            }
        }    
    
    }
    console.log('La cantidad de mayusculas es: ',cont)
    
}

function minusculas(){
    for (let j= 0; j< min.length; j++) {
        for (let i= 0; i < text.length; i++) {
            if(text[i]==min[j]){
                cont2 += 1    
                
            }
        }    
    }
    console.log('La cantidad de minusculas es: ',cont2)
    
}

gral(mayusculas,minusculas)

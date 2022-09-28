var numero = 1000;
var sumadivisores = 0;
var cantidadperfectos = 0;

for(let i = 1; i <= numero; i+=1){
    for(let n = 1; n < i; n+=1){
        if(i % n === 0){
            sumadivisores += n;
        }
    }
    if(sumadivisores === i){
        console.log(i + 'es un numero perfecto')
        cantidadperfectos += 1;
    }
    sumadivisores = 0
}
console.log(' hay' + cantidadperfectos+ ' numeros perfectos')
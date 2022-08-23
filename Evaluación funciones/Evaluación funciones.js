/*
1-Escriba una función que llene un array con n numeros(n debe ser el minimo y 25 el maximo)
2-Escriba una función que reciba el array lleno y retorne otro arreglo con la diferencia que
 hay entre el valor de cada elemento y la media del arreglo
3-Escriba una función que reciba el arreglo con las diferencias del punto anterior y diga de 
cada uno cuanto le falta y cuanto le sobra segun el caso con referencia a la media
*/

//1---------------------------------------------------------------

var array=[]
var array_2=[]
var limite=Math.round(Math.random()*25); console.log(`El limite del array es: ${limite}`)
var aux, suma
suma=0


for(var i=0; i<limite;i++){
    array[i]=Math.round(Math.random()*25)
}
console.log(array)


function llenar(x){
 for (var j = 0; j < limite; j++) {
    x[j]=Math.round(Math.random()*25)
    
 }
 return x
}
console.log(llenar(array_2))


var array_3=[array.filter(element => array_2.includes(element))]
var lastareglo=()=> 'Los numerbos que se repiten en los dos arrays son: '+ array_3
console.log(lastareglo())

//MEDIA ARREGLOS
for (let h = 0; h < limite; h++) {
     suma = suma + array[h]
}
var media1 = suma / limite
console.log(`La media del primer array es ${media1}`)


for (let w = 0; w < limite; w++) {
    suma = suma + array_2[w]
}
var media2 = suma / limite
console.log(`La media del segundo array es ${media2}`)

function sobra(x,y){
    if(media1>media2){
        
    }
}











function reci_array(x){ 
            for (var a = 0; a < (limite - j); a++) {
                if (x[i] > array_2[j + 1]) {
                    aux = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = aux;
                }
            }
            return x; 
}
    
console.log(reci_array(array))
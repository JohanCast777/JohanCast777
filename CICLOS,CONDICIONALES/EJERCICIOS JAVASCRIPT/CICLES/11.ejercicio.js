/*Solicitar 2 números al usuario e imprimir el cociente y el
residuo del mayor en el menor sin utilizar la división ni el mod.*/
 var dividendo = Math.round(Math.random()*10);
 var divisor= Math.round(Math.random()*10);
 var cociente= 0;
 console.log(dividendo )
 console.log(divisor)

 if( dividendo > 0){//las restas mediante un bucle, mientras el resultado sea mayor de 0.

    cociente++;
    dividendo = dividendo-divisor;								
  } 
  console.log ('cociente'+ cociente);
  console.log ('resto'+(-dividendo));
 
 /*else{ 
    console.log(`División = ${x/y}`)//operadores aritmeticos 
    console.log(`Modulo= ${x%y}`)
 }*/
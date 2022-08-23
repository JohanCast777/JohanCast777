//La declaración switch se utiliza para realizar diferentes acciones en función de diferentes condiciones.


var ini=1;
var fin=7;

var dia=ini+Math.round(Math.random()*fin);

switch(dia){

 case 1:
    dia='Lunes';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;
    
 case 2:
    dia='Martes';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;
    
 case 3:
    dia='Miercoles';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;
    
 case 4:
    dia='Jueves';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;
    
 case 5:
    dia='Viernes';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;

 case 6:
    dia='Sabado';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;

 case 7:
    dia='Domingo';
    console.log('El dia aleatorio seleccionado es:',dia);
    break;
        
}


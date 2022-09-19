var persona={ //This is a object
    name:'Johan',      //keys and values 
    age:18,
    datoscompletos:()=>console.log(`Los datos completos son: ${persona.name} ${persona.age}`)//This is the context
}
console.log(persona)

//Add dates of a object
persona.adress='kra 38 #7 este'
console.log(persona)
persona.datoscompletos()

//Replace dates of a object
persona.name='Julian'
console.log(persona)
console.log(persona.name)
//Dlelete dates of a object
delete persona.adress
console.log(persona)


/*-------------------------------------------||||Activity||||--------------------------------------------------------------------*/
/*cuatro figuras geometricas
area perimetro*/   
/*Funcion que reciba como parametro un objeto, e indicar si es o no es circunferencia*/



//--------------------------------------------------------------------------------------------

var triangulo={
    cantidadlados:3,
    area:(lado1,lado2)=>{
        var a=lado1*lado2/2
        return a
    },
    perimetro:(lado1,lado2,lado3)=>{
        var p=lado1+lado2+lado3
        return p
    }
}
//--------------------------------------------------------------------------------------------

var cuadrado={
    cantidadlados:4,
    area:(lado1,lado2)=>{
        var a=(lado1*lado2)
        return a
    },
    perimetro:(lado1,lado2,lado3,lado4)=>{
        var p=(lado1+lado2+lado3+lado4)
        return p
    }
}

//--------------------------------------------------------------------------------------------

let Hexagono={
    cantidadlados:8,
    longitud:6,
    perimetro:()=>{
        var perimetro=6*Hexagono.longitud
        return perimetro
    },
    area:()=>{
        var apotema=5
        var per=(Hexagono.perimetro()*apotema)/2
        return per
    }
}
console.log(Hexagono.area())

//--------------------------------------------------------------------------------------------
var pi= 3.1416
const circulo={
    cantidadlados:0,
    area:(radio)=>{
        var ar= pi*Math.pow(radio,2)
        return ar
    },
    perimetro:(radio)=>{
        var per=2*pi*radio
        return per
    }
    
}
console.log(circulo.perimetro(2))

function objeto(x){
    if(x.cantidadlados==0){
        return('El objeto es una circunferencia')
    }else{
        return('El objeto no es una circunferencia')
    }
}
console.log(objeto(Hexagono))

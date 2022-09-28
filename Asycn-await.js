function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
    }
    async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
    }
    talk(2);
    talk(4);
    talk(8);


    /*
    Convertir de flecha a normal
    Hacer ejercicios____13.3
    */

//PRIMER PUNTO
    function saySomething(x){
        return new Promise(function(resolve, reject){
        setTimeout(()=>{
        resolve("something" + x);
        }, 2000);
        });
        }
        async function talk(x) {
        const words = await saySomething(x);
        console.log(words);
        }
        talk(2);
        talk(4);
        talk(8);    

//SEGUNDO PUNTO
var count=Math.round(Math.random()*10)
        for (let i = 1; i < 10; i++){
            setTimeout(() => {
            count= count + 1
                console.log(count)    
            }, 1000);
       }





function karen(x){
    return new Promise(resolve=>{
//var count=Math.round(Math.random()*10)
        for (let i = 1; i < 10; i++){
            setTimeout(() => {
            x= x + 1
                console.log(x)    
            }, 1000);
       }
    resolve(x);
    });
    }
    async function instancia(x) {
        const words = await karen(x);
        console.log(words);
        }
instancia(5)





let cnt = 0;
 function outputTime(val) {
 return new Promise(resolve => {
 setTimeout(() => {
 cnt++;
 resolve(`valor de x ${val}, contador${cnt}`);
 }, 1000);
 });
 }
 async function aCall(val) {
 console.log(`Listo ${val}, contador ${cnt}`);
 const res = await outputTime(val);
 console.log(res);
 }
 for (let x = 1; x < 4; x++) {
 aCall(x);
 }
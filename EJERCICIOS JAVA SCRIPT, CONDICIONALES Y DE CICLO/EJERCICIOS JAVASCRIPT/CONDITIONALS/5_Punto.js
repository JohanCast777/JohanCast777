/* 5. En un juego de preguntas a las que se responde “Si” o “No” gana quien
responda correctamente las tres preguntas. Si se responde mal a cualquiera de
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?
*/

console.log('Responda las siguientes preguntas si son falsas o verdaderas')
var a, b, c, v;
a=prompt('1. Colon descubrió América?')
b=prompt('2. La independencia de Colombia fue en el año 1810?')
c=prompt('3. The Doors fue un grupo de rock Americano?')
v = 'verdadero'; 
if (a==v && b==v && c==v){
  console.log('Todas las respuestas son correctas')
}else if (a==v && b==v && c!=v){
  console.log('La primera y la segunda son corretas')
}else if (a==v && b!=v && c==v){
  console.log('La primera y la tercera son corretas')
}else if (a!=v && b==v && c==v){
  console.log('La segunda y la tercera son corretas')
}else{
  console.log('Todas las respuestas son incorrectas')
}
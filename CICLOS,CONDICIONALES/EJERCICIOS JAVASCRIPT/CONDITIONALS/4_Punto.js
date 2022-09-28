/*4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/

function promedio(nota) {
    switch (nota) {
        case 0:
            console.log(`La nota es igual a ${nota}, por ende su promedio es NO APROBADO`)
            break;
        case 1:
            console.log(`La nota es igual a ${nota}, por ende su promedio es INSUFICIENTE`)
            break;
        case 2:
            console.log(`La nota es igual a ${nota}, por ende su promedio es BASICO`)
            break;
        case 3:
            console.log(`La nota es igual a ${nota}, por ende su promedio es ACEPTABLE`)
            break;
        case 4:
            console.log(`La nota es igual a ${nota}, por ende su promedio es ALTO`)
            break;
        case 5:
            console.log(`La nota es igual a ${nota}, por ende su promedio es SUPERIOR`)
            break;
        default:
            console.log('La nota no es aceptada ');
    }
}
promedio(Math.round(Math.random() * (0 - 5) + 5))
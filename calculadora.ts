const numero1: number = +process.argv[2];
const numero2: number = +process.argv[3];
const simbolo: string = process.argv[4];
if (simbolo === '+') {
    console.log('La suma es: ' + (numero1 + numero2));
} else if (simbolo === '-') {
    console.log('La resta es: ' + (numero1 - numero2));
} else if (simbolo === '/') {
    if (numero2 === 0) {
        console.log('Error, no se puede dividir por 0');
    } else {
        console.log('La división es: ' + (numero1 / numero2));
    }
} else if (simbolo === '*') {
    console.log('La multiplicación es: ' + (numero1 * numero2));
} else {
    console.log('El símbolo recibido no se reconoce: ' + simbolo);
}
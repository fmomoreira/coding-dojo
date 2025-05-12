const frutas = ["Laranja", "Pera", "Manga", "Uva"];

// Método 1: Usando reverse() - O mais performático para arrays pequenos
console.log('Método 1:', [...frutas].reverse());

// Método 2: Usando reduceRight - Funcional
const reversedFrutas = frutas.reduceRight((acc, fruta) => [...acc, fruta], []);
console.log('Método 2:', reversedFrutas);

// Método 3: Loop otimizado - Mais performático para arrays grandes
function reverseArray(arr) {
    const length = arr.length;
    const reversed = new Array(length);
    
    for (let i = 0; i < length; i++) {
        reversed[length - 1 - i] = arr[i];
    }
    
    return reversed;
}

console.log('Método 3:', reverseArray(frutas));


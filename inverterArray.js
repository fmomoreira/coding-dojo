const frutas = ["Laranja", "Pera", "Manga", "Uva"];
const arrayInvertidfo = []

let contador = 0
const ArrayInvertido = []
while (true) {
    contador++
    const fruta = frutas.slice(-contador)[0]
    arrayInvertidfo.push(fruta)
    if (fruta === frutas[0]) {
        break
    }
}
console.log(arrayInvertidfo)

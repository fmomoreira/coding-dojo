const pessoa = {
    nome: "John",
    idade: 30,
    cidade: "New York"
};



const novaPessoa = {
    ...pessoa,
    nome: "Jane",
    idade: 25
};

const verificarIgualdade = pessoa === novaPessoa;

console.log(novaPessoa);
console.log(verificarIgualdade);
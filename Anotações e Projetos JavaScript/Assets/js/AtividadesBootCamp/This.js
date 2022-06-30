const Pessoa1 = {
    nome: 'Pedro',
    idade: 24,
};

const Pessoa2 = {
    nome: 'Maria',
    idade: 70,
};

const Animal = {
    nome: 'Leão',
    idade: 6,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.apply(Animal, [10]));

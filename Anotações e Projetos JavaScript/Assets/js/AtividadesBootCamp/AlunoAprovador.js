const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(array, mediaFinal){
    let aprovados = [];
    for(let i=0; i < array.length; i++){

        const {nota, nome} = array[i];
        if(nota >= mediaFinal){
            aprovados.push(nome); 
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6))

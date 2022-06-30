function calculadora(){
    var operacao;
    let repetir, n1, n2, resultado;

    do{
        operacao = prompt('Escolha uma operacao:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (^)');
        while(!operacao || operacao >= 7){
            alert('Valor inválido de operação');
            operacao = prompt('Escolha uma operacao:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (^)');
        }

        n1 = Number(prompt('Insira um valor:'));
        n2 = Number(prompt('Insira outro valor'));
        while(!n1 || !n2){
            alert('Valor inválido de operação');
            n1 = Number(prompt('Insira um valor:'));
            n2 = Number(prompt('Insira outro valor'));
        }

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
        }
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
        }
        function divisao(){
            if(n2 === 0){
                alert('valor inválido para n2'); 
            }
            else{
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            }
        }
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`);
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
        }

        if(operacao == 1){
            soma ();
        }else if(operacao == 2){
            subtracao();
        }else if(operacao == 3){
            multiplicacao();
        }else if(operacao == 4){
            divisao();
        }else if(operacao == 5){
            divisaoInteira();
        }else if(operacao == 6){
            potenciacao();
        }
        
        repetir = prompt('Desejar Repetir a operação\n Sim - 1\n Não - 0');

    }while(repetir == 1);
}
calculadora();
function confereNum(num1, num2){
var resultado;
resultado = num1+num2;
/*
(num1 == num2) ? alert('Num1 e Num2 são iguais') : alert('Num1 e Num2 não são iguais');
(resultado>10) ? alert('Num1 + Num2 é maior que 10') : alert('Num1 + Num2 é menor que 10');
(resultado<20) ? alert('Num1 + Num2 é menor que 20') : alert('Num1 + Num2 é maior que 20');
*/
if(num1 == num2 && resultado>=10 && resultado<20){
    return alert('Os números são iguais, a soma é maior que 10 e menor que 20');
}else if(num1 == num2 && resultado>=20){
    return alert('Os números são iguais, a soma é maior que 10 e maior que 20');
}else if(num1 == num2 && resultado<10){
    return alert('Os números são iguais, a soma é menor que 10 e menor que 20');
}else if(num1 != num2 && resultado>=10 && resultado<20){
    return alert('Os números não são iguais, a soma é maior que 10 e menor que 20');
}else if(num1 != num2 && resultado>=20){
    return alert('Os números não são iguais, a soma é maior que 10 e maior que 20');
}else if(num1 != num2 && resultado<10){
    return alert('Os números não são iguais, a soma é menor que 10 e menor que 20');
}

}
confereNum(num1 = Number(prompt('Insira um valor para a primeira variável')), num2 = Number(prompt('Insira um valor para a segunda variável')));
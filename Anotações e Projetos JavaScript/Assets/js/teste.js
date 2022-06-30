/*
function returnEvenValues(array){
    let evenNums = [];
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par`);
        }
    }
    console.log("Os número pares são: ", evenNums);
}

//let array = [1, 2, 4, 5, 8];

returnEvenValues(array);

let array = [1, 'coca', ['array2']];
*/
let object = {String: 'string', Number: 1, objectInterno: {objectInterno : 'objeto interno'}}

console.log(object);
let array = ['valor1', 'valor2', 'valor3'];

for(let i in array ){
    console.log(i);
}

for(i in object){
    console.log(i);
}

for(i of array){
    console.log(i);
}

function chamada(primeiro, segundo){
    console.log(primeiro, segundo);
}

chamada('ola amigos', 'ola amigos');
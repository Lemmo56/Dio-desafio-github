function verificaArray(arr){
    if(arr.length == 0){
        return -1;
    }
    if(!arr) return false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
           console.log('Você já é zero!')
        }
        else if(arr[i] % 2 === 0){
            console.log('Substituindo o valor por zero');
            arr[i] = 0;
        }
    }

    return arr;
}

var array = [3, 3, 3, 3, 3 , 3, 3, 3, 3];

console.log(verificaArray(array));
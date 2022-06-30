new Error();

function lancaErro(arr, num1){
    try{
      if(!arr || !num1) throw new ReferenceError('Não foram enviados parâmetros');
      if(typeof arr !== 'object') throw new TypeError('Tipos diferentes');
      if(typeof num1 !== 'number') throw new TypeError('Tipos diferentes');
      if(arr.length !== num1) throw new RangeError('Tamanho do vetor diferente do Parâmetro'); 
      return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log(e.stack);
        }else if(e instanceof TypeError){
            console.log(e.stack);
        }
        else if(e instanceof RangeError){
            console.log(e.stack);
        }
        else{
            console.log('Tipo de erro não esperado:' + e );
        }
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(lancaErro(array, 'ko'));
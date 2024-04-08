/*CRIAR ALGORITMO QUE UMA LISTA E RETORNE DUAS NOVAS LISTAS*/

let listanumeros =[1, 2, 3, 4, 5 ,6 ,7 ,8 ,9];
let pares=[];
let impares=[];

for(let numero of listanumeros) {
    if(numero % 2 ==0 ){
        pares.push(numero)
    }else{
        impares.push(numero)
    }    
}

console.log(pares);
console.log(impares);
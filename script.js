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

/*COM UMA  LISTA DE ALUNOS (OBJETO) VAMOS PERCORRER CADA ALUNO E TRAZER A MEDIA DA NOTA E MOSTRA O NOME DO ALUNO E SUA MEDIA*/

const listaAlunos=[
    {nome :"Huguinho", nota:[5,7]},
    {nome:"Zezinho", nota:[6,9]},
    {nome:"Luizinho", nota:[7,8]}
];

for(aluno of listaAlunos){
    let media = ((aluno.nota[0] + aluno.nota[1])/2);
    console.log(`A média do aluno ${aluno.nome} é ${media}`);
    document.write(`${media}`)
}

//VOCÊ PRECISA DESENVOLVER UM ALGORITMO QUE FAÇA UM SORTEIO DE BINGO//

const sorteio=[];
while(sorteio.length <6){
    let numero1 = Math.ceil(Math.random() * 60)
    if(!sorteio.includes(numero1)){
        sorteio.push(numero1)
    }
}

console.log(sorteio)

//DESESTRUTURAÇÃO

const usuario = {
    nome:"Fiap",
    local:"São Paulo",
    idade: 20
};

//SEM DESESTRURAÇÃO
console.log(`Nome e local: ${usuario.nome} ${usuario.local}`);

//COM DESESTRUTURAÇÃO
let {nome,local} =usuario;
console.log(`${nome} ${local}`)
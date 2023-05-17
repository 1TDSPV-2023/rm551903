// var nome = "Luizinho";

// if(nome != ""){
//     let nome = "Nicolly";
// }

// console.log(nome);
//Quando declaramos uma variável com var
// o Javascript aplica um processo nestas que chamamos de HOISTING.
//O HOISTING ou elevação, coloca todas as variáveis do tipo var no topo do programa.
//Isso faz com que se existirem variáveis com mesmo nome, elas se sobrepõem.
// let nr1 = 10;
// let nr2 = 5;
// //IF TERNÁRIO - DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR";
// console.log(resultado);


//Recuperar um elemento do HTML com a função getElementById(parâmetro)
// const mn = document.getElementById("menu");
// console.log(mn.textContent);

// Recuperando uma colection de elementos 
const aElements = document.getElementsByTagName("a")
const aElementsArray = [...aElements];

console.log(aElementsArray)

aElementsArray.forEach((a)=>{
    console.log(a);
});

//Declarando um array em JavaScript
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];


//OPERADOR SPREAD: USADO PARA CONCATENAR OS DOIS ARRAYS SEM NENHUMA DIVISÓRIA ENTRE ELES, COMO SE FOSSE APENAS UM (...)
let nr3 = [...nr1,...nr2];
// console.log("NOVO ARRAY: " + nr3);

// console.log(nr1);
// console.log(nr2);
// console.log("NOVO ARRAY: " + nr3);

// nr3.forEach( (numero)=>{
//     console.log("ITEM DO ARRAY : " + numero);
// } );

// Adicionando mais um valor no array
// nr2.push(11);
// console.log(nr2);

// Mudando o estilo do array 1 para aparecer como uma lista
// console.table(nr1);

const imgElements = [...document.getElementsByTagName("img")]

imgElements.forEach((img)=>{
    console.log(img.src);
});

const botao = document.querySelector("div > button");

botao.addEventListener("click", ()=>{
    alert("TCHAU!!!");
});

// ARRAY

let frutas = ["laranja", "acerola", "mamão", "abacate", "uva", "morango"]
console.log(frutas)

//INSERIR ITENS AO FINAL DO ARRAY COM O MÉTODO DO ARRAY

frutas.log("kiwi");
console.log(frutas)

//INSERIR ITENS AO INÍCIO DO ARRAY COM O MÉTODO UNSHIFT

frutas.unshift("melancia");
console.log(frutas)

//REMOVER ITENS AO INÍCIO DO ARRAY COM O MÉTODO POP

frutas.pop();
console.log(frutas)

//REMOVER ITENS AO INÍCIO DO ARRAY COM O MÉTODO SHIFT

frutas.shift();
console.log(frutas)

//REALIZANDO A BUSCA DE UM ITEM DO ARRAY USANDO O MÉTODO indexOF(item)
//QUANDO USAMOS ESTE, ELE RETORNA O INDEX DO ITEM PROCURADO

let index = frutas.indexOf("kiwi")
console.log(frutas[indice]);

//Utilizando o método (indice do item, qtd de vezes que ele será removido), para remover um item do array em conjunto com o indexOF (item).
let indice = frutas.indexOf("mamão");
console.log("FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO: " + frutas[indice]);
frutas.splice(indice,2);
console.log("FRUTA QUE ESTAVA NO INDICE DEPOIS DA REMOÇÃO: " + frutas[indice]);
console.table(frutas);

//ESTRUTURA DE REPETIÇÃO PARA ITERAÇÃO DE COLLECTIONS 

//LOOP FOR:
// for(let x = 0; x < frutas.length; x++){
//     console.log("Valor de x: " + x);
// }

//LOOP FOR OF:
// for(const fruta of frutas){
//     console.log("Frutas " + fruta);
// }

//LOOP FOR IN (SOLTA O INDICE DOS ELEMENTOS):
// for(const indice in frutas){
//     console.log("Frutas " + frutas[indice]);
// }

//MAP:
// frutas.map((fruta, key)=>{
//     console.log(`Fruta nr:${key+1} ${fruta}`)
// });
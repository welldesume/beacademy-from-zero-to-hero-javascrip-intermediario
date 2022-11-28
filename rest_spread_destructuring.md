Rest/ Spread

Rest parametres - permite trabalhar com uma quantidade indefinida de parâmetros em uma função ou de elementos em um array.
em uma função, o rest permite capturar os argumentos:

function getSum(...args){
  let total = 0
  for (const arg of args){
    total + = arg
  }
  return total
}

Spread


Spread Operador - Permite expandir uma expressão recebendo mútiplos argumentos ou elementos. Podemos utilizar para concatenar/mergear arrays

const arr = [1,2,3];
const arr2 = [...arr, 4];
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergeArrays = [...array1,...array2];


Destructuring

A desestruturação nos permite extrair dados de arrays e objetos e defini-los em novas variáveis.

Destructuring Objetos

const carro = {
  marca:'Fiat',
  ano:2018,
  portas:4,
}

const {marca, ano} = carro

Destructuring arrays

const frutas = ['Banana','Uva','Morango'];
const [primeira,segunda,terceira]=frutas;
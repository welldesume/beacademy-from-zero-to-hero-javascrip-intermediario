/*

console.log("-----------------------------------------")
console.log("rest paramentros")


// rest paramentros

function getSum(...args){
  let total = 0
  for(const arg of args){
    total = total + arg
  }
  return total
}

console.log(getSum(2,5,10,2))



console.log("------------------------------------------")
console.log("------------------------------------------")
console.log("spread operator")



//spread operator
const arr = [1,2,3];
const arr2 = [...arr, 4]
console.log(arr2)


console.log("------------------------------------------")
console.log("------------------------------------------")
console.log("merge arrays")

//merge arrays
const array1 = [1,2,3];
const array2 = [4,5,6];

const mergeArrays = [...array1, ...array2];
console.log(mergeArrays)

console.log("------------------------------------------")
console.log("------------------------------------------")
console.log("Destructuring")
*/
//Destructuring

const carro = {
  marca:'Fiat',
  ano:2018,
  portas:4,
}
/*
const marca = carro.marca
const ano = carro.ano
const portas = carro.portas
console.log(marca)
console.log(ano)
console.log(portas)
console.log(`O carro é da marca ${marca}, ano ${ano} e tem ${portas} portas.`)
*/

//ou esta mais simples

const {marca, ano,portas}= carro;
console.log(marca)
console.log(ano)
console.log(portas)
console.log(`O carro é da marca ${marca}, ano ${ano} e tem ${portas} portas.`)


console.log('Exemplo 2')

const cliente = {
  nome:'Marcelo',
  compras:{
      digtais:{
        livros:['Don Casmurro', 'O cortiço'],
        filmes:['Senhor dos Anéis', 'Matrix']
      },
      fisicas: {
          cadernos:['Caderno']
      }
  }
}

//console.log(cliente.compras.digtais.livros)
//console.log(cliente.compras.digtais.filmes)

const {livros,filmes} = cliente.compras.digtais;

console.log(livros);
console.log(filmes);


console.log('Exemplo 3')
//destructuring arrays

const frutas = ['Banana','Uva','Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

//com o destructuring
const [p,segunda,terceira]=frutas;


console.log(primeiraFruta)
console.log(terceiraFruta)
console.log(segunda)
console.log(p)
//console.log(segundaFruta)

/* Scope*/

{
  let x = 2;
  //console.log(x)

}

{
  let y = 2;
}
//console.log(y)

/* esse console eta fora do escopo, assim não consegue invocar a função*/

{
  var d = 12; 
}
//console.log(d)
/* se fosse com uma (var) conseguia invocar, mais teria uma grande possibilidade de gerar problemas no código, com a nova conveção usando (let e const) não tem mais esse risco*/


/*Reassign a value */

let w = 10;
//console.log(w)
w = 5;
//console.log(w)
/* foi modificado o valor da variável, não repete o (let) pois então se configura como se criasse uma nova variável.*/ 
const g = 15;
console.log(g)
//g = 8;
//console.log(g)

/* com a (const) não pode modificar o valor*/


/* Template strings*/

let firstName = "Jonh";
let lastName = "Doe";
//Modificando o valor da variável
firstName = "José "
lastName = " da Silva"

let text = `Welcome ${firstName} ${lastName} !`;
console.log(text)
let price = 10; 
let fees = 0.25;
fees = 0.5
//moficando apenas o (fees)
let total = `O total do produro é : R$ ${(price + fees)}`;
console.log(total)

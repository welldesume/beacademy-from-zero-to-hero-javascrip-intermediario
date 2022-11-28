 ** Variáveis 

Variaveis são contêineres na memória para armazenar valores

* Declarando uma variável
var x;

* Atribuindo valor
var x = 5;
var b = 6;
var z = x + y;

** Convenção 

A variavél com nome (var) foi utilizado de 1995 a 2015

Apartir de 2015 ES6(ECMAScript 6) passou a usar (let e const)

Hoje é indicado usar (const), e só utilizar o (let ) caso a variável tenha de ser modoficada o seu valor

const x = 5;
conts y = 6/
let z = x + y;


* Variáveis definidas com (cons) não podem ser redeclaradas
* Variáveis definidas com (const) não podem ser reatribuidas
* Variáveis definidas com (const) têm block scope 

** Template Strings

Também conhecido como 'template Literals'. É uma forma facilitada de interpolar variáveis ou expressões em um texto.
Utiliza  `` em vez de "" para strings

Ex:

let firstName = "Jonh";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName} !`;





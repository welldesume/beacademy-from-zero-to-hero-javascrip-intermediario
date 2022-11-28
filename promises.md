**Promises

O Javscript permite ter comportamentos sícronos e assíncrono.
Síncrono: Espera a tarefa acabar para continuar coma próxima.
Assíncrono: Parte para a próxima tarefa antes da anterior terminar. A tarefa será execultada e quando terminada será colocada em fila.

Como o comportamento assíncrono,é possível carregar um site ou execultar uma aplicação enquanto alguma tarefa ainda não terminou. Esta continua sendo execultada 'por baixo dos panos', enquanto que as outras não ficam travando esperando ela terminar. 

As funções no javascript são execultadas na sequência em que são chamadas. Não na sequência em são defidas.

Ex:
function myFirst(){
  myDisplayer("Helo");
}

function mySecond(){
  myDisplayer("Goodbye")
}

mySecond()
myFirist()


O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Estados de uma Promise:

Pending:Estado inicial ou pendente.

Fulfilled ou resolved: Operação concluida com sucesso.

Rejected: Operação falhou.


Promise é uma função construtora, e por isso, é um abjeto que permite modelar o comportamento assíncrono do Javascript. Ela instancia 'promessas', ou seja, tarefas que podem levar um tempo maior para terminar em relação a outras.

Isto acontece em alguns casos como por exemplo:
- Temos qie receber dados de alguma API;
- Uma API precisa receber dados de  outra API,
- Uma API faz uma requisição a um banco de dados;

enquanto não temos as respostas para estas requisições, nosso sotware não precisa ter seu funcionamento travado. Nesses casos, temos uma promessa de que os dados requisitados chegarão. 

Then()
As promises tÊm um método chamado .then(). Ele permite que se realise alguma tarefa após ser resolvida e será invocadoo quando a função for resolvida.

Reject()
Caso a promise não seja resolvida por algum motivo, será invocado o método reject.

Finally()
Será invocado independente do resultado da Promise.



Fetch()
É um método que retorna uma Promise.

Exemplo:
function getUser(userld){
  const user = fetch(url da api)
  .then(responde => responde.json())
  .then(data => console.log(data))
}

Promise.all()
Utilizadoquando há varias promessas que devem ser resolvidas

const endpoints = [
  "https://api.com/api/user/1",
  "https://api.com/api/user/2",
  "https://api.com/api/user/3",
  "https://api.com/api/user/4"
]

const promises = endpoints.map(url => fetch(url).thens(res => res.json()))
Promise.all(promises)
.then(body => console.log(body.nome))


Async/await

Async e await são palavras-chave doJavascript.Foram implementadas a partir do  ES2017. Trazem uma sintaxe que simplifica a manipulação da programação assícrona no Javascript, facilitando o fluxo de escrita e leitura do código;
Com elas, se tornou possível escrever código assíncrono e lido e estruturado de forma síncrona.
Podemos definir uma função como async e usar await antes de qualquer expressão que retorne uma promise. Assim, a função definida como async irá esperar até que a Promise seja resolvida.
A palavra chave async indica que a função tem comportamento assíncrono e que se deve esperar sua resolução antes do programa continuar.
O await indica a promise que devemos esperar.
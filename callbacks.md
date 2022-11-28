**Callbacks

Trata-se de uma função que será execultada quando algum evento acontecer ou quando algum código chegar a um estado esperado.
Isto quer dizer quer esta função é assíncrona, pois não será executada imediatamente. Neste caso, a aplicação continuará funcionando enquanto a função esperar o momento da sua execulção.

Ex. Uma função a ser execultada após um dado ser salvo no banco de dados;
Uma função que execulta após os dados serem retornados de uma chamada à uma API;
Uma fuçãp que será execultada após o click do usuário em um botão no site.


Na maioria dos casos, uma função de Callback é passada como argumento de outra função.

function foo(callback){
  return p
}

function foo2(callback){
  callback('p')
  }

  foo2()
Recursion
É o ato deuma função chamar a si mesma. A recursão é bastante usada para resolver problemas que contêm subproblemas menores, dividir um problema complexo em problemas menores, fazer uma contagem regressiva ou uma contagem até que certo valor seja atingido.
Este tipo de função precisa de uma condição para que ela pare de chamar a si mesmo. Caso contrário entrará em um 'looping' infinito.
Porém, a técnica de recursão não é uma boa prática, pois ela deixa o código complexo de se entender ou muito verboso e de difícil manipulação. É sempre preferível alternativas mais modernas como por exemplo, o uso de laços de repetição.

function recurse(){
  if(condition) {
    recurse();
  }
  else{
    //stop calling recurse
  }
}


Default paramenters

Ao definir parâmetros padrões para uma função, podemos definir valores caso nenhum valor for passado ou este for indefinido.

function say (message='Hi'){
  console.log(message)
}

say()
say('Hello')
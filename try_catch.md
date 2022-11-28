** try/catch

Ao execultar o código Javascript, diferentes erros podem ocorrer. Podem ser erros de codificação do programador, erros devido a requisição de dados e outras coisas imprevisíveis como queda de um servidor ou de rede em se tratando de uma promise.

Try - determina um bloco de código que será execultado na promise;

Catch - determina bloco de código no qual os erros serão tratados;

Finally - determina um bloco de código que será executado qualquer que seja o resultado da promise;

Trow - define um erro customisado.



Níveis de try/catch

Utilizando o objeto Error

O construtor Error() cria um objeto de erro

Podemos utilizar Erro() ou new Error()

A declaração throw lança uma exeção previamente definida. A execução será interrompida e as instruções após o throw não serão execultadas.

também podemos customizar o erro instanciando uma classe a ser chamada toda vez que um erro acontecer na aplicação.



Tr/catch aninhado


Não é uma boa prática

 
try{
  //do something
}catch(Exception e ){
  try{
     //do somenthing in the same line, but being less ambitious
  }catch(Exception ex){
       //Do the minimum acceptable
    }catch(Excepion el){
        //More try catches?
    }
  }
}
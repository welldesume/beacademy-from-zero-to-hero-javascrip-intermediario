** Orientação a objetos

Orientação a objetos é um paradigma utilizado para modelar coisas/objetos do mundo real que queremos representar dentro de uma aplicação.
Em um software, estamos sempre representando de forma abstrata, objetos concretos do mundo real, ex.: um cliente, um aluno, um produto, etc...
Importante salientar que um objeto concreto no mundo real pode apresentar infinitas caracteristicas.Porém, trazemos para nosso software apenas aquelas que fazem sentido para a regra de negócio.

Sendo assim, para um cadastro em um sistema escolar, o tipo sanguíneo ou a altura do aluno (objeto do mundo concreto) não tenha utilidade. Porém, para o cadastro de uma clínica médica, estes elementos devem ser levados em consideração.

Um dos pilares da orientação a objetos é a classe.
com ela, podemos criar uma abstração de um objeto do mundoreal e a partir desta, instanciar, ou seja, gerar um objeto concreto em nossa aplicação.

É o exemplo do cadastro de alunos em sistema escolar.
Obtemos as caracteristicas conforme as regras de negócios de nossa aplicação.
Após isto, podemos instanciar para que o software guarde e nos retorne uma lista de alunos ou um aluno em específico com os dados que precisamos.
Conforme explicado, as classes são utilizadas para gerar instâncias de um objerto podendo-se reutilizar código atravéz da herança.


* Classes

Funções construtoras
 São utilizadas para instanciar objetos. Assim, é possível trabalhar com a reutilização do código.

 ex:

 const Foo = function(x){
  this.x=x
 }

 const foo = new Foo('x')


 * Herança

 Com uma classe, podemos implemantar as caracteristicas abstratas de um objeto. Apartir, dela, podemos gerar diversos objetor reutilizando as caracteristicas.
 Exemplo:
 Em um cadastro de candidatos a um concurso, temos os dados necessários de cada candidato.Todos eles têm nome, cpf. Então todos os candidatos são cadastrados com estas propriedades. com isso, é possível herdar da classe principal, todos estes dados.
 Porém, apenas no caso de candidatos homesn, é necessário ter cadastrado o comprovante de serviço militar obrigatório.

 Com as classes podemos instaciar objetos e também podemos instaciar outras classes. com isto, teremos classes que são extensões de outra classe.
 
 Então uma classe pode herdar propriedades e métodos da classe 'pai'.
 
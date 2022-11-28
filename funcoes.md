 ** Immediately invoked function expression ou IIFE

 Trata-se de uma fiunção chamada imediatamente depois de ser declarada. É útil para evitar 'poluir' o objet global

 (function helloWorld(){
  alert('Hello, world!');
 }
 )();

 // alerta 'Hello, world!"

 **Arrow functions

 Uma arrow é uma função alternativa compacta a uma expressão de função tradicional, com algumas diferenças semânticas  e limitações deliberadas no uso.

 function sum(a){
  retur a + 100;
 }
 const sum = a => a + 100;
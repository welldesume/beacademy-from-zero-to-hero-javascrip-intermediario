console.log('--------------------------------------')
console.log('Recursion')

function countDown(number) {
  console.log(number)
  const newNumber = number - 1
  if (newNumber > 0) {
    countDown(newNumber)
  }
}
//countDown(10);

/*

console.log('--------------------------------------')
console.log('--------------------------------------')
console.log('Default paramentros')
//Default paramentros

function say(message='Hi'){
  console.log(message)
  
}
say()
say('Hello')

*/

console.log('--------------------------------------')
console.log('--------------------------------------')
console.log('Closures')

import { somarNumeros } from './escopo.js'

//let x = 10

const result = somarNumeros()

console.log(result)

/*Promises*/

function show(){
  setTimeout( () => {
    console.log('oi !')
  }, 2000);
  console.log('Até logo!')
}
//show()


 console.log("-----------------------------------------------------")
 console.log("-----------------------------------------------------")

  const minhaPromise = new Promise((resolve, reject) => {
  let n = 9
  if (n > 10) {
    resolve()
  }else {
    reject()
  }
 })
 

 minhaPromise 
 .then(result => console.log('resolveu'))
 .catch(err => console.log('errou'))
 .finally(() => console.log('Finally !'))
 
/*

 ---- exemplo----
 function showHello() {
    console.log('Hello')
 }

 function showGoodbye(){
  console.log('Goodbye!)
 }
 */


 console.log("-----------------------------------------------------")
 console.log("-----------------------------------------------------")

 /*
import fetch from 'node-fetch'

 // fetch

 const firstUser = (userId) => {
  let response = fetch(`https://somp\acenh\der.typicode.com/todos$(userId)`)
  .then(res => res.json())
  .then(data => console.log(data))
 }

 firstUser(1)

 */
 
/*
 
 fetch('https://viacep.com.br/ws/01001000/json/')
 .then(response => response.json())
 .then(cep =>{
  console.log(` O bairro é ${cep.bairro} e o logradouro é ${cep.logradouro}`);
 })

 */

 /*async / await */
/*
 const firstUser = async (userId) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
  let resultJSON =await response.json()
  let title = resultJSON.tetle
  console.log(resultJSON)
 }
 firstUser(1)
 */

 /*try catch*/

 //https://jsonplaceholder.typicode.com/todos/1

 
 async function user(){
  try{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json()
    console.log(data)
  }catch (error){
    console.log('error-----' , error)
    throw new error('Erro no fetch')
  }finally{
    console.log('acabou')
  }
 }
 user()
 
 
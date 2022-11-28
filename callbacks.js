/* Funções de Callback*/

function hello(name){
    console.log(name)
}

//hello('M') //isso é chamar a função

function helloUser(callback){
    callback('Marcelo')
}

//helloUser(hello)

const callback = e => alert('foi criado')
window.addEventListener('click', callback)
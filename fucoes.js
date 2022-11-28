/* Immediately invoked function expression expression ou IIFE */

(function helloWorld(){
   alert('Hello, world!');
}
)();

(function (message){
    alert(message)
}
)('Hello, world!');

/* Arrou functions */

/*function sum (a){
    return a + 10
}*/
const sum = a => a + 100;
//essa é uma function compacta
//console.log(sum(3))
console.log(sum(8))

//Exemplo
const materials = [
    'Hidrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

 /*const newArray = materials.map(
    function showLength(materials){
        return materials.length
    }
);*/
const newArray = materials.map(material => material.length)
//código compactado do metodo acima
console.log(newArray)

//(map) é um metodo de array, que retorna a tamanho(length) de cada elemeto do array
//(material) é só um nome e pode ser qualquer outro. 
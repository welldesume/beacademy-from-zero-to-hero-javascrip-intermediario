
/* Prototypes */

function Pessoa(nome, idade, peso){
  this.nome = nome; 
  //(this)este.nome = nome do parametro pessoa
  this.idade = idade;
  this.peso = peso;
  //segue o mesmo sistema acima
}

//const marcelo = new Pessoa('Marcelo', 44, 80);
//console.log(Pessoa.prototype)
// new cria uma instacia da função pessoa
//instacia herda as caracteristicas da função construtura
const pessoa = 'Marcelo'


const joao = new Pessoa('João', 40)
console.log(joao)
//peso de joão ficou undefined

console.log("--------------------------------------------------------")
console.log("--------------------------------------------------------")



const notebook = {
  cor: 'preta',
  ano: '2022',
  specifications: function(value){
    return `Este notebook custa R$ ${value},00; cor ${this.cor}, ano ${this.ano}`
   
    //const notbook é um objeto
    // specifications  é um metodo quando for usar colocar paraenteses na frente
    //preta,2022 são propriedades
    
  }
}


//para acessar metodos e propriedades que estão dentro de um objeto. EX:console.log(notebook.cor)


const dell = {
  marca:'Dell'
}

const macBook = {
  marca: 'MacBook'
}

Object.setPrototypeOf(dell, notebook)
Object.setPrototypeOf(macBook, notebook)
//cetar o prototype - Object.setPrototypeOf(dell, notebook)
console.log(dell.specifications(5000))
console.log(macBook.specifications(15000))
console.log(dell)
console.log(dell.cor)





console.log("--------------------------------------------------------")
console.log("--------------------------------------------------------")




//esperiencia

/*function Produto (nome, marca, valor){
  this.nome=nome;
  this.marca=marca;
  this.valor=valor;
}

const cafe = new Produto('Café', 'São Braz', 10)
console.log(cafe ,` 'reais"`)*/
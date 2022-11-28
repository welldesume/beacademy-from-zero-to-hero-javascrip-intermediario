/* Classes */

const Foo =  function(x){
  this.x = x
}

const foo = new Foo('x')

//console.log(foo)

class Book {
  constructor(title, yaer, autor){
    this.title = title
    this.yaer = yaer
    this.autor = autor
  }
}

const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')//intancia da classe Book
const harryPoter = new Book('Harry Poter', 1987, 'J. K. Rowling')//intancia da classe Book

//console.log(domCasmurro)
//console.log(harryPoter)

let BookList = []
/* foi criada uma lista vazia e com metodo (push) coloca os itens dentro da lista(array)*/
BookList.push(domCasmurro, harryPoter)
//console.log(BookList)
console.log("----------------------------------")
console.log("----------------------------------")


class CopaDoMundo {
  constructor(country, yaer){
    this.country = country
    this.yaer = yaer
  }
  showChampion(team){
    return `A copa do ${this.country} foi disputada no ano de ${this.yaer} e o campeão foi ${team}`
  }

}
  const copa86 = new CopaDoMundo('México', 1986)
  const copa70 = new CopaDoMundo('México', 1970)
  const champion86 = copa86.showChampion('Argentina')
  const champion70 = copa70.showChampion('Brasil') 
  console.log(champion86)
  console.log(champion70)
  
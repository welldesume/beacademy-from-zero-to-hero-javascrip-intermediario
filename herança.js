/* Herança*/

class Candidates{
  constructor (firstName, surName, cpf){
  this.firstName = firstName
  this.surName = surName
  this.cpf = cpf
}
}
class Masc extends Candidates{
  constructor(firstName, surName, cpf, reservista){ 
  super(firstName, surName, cpf)
  this.reservista = reservista
}
}
const Candidate1 = new Masc ('Marcelo', 'Vasques',123456789, true)
const candidate2 = new Candidates('Maria', 'Fulana', 456123789)
console.log(Candidate1)
console.log(candidate2)
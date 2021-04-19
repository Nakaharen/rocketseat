/* Function() constructor

* expressão new
* criar um novo objeto
* this keyword

*/

function Person(name){
  this.name = name
  this.walk= function(){
    return this.name + " está andando"
  }
// this - referência à 'karen' que está fora
}
const karen = new Person("Karen")
// new antes da função => função construtora e vai retornar um objeto (criar um novo objeto)
const guilherme = new Person("Guilherme")
console.log(karen.walk())
console.log(guilherme.walk())


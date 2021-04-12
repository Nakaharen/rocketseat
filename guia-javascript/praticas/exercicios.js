//  1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
//console.log(typeof weight)
//undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
* name: String
* age: Number (integer)
* stars: Number (float)
* isSubscribed: Boolean */

let name = "Karen"
let age = 27
let stars = 4.5
let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dado?
4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
4.2 Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> kg
*/

let student = [
  {
    name: "Karen",
    age: 27,
    stars: 4.5,
    isSubscribed: true
  },
  {
    name: "Guilherme",
    age: 23,
    stars: 4.9,
    isSubscribed: true
  }
]


// console.log(`${student.name} de idade ${student.age} tem ${student.stars} de avaliação`)

/* 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor,
ou seja, somente o array vazio */

let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student
da questão 4. */

students = student
//console.log(students)

/* 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])
*/

/* 8. Crie um novo student e coloque na posição 1 do Array students
console.log(students[1])
*/

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
Após a sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1

undefined - porque a variável foi definida depois
*/
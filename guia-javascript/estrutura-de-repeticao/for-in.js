// for...in

let person = {
  name: 'Guilherme',
  age: 24,
  weight: 70
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}
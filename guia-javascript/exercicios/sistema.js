/* ### Transformar notas escolares

Crie um algorítimo que transforme as notas do sistema
númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <=89
  let scoreC = score >= 70 && score <=79
  let scoreD = score >= 60 && score <= 69
  let scoreE = score >= 50 && score <= 59
  let scoreF = score < 50 && score >= 0

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreE) {
    scoreFinal = "E"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(90))
console.log(getScore(86))
console.log(getScore(75))
console.log(getScore(63))
console.log(getScore(57))
console.log(getScore(49))
console.log(getScore(30))

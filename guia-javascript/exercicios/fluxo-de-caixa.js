/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades,
ambas do tipo array:

* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total
de receitas e despesas e irá mostrar uma mensagem
se a família está com saldo positivo ou negativo,
seguido do valor do saldo

*/

let familia = {
  receitas: [2300, 1500, 440.45, 105.60],
  despesas: [1100, 330, 295.95, 93.78, 824.49]
}

function soma(array) {
  let total = 0;

  for(let valor of array) {
    total += valor
  }

  return total
}

function calcularGastos() {
  const calcularReceitas = soma(familia.receitas)
  const calcularDespesas = soma(familia.despesas)
  const total = calcularReceitas - calcularDespesas
  const saldoPositivo = total >= 0

  let textoCalculo = "Negativo"

  if (saldoPositivo) {
    textoCalculo = "Positivo"
  }

  console.log(`Seu saldo é ${textoCalculo}:
  ${total.toFixed(2)}`)
}

calcularGastos()

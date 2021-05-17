// throw - trava a aplicação

function sayMyName(name ='Karen') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}

// try... catch - captura os erros
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após o try/catch')
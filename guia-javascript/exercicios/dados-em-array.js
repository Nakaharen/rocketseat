/* Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo,
faça os seguintes desafios

  * Contar o número de categoria e o número
de livros em cada categoria
  * Contar o número de autores
  * Mostrar livros do autor J.K. Rowling
  * Transformar a função acima em uma função que
irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
  {
    category: "Ficção",
    books: [
      {
        title: "Harry Potter e a pedra filosofal",
        author: "J.K. Rowling",
      },
      {
        title: "Harry Potter e a câmara secreta",
        author: "J.K. Rowling",
      },
      {
        title: "Harry Potter e o prisioneiro de Azkaban",
        author: "J.K. Rowling",
      },
    ],
  },
  {
    category: "Aventura",
    books: [
      {
        title: "Shadow and bone",
        author: "Leigh Bardugo",
      },
      {
        title: "Ready player one",
        author: "Ernest Cline",
      },
      {
        title: "Eragon",
        author: "Christopher Paolini",
      },
    ],
  },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function booksOfAuthor(author) {
  let books = [];

  for(let category of booksByCategory) {
    for(let book of category.books){
      if(book.author === author) {
          books.push(book.title)
        }
      }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
  }

  booksOfAuthor('Ernest Cline')
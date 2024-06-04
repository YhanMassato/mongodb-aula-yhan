const database = 'libri-database'
const collection = 'libri-collection'

use(database)

// db['libri-collection'].updateOne(
//   // primeiro se passa o item a ser alterado
//   {codigo:"1"},
//   //O update pode colocar um novo tipo de estrutura de dados ou alterar um valor já existente
//   {
//     $set:{valor: 300}
//   }
// )
// Neste caso estamos atualizando o campo VALOR do livro cujo codigo é o 1 para 300

/////////

use('libri-database')

db['libri-collection'].updateMany(
  {categoria:"Ficção Científica"},
  {
    $set:{valor:500}
  }
)
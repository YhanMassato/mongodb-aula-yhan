//// Deleta apenas um
use('libri-database')

db['libri-collection'].deleteOne(
  {codigo: "1"}
)
//// Deleta todos que NAO SÃO ficção científica
use('libri-database')

db['libri-collection'].deleteMany({
  //$ne é o NOT IN
    categoria: {$ne:'Ficção Científica'}} 
)

use('libri-database')

db['libri-collection'].updateOne(
  {"codigo":'2'},
  {
    $set:{valor:500}
  }
)
const database = 'libri-database'
const collection = 'libri-collection'

use(database)

/*Seleciona valores maior que 100*/
db[collection].find({"valor": {$gt:100}})

/*Seleciona valores menor que 100*/
db[collection].find({"valor": {$lt:100}})

/*Seleciona valores maior ou igual a 100*/
db[collection].find({"valor": {$gte:100}})

/*Seleciona valores menor ou igual a 100*/
db[collection].find({"valor": {$lte:100}})

/*Seleciona valores em um determinado intervalo (de 100 até 150)*/
db[collection].find({"valor": {$gte:100, $lte:150}})

/*Seleciona valores em um determinado intervalo (de 100 até 150) - ordenado do maior para o menor*/
db[collection].find({"valor": {$gte:100, $lte:150}}).sort({"valor":1})

/*Seleciona valores em um determinado intervalo (de 100 até 150) - ordenado do menor para o maior*/
db[collection].find({"valor": {$gte:100, $lte:150}}).sort({"valor":-1})


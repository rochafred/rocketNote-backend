

//1- Importando o index que contem a rotina de conexao com o DB:
const sqliteConnection = require('../../sqlite/index.js')

//2- Importa o arq que contem o SQL de criacao da tabela users:
const createUsers = require('./createUsers')

//3-Funcao para executar as Migrations
async function migrationsRun(){
    const schemas = [ //coloco as tabelas que o banco vai ter
        createUsers // nesse caso so tenho essa tabela no meu banco
    ].join('') //juntado todas as migrations

    sqliteConnection()
    .then(db => db.exec(schemas))//executando os schemas
    .catch(error => console.log(error)) //tratamento erros
}
//4-epxorto minha funcao de exec das MIgrations:
module.exports = migrationsRun;


//1-Importando ambos os Sqlite
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
//2-baixa biblioteca para definir as rotas corretamente:
const path = require("path")

//3-caso nao exista o arq do banco de dados ao executar, sera criado:

async function sqliteConnection(){
    const database = await sqlite.open({   //abrindo a conexao c o banco
        filename:path.resolve(__dirname,"..", "database.db"),     //propriedade p definir aonde o arquivo será salvo - uso a bibli Path. Criaoarquivo database.db
//__dirname: pega todo o caminho absoluto automaticamente.ONde estioun dentro do projeto
        //4-preciso dizer qual o Drive de conexao queirei utilizar:
         driver: sqlite3.Database 
    })
    return database
}
//5-exporto a funcao:
module.exports= sqliteConnection




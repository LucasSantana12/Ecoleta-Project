///Importar a denpendencia do sqlite

const sqlite3 = require("sqlite3").verbose()


//INICIAR O OBJ DE BANCO DE DADOS 
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar o obj de banco de dados para as operações
// db.serialize(() => {
//     //criar uma tabela
//     db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//        id INTEGER PRIMARY KEY AUTOINCREMENT,
//        image  TEXT,
//        name TEXT,
//        address TEXT,
//        address2 TEXT,
//        state TEXT,
//        city TEXT,
//        items TEXT
//     );
//     `)

//     //Inserir dados nas tabelas
//     const query = `INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items)
//     VALUES (?,?,?,?,?,?,?);`
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Colectoria",
//         "Gulherme Gemballa, Jardim America",
//         "numero 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, lampadas"

//     ]


//     function afterInserteData(err){
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
 
//     }
//    db.run(query, values, afterInserteData );

//     //Consultar os dados nas tabelas
    // db.all(` SELECT * FROM places`, function(err,rows){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao seus registros")
    //     console.log(rows)
    // })

    //deletar um dado na tabela
    // db.run(`DELETE FROM places
    // WHERE ID = ?`,[3], function (err){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("apagou") 

    // })
    //   db.all(` SELECT * FROM places`, function(err,rows){
    //     if (err) {
    //          return console.log(err)
    //      }
    //     console.log("Aqui estao seus registros")
    //     console.log(rows)
    // })

// })
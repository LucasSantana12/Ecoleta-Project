const express = require("express")
const server = express()



//PEGAR O BANCO DE DADOS
const db = require("./database/db")


//configurar a pasta public
server.use(express.static("public"))


//HABILITAR O USO DO REQ.BOY EM NOSSA APLICAÇÃO
server.use(express.urlencoded({ extended: true }))

//utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da aplicação
//pagina inicial

//REQ: Requisção
//RES: Resposta

server.get("/", function (req, res) {
    return res.render("index.html")
})

server.get("/create-point", function (req, res) {
    //req.query : Query String da nossa URL
    req.query



    return res.render("create-point.html")
})


server.post("/savepoint", (req, res) => {
    //req.boy: o corpo do nosso formulario
    //console.log(req.body)

    //inserir os dados no DB
    const query = `INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items)
            VALUES (?,?,?,?,?,?,?);`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]


    function afterInserteData(err) {
        if (err) {
             console.log(err)
             return res,send("ERRO NO CADASTRO")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInserteData);

})



server.get("/search", function (req, res) {
    const search = req.query.search

    if(search ==""){
           //Mostrar a pagina html com os dados do banco de dados
           return res.render("search-results.html", { places: rows, total })
    }

    //PEGANDO OS DADOS DO DB
    db.all(` SELECT * FROM places WHERE city LIKE  '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
        //Mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total })

    })

})
//ligar o servirdor
server.listen(3000)
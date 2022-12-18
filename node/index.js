const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
let connection = mysql.createConnection(config)

connection.query("DELETE FROM people")

const sql = `INSERT INTO people(name) values ('Ailan'), ('Pedro'), ('Silva')`
connection.query(sql)


let str = '<h1>Full Cycle Rocks!!</h1> <br />'
let resultado = ''
connection.connect(function(err) {
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        resultado = JSON.parse(JSON.stringify(result))
    });
});


app.get('/', (req, res) => {
    for(var i = 0; i < resultado.length; i++){
        str += `<h3> - ${resultado[i]['name']} </h3> <br />`
    }
    res.send(str)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
var express = require('express');
var bodyParser = require('body-parser');
const {Pool} = require('pg');

const pool = new Pool({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: ProcessingInstruction.env.POSTGRES_PASSWORD,
    port: 3211,
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req) {
    const user = req.body.user;

    if(user != "") {
        pool.query("SELECT * FROM users WHERE user WHERE name = '" + user + "'", 
            (err, res) => {
            console.log(err, res)
            pool.end()
        })
    }

}   );

app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});

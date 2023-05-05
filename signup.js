
const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

app.get('/',function(req,resp){
    resp.sendFile(__dirname + "/index.html");
})

app.get('/signup',function(req,resp){
    resp.sendFile(__dirname + "/signup.html");
})
app.get('/login',function(req,resp){
    resp.sendFile(__dirname +"/home.html")
})
app.post('/signup',(req,resp)=>{
    const username = req.body.username;
    console.log(username)
    const email = req.body.email;
    const password = req.body.password;

connection.query('INSERT INTO signup ( username,email, password) VALUES (?,?, ?)', [username,email,password], (error, results, fields) => {
    if (error) {
        console.error(error);
    } else {
        console.log('User has been added to the database.');
    }
});
})

// connection.end();
app.listen(1928)
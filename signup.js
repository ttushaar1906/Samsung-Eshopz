
const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

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
// const username='sayli';
// const email='sayli@gmail.com';
// const password='sayli';


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



connection.query('INSERT into signup ( username, email, password) VALUES (?, ?, ?)', [username,email,password], (error, results, fields) => {
    if (error) {
        console.error(error);
    } else {
        console.log('User has been added to the database.');
    }
});
})

// connection.end()
app.listen(4047)
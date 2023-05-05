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
    // resp.sendFile(__dirname = "/styling");
})
app.get('/login',function(req,resp){
    resp.sendFile(__dirname + "/home.html");
    // resp.sendFile(__dirname = "/styling");
})
app.post('/login',(req,resp)=>{
    // const user_id = req.body.user_id;
    // console.log(user_id)
    const email = req.body.email;
    const password = req.body.password;

connection.query('INSERT INTO users ( email, password) VALUES (?, ?)', [email,password], (error, results, fields) => {
    if (error) {
        console.error(error);
    } else {
        console.log('User has been added to the database.');
    }
});
})

app.listen(1926)
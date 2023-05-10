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

// const username='tanaya';
// const email='tanaya@gmail.com';
// const password='tanaya';


app.get('/',function(req,resp){
    resp.sendFile(__dirname + "/index.html");
})
app.get('/home',function(req,resp){
    resp.sendFile(__dirname + "/home.html");
})
app.get('/login',function(req,resp){
    resp.sendFile(__dirname + "/home.html");
})
//home
app.get('/Phones',function(req,resp){
    resp.sendFile(__dirname + "/Phones.html");
})
app.get('/tv',function(req,resp){
    resp.sendFile(__dirname + "/tv.html");
})
app.get('/washing',function(req,resp){
    resp.sendFile(__dirname + "/washing.html");
})
app.get('/earbuds',function(req,resp){
    resp.sendFile(__dirname + "/earbuds.html");
})
app.get('/Air_Conditioners',function(req,resp){
    resp.sendFile(__dirname + "/Air_Conditioners.html");
})
// galaxy series
app.get('/galaxy_S',function(req,resp){
    resp.sendFile(__dirname + "/galaxy_S.html");
})
app.get('/galaxy_z',function(req,resp){
    resp.sendFile(__dirname + "/galaxy_z.html");
})
app.get('/galaxy_a',function(req,resp){
    resp.sendFile(__dirname + "/galaxy_a.html");
})
app.get('/galaxy_m',function(req,resp){
    resp.sendFile(__dirname + "/galaxy_m.html");
})
// tv
app.get('/tv',function(req,resp){
    resp.sendFile(__dirname + "/tv.html");
})
//contact pg
app.get('/contantus',function(req,resp){
    resp.sendFile(__dirname + "/contantus.html");
})
//about pg
app.get('/aboutus',function(req,resp){
    resp.sendFile(__dirname + "/aboutus.html");
})
// buy btn
app.get('/buying/b1',function(req,resp){
    resp.sendFile(__dirname + "/buying/b1.html");
})
app.get('/buying/b2',function(req,resp){
    resp.sendFile(__dirname + "/buying/b2.html");
})
app.get('/buying/b3',function(req,resp){
    resp.sendFile(__dirname + "/buying/b3.html");
})
app.get('/buying/b4',function(req,resp){
    resp.sendFile(__dirname + "/buying/b4.html");
})
app.get('/buying/b5',function(req,resp){
    resp.sendFile(__dirname + "/buying/b5.html");
})
app.get('/buying/b6',function(req,resp){
    resp.sendFile(__dirname + "/buying/b6.html");
})
app.get('/buying/b7',function(req,resp){
    resp.sendFile(__dirname + "/buying/b7.html");
})
app.get('/buying/b8',function(req,resp){
    resp.sendFile(__dirname + "/buying/b8.html");
})
app.get('/buying/b9',function(req,resp){
    resp.sendFile(__dirname + "/buying/b9.html");
})
app.get('/buying/b10',function(req,resp){
    resp.sendFile(__dirname + "/buying/b10.html");
})
app.get('/buying/b11',function(req,resp){
    resp.sendFile(__dirname + "/buying/b11.html");
})
app.get('/buying/b12',function(req,resp){
    resp.sendFile(__dirname + "/buying/b12.html");
})
app.get('/buying/b13',function(req,resp){
    resp.sendFile(__dirname + "/buying/b13.html");
})
app.get('/buying/b14',function(req,resp){
    resp.sendFile(__dirname + "/buying/b14.html");
})
app.get('/buying/b15',function(req,resp){
    resp.sendFile(__dirname + "/buying/b15.html");
})
app.get('/buying/b16',function(req,resp){
    resp.sendFile(__dirname + "/buying/b16.html");
})
app.get('/buying/b17',function(req,resp){
    resp.sendFile(__dirname + "/buying/b17.html");
})
app.get('/buying/b18',function(req,resp){
    resp.sendFile(__dirname + "/buying/b18.html");
})
app.get('/buying/b19',function(req,resp){
    resp.sendFile(__dirname + "/buying/b19.html");
})
app.get('/buying/b20',function(req,resp){
    resp.sendFile(__dirname + "/buying/b20.html");
})
app.get('/buying/b21',function(req,resp){
    resp.sendFile(__dirname + "/buying/b21.html");
})
app.get('/buying/b22',function(req,resp){
    resp.sendFile(__dirname + "/buying/b22.html");
})
app.get('/buying/b23',function(req,resp){
    resp.sendFile(__dirname + "/buying/b23.html");
})
app.get('/buying/b24',function(req,resp){
    resp.sendFile(__dirname + "/buying/b24.html");
})
app.get('/buying/b25',function(req,resp){
    resp.sendFile(__dirname + "/buying/b25.html");
})
app.get('/buying/b26',function(req,resp){
    resp.sendFile(__dirname + "/buying/b26.html");
})
app.get('/buying/b27',function(req,resp){
    resp.sendFile(__dirname + "/buying/b27.html");
})
app.get('/buying/b28',function(req,resp){
    resp.sendFile(__dirname + "/buying/b28.html");
})
app.get('/buying/b29',function(req,resp){
    resp.sendFile(__dirname + "/buying/b29.html");
})
app.get('/buying/b30',function(req,resp){
    resp.sendFile(__dirname + "/buying/b30.html");
})


app.post('/login',(req,resp)=>{
    const user_id = req.body.user_id;
    console.log(user_id)
    const email = req.body.email;
    const password = req.body.password;


connection.query('INSERT into users ( email, password) VALUES (?, ?)', [email,password], (error, results, fields) => {
    // connection.query('INSERT INTO users ( email, password) VALUES (?, ?)', [email,password], (error, results, fields) => {  
if (error) {
        console.error(error);
    } else {
        console.log('User has been added to the database.');
    }
    resp.sendFile(__dirname + "/home.html");
});
})

// Sign up logic

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

app.listen(1929)


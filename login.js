const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/styling",express.static("styling"));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodejs',
    // port:3307
});

// connect to the database
connection.connect(function(err){
    if(err) throw error
    else console.log('Successfully connect to database')
});

app.get('/',function(req,resp){
    resp.sendFile(__dirname + "/index.html");
})

app.post("/login",encoder,function(req,res){
    var username = req.body.username;
    var password = req.body.username;
    connection.query("select * from loginuser where user_name = ? and user_password = ?",[username,password],function(error,result,fields){
        if(result.lenght > 0){
            res.redirect("/home");
        }else{
            res.redirect('/');
        }
        res.end();
    })
})

// //when login is success 
app.get("/home",function(req,res){
    res.sendFile(__dirname + "/home.html")
})
// //set app port
app.listen(3307);
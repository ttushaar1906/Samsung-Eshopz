const express = require('express')
const app = express();
const connection = require('./connection');

app.get('/',(req,resp)=>{
    resp.send('hello')
})

app.listen(4000);
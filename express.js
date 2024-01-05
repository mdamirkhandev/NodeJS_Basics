const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('I am express Js');
});
app.get('/about',(req,res)=>{
    res.send('About page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.listen(5000);
const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>Welcome to Homw page</h1>
    <a href="/about">about</a>
    <a href="/contact">contact</a>
    `);
});
app.get('/about',(req,res)=>{
    res.send(`<h1>About page</h1>
    <a href="/">home</a>
    <a href="/contact">contact</a>
    `);
});
app.get('/contact',(req,res)=>{
    res.send(`<h1>Contact Page</h1>
    <a href="/">home</a>
    `);
});

app.listen(5000);
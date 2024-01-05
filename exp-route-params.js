const express = require('express');

const app = express();

app.get('',(req,res)=>{
    console.log('Req sent by browser url=>', req.query);
    console.log('Req sent by browser url=>', req.query.name);
    console.log('Req sent by browser url=>', req.query.age);
    res.send('Welcome =>'+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('About page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.listen(5000);
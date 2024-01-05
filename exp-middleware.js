const express = require('express');

const app = express();

const reqFilter = (req,res,next)=>{
    if (!req.query.age) {
        res.send('Please provide Your age');
    } 
    else if (req.query.age<18) {
        res.send(`You can't access this page`);
    }
    else {
        
        next();
    }
}
app.use(reqFilter);

app.get('',(req,res)=>{
    res.send('Welcome to home page')
})
app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
})

app.listen('5000');
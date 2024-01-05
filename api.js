const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({name:'Amir',email:'amir@test.com'}));
    res.end();
}).listen('7000');
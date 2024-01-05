const http = require('http');

http.createServer((req,res)=>{
res.write('Welcome in Node Js');
res.end();
}).listen(5000);
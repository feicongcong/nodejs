var http=require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
//运行程序node hello.js
//node.js提供一个交互式运行环境-REPL,在控制台输入node进入，出现>后用.commond 输入命令
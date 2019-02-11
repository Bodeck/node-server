var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function(req, resp){
    resp.setHeader('Content-Type', 'text/html; charset = utf-8');
    if(req.method === 'GET' && req.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data){
            if(err) {
                resp.statusCode = 500;
                resp.write('Problem with server.');
            } else {
                resp.statusCode = 200;
                resp.write(data);
            }
            resp.end();
        })

    } else {
        resp.statusCode = 404;
        resp.write('Incorrect path to resource');
        resp.end();
    }
})

server.listen(8080,function(){
    console.log('Server is running...');
});

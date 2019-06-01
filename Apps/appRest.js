var express = require('express');

var app = express();

var formidable = require('formidable');


app.use(express.static(__dirname + '/public'));


app.get('/',function(request,response){

   response.send('Hello World');
	});

/*
app.use('/forms',express.static(__dirname + '/public'));


app.get('/SubmitHello',function(request,response){

  response.writeHead(200,{'Content-type': 'text/html'});
  response.write('Hello ' + request.query.username + '!<br/>');
  response.end('Have a great day !');
  console.log('Handled request from ' + request.query.username);
 });



app.get('/addition', function (request, response) {
var x = Number(request.query.x),
y = Number(request.query.y),
result = math.addition(x, y);
response.writeHead(200, { 'Content-Type': 'application/json' });
response.end('{ "result": ' + result + '}');
console.log('Handled addition request for x=' + x + ' : y=' + y);
});
*/

var port = 8088 ;

app.listen(port);

console.log('Listening on port : '+ port);
	

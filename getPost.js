/*
	Express.js GET/POST example
	Shows how to get the parameters of a GET vs a POST request
	in Express.js 4.0

	created 10 Feb 2015
  	modified 4 Feb 2018
	by Tom Igoe

	modified again by Rashida Kamal
	17 Nov 2019
*/

var express = require('express');			    // include express.js
var server = express();						        // a local instance of it
var bodyParser = require('body-parser');	// include body-parser
server.use('/',express.static('public')); // serve static files from /public

// you need a couple of parsers for the body of a POST request:
server.use(bodyParser.json()); 						  // for  application/json
server.use(bodyParser.urlencoded({extended: false})); // for application/x-www-form-urlencoded

// this runs after the server successfully starts:
function serverStart() {
  var port = this.address().port;
  console.log('Server listening on port '+ port);
}

// this is called by both GET and POST handlers,
// to format a response to the request:
function formatResponse(thisContent) {
	var result = 'I will say:' + '\n' + thisContent.name;
  	return result;
}

function handleGet (request, response) {
	console.log('got a GET request');
	// the parameters of a GET request are passed in
	// request.query. Pass that to formatResponse()
	// for formatting:
	var content = formatResponse(request.query);
	console.log(content);

	// send the response:
	response.send(content);
	response.end();
}

function handleStatement(request, response) {
	console.log('Got a POST request');
	// the parameters of a GET request are passed in
	// request.body. Pass that to formatResponse()
	// for formatting:
	var content = formatResponse(request.body);
	console.log(content);

	// send the response:
	response.send(content);
	response.end();
	
}

// this is the callback function for when the client
// requests the date (a dynamic route):
function handleDate(request, response) {

	// response.json(request.path) // send this back so 
	console.log('got a GET request');
	// send the response:
  var now = new Date();
	response.send("Date: " + now + "\n");
	response.end();
}

function setEmotion(request, response) {
	var content = 'The emotion you gave me is: ' ;
	var emotion = request.params.emotion;
	ages.push(age);
	content += age;
	content += '\n';			// add a newline at the end of the content
	response.send(content);	// send it back to the client
	response.end();			// close the connection
}

function handleEmotion(request, response) {
	var content = 'The last emotion you gave me is: ';
	var age = ages[ages.length -1];
	content += age;
	content += '\n';			// add a newline at the end of the content
	response.send(content);	// send it back to the client
	response.end();			// close the connection
}

// start the server:
server.listen(8080, serverStart);

server.get('/date/', handleDate);  


// server.get('/state/', handleGet); // returns current state
// server.get('/state/:state', setState); // 

// server.get('/emotion/', handleEmotion);
// server.get('/emotion/:emotion', setEmotion);       

server.get('/statement/', handleGet);    
server.post('/statement/', handleStatement);  

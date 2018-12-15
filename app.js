var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var bodyparser = require("body-parser");
var ejs = require("ejs");
var mongoose = require('mongoose');

var port = 8080;

server.listen(port);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: false
}));

console.log("server online at port "+ port);

app.set("views", __dirname +"/views");
app.use(express.static(__dirname +"/public"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// mongoose.connect("mongodb://boblp:328bu5ad@ds145379.mlab.com:45379/bobtest");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

//WebSocketsss
const server_socket = require('http').createServer();
const io = require('socket.io')(server_socket);

server_socket.listen(3000);

io.on('connection', socket => {
	socket.on('prueba_socketss', (var1, var2) => {
		io.emit('respuesta_server', "holis");
	});
});
//websockets end

app.get("/", function(request,response){
	var datos = {
		nombre: "Boob"
	}

	response.render("pantalla", datos);
});

app.post("/ajax_test", function(request, response){
	var nombre = "ianik";

	response.send(nombre);
});

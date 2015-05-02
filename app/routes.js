var Todo = require('./models/todo');
var Temperatures = require('./models/temperatures');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

function getTemperatures(res){
	Temperatures.find(function(err, temperatures) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(temperatures); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});

	// Temperatures --------------------
	app.get('/api/temperatures', function(req, res) {

		// use mongoose to get all todos in the database
		getTemperatures(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/temperatures', function(req, res) {

<<<<<<< HEAD
=======
		console.log(req.body.temperature);

>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4
		// create a todo, information comes from AJAX request from Angular
		Temperatures.create({
			temperature : req.body.temperature,
			date : new Date()
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTemperatures(res);
<<<<<<< HEAD
			broadcast(server, JSON.stringify(todo));
=======
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4
		});

	});

	// delete a todo
	app.delete('/api/temperature/:temperature_id', function(req, res) {
		Temperatures.remove({
			_id : req.params.temperature_id
		}, function(err, temperature) {
			if (err)
				res.send(err);

			getTemperatures(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
<<<<<<< HEAD
};

var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn){
	//
}).listen(8001);

function broadcast(server, msg){
	server.connections.forEach(function(conn){
		conn.sendText(msg);
	})
}

=======
};
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4

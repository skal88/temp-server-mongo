angular.module('todoController', [])

<<<<<<< HEAD
	

// inject the Todo service factory into our controller
.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
	$scope.formData = {};
	$scope.loading = true;

	// GET =====================================================================
	// when landing on the page, get all todos and show them
	// use the service to get all the todos
	Todos.get()
		.success(function(data) {
			$scope.todos = data;
			$scope.loading = false;
		});






	// CREATE ==================================================================
	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {

		// validate the formData to make sure that something is there
		// if form is empty, nothing will happen
		if ($scope.formData.text != undefined) {
			$scope.loading = true;

			// call the create function from our service (returns a promise object)
			Todos.create($scope.formData)

				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.todos = data; // assign our new list of todos
				});
		}
	};

	// DELETE ==================================================================
	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$scope.loading = true;

		Todos.delete(id)
			// if successful creation, call our get function to get all the new todos
			.success(function(data) {
				$scope.loading = false;
				$scope.todos = data; // assign our new list of todos
			});
	};
}])
=======
	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4





<<<<<<< HEAD
.factory('socket', ['$rootScope', function($rootScope){
	var socket = new WebSocket("ws://localhost:8001");

	return{
		onmessage: function(callback){
			socket.onmessage = function(message){
				var args = arguments;
				$rootScope.$apply(function(){
					if(callback){
						callback.apply(socket, args);
					}
				})
			}
		},
	}
}])





.controller('temperatureController',['$scope','$http','Temperatures', 'socket', function($scope, $http, Temperatures, socket){
  
  	socket.onmessage(function(data){
  		Temperatures.get().success(function(data){
  			$scope.myModel = data;
  		})
  	});

    Temperatures.get()
=======

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}])

.controller('temperatureController',['$scope','$http','Temperatures', function($scope, $http, Temperatures){
  Temperatures.get()
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4
  .success(function(data){
  	  $scope.xkey = 'date';
  
	  $scope.ykeys = ['temperature'];
	  
	  $scope.labels = ['temperatura'];
	  /*for(var i=0; i<data.length; i++){
	  	var date = new Date(data[i].date);
	  	data[i].date = date.toDateString();
	  }*/
  	  $scope.myModel = data;
  	  console.log(data);
  })
  
}])

<<<<<<< HEAD




=======
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4
.directive('barchart', function() {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div class="Morris-line"></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {

        	$scope.$watch("myModel",function(newValue,oldValue) {
        		console.log(element);
		        var data = $scope[attrs.data],
                xkey = $scope[attrs.xkey],
                ykeys= $scope[attrs.ykeys],
                labels= $scope[attrs.labels];

	            Morris.Line({
	                element: element,
	                data: data,
	                xkey: xkey,
	                ykeys: ykeys,
	                ymin: 0,
	                ymax: 50,
	                labels: labels,
<<<<<<< HEAD
	                xLabels: "minute",
=======
	                xLabels: "30min",
>>>>>>> 933e08bb9af444840369cef4f73636d16dd77ea4
	                yLabelFormat: function (y) { return y.toString() + 'ºC'; },
	                //dateFormat: function (x) { return new Date(x).toDateString(); },
	                resize: true,
	            });
		    });
       
        }
        

    };

})
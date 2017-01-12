var app=angular.module('contactListApp',[])
app.controller('appCtrl', function($scope,$http) {
 console.log ('Hello from controller!');

var refresh= function(){
$http({
  method: 'GET',
  url: '/contactList'
}).then(function(response) {
    console.log("Got the data requested");
 	$scope.contactList = response.data;
  });
};

refresh();

$scope.addContact = function(){
	console.log($scope.x);
	$http.post('/contactList', $scope.x).then(function successCallback(response) {
    console.log(response);
    refresh();
  }, function errorCallback(response) {
  	Console.log('error')
  });
};

$scope.remove = function(id){
	console.log(id);
	$http.delete('/contactList/' + id).then(function successCallback(response){
		refresh();
	})
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/contactList/' + id).then(function successCallback(response){
		$scope.x=response.data[0];
	});
};

$scope.update = function(){
	console.log($scope.x._id);
	$http.put('/contactList/'+ $scope.x._id, $scope.x).then(function successCallback(response){
		refresh();
	});
};

$scope.deselect = function(){
	$scope.x="";
};
});
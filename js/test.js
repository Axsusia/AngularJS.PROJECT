console.log('for test  <<<<<');
var myApp = angular.module('myApp',[]);

myApp.factory('Data', function (){
	return {message : 'this is from js data'};
});

function FirstCtrl($scope, Data){
	//$scope = {message : "   ssw test"}
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	// second scope
	$scope.data = Data;


	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	}
}
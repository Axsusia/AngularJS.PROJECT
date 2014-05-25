console.log('for test  <<<<<');
var myApp = angular.module('myApp',[]);

myApp.factory('Data', function (){
	console.log(this);


	return {message : 'this is from js data'};
});

function FirstCtrl($scope, Data){
	console.log("<-----FirstCtrl------>");
	//$scope = {message : "   ssw test"}
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	// second scope
	console.log("<-----SecondCtrl------>");
	$scope.data = Data;


	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	}
}


// ------------ test for conpe
/**
 * change location addParmas for ajax;
 */
function addParam (scopeName, callName, params){
	if(scopeName) return ;
	if(params || typeof params === "object") return ;

	var addParam = window[scopeName].CALL[callName].addParam;

	addParam = params;
	return;
}
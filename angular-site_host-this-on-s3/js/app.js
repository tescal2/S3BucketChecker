console.log("loading");
var app = angular.module("s3BucketChecker", []);

app.controller("BucketCtrl", ['$scope','$http', function($scope, $http) {

 //$http.defaults.headers.common.["X-Api-Key"] = 'something';
 //listen to click event, then use the Factory
	 $scope.lookForBucket = function (bucketName) {
		 var url = 'https://40fuujdkal.execute-api.us-west-2.amazonaws.com/mvp?bucketName='+bucketName;
	 	  $scope.loading=true;
      $scope.result=null;
		 //initialize the following as soon as the search button is clicked
		 $http({
		        url: url,
		        method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
		    })
		    .then(function(response) {
		            console.log("data",response.data);
		            $scope.result=response.data;
		            $scope.loading=false;
		    },
		    function(response) {
		            console.log("error", response);
		    });

	 };





}]);

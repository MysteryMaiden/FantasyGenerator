angular.module('generApp', [])
.controller('generateController', function($scope) {
    var G = this; // Optional, for using 'controller as' syntax
    alert("TEST1");

    $scope.nameG = true; // Set to true initially to show the section

    $scope.next = function(event) {
        if (event === "name") {
            alert("TEST");
            $scope.nameG = false;
        }
    };
});

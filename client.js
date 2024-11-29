angular.module('generApp', [])
.controller('generateController', function($scope) {
  // Initialize variables
  $scope.selectedGender = '';
  $scope.generatedName = '';

  // Function to generate a name using generator.js
  $scope.generateName = function() {
    if (!$scope.selectedGender) {
      alert('Please select Male, Female, or Random.');
      return;
    }

    // Call the `generateNumber` function from generator.js
    const generatedData = generateNumber($scope.selectedGender);
    $scope.generatedName = generatedData.name; // Set the generated name
    console.log(`Generated Name: ${$scope.generatedName}`);
  };

  // Function for "Next" button
  $scope.next = function() {
    alert('Next button clicked!');
    // Add logic for navigating to the next generator
  };
});

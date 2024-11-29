angular.module('generApp', [])
.controller('generateController', function($scope) {
  // Initialize variables
  $scope.selectedGender = null; // Default: no selection
  $scope.generatedName = '';
  $scope.visibleSections = {
    'Name_Generator': true, // Initially show the Name Generator section
  };

  // Function to generate a name using generator.js
  $scope.generateName = function() {
    console.log("Selected Gender:", $scope.selectedGender); // Debugging log

    // Validate if a gender has been selected
    if (!$scope.selectedGender) {
      alert('Please select Male, Female, or Random.');
      return;
    }

    // Call the generateNumber function from generator.js
    const generatedData = generateNumber($scope.selectedGender); // Pass selectedGender
    $scope.generatedName = generatedData.name; // Set the generated name
    console.log(`Generated Name: ${$scope.generatedName}`);
  };

  // Function to hide a section dynamically
  $scope.next = function(section) {
    if ($scope.visibleSections[section] !== undefined) {
      $scope.visibleSections[section] = false; // Hide the specified section
      console.log(`${section} is now hidden.`);
    } else {
      console.error(`Section '${section}' does not exist.`);
    }
  };
});

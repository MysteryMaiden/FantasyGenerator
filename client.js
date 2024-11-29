angular.module('generApp', [])
.controller('generateController', function($scope) {
  // Initialize variables
  $scope.selectedGender = '';
  $scope.generatedName = '';
  $scope.hiddenSections = {}; // Track which sections are hidden

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

  // Function to determine if a section is visible
  $scope.isVisible = function(section) {
    return !$scope.hiddenSections[section]; // Visible if not in hiddenSections
  };

  // Function for the "Next" button to hide sections dynamically
  $scope.next = function(section) {
    $scope.hiddenSections[section] = true; // Hide the specified section
    console.log(`${section} is now hidden.`);
  };
});

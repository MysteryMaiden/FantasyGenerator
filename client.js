angular.module('generApp', [])
.controller('formController', function($scope) {
  // Initialize which section is visible
  $scope.visibleSection = 'Name_Generator'; // Default to the name generator section
  $scope.generatedName = null; // Store the generated name
  $scope.selectedGender = null; // Store the selected gender

  // Function to show a specific section
  $scope.showSection = function(section) {
    $scope.visibleSection = section;
    console.log(`Switched to section: ${section}`);
  };

  // Function to generate a name using generator.js
  $scope.generateName = function() {
    console.log("Selected Gender:", $scope.selectedGender); // Debugging log

    if (!$scope.selectedGender) {
      alert('Please select Male, Female, or Random.');
      console.log('Selected Gender:', $scope.selectedGender);
      return;
    }

    // Call the function from generator.js
    const result = generateNumber($scope.selectedGender); // Pass selected gender to generator.js
    $scope.generatedName = result.name; // Store the name for display and later use
    console.log(`Generated Name: ${$scope.generatedName}`);
  };
});

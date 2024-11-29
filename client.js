angular.module('generApp', [])
.controller('formController', function($scope) {
  // Initialize which section is visible
  $scope.visibleSection = 'Name_Generator'; // Default to the name generator section

  // Function to show a specific section
  $scope.showSection = function(section) {
    $scope.visibleSection = section;
    console.log(`Switched to section: ${section}`);
  };
});

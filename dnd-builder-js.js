// app.js
angular.module('generApp', [])
.controller('formController', function($scope) {
    // Initialize variables
    $scope.visibleSection = 'Name_Generator';
    $scope.generatedName = null;
    $scope.selectedGender = null;

    // Arrays for name generation
    const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    // Function to generate name
    $scope.generateName = function() {
        if (!$scope.selectedGender) {
            alert('Please select Male, Female, or Random.');
            return;
        }

        let gender = $scope.selectedGender;
        if (gender === 'random') {
            gender = Math.random() < 0.5 ? 'male' : 'female';
        }

        // Generate random name
        const lengths = [2, 3, 4, 5, 6];
        const nameLength = lengths[Math.floor(Math.random() * lengths.length)];
        let name = '';
        
        for (let i = 0; i < nameLength; i++) {
            if (i % 2 === 0) {
                name += consonants[Math.floor(Math.random() * consonants.length)];
            } else {
                name += vowels[Math.floor(Math.random() * vowels.length)];
            }
        }

        $scope.generatedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    // Section navigation functions
    $scope.nextSection = function() {
        if ($scope.generatedName) {
            $scope.visibleSection = 'Personality';
        }
    };

    $scope.previousSection = function() {
        $scope.visibleSection = 'Name_Generator';
    };
});

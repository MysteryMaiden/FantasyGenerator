// Arrays for generating random names
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];

// Function to generate a random fantasy name
function generateName() {
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
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to handle gender selection and generate a name
function generateNumber(selectedGender) {
    let gender = selectedGender;

    // Handle "random" gender selection
    if (selectedGender === 'random') {
        gender = Math.random() < 0.5 ? 'male' : 'female';
    }

    const generatedName = generateName(); // Generate the random name
    console.log(`Your Gender is: ${gender}`);
    console.log(`Generated Name: ${generatedName}`);

    // Return the result to the AngularJS controller
    return { gender, name: generatedName };
}

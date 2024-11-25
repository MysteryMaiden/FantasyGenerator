const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];

// Function to generate a random name
function generateName() {
    // Randomly choose the length (2, 4, 6, 8, or 10)
    const lengths = [2, 4, 6, 8, 10];
    const nameLength = lengths[Math.floor(Math.random() * lengths.length)];
    
    let name = '';
    for (let i = 0; i < nameLength; i++) {
        if (i % 2 === 0) {
            // Add a random consonant
            name += consonants[Math.floor(Math.random() * consonants.length)];
        } else {
            // Add a random vowel
            name += vowels[Math.floor(Math.random() * vowels.length)];
        }
    }
    
    // Format the name: lowercase everything, capitalize the first letter
    name = name.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// Function to generate the name based on selection
function generateNumber() {
    let maleOrFemale = '';

    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const randomRadio = document.getElementById('random');

    if (maleRadio.checked) {
        maleOrFemale = 'male';
    } else if (femaleRadio.checked) {
        maleOrFemale = 'female';
    } else if (randomRadio.checked) {
        let answer = Math.floor(Math.random() * 2);
        maleOrFemale = answer === 0 ? 'male' : 'female';
    } else {
        console.log('Please select Male, Female, or Random');
        return;
    }

    const generatedName = generateName(); // Use the new name generator
    const ReturnedText = `Your fantasy name is: ${generatedName}`;
    replace.innerHTML = ReturnedText;
}

button.addEventListener('click', generateNumber);

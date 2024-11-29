const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');
const next = document.getElementById('NextButton');
let generatedName;

// Arrays for generating random names
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];

// Function to generate a random name
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
function generateNumber() {
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const randomRadio = document.getElementById('random');

    let maleOrFemale = '';

    if (maleRadio.checked) {
        maleOrFemale = 'male';
    } else if (femaleRadio.checked) {
        maleOrFemale = 'female';
    } else if (randomRadio.checked) {
        maleOrFemale = Math.random() < 0.5 ? 'male' : 'female';
    } else {
        replace.innerHTML = 'Please select Male, Female, or Random';
        return;
    }

    generatedName = generateName();
    console.log(`Generated Name: ${generatedName}`);
    replace.innerHTML = `Your fantasy name is: ${generatedName}`;
}

// Attach event listener to the Generate button
button.addEventListener('click', generateNumber);

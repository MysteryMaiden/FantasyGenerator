const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');
const next = document.getElementById('NextButton');
let generatedName;
let generated = "no";

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];

// Function to generate a random fantasy name
function generateName() {
    const lengths = [2, 3, 4, 5, 6]; // Possible name lengths
    const nameLength = lengths[Math.floor(Math.random() * lengths.length)];
    let name = '';
    for (let i = 0; i < nameLength; i++) {
        // Alternate between consonants and vowels
        if (i % 2 === 0) {
            name += consonants[Math.floor(Math.random() * consonants.length)];
        } else {
            name += vowels[Math.floor(Math.random() * vowels.length)];
        }
    }
    // Format the name to start with a capital letter
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to handle gender-based name generation
function generateNumber() {
    let maleOrFemale = '';

    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const randomRadio = document.getElementById('random');

    // Determine selected gender
    if (maleRadio.checked) {
        maleOrFemale = 'male';
    } else if (femaleRadio.checked) {
        maleOrFemale = 'female';
    } else if (randomRadio.checked) {
        let answer = Math.random() < 0.5 ? 'male' : 'female';
        maleOrFemale = answer;
    } else {
        replace.innerHTML = 'Please select Male, Female, or Random';
        return;
    }

    // Generate and display the name
    generatedName = generateName();
    replace.innerHTML = `Your fantasy name is: ${generatedName}`;
    generated = "yes"; // Update generated status
    console.log(`Generated Name: ${generatedName}`);
    console.log(`Selected Gender: ${maleOrFemale}`);
}

// Function to check and show the "Next" button
function checkGenerated() {
    const interval = setInterval(() => {
        if (generated === "yes") {
            next.style.display = 'block'; // Make the button visible
            clearInterval(interval); // Stop checking once complete
        }
    }, 100);
}

// Attach event listener to the Generate button
button.addEventListener('click', () => {
    generateNumber();
    checkGenerated();
});

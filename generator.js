const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');
const next = document.getElementById('NextButton');
let generatedName;
let generated = "no";
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
        replace.innerHTML = 'Please select Male, Female, or Random';
        return;
    }

    generatedName = generateName();
    console.log(`Generated Name: ${generatedName}`);
    const ReturnedText = `Your fantasy name is: ${generatedName}`;
    replace.innerHTML = ReturnedText;
    if (generatedName) {
        generated = "yes";
        console.log(`Generated Status: ${generated}`);
    }
    console.log('Your Gender is: ' + maleOrFemale)
}

// Loop to check when `generated` is "yes"
function checkGenerated() {
    const interval = setInterval(() => {
        console.log(`Checking generated: ${generated}`);
        if (generated === "yes") {
            next.style.display='block'; // Make the button visible
            clearInterval(interval); // Stop checking once "yes" is reached
        }
    }, 100);
}

// Attach event listener to button
button.addEventListener('click', () => {
    generateNumber();
    checkGenerated();
});



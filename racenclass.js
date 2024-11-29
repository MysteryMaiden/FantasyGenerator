const button = document.getElementById('generateButton');
const classReplace = document.getElementById('class');
const raceReplace = document.getElementById('race')
const finish = document.getElementById('finishButton');
let generated = "no";
let race;
let Class;
const races = [
    "Aarakocra", "Aasimar",  "Bugbear",  "Centaur",  "Changeling", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", 
    "Giff", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kalashtar", 
    "Kenku", "Kobold", "Lizardfolk", "Locathah", "Minotaur", "Orc", "Satyr", "Shifter", "Tabaxi", "Tiefling", "Tortle", 
    "Triton", "Verdan", "Warforged", "Yuan-ti Pureblood"
  ];
const classes = [
    "Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", 
    "Warlock", "Wizard"
  ];

// Function to generate a random name
function generateRaceAndClass() {
    
    race = races[Math.floor(Math.random() * races.length)];
    console.log(race)

    Class = classes[Math.floor(Math.random() * classes.length)];
    console.log(Class)

    classReplace.innerHTML = Class;
    raceReplace.innerHTML = race;
    generated = "yes"

}


// Loop to check when `generated` is "yes"
function checkGenerated() {
    const interval = setInterval(() => {
        console.log(`Checking generated: ${generated}`);
        if (generated === "yes") {
            finish.style.display='block'; // Make the button visible
            clearInterval(interval); // Stop checking once "yes" is reached
        }
    }, 100);
}

// Attach event listener to button
button.addEventListener('click', () => {
    generateRaceAndClass();
    checkGenerated();
});


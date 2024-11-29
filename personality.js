const button = document.getElementById('generateButton');
const next = document.getElementById('NextButton')
const traitReplace = document.getElementById('trait');
const idealReplace = document.getElementById('ideal');
const bondsReplace = document.getElementById('bonds');
const flawReplace = document.getElementById('flaw');
const traits = [
    "Brave", "Curious", "Kind", "Stubborn", "Bold", "Quiet", "Honest", "Cautious", 
    "Loyal", "Witty", "Creative", "Reckless", "Proud", "Thoughtful", "Cheerful", 
    "Observant", "Hot-headed", "Impulsive", "Ambitious", "Skeptical", "Patient", 
    "Arrogant", "Generous", "Suspicious", "Playful", "Pragmatic", "Stoic", 
    "Adventurous", "Pessimistic", "Dutiful"
]

const ideals = [
    "Freedom", "Strength", "Knowledge", "Compassion", "Tradition", "Loyalty", 
    "Justice", "Peace", "Power", "Independence", "Honor", "Creativity", "Glory", 
    "Friendship", "Humility", "Growth", "Truth", "Wealth", "Protection", "Community", 
    "Change", "Equality", "Discovery", "Courage", "Balance", "Family", "Revenge", 
    "Leadership", "Faith", "Hope"
] 

const bonds = [
    "Family first", "Childhood friend", "Lost love", "Mentor", "Old grudge", 
    "Sacred relic", "homeland", "Sibling", "Secret society", "hometown", 
    "weapon", "Ancient curse", "Loyal companion", "Deity's blessing", "Fallen comrade", 
    "master", "Oath-bound duty", "Magical artifact", "village elder", "Former ally", 
    "Military unit", "Trusted partner", "apprentice", "Nature's beauty", "Mysterious stranger", 
    "kingdom", "Sacred texts", "Lost heirloom", "adventuring party", "Hidden truth"
]

const flaws = [
    "Greedy", "Vengeful", "Impatient", "Stubborn", "Arrogant", "Reckless", "Cowardly", 
    "Selfish", "Suspicious", "Hot-tempered", "Paranoid", "Forgetful", "Overconfident", 
    "Dishonest", "Prideful", "Lazy", "Cynical", "Gullible", "Obsessive", "Secretive", 
    "Pessimistic", "Apathetic", "Jealous", "Distrustful", "Overindulgent", "Impulsive", 
    "Inflexible", "Melancholy", "Overzealous", "Distracted"
]

let chosenTrait;
let chosenIdeal;
let chosenBonds;
let chosenFlaw;
let chosenPersonality = [];
let generated = 'no';

function generatePersonality() {
    /* Generating Trait: */
     chosenTrait = traits[Math.floor(Math.random()*traits.length)]
    /* Generating ideal: */
    chosenIdeal = ideals[Math.floor(Math.random()*ideals.length)]
    /* Generating bonds: */
    chosenBonds = bonds[Math.floor(Math.random()*bonds.length)]
    /* Generating ideal: */
    chosenFlaw = flaws[Math.floor(Math.random()*flaws.length)]
    /* Combining: */
    chosenPersonality = [chosenTrait, chosenIdeal, chosenBonds, chosenFlaw]
    console.log(chosenPersonality)
    traitReplace.innerHTML = chosenTrait;
    idealReplace.innerHTML = chosenIdeal;
    bondsReplace.innerHTML = chosenBonds;
    flawReplace.innerHTML = chosenFlaw;
    generated = 'yes';
}

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
    generatePersonality();
    checkGenerated();
});

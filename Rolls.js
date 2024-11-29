const next = document.getElementById('NextButton')
const STRChange = document.getElementById('STR');
const DEXChange = document.getElementById('DEX');
const CONChange = document.getElementById('CON');
const INTChange = document.getElementById('INT');
const WISChange = document.getElementById('WIS');
const CHAChange = document.getElementById('CHA');
let generated;
const BTN = document.getElementById('generateButton')
const changes = [STRChange, DEXChange, CONChange, INTChange, WISChange, CHAChange];
let rolls = [0, 0, 0, 0, 0, 0,]
function rollTwenty() {
    return Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
}

function changeText(){
for (let i = 0; i < changes.length; i++) {
    const roll = rollTwenty(); // Get a random roll
    changes[i].innerText = roll; // Update the corresponding HTML element
    rolls[i] = roll;
     
}
console.log(rolls)
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
BTN.addEventListener('click', () => {
    changeText();
    checkGenerated();
});

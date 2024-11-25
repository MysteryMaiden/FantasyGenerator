const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');
const femaleNames = ['Saldara', 'Lilivin', 'Parape', 'Ficile', 'Draygha', "Kaihya"];
const maleNames = ['Jiroh', 'Remsis', 'Phyren', 'Olivander', 'Crymston', 'Reeghn'];

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


    let generatedNum;
    let ReturnedText;
    if (maleOrFemale === 'female') {
        generatedNum = Math.floor(Math.random() * femaleNames.length);
        ReturnedText = `Your fantasy name is: ${femaleNames[generatedNum]}`;
    } else if (maleOrFemale === 'male') {
        generatedNum = Math.floor(Math.random() * maleNames.length);
        ReturnedText = `Your fantasy name is: ${maleNames[generatedNum]}`;
    }
    replace.innerHTML = ReturnedText;
}


button.addEventListener('click', generateNumber);
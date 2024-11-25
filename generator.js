const button = document.getElementById('generateButton');
const replace = document.getElementById('ReplaceableText');
const femaleNames = [
    "Aralyn", "Thessara", "Miraven", "Velindra", "Kaelith", 
    "Selarya", "Nymira", "Isilya", "Drayenne", "Cireth",
    "Faylinn", "Lothira", "Zynara", "Eryndel", "Vaelara",
    "Sylveth", "Maevira", "Orinith", "Quellana", "Rylora",
    "Xanethe", "Vionara", "Kelyndra", "Talyssia", "Zorilith",
    "Yvaria", "Althara", "Brelyn", "Corintha", "Lazanya",
    "Phyrra", "Sylistra", "Aerith", "Lunara", "Myrelis",
    "Daenith", "Zalithra", "Kyverra", "Norynn", "Esvara",
    "Velisandra", "Crylanna", "Olyssia", "Tyshara", "Vynesse",
    "Nalyra", "Xyvrina", "Eolindra", "Ashelia", "Zyraneth"
];
const maleNames = [
    "Thandor", "Kaelorn", "Zaryth", "Baltryn", "Myronis", 
    "Erythas", "Dralok", "Fenrik", "Krovan", "Cyntheris",
    "Jareth", "Torvyn", "Loryn", "Orithan", "Zephyros", 
    "Nalthar", "Xyros", "Vyran", "Quenlor", "Ryndar",
    "Brelorn", "Galdar", "Tharion", "Zorvan", "Vaelric",
    "Alaric", "Tymar", "Lycron", "Xandor", "Deyric",
    "Brynthar", "Zeroth", "Ryven", "Drakos", "Kythar",
    "Thalos", "Varic", "Korvan", "Zenthos", "Voryn",
    "Tyvaris", "Orynth", "Myrthor", "Raxen", "Zylric",
    "Kendris", "Xyvarn", "Eronis", "Cypheron", "Valtheron"
];

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
        replace.innerHTML = 'Please select Male, Female, or Random.';
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

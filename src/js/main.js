// Character image array
var maleCharacterImages = [
    "https://i.pinimg.com/736x/86/84/32/868432784e4fd37beb893ecdb0830a74--old-friends-barbarian-fantasy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmOrOMDeUgAgx9IWjCZD9g5oBec8-fk8xZH9UuofS_VAOt3zb",
    "https://i.pinimg.com/736x/08/69/71/086971ec519d01df20ae9cb4bf5e411d--character-outfits-character-portraits.jpg",
    "https://www.videogamesartwork.com/sites/default/files/images/image/1377178542/diablo3-class-barbarian-male-06.jpg",
    "https://i.pinimg.com/736x/bd/4f/b9/bd4fb957e6046747533e6d62af90f6fe--fantasy-warrior-fantasy-art.jpg"
];
var femaleCharacterImages = [
    "https://vignette.wikia.nocookie.net/bgtscc/images/9/99/Barbarian.jpg/revision/latest?cb=20161105214456",
    "https://i.kinja-img.com/gawker-media/image/upload/s--NdbChKcZ--/c_scale,f_auto,fl_progressive,q_80,w_800/18j3zwhxy85iyjpg.jpg",
    "https://cdna.artstation.com/p/assets/covers/images/001/568/198/large/denny-ibnu-barbarian-final-lr.jpg?1448720934",
    "https://i.pinimg.com/236x/30/9a/4e/309a4ecd64fefa487ebb20c2eb23d922--fantasy-characters-female-characters.jpg",
    "http://www.conceptart.org/forums/attachment.php?attachmentid=2239200&d=1490565589s"
];
// Utility functions
var randomIntFromRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var getCharacterImage = function (genderedImages) {
    var randomIndex = randomIntFromRange(0, (genderedImages.length - 1));
    return genderedImages[randomIndex];
};
// create function to get ability score 3-18
var abilityScore = function () { return Math.floor(Math.random() * ((18 - 3) + 1)) + 3; };
var setToMinMax = function (score) { return score > 18 ? score = 18 : score = 3; };
// Declare Variables
var rollStrength = document.querySelector('#rollStrength');
var rolledStrength = document.querySelector('#rolledStrength');
var rollDexerity = document.querySelector('#rollDexerity');
var rolledDexerity = document.querySelector('#rolledDexerity');
var rollConstitution = document.querySelector('#rollConstitution');
var rolledConstitition = document.querySelector('#rolledConstitition');
var rollIntelligence = document.querySelector('#rollIntelligence');
var rolledIntelligence = document.querySelector('#rolledIntelligence');
var rollWisdom = document.querySelector('#rollWisdom');
var rolledWisdom = document.querySelector('#rolledWisdom');
var rollCharisma = document.querySelector('#rollCharisma');
var rolledCharisma = document.querySelector('#rolledCharisma');
var setScore = function (scoreDisplay) {
    var score = abilityScore();
    setToMinMax(score);
    scoreDisplay.textContent = score.toString();
};
rollStrength.addEventListener('click', function () {
    setScore(rolledStrength);
});
rollDexerity.addEventListener('click', function () {
    setScore(rolledDexerity);
});
rollConstitution.addEventListener('click', function () {
    setScore(rolledConstitition);
});
rollWisdom.addEventListener('click', function () {
    setScore(rolledWisdom);
});
rollIntelligence.addEventListener('click', function () {
    setScore(rolledIntelligence);
});
rollCharisma.addEventListener('click', function () {
    setScore(rolledCharisma);
});
var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function () {
    // Get info to create character
    var $name = document.querySelector('#name');
    var $race = document.querySelector('#race');
    var selectedRace = $race.options[$race.selectedIndex];
    var $strength = rolledStrength.textContent;
    var $dexerity = rolledDexerity.textContent;
    var $constitution = rolledConstitition.textContent;
    var $intelligence = rolledIntelligence.textContent;
    var $wisdom = rolledWisdom.textContent;
    var $charisma = rolledCharisma.textContent;
    var $alignment = document.querySelector('#alignment');
    var selectedAlignment = $alignment.options[$alignment.selectedIndex];
    var $cls = document.querySelector('#cls');
    var selectedCls = $cls.options[$cls.selectedIndex];
    var $gender = document.querySelector('#gender');
    var $age = document.querySelector('#age');
    // Post info from character creation to preview area
    var namePreview = document.querySelector('#namePreview');
    namePreview.textContent = $name.value;
    var racePreview = document.querySelector('#racePreview');
    racePreview.textContent = selectedRace.textContent;
    var genderPreview = document.querySelector('#genderPreview');
    genderPreview.textContent = $gender.value;
    var agePreview = document.querySelector('#agePreview');
    agePreview.textContent = $age.value;
    var strengthPreview = document.querySelector('#strengthPreview');
    strengthPreview.textContent = $strength;
    var dexerityPreview = document.querySelector('#dexerityPreview');
    dexerityPreview.textContent = $dexerity;
    var constitutionPreview = document.querySelector('#constitutionPreview');
    constitutionPreview.textContent = $constitution;
    var wisdomPreview = document.querySelector('#wisdomPreview');
    wisdomPreview.textContent = $wisdom;
    var intelligencePreview = document.querySelector('#intelligencePreview');
    intelligencePreview.textContent = $intelligence;
    var charismaPreview = document.querySelector('#charismaPreview');
    charismaPreview.textContent = $charisma;
    var clsPreview = document.querySelector('#clsPreview');
    clsPreview.textContent = selectedCls.textContent;
    var alignmentPreview = document.querySelector('#alignmentPreview');
    alignmentPreview.textContent = selectedAlignment.textContent;
    // Get character preview image based on class and gender
    if ($gender.value.toLowerCase() === 'male') {
        // class if statement for male genders
        var characterImg = document.querySelector('#characterImg');
        characterImg.src = getCharacterImage(maleCharacterImages);
        console.log(characterImg.src);
    }
    else if ($gender.value.toLowerCase() === 'female') {
        var characterImg = document.querySelector('#characterImg');
        characterImg.src = getCharacterImage(femaleCharacterImages);
        console.log(characterImg.src);
    }
    else {
        var characterImg = document.querySelector('#characterImg');
        var randomBoolean = Math.random() >= 0.5;
        if (randomBoolean) {
            characterImg.src = getCharacterImage(maleCharacterImages);
        }
        else if (!randomBoolean) {
            characterImg.src = getCharacterImage(femaleCharacterImages);
        }
        console.log(randomBoolean);
    }
});

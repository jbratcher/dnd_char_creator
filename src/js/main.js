// create function to get ability score 3-18
var abilityScore = function () {
    return Math.floor(Math.random() * ((18 - 3) + 1)) + 3;
};
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
});

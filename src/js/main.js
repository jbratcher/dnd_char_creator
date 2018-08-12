////////////////////////////////////////
// imports
////////////////////////////////////////
import { characterImages } from './characterImages.js';
import { Classes, Races } from './classes.js';
////////////////////////////////////////
// Utility functions
////////////////////////////////////////
var randomIntFromRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var randomBoolean = function () { return Math.random() >= 0.5; };
var abilityScore = function () { return Math.floor(Math.random() * ((18 - 3) + 1)) + 3; };
var setToMinMax = function (score) { return score > 18 ? score = 18 : score = 3; };
////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////
var setScore = function (scoreDisplay) {
    var score = abilityScore();
    setToMinMax(score);
    scoreDisplay.textContent = score.toString();
};
var getCharacterImage = function (genderedImages) {
    var randomIndex = randomIntFromRange(0, (genderedImages.length - 1));
    return genderedImages[randomIndex];
};
// Get Character Attributes to set preview image
// TODO: use attributes to set other output
var getCharacterAttributes = function (charCls, charRace, charGender) {
    if (charGender !== 'male' && charGender !== "female") {
        var gender = randomBoolean();
        if (gender) {
            charGender = "male";
        }
        else if (!gender) {
            charGender = "female";
        }
    }
    return characterImages[charRace][charCls][charGender];
};
var getAbitlityScoreModifier = function (ability) {
    var score = ability;
    var mod = 0;
    if (score === 1) {
        mod -= 5;
    }
    else if (score === 2 || score === 3) {
        mod -= 4;
    }
    else if (score === 4 || score === 5) {
        mod -= 3;
    }
    else if (score === 6 || score === 7) {
        mod -= 2;
    }
    else if (score === 8 || score === 9) {
        mod -= 1;
    }
    else if (score === 10 || score === 11) {
        mod = 0;
    }
    else if (score === 12 || score === 13) {
        mod += 1;
    }
    else if (score === 14 || score === 15) {
        mod += 2;
    }
    else if (score === 16 || score === 17) {
        mod += 3;
    }
    else if (score === 18 || score === 19) {
        mod += 4;
    }
    else {
        mod = 0;
    }
    return mod;
};
////////////////////////////////////////
// Declare big 6 attributes
////////////////////////////////////////
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
// Event listeners for rolling each attribute
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
////////////////////////////////////////////////////////////
// The big submit button for character creation
////////////////////////////////////////////////////////////
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
    var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    var genderPreview = document.querySelector('#genderPreview');
    genderPreview.textContent = $gender.value;
    var charGender = $gender.value.toLowerCase();
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
    var charCls = selectedCls.textContent.toLowerCase();
    var alignmentPreview = document.querySelector('#alignmentPreview');
    alignmentPreview.textContent = selectedAlignment.textContent;
    // Get character preview image based on class and gender
    var characterImg = document.querySelector('#characterImg');
    var charImageSet = function () {
        var characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
        characterImg.src = getCharacterImage(characterAttributes);
        console.log(charCls, charRace, charGender);
    };
    charImageSet();
    // Proficiencies section
    var hitPoints = function () {
        // roll for hit points
        var hitpoints = String(randomIntFromRange(1, Classes[charCls].hitdie));
        // output hit points to hitpoints element
        var hitPointPreview = document.querySelector('#hitPoints');
        hitPointPreview.textContent = hitpoints;
    };
    hitPoints();
    // Get dexerity and armor modifier and set armor class
    var armorClass = function () {
        var base = 10;
        var dexMod = getAbitlityScoreModifier(Number($dexerity));
        // TODO add worn armor modifier
        var ac = String(base + dexMod);
        var armorClassPreview = document.querySelector('#armorClass');
        armorClassPreview.textContent = ac;
        console.log(ac);
    };
    armorClass();
    // Get dexerity modifier and set initiative bonus
    var initiativeMod = function () {
        var dexMod = getAbitlityScoreModifier(Number($dexerity));
        var mod = String(dexMod);
        var initiativeModPreview = document.querySelector('#initiative');
        initiativeModPreview.textContent = mod;
        console.log(mod);
    };
    initiativeMod();
    // Get base speed based on chosen race
    var baseSpeed = function () {
        var speedPreview = document.querySelector('#speed');
        speedPreview.textContent = Races[charRace].speed;
        console.log(Races[charRace].speed);
    };
    baseSpeed();
});

////////////////////////////////////////
// imports
////////////////////////////////////////
import { characterImages } from './characterImages.js';
import { Classes, Races, Levels } from './info.js';
// interface hacks
// interface ArrayConstructor {
// 	from(arrayLike: any, mapFn?, thisArg?): Array<any>;
// }
////////////////////////////////////////
// Utility functions
////////////////////////////////////////
var randomIntFromRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var randomBoolean = function () { return Math.random() >= 0.5; }; // Get a true or false value
var abilityScore = function () { return Math.floor(Math.random() * ((18 - 3) + 1)) + 3; };
var setToMinMax = function (score) { return score > 18 ? 18 : score < 3 ? 3 : score; };
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
        var gender_1 = randomBoolean();
        if (gender_1) {
            charGender = "male";
        }
        else if (!gender_1) {
            charGender = "female";
        }
    }
    return characterImages[charRace][charCls][charGender];
};
var getAbilityScoreModifier = function (ability) {
    var score = ability;
    var mod = 0;
    mod = Math.floor((score / 2) - 5);
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
// Get character info input elements
////////////////////////////////////////////////////////////
// General Info
var name = document.querySelector('#name');
var race = document.querySelector('#race');
var alignment = document.querySelector('#alignment');
var cls = document.querySelector('#cls');
var gender = document.querySelector('#gender');
var age = document.querySelector('#age');
// Skill select
var skill1 = document.querySelector('#skillsSelect1');
var skill2 = document.querySelector('#skillsSelect2');
var skill3 = document.querySelector('#skillsSelect3');
////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////
// Level and experience Section
var currentLevel = document.querySelector('#currentLevel');
var currentExperience = document.querySelector('#currentExperience');
var experienceNextLevel = document.querySelector('#experienceNextLevel');
var addNewExperienceInput = document.querySelector('#addNewExperience');
// Info section
var namePreview = document.querySelector('#namePreview');
var racePreview = document.querySelector('#racePreview');
var genderPreview = document.querySelector('#genderPreview');
var agePreview = document.querySelector('#agePreview');
var strengthPreview = document.querySelector('#strengthPreview');
var dexerityPreview = document.querySelector('#dexerityPreview');
var constitutionPreview = document.querySelector('#constitutionPreview');
var wisdomPreview = document.querySelector('#wisdomPreview');
var intelligencePreview = document.querySelector('#intelligencePreview');
var charismaPreview = document.querySelector('#charismaPreview');
var clsPreview = document.querySelector('#clsPreview');
var alignmentPreview = document.querySelector('#alignmentPreview');
var characterImg = document.querySelector('#characterImg');
// Proficiencies Section
var acrobaticsSkill = document.querySelector('#acrobaticsSkill');
var animalHandlingsSkill = document.querySelector('#animalHandlingsSkill');
var arcanaSkill = document.querySelector('#arcanaSkill');
var athleticsSkill = document.querySelector('#athleticsSkill');
var deceptionSkill = document.querySelector('#deceptionSkill');
var historySkill = document.querySelector('#historySkill');
var intimidationSkill = document.querySelector('#intimidationSkill');
var investigationSkill = document.querySelector('#investigationSkill');
var medicineSkill = document.querySelector('#medicineSkill');
var natureSkill = document.querySelector('#natureSkill');
var perceptionSkill = document.querySelector('#perceptionSkill');
var performanceSkill = document.querySelector('#performanceSkill');
var persuasionSkill = document.querySelector('#persuasionSkill');
var religionSkill = document.querySelector('#religionSkill');
var slieghtOfHandSkill = document.querySelector('#slieghtOfHandSkill');
var stealthSkill = document.querySelector('#stealthSkill');
var survivalSkill = document.querySelector('#survivalSkill');
// Combat section
var hitPointPreview = document.querySelector('#hitPoints');
////////////////////////////////////////////////////////////
// The big submit button for character creation
////////////////////////////////////////////////////////////
var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Get info to create characte
    // General info
    var selectedRace = race.options[race.selectedIndex];
    var strength = rolledStrength.textContent;
    var dexerity = rolledDexerity.textContent;
    var constitution = rolledConstitition.textContent;
    var intelligence = rolledIntelligence.textContent;
    var wisdom = rolledWisdom.textContent;
    var charisma = rolledCharisma.textContent;
    var selectedAlignment = alignment.options[alignment.selectedIndex];
    var selectedCls = cls.options[cls.selectedIndex];
    // Skills
    var selectedSkill1 = skill1.options[skill1.selectedIndex];
    var selectedSkill2 = skill1.options[skill2.selectedIndex];
    var selectedSkill3 = skill1.options[skill3.selectedIndex];
    // Post info from character creation to preview area
    namePreview.textContent = name.value;
    racePreview.textContent = selectedRace.textContent;
    var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    genderPreview.textContent = gender.value;
    var charGender = gender.value.toLowerCase();
    agePreview.textContent = age.value;
    strengthPreview.textContent = strength;
    dexerityPreview.textContent = dexerity;
    constitutionPreview.textContent = constitution;
    wisdomPreview.textContent = wisdom;
    intelligencePreview.textContent = intelligence;
    charismaPreview.textContent = charisma;
    clsPreview.textContent = selectedCls.textContent;
    var charCls = selectedCls.textContent.toLowerCase();
    alignmentPreview.textContent = selectedAlignment.textContent;
    // Skills preview section
    var skillsPreviewList = document.querySelector('#skillsPreviewList');
    var skillsPreviewListItems = skillsPreviewList.children;
    var highlightSkills = function () {
        for (var i = 0; i < skillsPreviewListItems.length; i++) {
            if (skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill1.textContent.trim()
                || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill2.textContent.trim()
                || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill3.textContent.trim()) {
                skillsPreviewListItems[i].style.color = 'green';
            }
            else {
                skillsPreviewListItems[i].style.color = '#ccc';
            }
        }
    };
    highlightSkills();
    // Get character preview image based on class, race, and gender
    var charImageSet = function () {
        var characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
        characterImg.src = getCharacterImage(characterAttributes);
    };
    charImageSet();
    // Proficiencies section
    // Add logic for Proficiencies section
    // Combat Section
    var hitPoints = function () {
        // 1st level is max hit points + constiution modifier
        var mod = getAbilityScoreModifier(Number(constitution));
        var hitpoints = (Classes[charCls].hitdie + mod);
        hitPointPreview.textContent = hitpoints;
    };
    hitPoints();
    // Get dexerity and armor modifier and set armor class
    var armorClass = function () {
        var base = 10;
        var dexMod = getAbilityScoreModifier(Number(dexerity));
        // TODO add worn armor modifier
        var ac = String(base + dexMod);
        var armorClassPreview = document.querySelector('#armorClass');
        armorClassPreview.textContent = ac;
    };
    armorClass();
    // Get dexerity modifier and set initiative bonus
    var initiativeMod = function () {
        var dexMod = getAbilityScoreModifier(Number(dexerity));
        var mod = String(dexMod);
        var initiativeModPreview = document.querySelector('#initiative');
        initiativeModPreview.textContent = mod;
    };
    initiativeMod();
    // Get base speed based on chosen race
    var baseSpeed = function () {
        var speedPreview = document.querySelector('#speed');
        speedPreview.textContent = Races[charRace].speed;
    };
    baseSpeed();
});
// Level advancement button submit
var levelUpButton = document.querySelector('#levelUpButton');
levelUpButton.addEventListener('click', function (e) {
    var constitution = rolledConstitition.textContent;
    var selectedCls = cls.options[cls.selectedIndex];
    var charCls = selectedCls.textContent.toLowerCase();
    e.preventDefault();
    var charLevelUp = function () {
        currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
        experienceNextLevel.textContent = String(Levels[currentLevel.textContent]);
    };
    charLevelUp();
    var addHitPoints = function () {
        // get current hitpoints
        var currentHitPoints = Number(hitPointPreview.textContent);
        // roll for hit points to add
        var mod = getAbilityScoreModifier(constitution);
        var rolledHitPoints = randomIntFromRange(1, Classes[charCls].hitdie);
        var hitPointsToAdd = (rolledHitPoints + mod);
        if (rolledHitPoints + mod <= 0) {
            hitPointsToAdd = 1;
        }
        // add hitpoints to current total and display
        hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
        console.log("current hit points: " + currentHitPoints + "\n Hit Points to Add: " + hitPointsToAdd + "\n Total Hit points " + hitPointPreview.textContent);
    };
    addHitPoints();
});
var addNewExperienceButton = document.querySelector('#addExp');
addNewExperienceButton.addEventListener('click', function (e) {
    e.preventDefault();
    var addExp = function () {
        var currentExpNum = Number(currentExperience.textContent);
        var newExpNum = Number(addNewExperienceInput.value);
        currentExperience.textContent = String(currentExpNum + newExpNum);
    };
    addExp();
    addNewExperienceInput.value = null;
});

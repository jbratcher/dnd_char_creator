'use strict';

var _characterImages = require('./characterImages.js');

var _info = require('./info.js');

////////////////////////////////////////
// Utility functions
////////////////////////////////////////
////////////////////////////////////////
// Imports
////////////////////////////////////////
var randomIntFromRange = function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomBoolean = function randomBoolean() {
    return Math.random() >= 0.5;
}; // Get a random true or false value
var rollAbilityScore = function rollAbilityScore() {
    return randomIntFromRange(3, 18);
};
var setToMinMax = function setToMinMax(score) {
    return score > 18 ? 18 : score < 3 ? 3 : score;
};
var singleWord = /(\w+)/; // capture a single word (i.e. 'strength')
// Initialize variables
var sign;
var modifier;
var totalMod;
var abilityScore;
var abilityScoreMod;
var proficiencyBonus;
////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////
var addOptionstoSelect = function addOptionstoSelect(selectElement, dataArray) {
    dataArray.map(function (optionText) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        selectElement.appendChild(optionElement);
    });
};
var setScore = function setScore(abilityScorePreview) {
    var score = rollAbilityScore();
    setToMinMax(score);
    abilityScorePreview.textContent = String(score);
};
var getCharacterImage = function getCharacterImage(genderedImages) {
    var randomIndex = randomIntFromRange(0, genderedImages.length - 1);
    return genderedImages[randomIndex];
};
// Get Character Attributes to set preview image
var getCharacterAttributes = function getCharacterAttributes(charCls, charRace, charGender) {
    if (charGender !== 'male' && charGender !== "female") {
        var gender_1 = randomBoolean();
        gender_1 ? charGender = "male" : charGender = "female";
    }
    return _characterImages.characterImages[charRace][charCls][charGender];
};
// Set modifier to ability score modifier value
var getAbilityScoreModifier = function getAbilityScoreModifier(abilityScore) {
    return modifier = Math.floor(abilityScore / 2 - 5);
};
// Append sign to value
var appendSigntoValue = function appendSigntoValue(value, node) {
    value > 0 ? sign = "+" : sign = "-";
    value = Math.abs(value);
    node.textContent = sign + " " + value;
};
// set ability modifier to element helper
// const setAbilityModifierToElement = (ability, modFunction, elementAndMethod) => {
//   let modifier = modFunction;
//   elementAndMethod = modifier;
// }
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
    return setScore(rolledStrength);
});
rollDexerity.addEventListener('click', function () {
    return setScore(rolledDexerity);
});
rollConstitution.addEventListener('click', function () {
    return setScore(rolledConstitition);
});
rollWisdom.addEventListener('click', function () {
    return setScore(rolledWisdom);
});
rollIntelligence.addEventListener('click', function () {
    return setScore(rolledIntelligence);
});
rollCharisma.addEventListener('click', function () {
    return setScore(rolledCharisma);
});
// Setters for ability scores
var strength = rolledStrength.textContent;
var dexerity = rolledDexerity.textContent;
var constitution = rolledConstitition.textContent;
var intelligence = rolledIntelligence.textContent;
var wisdom = rolledWisdom.textContent;
var charisma = rolledCharisma.textContent;
////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////
// General Info
var name = document.querySelector('#name');
var race = document.querySelector('#race');
addOptionstoSelect(race, _info.RaceList);
var cls = document.querySelector('#cls');
addOptionstoSelect(cls, _info.ClassList);
var alignment = document.querySelector('#alignment');
addOptionstoSelect(alignment, _info.Alignments);
var selectedAlignment = alignment.options[alignment.selectedIndex];
var availableAlignments = function availableAlignments() {
    alignment.innerHTML = '';
    charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g, "");
    addOptionstoSelect(alignment, _info.Races[charRace].alignments);
};
race.addEventListener('change', availableAlignments);
var gender = document.querySelector('#gender');
var selectedCls = cls.options[cls.selectedIndex];
var charCls = selectedCls.textContent.toLowerCase();
var selectedRace = race.options[race.selectedIndex];
var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
var charGender = gender.value.toLowerCase();
var age = document.querySelector('#age');
var ageHelp = document.querySelector('#ageHelp');
// Displays race specific age help text on race selection
var ageHelpText = function ageHelpText() {
    charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g, "");
    ageHelp.textContent = "Please enter an age between " + _info.Races[charRace].age.min + " and  " + _info.Races[charRace].age.max;
};
race.addEventListener('change', ageHelpText);
// Iniialize help text on page load
ageHelpText();
// Display extra language field if race selection is human or halfelf and add language options
var extraLanguageField = document.querySelector('#extraLanguageField');
var extraLanguage = document.querySelector('#extraLanguage');
var extraLanguageHelp = document.querySelector('#extraLanguageHelp');
addOptionstoSelect(extraLanguage, _info.Languages.standard);
var showExtraLanguageInput = function showExtraLanguageInput() {
    charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g, "");
    charRace === 'human' ? extraLanguageField.classList.remove('d-none') : charRace === 'halfelf' ? extraLanguageField.classList.remove('d-none') : extraLanguageField.classList.add('d-none');
    charRace === 'human' ? extraLanguageHelp.textContent = 'Humans get to choose 1 extra language' : charRace === 'halfelf' ? extraLanguageHelp.textContent = 'Half-Elves get to choose 1 extra language' : extraLanguageHelp.textContent = '';
};
race.addEventListener('change', showExtraLanguageInput);
var racialBonuses = function racialBonuses() {
    addExtraAbilityMofifiers(); // Half-Elf racial ability score bonus (Any 2 plus Charisma)
};
showExtraLanguageInput();
// Skill select
var skill1 = document.querySelector('#skillsSelect1');
addOptionstoSelect(skill1, _info.Skills);
var skill1list = skill1.children;
var skill2 = document.querySelector('#skillsSelect2');
addOptionstoSelect(skill2, _info.Skills);
var skill2list = skill2.children;
var skill3 = document.querySelector('#skillsSelect3');
addOptionstoSelect(skill3, _info.Skills);
var skill3list = skill3.children;
var availableSkills = _info.ClassProps[charCls].availableSkills;
var selectedSkill1 = skill1.options[skill1.selectedIndex];
var selectedSkill2 = skill1.options[skill2.selectedIndex];
var selectedSkill3 = skill1.options[skill3.selectedIndex];
// Skill functions
var highlightAvailableSkills = function highlightAvailableSkills() {
    availableSkills = _info.ClassProps[charCls].availableSkills;
    skill1.innerHTML = "";
    skill2.innerHTML = "";
    skill3.innerHTML = "";
    addOptionstoSelect(skill1, availableSkills);
    addOptionstoSelect(skill2, availableSkills);
    addOptionstoSelect(skill3, availableSkills);
};
// dynamically change available skills based on character class
cls.addEventListener('change', function () {
    charCls = cls.options[cls.selectedIndex].text.toLowerCase();
    highlightAvailableSkills();
});
// Initialize state for selected class on document load
highlightAvailableSkills();
////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////
// Level and experience section
var currentLevel = document.querySelector('#currentLevel');
var currentExperience = document.querySelector('#currentExperience');
var experienceNextLevel = document.querySelector('#experienceNextLevel');
var addNewExperienceInput = document.querySelector('#addNewExperience');
////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////
// General Preview variables
var namePreview = document.querySelector('#namePreview');
var racePreview = document.querySelector('#racePreview');
var genderPreview = document.querySelector('#genderPreview');
var agePreview = document.querySelector('#agePreview');
var clsPreview = document.querySelector('#clsPreview');
var alignmentPreview = document.querySelector('#alignmentPreview');
var characterImg = document.querySelector('#characterImg');
var proficiencyBonusPreview = document.querySelector('#proficiencyBonusPreview');
var languagesPreview = document.querySelector('#languagesPreview');
// General buttons
var createCharacterButton = document.querySelector('#createCharacterButton');
var levelUpButton = document.querySelector('#levelUpButton');
var addNewExperienceButton = document.querySelector('#addExp');
// General functions
var charImageSet = function charImageSet() {
    var characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
    characterImg.src = getCharacterImage(characterAttributes);
};
var charLevelUp = function charLevelUp() {
    currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
    experienceNextLevel.textContent = String(_info.Levels[Number(currentLevel.textContent) - 1].experience);
    updateProficiencyBonus();
};
var addHitPoints = function addHitPoints() {
    var currentHitPoints = Number(hitPointPreview.textContent);
    var rolledHitPoints = randomIntFromRange(1, _info.ClassProps[charCls].hitdie);
    modifier = getAbilityScoreModifier(constitution);
    var hitPointsToAdd = rolledHitPoints + modifier;
    // Prevent negative or zero hit points on level up
    if (rolledHitPoints + modifier <= 0) {
        hitPointsToAdd = 1;
    }
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
};
var updateProficiencyBonus = function updateProficiencyBonus() {
    proficiencyBonus = _info.Levels[currentLevel.textContent].bonus;
    proficiencyBonusPreview.textContent = String(_info.Levels[currentLevel.textContent].bonus);
    appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
};
var addExp = function addExp() {
    var currentExpNum = Number(currentExperience.textContent);
    var newExpNum = Number(addNewExperienceInput.value);
    currentExperience.textContent = String(currentExpNum + newExpNum);
};
var generalInfo = function generalInfo() {
    // Get current state of info required to create character
    selectedCls = cls.options[cls.selectedIndex];
    charCls = selectedCls.textContent.toLowerCase();
    selectedRace = race.options[race.selectedIndex];
    charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    strength = rolledStrength.textContent;
    dexerity = rolledDexerity.textContent;
    constitution = rolledConstitition.textContent;
    intelligence = rolledIntelligence.textContent;
    wisdom = rolledWisdom.textContent;
    charisma = rolledCharisma.textContent;
    selectedAlignment = alignment.options[alignment.selectedIndex];
    charGender = gender.value.toLowerCase();
    languagesPreview.textContent = _info.Races[charRace].languages.map(function (lang) {
        return lang;
    }).join(", ") + (", " + String(extraLanguage.value));
    // Post info from character creation to preview area
    currentLevel.textContent = String(_info.Levels[0].level);
    experienceNextLevel.textContent = String(_info.Levels[0].experience);
    namePreview.textContent = name.value;
    racePreview.textContent = selectedRace.textContent;
    genderPreview.textContent = gender.value;
    agePreview.textContent = age.value;
    strengthPreview.textContent = strength;
    dexerityPreview.textContent = dexerity;
    constitutionPreview.textContent = constitution;
    wisdomPreview.textContent = wisdom;
    intelligencePreview.textContent = intelligence;
    charismaPreview.textContent = charisma;
    clsPreview.textContent = selectedCls.textContent;
    alignmentPreview.textContent = selectedAlignment.textContent;
};
////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////
// Ability score variables
var abilityScoreList = document.querySelector('#abilityScoreList');
var abilityScoreListItems = abilityScoreList.children;
var strengthPreview = document.querySelector('#strengthPreview');
var dexerityPreview = document.querySelector('#dexerityPreview');
var constitutionPreview = document.querySelector('#constitutionPreview');
var wisdomPreview = document.querySelector('#wisdomPreview');
var intelligencePreview = document.querySelector('#intelligencePreview');
var charismaPreview = document.querySelector('#charismaPreview');
var extraAbilityModifier = document.querySelector('#extraAbilityModifier');
var extraAbilityModifier1 = document.querySelector('#extraAbilityModifier1');
var extraAbilityModifier2 = document.querySelector('#extraAbilityModifier2');
var extraAbilityModifierHelp = document.querySelector('#extraAbilityModifierHelp');
// Ability Score functions
var lookupAbilityScore = function lookupAbilityScore(ability) {
    // if ability matches abilityScore in list return number value of abilityScore
    for (var i = 0; i < abilityScoreListItems.length; i++) {
        var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
        if (string.toLowerCase() === ability) {
            abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
            return abilityScore;
        }
    }
};
var racialAbilityModifier = function racialAbilityModifier() {
    charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    var racialAbility = _info.Races[charRace].abilityModifier.ability;
    var racialAbilityMod = _info.Races[charRace].abilityModifier.modifier;
    // if ability matches abilityPreview node text, add modifier to score
    for (var i = 0; i < abilityScoreListItems.length; i++) {
        var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
        if (string.toLowerCase() === racialAbility) {
            var abilityScore_1 = abilityScoreListItems[i].childNodes[3].textContent;
            abilityScoreListItems[i].childNodes[3].textContent = String(Number(abilityScore_1) + Number(racialAbilityMod));
        }
    }
    // if race has extra ability to modify
    if (_info.Races[charRace].abilityModifier.extraAbility) {
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            if (string.toLowerCase() === _info.Races[charRace].abilityModifier.extraAbility) {
                var abilityScore_2 = abilityScoreListItems[i].childNodes[3].textContent;
                abilityScoreListItems[i].childNodes[3].textContent = String(Number(abilityScore_2) + Number(_info.Races[charRace].abilityModifier.extraModifier));
            }
        }
    }
};
// Add ability options to extra ability select element
addOptionstoSelect(extraAbilityModifier1, _info.Abilities);
addOptionstoSelect(extraAbilityModifier2, _info.Abilities);
// Display extra ability modifier field if race is Half-Elf
var showExtraModifiersInput = function showExtraModifiersInput() {
    charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g, "");
    charRace === 'halfelf' ? extraAbilityModifier.classList.remove('d-none') : extraAbilityModifier.classList.add('d-none');
    charRace === 'halfelf' ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1' : extraAbilityModifierHelp.textContent = '';
};
race.addEventListener('change', showExtraModifiersInput);
// Hide first selection in 2nd select list
var hideMod1Selection = function hideMod1Selection() {
    var firstSelection = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
    extraAbilityModifier2.innerHTML = "";
    _info.Abilities.map(function (ability) {
        if (ability !== firstSelection) {
            var abilityElement2 = document.createElement("option");
            abilityElement2.textContent = ability;
            extraAbilityModifier2.appendChild(abilityElement2);
        }
    });
};
extraAbilityModifier1.addEventListener('change', hideMod1Selection);
// if extra ability score is selected add +1 to ability score preview
var addExtraAbilityMofifiers = function addExtraAbilityMofifiers() {
    if (charRace === 'halfelf') {
        // get selected abilities
        var mod1 = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
        var mod2 = extraAbilityModifier2.options[extraAbilityModifier2.selectedIndex].textContent;
        // get selected abilities preview element
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            if (string === mod1 || string === mod2) {
                var abilityScore_3 = Number(abilityScoreListItems[i].childNodes[3].textContent);
                abilityScore_3 += 1;
                abilityScoreListItems[i].childNodes[3].textContent = String(abilityScore_3);
            }
        }
    }
};
////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////
// Skill variables
var skillsPreviewList = document.querySelector('#skillsPreviewList');
var skillsPreviewListItems = skillsPreviewList.children;
// Skill functions
var getSkillModifier = function getSkillModifier(skillText) {
    var skillAbility = singleWord.exec(skillText);
    var skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());
    abilityScoreMod = getAbilityScoreModifier(skillAbilityScore);
    return totalMod = abilityScoreMod + proficiencyBonus;
};
var highlightSkills = function highlightSkills() {
    // Get current values of required info
    selectedSkill1 = skill1.options[skill1.selectedIndex];
    selectedSkill2 = skill1.options[skill2.selectedIndex];
    selectedSkill3 = skill1.options[skill3.selectedIndex];
    updateProficiencyBonus();
    // if selected skills match text of selected skill in preview section, highlight in green and append modifier, otherwise dim and remove modifier if present
    for (var i = 0; i < skillsPreviewListItems.length; i++) {
        // reset modifier node to '-'
        skillsPreviewListItems[i].childNodes[5].textContent = "-";
        if (skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill1.textContent.trim() || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill2.textContent.trim() || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill3.textContent.trim()) {
            skillsPreviewListItems[i].style.color = 'green';
            getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
            appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
        } else {
            // if no match dim selection
            skillsPreviewListItems[i].style.color = '#ccc';
        }
    }
};
////////////////////////////////////////////////////////////
// Combat
////////////////////////////////////////////////////////////
// Combat variables
var hitPointPreview = document.querySelector('#hitPoints');
var armorClassPreview = document.querySelector('#armorClass');
var initiativeModPreview = document.querySelector('#initiative');
var speedPreview = document.querySelector('#speed');
var passivePerceptionPreview = document.querySelector('#passivePerception');
var darkvisionPreview = document.querySelector('#darkvisionPreview');
var sizePreview = document.querySelector('#size');
// Combat functions
var hitPoints = function hitPoints() {
    // 1st level is max hit points + constiution modifier
    var modifier = getAbilityScoreModifier(Number(constitution));
    var hitpoints = _info.ClassProps[charCls].hitdie + modifier;
    hitPointPreview.textContent = String(hitpoints);
};
var armorClass = function armorClass() {
    var base = 10;
    var dexMod = getAbilityScoreModifier(Number(dexerity));
    var armorMod = 0;
    var ac = String(base + dexMod + armorMod);
    armorClassPreview.textContent = ac;
};
var initiativeMod = function initiativeMod() {
    var dexMod = getAbilityScoreModifier(Number(dexerity));
    initiativeModPreview.textContent = String(dexMod);
};
var baseSpeed = function baseSpeed() {
    return speedPreview.textContent = _info.Races[charRace].speed;
};
var passivePerception = function passivePerception() {
    return passivePerceptionPreview.textContent = String(10 + getAbilityScoreModifier(wisdom));
};
var darkvision = function darkvision() {
    charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    if (_info.Races[charRace].darkvision) {
        darkvisionPreview.textContent = '60 ft.';
    } else {
        darkvisionPreview.textContent = 'None';
    }
};
var setCharacterSize = function setCharacterSize() {
    return sizePreview.textContent = _info.Races[charRace].size;
};
// Saving throws
var savingThrowList = document.querySelector('#savingThrowPreviewList');
var savingThrowListItems = savingThrowList.children;
// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)
var calculateSavingThrowMods = function calculateSavingThrowMods() {
    charCls = selectedCls.textContent.toLowerCase();
    var abilities = _info.ClassProps[charCls].savingThrows;
    abilities.map(function (ability) {
        // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
        for (var i = 0; i < savingThrowListItems.length; i++) {
            var string = singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0].toLowerCase();
            if (string === ability) {
                var abilityMod = getAbilityScoreModifier(lookupAbilityScore(ability));
                var totalMod_1 = Number(abilityMod + proficiencyBonus);
                appendSigntoValue(totalMod_1, savingThrowListItems[i].childNodes[3]);
            }
        }
    });
};
// Special Resistances
var specialResistances = document.querySelector('#specialResistances');
var poisonResistance = document.querySelector('#poisonResistance');
var charmResistance = document.querySelector('#charmResistance');
var calculateSpecialResistances = function calculateSpecialResistances() {
    charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g, "");
    console.log(charRace);
    if (charRace === 'dwarf') {
        poisonResistance.textContent = "Advantage, Resistance";
        poisonResistance.setAttribute('title', _info.Races[charRace].special.resilience.info);
    }
    if (charRace === 'elf') {
        charmResistance.textContent = 'Advantage';
        charmResistance.setAttribute('title', _info.Races[charRace].special.info);
    }
};
var combatCreation = function combatCreation() {
    updateProficiencyBonus();
    // Highlight selected skills and append skill modifier
    highlightSkills();
    // Get character preview image based on class, race, and gender
    charImageSet();
    // Set initial hit point value for 1st level
    hitPoints();
    // Get dexerity and armor modifier and set armor class
    armorClass();
    // Get dexerity modifier and set initiative bonus
    initiativeMod();
    // Get base speed based on chosen race
    baseSpeed();
    // Get wisdom modifier and set passive perception
    passivePerception();
    // Get darkvision boolean and set value
    darkvision();
    // Set any racial ability modifiers to ability scores
    racialAbilityModifier();
    // Set the character size
    setCharacterSize();
    calculateSavingThrowMods();
    calculateSpecialResistances();
};
////////////////////////////////////////////////////////////
// Character Creation
////////////////////////////////////////////////////////////
createCharacterButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Character Creation functions
    generalInfo(); // General tab functions
    racialBonuses(); // Race bonus functions
    combatCreation(); // Combat tab functions
});
////////////////////////////////////////////////////////////
// Preview Functions
////////////////////////////////////////////////////////////
// Level advancement button submit
levelUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Get level up variables
    constitution = rolledConstitition.textContent;
    selectedCls = cls.options[cls.selectedIndex];
    charCls = selectedCls.textContent.toLowerCase();
    if (currentLevel.textContent === "20") {
        return;
    }
    charLevelUp();
    addHitPoints();
    highlightSkills();
});
addNewExperienceButton.addEventListener('click', function (e) {
    e.preventDefault();
    addExp();
    addNewExperienceInput.value = null;
});
////////////////////////////////////////
// Imports
////////////////////////////////////////
import { characterImages } from './characterImages.js';
import { Classes, Races, Levels } from './info.js';
////////////////////////////////////////
// Utility functions
////////////////////////////////////////
var randomIntFromRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var randomBoolean = function () { return Math.random() >= 0.5; }; // Get a true or false value
var rollAbilityScore = function () { return Math.floor(Math.random() * ((18 - 3) + 1)) + 3; };
var setToMinMax = function (score) { return score > 18 ? 18 : score < 3 ? 3 : score; };
var singleWord = /(\w+)/;
var modifier;
var sign;
var totalMod;
var abilityScoreMod;
////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////
var setScore = function (scoreDisplay) {
    var score = rollAbilityScore();
    setToMinMax(score);
    scoreDisplay.textContent = String(score);
};
var getCharacterImage = function (genderedImages) {
    var randomIndex = randomIntFromRange(0, (genderedImages.length - 1));
    return genderedImages[randomIndex];
};
// Get Character Attributes to set preview image
var getCharacterAttributes = function (charCls, charRace, charGender) {
    if (charGender !== 'male' && charGender !== "female") {
        var gender_1 = randomBoolean();
        gender_1 ? charGender = "male" : charGender = "female";
    }
    return characterImages[charRace][charCls][charGender];
};
var getAbilityScoreModifier = function (abilityScore) { return modifier = Math.floor((abilityScore / 2) - 5); };
// Append sign to value
var appendSigntoValue = function (value, node) {
    value > 0 ? sign = "+" : sign = "-";
    value = Math.abs(value);
    node.textContent = sign + " " + value;
};
// set ability modifier to element helper
var setAbilityModifierToElement = function (ability, modFunction, elementAndMethod) {
    var modifier = modFunction;
    elementAndMethod = modifier;
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
var skill1list = skill1.children;
var skill2 = document.querySelector('#skillsSelect2');
var skill2list = skill2.children;
var skill3 = document.querySelector('#skillsSelect3');
var skill3list = skill3.children;
////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////
// Level and experience Section
var currentLevel = document.querySelector('#currentLevel');
var currentExperience = document.querySelector('#currentExperience');
var experienceNextLevel = document.querySelector('#experienceNextLevel');
var addNewExperienceInput = document.querySelector('#addNewExperience');
////////////////////////////////////////////////////////////
// General information
////////////////////////////////////////////////////////////
// General variables
var namePreview = document.querySelector('#namePreview');
var racePreview = document.querySelector('#racePreview');
var genderPreview = document.querySelector('#genderPreview');
var agePreview = document.querySelector('#agePreview');
var clsPreview = document.querySelector('#clsPreview');
var alignmentPreview = document.querySelector('#alignmentPreview');
var characterImg = document.querySelector('#characterImg');
var selectedAlignment = alignment.options[alignment.selectedIndex];
var selectedCls = cls.options[cls.selectedIndex];
var charCls = selectedCls.textContent.toLowerCase();
var selectedRace = race.options[race.selectedIndex];
var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
var charGender = gender.value.toLowerCase();
var proficiencyBonusPreview = document.querySelector('#proficiencyBonusPreview');
var proficiencyBonus;
// General buttons
var levelUpButton = document.querySelector('#levelUpButton');
var addNewExperienceButton = document.querySelector('#addExp');
// General functions
var charImageSet = function () {
    var characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
    characterImg.src = getCharacterImage(characterAttributes);
};
var charLevelUp = function () {
    currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
    experienceNextLevel.textContent = String(Levels[Number(currentLevel.textContent) - 1].experience);
    updateProficiencyBonus();
};
var addHitPoints = function () {
    var currentHitPoints = Number(hitPointPreview.textContent);
    var rolledHitPoints = randomIntFromRange(1, Classes[charCls].hitdie);
    modifier = getAbilityScoreModifier(constitution);
    var hitPointsToAdd = (rolledHitPoints + modifier);
    if (rolledHitPoints + modifier <= 0) {
        hitPointsToAdd = 1;
    }
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
};
var updateProficiencyBonus = function () {
    proficiencyBonus = Levels[currentLevel.textContent].bonus;
    proficiencyBonusPreview.textContent = String(Levels[currentLevel.textContent].bonus);
    appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
};
var addExp = function () {
    var currentExpNum = Number(currentExperience.textContent);
    var newExpNum = Number(addNewExperienceInput.value);
    currentExperience.textContent = String(currentExpNum + newExpNum);
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
var strength = rolledStrength.textContent;
var dexerity = rolledDexerity.textContent;
var constitution = rolledConstitition.textContent;
var intelligence = rolledIntelligence.textContent;
var wisdom = rolledWisdom.textContent;
var charisma = rolledCharisma.textContent;
// Ability Score functions
////////////////////////////////////////////////////////////
// Skills
////////////////////////////////////////////////////////////
// Skill variables
var availableSkills = Classes[charCls].availableSkills;
var selectedSkill1 = skill1.options[skill1.selectedIndex];
var selectedSkill2 = skill1.options[skill2.selectedIndex];
var selectedSkill3 = skill1.options[skill3.selectedIndex];
var skillsPreviewList = document.querySelector('#skillsPreviewList');
var skillsPreviewListItems = skillsPreviewList.children;
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
// Skill functions
var lookupAbilityScore = function (ability) {
    // Get current values of required info
    abilityScoreList = document.querySelector('#abilityScoreList');
    abilityScoreListItems = abilityScoreList.children;
    var abilityScore;
    // if abilityScore matches abilityScore in list return number value of abilityScore
    for (var i = 0; i < abilityScoreListItems.length; i++) {
        var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
        if (string.toLowerCase() === ability) {
            var abilityScore_1 = abilityScoreListItems[i].childNodes[3].textContent;
            return abilityScore_1;
        }
    }
};
var getSkillModifier = function (skillText) {
    var skillAbility = (singleWord.exec(skillText));
    // get ability score for that skill
    var skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());
    abilityScoreMod = getAbilityScoreModifier(skillAbilityScore);
    return totalMod = abilityScoreMod + proficiencyBonus;
};
var highlightSkills = function () {
    // Get current values of required info
    selectedSkill1 = skill1.options[skill1.selectedIndex];
    selectedSkill2 = skill1.options[skill2.selectedIndex];
    selectedSkill3 = skill1.options[skill3.selectedIndex];
    updateProficiencyBonus();
    // if selected skills match text of selected skill in preview section, highlight in green and append modifier, otherwise dim and remove modifier if present  
    for (var i = 0; i < skillsPreviewListItems.length; i++) {
        // reset modifier node to '-'
        skillsPreviewListItems[i].childNodes[5].textContent = "-";
        if (skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill1.textContent.trim()
            || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill2.textContent.trim()
            || skillsPreviewListItems[i].childNodes[1].textContent === selectedSkill3.textContent.trim()) {
            skillsPreviewListItems[i].style.color = 'green';
            getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
            appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
        }
        else {
            // if no match dim selection
            skillsPreviewListItems[i].style.color = '#ccc';
        }
    }
};
// TODO: refactor this monstrosity from 3 loops to 1
var highlightAvailableSkills = function () {
    availableSkills = Classes[charCls].availableSkills;
    for (var i = 0; i < skill1list.length; i++) {
        skill1list[i].style.display = 'none';
    }
    for (var i = 0; i < skill2list.length; i++) {
        skill2list[i].style.display = 'none';
    }
    for (var i = 0; i < skill3list.length; i++) {
        skill3list[i].style.display = 'none';
    }
    var _loop_1 = function (i) {
        availableSkills.forEach(function (skill) {
            if (String(skill1list[i].textContent) === skill) {
                skill1list[i].style.display = 'block';
                skill1list[i].style.color = 'black';
            }
        });
    };
    for (var i = 0; i < skill1list.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        availableSkills.forEach(function (skill) {
            if (String(skill2list[i].textContent) === skill) {
                skill2list[i].style.display = 'block';
                skill2list[i].style.color = 'black';
            }
        });
    };
    for (var i = 0; i < skill2list.length; i++) {
        _loop_2(i);
    }
    var _loop_3 = function (i) {
        availableSkills.forEach(function (skill) {
            if (String(skill3list[i].textContent) === skill) {
                skill3list[i].style.display = 'block';
                skill3list[i].style.color = 'black';
            }
        });
    };
    for (var i = 0; i < skill3list.length; i++) {
        _loop_3(i);
    }
};
// dynamically change available skills based on characger class
cls.addEventListener('change', function () {
    selectedCls = cls.options[cls.selectedIndex];
    charCls = selectedCls.text.toLowerCase();
    // loop through skills lists highlighting skills that are available for this class
    highlightAvailableSkills();
});
// Initialize state for selected class on document load
highlightAvailableSkills();
////////////////////////////////////////////////////////////
// Combat
////////////////////////////////////////////////////////////
// Combat variables
var hitPointPreview = document.querySelector('#hitPoints');
var armorClassPreview = document.querySelector('#armorClass');
var initiativeModPreview = document.querySelector('#initiative');
var speedPreview = document.querySelector('#speed');
var passivePerceptionPreview = document.querySelector('#passivePerception');
// Combat functions
var hitPoints = function () {
    // 1st level is max hit points + constiution modifier
    var modifier = getAbilityScoreModifier(Number(constitution));
    var hitpoints = (Classes[charCls].hitdie + modifier);
    hitPointPreview.textContent = String(hitpoints);
};
var armorClass = function () {
    var base = 10;
    var dexMod = getAbilityScoreModifier(Number(dexerity));
    var armorMod = 0;
    var ac = String(base + dexMod + armorMod);
    armorClassPreview.textContent = ac;
};
var initiativeMod = function () {
    var dexMod = getAbilityScoreModifier(Number(dexerity));
    initiativeModPreview.textContent = String(dexMod);
};
var baseSpeed = function () { return speedPreview.textContent = Races[charRace].speed; };
var passivePerception = function () {
    passivePerceptionPreview.textContent = String(10 + getAbilityScoreModifier(wisdom));
};
////////////////////////////////////////////////////////////
// The big submit button for character creation
////////////////////////////////////////////////////////////
var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Get current state of require info
    selectedRace = race.options[race.selectedIndex];
    strength = rolledStrength.textContent;
    dexerity = rolledDexerity.textContent;
    constitution = rolledConstitition.textContent;
    intelligence = rolledIntelligence.textContent;
    wisdom = rolledWisdom.textContent;
    charisma = rolledCharisma.textContent;
    selectedAlignment = alignment.options[alignment.selectedIndex];
    selectedCls = cls.options[cls.selectedIndex];
    charCls = selectedCls.textContent.toLowerCase();
    charRace = selectedRace.textContent.toLowerCase().replace(/-/g, "");
    charGender = gender.value.toLowerCase();
    // Post info from character creation to preview area
    currentLevel.textContent = String(Levels[0].level);
    experienceNextLevel.textContent = String(Levels[0].experience);
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
});
// Level advancement button submit
levelUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Get current state of required variables
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

'use strict';

var _functions = require('./functions.js');

var func = _interopRequireWildcard(_functions);

var _info = require('./info.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Initialize  global variables
////////////////////////////////////////
// Imports
////////////////////////////////////////
var modifier; // integer value that increases or decreases key values
var totalMod; // integer value to combine modifier values before adding to key value
var abilityScore; // character ability score
var abilityScoreMod; // character ability score modifier
var proficiencyBonus;
var singleWord = /(\w+)/; // capture a single word (i.e. 'strength')
////////////////////////////////////////
// Ability score DOM elements
////////////////////////////////////////
var rollStrength = document.querySelector('#rollStrength');
var rolledStrength = document.querySelector('#rolledStrength');
var rollDexerity = document.querySelector('#rollDexerity');
var rolledDexerity = document.querySelector('#rolledDexerity');
var rollConstitution = document.querySelector('#rollConstitution');
var rolledConstitution = document.querySelector('#rolledConstitution');
var rollIntelligence = document.querySelector('#rollIntelligence');
var rolledIntelligence = document.querySelector('#rolledIntelligence');
var rollWisdom = document.querySelector('#rollWisdom');
var rolledWisdom = document.querySelector('#rolledWisdom');
var rollCharisma = document.querySelector('#rollCharisma');
var rolledCharisma = document.querySelector('#rolledCharisma');
// Event listeners for rolling ability scores
rollStrength.addEventListener('click', function () {
    return func.setScore(rolledStrength);
});
rollDexerity.addEventListener('click', function () {
    return func.setScore(rolledDexerity);
});
rollConstitution.addEventListener('click', function () {
    return func.setScore(rolledConstitution);
});
rollWisdom.addEventListener('click', function () {
    return func.setScore(rolledWisdom);
});
rollIntelligence.addEventListener('click', function () {
    return func.setScore(rolledIntelligence);
});
rollCharisma.addEventListener('click', function () {
    return func.setScore(rolledCharisma);
});
// Setters for ability scores (string for textContent display)
var strength = "0";
var dexerity = "0";
var constitution = "0";
var intelligence = "0";
var wisdom = "0";
var charisma = "0";
////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// General Info / User Input
////////////////////////////////////////////////////////////
// User input in chronological order
// Class Select
var cls = document.querySelector('#cls'); // cls here due to reserved Class keyword
func.addOptionsToSelect(cls, _info.ClassList);
var selectedClass = cls.options[cls.selectedIndex];
var charClass = selectedClass.textContent.toLowerCase();
var classHelp = document.querySelector('#classHelp');
var setClass = function setClass() {
    charClass = cls.options[cls.selectedIndex].textContent.toLowerCase().replace(/-/g, "");
};
func.setText(classHelp, _info.Classes[charClass].info);
cls.addEventListener('change', function () {
    setClass();
    func.setText(classHelp, _info.Classes[charClass].info);
});
// Race Select
var race = document.querySelector('#race');
func.addOptionsToSelect(race, _info.RaceList);
var selectedRace = race.options[race.selectedIndex];
var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, ""); // "i.e. human, halfelf, halforc"
var raceHelp = document.querySelector('#raceHelp');
var setRace = function setRace() {
    charRace = race.options[race.selectedIndex].textContent.toLowerCase().replace(/-/g, "");
};
func.setText(raceHelp, _info.Races[charRace].info);
race.addEventListener('change', function () {
    setRace();
    func.setText(raceHelp, _info.Races[charRace].info);
});
// Subrace Select (Optional, if subrace exists)
var subraceSelectSection = document.querySelector('#optionalSubrace');
var subrace = document.querySelector('#subrace');
var subraceHelp = document.querySelector('#subraceHelp');
var charSubrace = subrace.textContent.toLowerCase().replace(/-|\s/g, "");
// Subrace select
var showOptionalSubraceSelect = function showOptionalSubraceSelect() {
    setRace();
    // Reset any subrace from previous selection
    subrace.innerHTML = "-";
    subraceHelp.textContent = "";
    // if race has a subrace, show and populate subrace select element
    _info.Races[charRace].subrace ? (func.addOptionsToSelect(subrace, ["-"]), // Make first option "null"
    func.addOptionsToSelect(subrace, _info.Races[charRace].subrace.name), subraceSelectSection.classList.remove('d-none')) : subraceSelectSection.classList.add('d-none');
};
// Subrace options regenerate on race selection change
race.addEventListener('change', showOptionalSubraceSelect);
var setSubrace = function setSubrace() {
    // if subrace exists for selected race, subrace element is shown, otherwise it stays hidden
    if (!subrace.parentElement.classList.contains("d-none")) {
        charSubrace = subrace.options[subrace.selectedIndex].textContent.toLowerCase().replace(/-|\s/g, ""); // normalize subrace text to all lowercase joined letters
    } else {
        // if subrace does not exist for selected race
        return null;
    }
};
// On subrace selection, get value of subrace and display descriptive text
subrace.addEventListener('change', function () {
    func.setText(subraceHelp, "");
    setSubrace();
    func.setText(subraceHelp, _info.Races[charRace].subrace.helpText);
});
// Alignment
var alignment = document.querySelector('#alignment');
func.addOptionsToSelect(alignment, _info.Alignments);
var selectedAlignment = alignment.options[alignment.selectedIndex];
var setAlignment = function setAlignment() {
    var charAlignment = selectedAlignment.textContent; // "Lawful Good, Chaotic Evil, True Neutral"
};
// limits alignment options to race recommendations
var availableAlignments = function availableAlignments() {
    alignment.innerHTML = ""; // reset alignment select options
    setRace();
    func.addOptionsToSelect(alignment, _info.Races[charRace].alignments);
};
// Alignment options regenerate on race selection
race.addEventListener('change', availableAlignments);
// Name
var name = document.querySelector('#name');
// Gender
var gender = document.querySelector('#gender');
var charGender = gender.value.toLowerCase();
// Age
var age = document.querySelector('#age');
var ageHelp = document.querySelector('#ageHelp');
// Displays race specific age help text on race selection
var ageHelpText = function ageHelpText() {
    setRace();
    func.setText(ageHelp, func.capitialize(charRace) + " age ranges between " + _info.Races[charRace].age.min + " and  " + _info.Races[charRace].age.max);
};
race.addEventListener('change', ageHelpText);
// Iniialize help text on page load
ageHelpText();
// Dragonborn: Draconic Ancestry / Dragonborn "subrace"
var draconicAncestrySection = document.querySelector('#draconicAncestrySection');
var draconicAncestry = document.querySelector('#draconicAncestry');
var draconicAncestryHelp = document.querySelector('#draconicAncestryHelp');
var showDraconicAncestrySelect = function showDraconicAncestrySelect() {
    setRace();
    // if ancestry exists, populate and show ancestry select element 
    _info.Races[charRace].special.draconicAncestry ? (func.addOptionsToSelect(draconicAncestry, _info.Races[charRace].special.draconicAncestry.types), draconicAncestryHelp.textContent = 'Choose a dragon lineage.', draconicAncestrySection.classList.remove('d-none')) : (draconicAncestrySection.classList.add('d-none'), draconicAncestryHelp.textContent = '');
};
// Draconic ancestry options regenerate on race selection
race.addEventListener('change', showDraconicAncestrySelect);
// Initialize on page load
showDraconicAncestrySelect();
// Extra Language Selection: Human and Half-elf
// Display extra language select element if race selection is Human, Half-Elf, or High Elf and populate lwith anguage options
var extraLanguageField = document.querySelector('#extraLanguageField');
var extraLanguage = document.querySelector('#extraLanguage');
var extraLanguageHelp = document.querySelector('#extraLanguageHelp');
func.addOptionsToSelect(extraLanguage, _info.Languages.standard);
var showExtraLanguageInput = function showExtraLanguageInput() {
    setRace();
    setSubrace();
    charRace === 'human' ? (extraLanguageField.classList.remove('d-none'), func.setText(extraLanguageHelp, "Humans get to choose 1 extra language")) : charRace === 'halfelf' ? (extraLanguageField.classList.remove('d-none'), func.setText(extraLanguageHelp, "Half-Elves get to choose 1 extra language")) : charSubrace === 'highelf' ? (extraLanguageField.classList.remove('d-none'), func.setText(extraLanguageHelp, "High Elves get to choose 1 extra language")) : (extraLanguageField.classList.add('d-none'), extraLanguageHelp.textContent = '');
};
race.addEventListener('change', showExtraLanguageInput);
subrace.addEventListener('change', showExtraLanguageInput);
// Function to combine related functions (TODO: can be combined with other racial)
var racialBonuses = function racialBonuses() {
    addDwarvenToughness();
    addHalfElfAbilityMofifiers(); // Half-Elf racial ability score bonus (Any 2 plus Charisma)
};
var clearRacialSkils = function clearRacialSkils() {
    // set text content and attr to 'null', hide elements in preview
    // Combat tab
    func.resetProps(weaponProficiencesPreview);
    func.resetProps(poisonResistance);
    func.resetProps(charmResistance);
    func.resetProps(fearResistance);
    // Skills tab - Additional Skills
    func.resetProps(languagesPreview);
    func.hideParentElement(toolProficiencyPreview);
    func.resetProps(toolProficiencyPreview);
    // Dwarf
    func.hideParentElement(stonecunningPreview);
    func.resetProps(stonecunningPreview);
    // Dragonborn
    func.hideParentElement(draconicAncestryPreview);
    func.resetProps(draconicAncestryPreview);
    func.hideParentElement(damageResistancePreview);
    func.resetProps(damageResistanceType);
    dragonType.textContent = "";
    damageType.textContent = "";
    breathWeapon.textContent = "";
    // Elf
    func.hideParentElement(trancePreview);
    func.resetProps(tranceInfo);
    // Halfling - Lightfoot
    func.hideParentElement(stealthPreview);
    func.resetProps(stealthInfo);
    // Gnome - Rock Gnome
    func.hideParentElement(artificersLorePreview);
    func.resetProps(artificersLoreInfo);
    func.hideParentElement(tinkerPreview);
    func.resetProps(tinkerInfo);
    // Half-orc
    func.hideParentElement(menacingPreview);
    func.resetProps(menacingInfo);
    func.hideParentElement(relentlessEndurancePreview);
    func.resetProps(relentlessEnduranceInfo);
    func.hideParentElement(savageAttacksPreview);
    func.resetProps(savageAttacksInfo);
    // Tiefling
    func.hideParentElement(hellishResistancePreview);
    func.resetProps(hellishResistanceInfo);
    func.hideParentElement(infernalLegacyPreview);
    func.resetProps(infernalLegacyInfo);
};
race.addEventListener('change', clearRacialSkils);
subrace.addEventListener('change', clearRacialSkils);
// Skill select
var skill1 = document.querySelector('#skillsSelect1');
func.addOptionsToSelect(skill1, _info.Skills);
var skillList1 = skill1.children;
var skill2 = document.querySelector('#skillsSelect2');
func.addOptionsToSelect(skill2, _info.Skills);
var skillList2 = skill2.children;
var skill3 = document.querySelector('#skillsSelect3');
func.addOptionsToSelect(skill3, _info.Skills);
var skillList3 = skill3.children;
var availableSkills = _info.Classes[charClass].availableSkills;
var selectedSkill1 = skill1.options[skill1.selectedIndex];
var selectedSkill2 = skill2.options[skill2.selectedIndex];
var selectedSkill3 = skill3.options[skill3.selectedIndex];
// Skill functions
var highlightAvailableSkills = function highlightAvailableSkills() {
    availableSkills = _info.Classes[charClass].availableSkills;
    skill1.innerHTML = "";
    skill2.innerHTML = "";
    skill3.innerHTML = "";
    func.addOptionsToSelect(skill1, availableSkills);
    func.addOptionsToSelect(skill2, availableSkills);
    func.addOptionsToSelect(skill3, availableSkills);
};
// dynamically change available skills based on character class
cls.addEventListener('change', function () {
    setClass();
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
    var characterAttributes = func.getCharacterAttributes(charClass, charRace, charGender);
    characterImg.src = func.getCharacterImage(characterAttributes);
};
var charLevelUp = function charLevelUp() {
    currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
    experienceNextLevel.textContent = String(_info.Levels[Number(currentLevel.textContent) - 1].experience);
    updateProficiencyBonus();
};
var updateProficiencyBonus = function updateProficiencyBonus() {
    proficiencyBonus = _info.Levels[currentLevel.textContent].bonus;
    proficiencyBonusPreview.textContent = String(_info.Levels[currentLevel.textContent].bonus);
    func.appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
};
var addExp = function addExp() {
    var currentExpNum = Number(currentExperience.textContent);
    var newExpNum = Number(addNewExperienceInput.value);
    currentExperience.textContent = String(currentExpNum + newExpNum);
};
var setAbilityScorePreview = function setAbilityScorePreview() {
    // loop through abilities lowercased
    _info.Abilities.map(function (ability) {
        // get ability score from rolled score node
        var rolledScoreNode = eval("rolled" + ability);
        // get preview element 
        var previewElement = eval(ability.toLowerCase() + "Preview");
        // set preview element text to ability score
        previewElement.textContent = rolledScoreNode.textContent;
    });
};
var resetAbilityScores = function resetAbilityScores() {
    _info.Abilities.map(function (ability) {
        console.log(ability);
        return ability = null;
    });
};
var generalInfo = function generalInfo() {
    // initialize values at character creation
    resetAbilityScores();
    // Get current state of info required to create character
    setClass();
    setRace();
    setSubrace();
    // Post info from character creation to preview area
    setAbilityScorePreview();
    selectedAlignment = alignment.options[alignment.selectedIndex];
    charGender = gender.value.toLowerCase();
    // convert languages array into line-separated list items (use innerHTML instead of textCotent)
    var knownLanguages = _info.Races[charRace].languages.toString().split().join("\r\n") + ("" + String(extraLanguage.value));
    func.showElementWithProps(languagesPreview, "Known Languages", knownLanguages);
    currentLevel.textContent = String(_info.Levels[0].level);
    experienceNextLevel.textContent = String(_info.Levels[0].experience);
    namePreview.textContent = name.value;
    racePreview.textContent = selectedRace.textContent;
    genderPreview.textContent = gender.value;
    agePreview.textContent = age.value;
    clsPreview.textContent = selectedClass.textContent;
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
var dwarvenToughnessMod = 0;
// Ability Score functions
var lookupAbilityScore = function lookupAbilityScore(ability) {
    // if ability matches abilityScore in list return number value of abilityScore
    for (var i = 0; i < abilityScoreListItems.length; i++) {
        // gets ability score name from preview li > b element(Strength, Dexerity, etc.)
        var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
        // if preview ability score name matches passed ability score, get ability score from li > span element
        if (string.toLowerCase() === ability) {
            abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
            return abilityScore;
        }
    }
};
var subraceAbilityModifier = function subraceAbilityModifier() {
    setRace();
    if (_info.Races[charRace].subrace) {
        // get subrace bonus ability and modifier value
        var subraceAbility = _info.Races[charRace].subrace.ability;
        var subraceAbilityMod = _info.Races[charRace].subrace.modifier;
        // if ability score text matches li text, add bonus modifier to value
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var abilityText = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            var abilityScorePreview = abilityScoreListItems[i].childNodes[3];
            var abilityScore_1 = Number(abilityScoreListItems[i].childNodes[3].textContent);
            if (abilityText.toLowerCase() === subraceAbility) {
                abilityScorePreview.textContent = String(abilityScore_1 + subraceAbilityMod);
            }
        }
    }
};
var racialAbilityModifier = function racialAbilityModifier() {
    setRace();
    var racialAbility = _info.Races[charRace].abilityModifier.ability;
    var racialAbilityMod = _info.Races[charRace].abilityModifier.modifier;
    // if ability matches abilityPreview node text, add modifier to score
    for (var i = 0; i < abilityScoreListItems.length; i++) {
        var abilityText = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
        var abilityScorePreview = abilityScoreListItems[i].childNodes[3];
        var abilityScore_2 = Number(abilityScoreListItems[i].childNodes[3].textContent);
        if (abilityText.toLowerCase() === racialAbility) {
            abilityScorePreview.textContent = String(abilityScore_2 + racialAbilityMod);
        }
    }
    // if race has extra ability to modify
    if (_info.Races[charRace].abilityModifier.extraAbility) {
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var abilityText = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            var abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent;
            if (abilityText.toLowerCase() === _info.Races[charRace].abilityModifier.extraAbility) {
                var abilityScore_3 = Number(abilityScorePreview);
                abilityScorePreview = String(abilityScore_3 + _info.Races[charRace].abilityModifier.extraModifier);
            }
        }
    }
};
// Display extra ability modifier field if race is Half-Elf
func.addOptionsToSelect(extraAbilityModifier1, _info.Abilities);
var showExtraModifiersInput = function showExtraModifiersInput() {
    setRace();
    // Add ability options to extra ability select element
    charRace === 'halfelf' ? extraAbilityModifier.classList.remove('d-none') : extraAbilityModifier.classList.add('d-none');
    charRace === 'halfelf' ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1' : extraAbilityModifierHelp.textContent = '';
};
race.addEventListener('change', showExtraModifiersInput);
// Hide ability selected in either select element from the other select element
var hideModSelection = function hideModSelection(extraAbilityModifier, otherAbilityModifier) {
    var firstSelection = extraAbilityModifier.options[extraAbilityModifier.selectedIndex].textContent;
    otherAbilityModifier.innerHTML = "";
    _info.Abilities.map(function (ability) {
        if (ability !== firstSelection) {
            var abilityElement2 = document.createElement("option");
            abilityElement2.textContent = ability;
            otherAbilityModifier.appendChild(abilityElement2);
        }
    });
};
hideModSelection(extraAbilityModifier1, extraAbilityModifier2);
extraAbilityModifier1.addEventListener('change', function () {
    hideModSelection(extraAbilityModifier1, extraAbilityModifier2);
});
extraAbilityModifier2.addEventListener('change', function () {
    hideModSelection(extraAbilityModifier2, extraAbilityModifier1);
});
// Set value of Dwarven Toughtness hit point modifier based on race selection
var addDwarvenToughness = function addDwarvenToughness() {
    setRace();
    charRace === "dwarf" ? dwarvenToughnessMod = 1 : dwarvenToughnessMod = 0;
    return dwarvenToughnessMod;
};
// if extra ability score is selected add +1 to ability score preview
var addHalfElfAbilityMofifiers = function addHalfElfAbilityMofifiers() {
    if (charRace === 'halfelf') {
        // get selected abilities text
        var mod1 = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
        var mod2 = extraAbilityModifier2.options[extraAbilityModifier2.selectedIndex].textContent;
        // get selected abilities preview element text
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent;
            var string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            // if either selected ability text matches abiltiy preview element text, update ability score
            if (string === mod1 || string === mod2) {
                var abilityScore_4 = Number(abilityScorePreview);
                abilityScore_4 += 1;
                abilityScorePreview = String(abilityScore_4);
            }
        }
    }
};
////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////
// Skill variables
// Skill Lists
var skillsPreviewList = document.querySelector('#skillsPreviewList');
var skillsPreviewListItems = skillsPreviewList.children;
var additionalSkillsPreviewList = document.querySelector('#additionalSkillsPreviewList');
var additionalSkillsPreviewListItems = additionalSkillsPreviewList.children;
// Special Abilities
var stonecunningPreview = document.querySelector('#stonecunningPreview');
var toolProficiencyPreview = document.querySelector('#toolProficiencyPreview');
var draconicAncestryPreview = document.querySelector('#draconicAncestryPreview');
var dragonType = document.querySelector('#dragonType');
var damageType = document.querySelector('#damageType');
var breathWeapon = document.querySelector('#breathWeapon');
var trancePreview = document.querySelector('#trancePreview');
var tranceInfo = document.querySelector('#tranceInfo');
var stealthPreview = document.querySelector('#stealthPreview');
var stealthInfo = document.querySelector('#stealthInfo');
var artificersLorePreview = document.querySelector('#artificersLorePreview');
var artificersLoreInfo = document.querySelector('#artificersLoreInfo');
var tinkerPreview = document.querySelector('#tinkerPreview');
var tinkerInfo = document.querySelector('#tinkerInfo');
var damageResistancePreview = document.querySelector('#damageResistancePreview');
var damageResistanceType = document.querySelector('#damageResistanceType');
var menacingPreview = document.querySelector('#menacingPreview');
var menacingInfo = document.querySelector('#menacingInfo');
var relentlessEndurancePreview = document.querySelector('#relentlessEndurancePreview');
var relentlessEnduranceInfo = document.querySelector('#relentlessEnduranceInfo');
var savageAttacksPreview = document.querySelector('#savageAttacksPreview');
var savageAttacksInfo = document.querySelector('#savageAttacksInfo');
var hellishResistancePreview = document.querySelector('#hellishResistancePreview');
var hellishResistanceInfo = document.querySelector('#hellishResistanceInfo');
var infernalLegacyPreview = document.querySelector('#infernalLegacyPreview');
var infernalLegacyInfo = document.querySelector('#infernalLegacyInfo');
// Racial skills functions
// Dragonborn
var dragonbornDraconicAncestry = function dragonbornDraconicAncestry() {
    var selectedDraconicAncestry = draconicAncestry.options[draconicAncestry.selectedIndex];
    var charDraconicAncestry = selectedDraconicAncestry.textContent.toLowerCase();
    return _info.Races[charRace].special.draconicAncestry ? (draconicAncestryPreview.parentElement.classList.remove('d-none'), draconicAncestryPreview.parentElement.classList.add('d-flex'), draconicAncestryPreview.setAttribute('title', _info.Races.dragonborn.special.draconicAncestry.info), dragonType.textContent = String(_info.Races.dragonborn.special.draconicAncestry[charDraconicAncestry].color), damageType.textContent = String(_info.Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type), breathWeapon.textContent = String(_info.Races.dragonborn.special.draconicAncestry[charDraconicAncestry].breath), damageResistancePreview.parentElement.classList.remove('d-none'), damageResistancePreview.parentElement.classList.add('d-flex'), damageResistanceType.textContent = _info.Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type) : (draconicAncestryPreview.parentElement.classList.remove('d-flex'), draconicAncestryPreview.parentElement.classList.add('d-none'), draconicAncestryHelp.textContent = "");
};
// Dwarf 
// Dwarf Stonecunning
var dwarfStonecunning = function dwarfStonecunning() {
    return _info.Races[charRace].special.stonecunning ? func.showElementWithProps(stonecunningPreview, _info.Races[charRace].special.stonecunning.info, "Stonework (Int, Hist)") : stonecunningPreview.parentElement.classList.add('d-none');
};
// Dwarf tool proficiency
var dwarfToolProficiency = function dwarfToolProficiency() {
    return _info.Races[charRace].special.toolProficiency ? func.showElementWithProps(toolProficiencyPreview, _info.Races[charRace].special.stonecunning.info, 'Pick one: Smith\u2019s tools, Mason\u2019s tools, or Brewer\u2019s supplies)') : toolProficiencyPreview.parentElement.classList.add('d-none');
};
// Skill functions
// const showSkillSlots = (characterClass) => {
//   // get number of skills for class
//   const numberOfSkills: number = Classes[charClass].skills
//   //loop through and display skill selects
// }
var getSelectedSkills = function getSelectedSkills() {
    selectedSkill1 = skill1.options[skill1.selectedIndex];
    selectedSkill2 = skill2.options[skill2.selectedIndex];
    selectedSkill3 = skill3.options[skill3.selectedIndex];
};
// Get any modifiers to the proficiency bonus for a skill
var getSkillModifier = function getSkillModifier(skillText) {
    var skillAbility = String(singleWord.exec(skillText));
    var skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());
    abilityScoreMod = func.getAbilityScoreModifier(skillAbilityScore);
    return totalMod = abilityScoreMod + proficiencyBonus;
};
// highlight a single skill
var highightSkill = function highightSkill(skillText) {
    for (var i = 0; i < skillsPreviewListItems.length; i++) {
        var skill = skillsPreviewListItems[i];
        var skillName = skillsPreviewListItems[i].childNodes[1];
        var skillText_1 = String(skillsPreviewListItems[i].childNodes[1].textContent).toLowerCase();
        skillText_1 === skillText_1 ? (skill.style.color = 'green', getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent), func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5])) : console.log('Highlight Skill: not a match');
    }
};
// highlight choosen skills on character creation
var highlightSkills = function highlightSkills() {
    // Get current values of required info
    getSelectedSkills();
    updateProficiencyBonus();
    // if selected skills match text of selected skill in preview section, highlight in green and append modifier, otherwise dim and remove modifier if present
    for (var i = 0; i < skillsPreviewListItems.length; i++) {
        var skill = skillsPreviewListItems[i];
        var skillName = skillsPreviewListItems[i].childNodes[1];
        var skillText = skillsPreviewListItems[i].childNodes[1].textContent;
        // reset modifier node to '-'
        skillsPreviewListItems[i].childNodes[5].textContent = "-";
        if (skillText === selectedSkill1.textContent.trim() || skillText === selectedSkill2.textContent.trim() || skillText === selectedSkill3.textContent.trim()) {
            skill.style.color = 'green';
            getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
            func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
        } else {
            // if no match dim selection
            skill.style.color = '#ccc';
        }
    }
};
var highlightRacialSKills = function highlightRacialSKills() {
    setRace();
    setSubrace();
    // Dwarf
    dwarfStonecunning();
    dwarfToolProficiency();
    addDwarvenToughness();
    // Dragonborn
    dragonbornDraconicAncestry();
    //  Elf Keen Senses Perception Bonus Skill
    _info.Races[charRace].special.keenSenses ? highightSkill('perception') : null;
    // Elf Trance sleep skill
    _info.Races[charRace].special.trance ? func.showElementWithProps(tranceInfo, _info.Races[charRace].special.trance.info, "Details") : null;
    // Half-orc special abilities
    addHalfElfAbilityMofifiers(); // Half-Elf racial ability score bonus (Any 2 plus Charisma)
    _info.Races[charRace].special.menacing ? func.showElementWithProps(menacingInfo, _info.Races[charRace].special.menacing.info, "Details") : null;
    _info.Races[charRace].special.relentlessEndurance ? func.showElementWithProps(relentlessEnduranceInfo, _info.Races[charRace].special.relentlessEndurance.info, "Details") : null;
    _info.Races[charRace].special.savageAttacks ? func.showElementWithProps(savageAttacksInfo, _info.Races[charRace].special.savageAttacks.info, "Details") : null;
    // Tiefling special abilities
    _info.Races[charRace].special.hellishResistance ? func.showElementWithProps(hellishResistanceInfo, _info.Races[charRace].special.hellishResistance.info, "Details") : null;
    _info.Races[charRace].special.infernalLegacy ? func.showElementWithProps(infernalLegacyInfo, _info.Races[charRace].special.infernalLegacy.info, "Details") : null;
    // Halfling lightfoot stealth skill
    charSubrace === "lightfoot" ? func.showElementWithProps(stealthInfo, _info.Races[charRace].subrace.naturallyStealthy.info, "Details") : null;
    // Rock gnome special abilities
    charSubrace === "rockgnome" ? (console.log(charSubrace), func.showElementWithProps(artificersLoreInfo, _info.Races[charRace].subrace.artificersLore.info, "Details"), func.showElementWithProps(tinkerPreview, _info.Races[charRace].subrace.tinker.info, "Tinker"), tinkerInfo.setAttribute('title', _info.Races[charRace].subrace.tinker.details), tinkerInfo.textContent = "Details") : null;
};
// Skills combined function call
var skillCreation = function skillCreation() {
    updateProficiencyBonus();
    // Highlight selected skills and append skill modifier
    highlightSkills();
    // Preview racial abilities
    highlightRacialSKills();
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
var weaponProficiencesPreview = document.querySelector('#weaponProficiencesPreview');
// Combat functions
var initialHitPoints = function initialHitPoints() {
    // 1st level is max hit points + constiution modifier + racial modifier
    var modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
    var hitpoints = _info.Classes[charClass].hitdie + modifier;
    hitPointPreview.textContent = String(hitpoints);
};
var addHitPoints = function addHitPoints() {
    var currentHitPoints = Number(hitPointPreview.textContent);
    var rolledHitPoints = func.randomIntFromRange(1, _info.Classes[charClass].hitdie);
    modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
    var hitPointsToAdd = rolledHitPoints + modifier;
    // Prevent negative or zero hit points on level up
    if (rolledHitPoints + modifier <= 0) {
        hitPointsToAdd = 1;
    }
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
};
var armorClass = function armorClass() {
    var base = 10;
    var dexMod = func.getAbilityScoreModifier(Number(dexerity));
    var armorMod = 0;
    var ac = String(base + dexMod + armorMod);
    armorClassPreview.textContent = ac;
};
var initiativeMod = function initiativeMod() {
    var dexMod = func.getAbilityScoreModifier(Number(dexerity));
    initiativeModPreview.textContent = String(dexMod);
};
var baseSpeed = function baseSpeed() {
    return speedPreview.textContent = _info.Races[charRace].speed;
};
var passivePerception = function passivePerception() {
    return passivePerceptionPreview.textContent = String(10 + func.getAbilityScoreModifier(wisdom));
};
var darkvision = function darkvision() {
    setRace();
    if (_info.Races[charRace].darkvision) {
        darkvisionPreview.textContent = '60 ft.';
    } else {
        darkvisionPreview.textContent = 'None';
    }
};
var setCharacterSize = function setCharacterSize() {
    return sizePreview.textContent = _info.Races[charRace].size;
};
var calculateWeaponProficiencies = function calculateWeaponProficiencies() {
    setRace();
    setSubrace();
    charRace === 'dwarf' ? _info.Races[charRace].weaponProficiences.map(function (weapon) {
        weaponProficiencesPreview.textContent += weapon + ", ";
    }) : null;
    charSubrace === 'highelf' ? _info.Races[charRace].subrace.weaponProficiences.map(function (weapon) {
        weaponProficiencesPreview.textContent += weapon + ", ";
    }) : null;
};
// Saving throws
var savingThrowList = document.querySelector('#savingThrowPreviewList');
var savingThrowListItems = savingThrowList.children;
// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)
var calculateSavingThrowMods = function calculateSavingThrowMods() {
    setClass();
    var abilities = _info.Classes[charClass].savingThrows;
    abilities.map(function (ability) {
        // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
        for (var i = 0; i < savingThrowListItems.length; i++) {
            var string = singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0].toLowerCase();
            if (string === ability) {
                var abilityMod = func.getAbilityScoreModifier(lookupAbilityScore(ability));
                var totalMod_1 = Number(abilityMod + proficiencyBonus);
                func.appendSigntoValue(totalMod_1, savingThrowListItems[i].childNodes[3]);
            }
        }
    });
};
// Special Resistances
var specialResistances = document.querySelector('#specialResistances');
var poisonResistance = document.querySelector('#poisonResistance');
var charmResistance = document.querySelector('#charmResistance');
var fearResistance = document.querySelector('#fearResistance');
var calculateSpecialResistances = function calculateSpecialResistances() {
    setRace();
    if (charRace === 'dwarf') {
        poisonResistance.textContent = "Advantage, Resistance";
        poisonResistance.setAttribute('title', _info.Races[charRace].special.resilience.info);
    }
    if (charRace === 'elf' || charRace === 'halfelf') {
        charmResistance.textContent = 'Advantage';
        charmResistance.setAttribute('title', _info.Races[charRace].special.feyAncestry.info);
    }
    if (charRace === 'gnome') {
        var types = _info.Races[charRace].special.gnomeCunning.type;
        types.map(function (type) {
            // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
            for (var i = 0; i < savingThrowListItems.length; i++) {
                var string = singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0].toLowerCase();
                if (string === type) {
                    savingThrowListItems[i].childNodes[1].textContent += " (Advantage)";
                }
            }
        });
    }
    if (charRace === 'halfling') {
        fearResistance.textContent = 'Advantage';
        fearResistance.setAttribute('title', _info.Races[charRace].special.brave.info);
    }
};
var combatCreation = function combatCreation() {
    // Get character preview image based on class, race, and gender
    charImageSet();
    // Set initial hit point value for 1st level
    initialHitPoints();
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
    subraceAbilityModifier();
    // Set the character size
    setCharacterSize();
    calculateSavingThrowMods();
    calculateSpecialResistances();
    calculateWeaponProficiencies();
};
////////////////////////////////////////////////////////////
// Character Creation
////////////////////////////////////////////////////////////
createCharacterButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Character Creation functions
    generalInfo(); // General tab functions
    racialBonuses(); // Race bonus functions
    skillCreation(); // SKill tab functions
    combatCreation(); // Combat tab functions
});
////////////////////////////////////////////////////////////
// Preview Functions
////////////////////////////////////////////////////////////
// Level advancement button submit
levelUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    setClass();
    // Get level up variables
    constitution = rolledConstitution.textContent;
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
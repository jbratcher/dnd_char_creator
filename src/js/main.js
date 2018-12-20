////////////////////////////////////////
// Imports
////////////////////////////////////////
import * as func from './functions.js';
import * as ele from './domElements.js';
import { Abilities, Alignments, ClassList, Classes, Levels, Languages, Races, RaceList, Skills } from './characterInfo.js';
// Initialize  global variables
var modifier; // integer value that increases or decreases key values
var totalMod; // integer value to combine modifier values before adding to key value
var abilityScore; // character ability score
var abilityScoreMod; // character ability score modifier
var proficiencyBonus;
var singleWord = /(\w+)/; // capture a single word (i.e. 'strength')
// Setters for ability scores (string for textContent display)
var strength = "0";
var dexerity = "0";
var constitution = "0";
var intelligence = "0";
var wisdom = "0";
var charisma = "0";
// Event listeners for rolling ability scores
ele.rollStrength.addEventListener('click', function () { return func.setScore(ele.rolledStrength); });
ele.rollDexerity.addEventListener('click', function () { return func.setScore(ele.rolledDexerity); });
ele.rollConstitution.addEventListener('click', function () { return func.setScore(ele.rolledConstitution); });
ele.rollWisdom.addEventListener('click', function () { return func.setScore(ele.rolledWisdom); });
ele.rollIntelligence.addEventListener('click', function () { return func.setScore(ele.rolledIntelligence); });
ele.rollCharisma.addEventListener('click', function () { return func.setScore(ele.rolledCharisma); });
////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// General Info / User Input
////////////////////////////////////////////////////////////
// User input in chronological order
// Class Select
func.addOptionsToSelect(ele.cls, ClassList);
var selectedClass = ele.cls.options[ele.cls.selectedIndex];
var charClass = selectedClass.textContent.toLowerCase();
var setClass = function () {
    charClass = ele.cls.options[ele.cls.selectedIndex].textContent.toLowerCase().replace(/-/g, "");
};
func.setText(ele.classHelp, Classes[charClass].info);
ele.cls.addEventListener('change', function () {
    setClass();
    func.setText(ele.classHelp, Classes[charClass].info);
});
// Race Select
func.addOptionsToSelect(ele.race, RaceList);
var selectedRace = ele.race.options[ele.race.selectedIndex];
var charRace = selectedRace.textContent.toLowerCase().replace(/-/g, ""); // "i.e. human, halfelf, halforc"
var setRace = function () {
    charRace = ele.race.options[ele.race.selectedIndex].textContent.toLowerCase().replace(/-/g, "");
};
func.setText(ele.raceHelp, Races[charRace].info);
ele.race.addEventListener('change', function () {
    setRace();
    func.setText(ele.raceHelp, Races[charRace].info);
});
// Subrace Select (Optional, if subrace exists)
var charSubrace = ele.subrace.textContent.toLowerCase().replace(/-|\s/g, "");
// Subrace select
var showOptionalSubraceSelect = function () {
    setRace();
    // Reset any subrace from previous selection
    ele.subrace.innerHTML = "";
    ele.subraceHelp.textContent = "";
    charSubrace = null;
    // if race has a subrace, show and populate subrace select element
    Races[charRace].subrace
        ? (func.addOptionsToSelect(ele.subrace, ["-"]), // Make first option "null"
            func.addOptionsToSelect(ele.subrace, Races[charRace].subrace.name),
            ele.subraceSelectSection.classList.remove('d-none'))
        : ele.subraceSelectSection.classList.add('d-none');
};
// Subrace options regenerate on race selection change
ele.race.addEventListener('change', showOptionalSubraceSelect);
var setSubrace = function () {
    // if subrace exists for selected race, subrace element is shown, otherwise it stays hidden
    if (!ele.subrace.parentElement.classList.contains("d-none")) {
        charSubrace = ele.subrace.options[ele.subrace.selectedIndex].textContent.toLowerCase().replace(/-|\s/g, ""); // normalize subrace text to all lowercase joined letters
    }
    else {
        return null;
    }
};
// On subrace selection, get value of subrace and display descriptive text
ele.subrace.addEventListener('change', function () {
    func.setText(ele.subraceHelp, "");
    setSubrace();
    func.setText(ele.subraceHelp, Races[charRace].subrace.helpText);
});
// Alignment
func.addOptionsToSelect(ele.alignment, Alignments);
var selectedAlignment = ele.alignment.options[ele.alignment.selectedIndex];
var charAlignment = selectedAlignment.textContent; // "Lawful Good, Chaotic Evil, True Neutral"
var setAlignment = function () {
    var charAlignment = selectedAlignment.textContent;
};
// limits alignment options to race recommendations
var availableAlignments = function () {
    ele.alignment.innerHTML = ""; // reset alignment select options
    setRace();
    func.addOptionsToSelect(ele.alignment, Races[charRace].alignments);
};
// Alignment options regenerate on race selection
ele.race.addEventListener('change', availableAlignments);
// Name
// see domElements.ts
// Gender
var charGender = ele.gender.value.toLowerCase();
// Age
// Displays race specific age help text on race selection
var ageHelpText = function () {
    setRace();
    func.setText(ele.ageHelp, func.capitialize(charRace) + " age ranges between " + Races[charRace].age.min + " and  " + Races[charRace].age.max);
};
ele.race.addEventListener('change', ageHelpText);
// Iniialize help text on page load
ageHelpText();
// Dragonborn: Draconic Ancestry / Dragonborn "subrace"
var showDraconicAncestrySelect = function () {
    setRace();
    // if ancestry exists, populate and show ancestry select element 
    Races[charRace].special.draconicAncestry
        ? (func.addOptionsToSelect(ele.draconicAncestry, Races[charRace].special.draconicAncestry.types),
            ele.draconicAncestryHelp.textContent = 'Choose a dragon lineage.',
            ele.draconicAncestrySection.classList.remove('d-none'))
        : (ele.draconicAncestrySection.classList.add('d-none'),
            ele.draconicAncestryHelp.textContent = '');
};
// Draconic ancestry options regenerate on race selection
ele.race.addEventListener('change', showDraconicAncestrySelect);
// Initialize on page load
showDraconicAncestrySelect();
// Extra Language Selection: Human and Half-elf
// Display extra language select element if race selection is Human, Half-Elf, or High Elf and populate with language options
func.addOptionsToSelect(ele.extraLanguage, Languages.standard);
var showExtraLanguageInput = function () {
    setRace();
    setSubrace();
    charRace === 'human'
        ? (ele.extraLanguageField.classList.remove('d-none'),
            func.setText(ele.extraLanguageHelp, "Humans get to choose 1 extra language"))
        : charRace === 'halfelf'
            ? (ele.extraLanguageField.classList.remove('d-none'),
                func.setText(ele.extraLanguageHelp, "Half-Elves get to choose 1 extra language"))
            : charSubrace === 'highelf'
                ? (ele.extraLanguageField.classList.remove('d-none'),
                    func.setText(ele.extraLanguageHelp, "High Elves get to choose 1 extra language"))
                : (ele.extraLanguageField.classList.add('d-none'),
                    ele.extraLanguageHelp.textContent = '');
};
ele.race.addEventListener('change', showExtraLanguageInput);
ele.subrace.addEventListener('change', showExtraLanguageInput);
// Skill select
func.addOptionsToSelect(ele.skill1, Skills);
var skillList1 = ele.skill1.children;
func.addOptionsToSelect(ele.skill2, Skills);
var skillList2 = ele.skill2.children;
func.addOptionsToSelect(ele.skill3, Skills);
var skillList3 = ele.skill3.children;
var availableSkills = Classes[charClass].availableSkills;
var selectedSkill1 = ele.skill1.options[ele.skill1.selectedIndex];
var selectedSkill2 = ele.skill2.options[ele.skill2.selectedIndex];
var selectedSkill3 = ele.skill3.options[ele.skill3.selectedIndex];
// Skill functions
var highlightAvailableSkills = function () {
    availableSkills = Classes[charClass].availableSkills;
    ele.skill1.innerHTML = "";
    ele.skill2.innerHTML = "";
    ele.skill3.innerHTML = "";
    func.addOptionsToSelect(ele.skill1, availableSkills);
    func.addOptionsToSelect(ele.skill2, availableSkills);
    func.addOptionsToSelect(ele.skill3, availableSkills);
};
// dynamically change available skills based on character class
ele.cls.addEventListener('change', function () {
    setClass();
    highlightAvailableSkills();
});
// Initialize state for selected class on document load
highlightAvailableSkills();
////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////
// General functions
var charImageSet = function () {
    var characterAttributes = func.getCharacterAttributes(charClass, charRace, charGender);
    ele.characterImg.src = func.getCharacterImage(characterAttributes);
};
var charLevelUp = function () {
    ele.currentLevel.textContent = String(Number(ele.currentLevel.textContent) + 1);
    ele.experienceNextLevel.textContent = String(Levels[Number(ele.currentLevel.textContent) - 1].experience);
    updateProficiencyBonus();
};
var updateProficiencyBonus = function () {
    proficiencyBonus = Levels[ele.currentLevel.textContent].bonus;
    ele.proficiencyBonusPreview.textContent = String(Levels[ele.currentLevel.textContent].bonus);
    func.appendSigntoValue(proficiencyBonus, ele.proficiencyBonusPreview);
};
var addExp = function () {
    var currentExpNum = Number(ele.currentExperience.textContent);
    var newExpNum = Number(ele.addNewExperienceInput.value);
    ele.currentExperience.textContent = String(currentExpNum + newExpNum);
};
var setAbilityScorePreview = function () {
    // loop through abilities lowercased
    Abilities.map(function (ability) {
        // get ability score from rolled score node
        var rolledScoreNode = eval("rolled" + ability);
        // get preview element 
        var previewElement = eval(ability.toLowerCase() + "Preview");
        // set preview element text to ability score
        previewElement.textContent = rolledScoreNode.textContent;
    });
};
var resetAbilityScores = function () {
    Abilities.map(function (ability) {
        return ability = null;
    });
};
var generalInfo = function () {
    // initialize values at character creation
    resetAbilityScores();
    // Get current state of info required to create character
    setClass();
    setRace();
    setSubrace();
    // Post info from character creation to preview area
    setAbilityScorePreview();
    selectedAlignment = ele.alignment.options[ele.alignment.selectedIndex];
    charGender = ele.gender.value.toLowerCase();
    // convert languages array into line-separated list items (use innerHTML instead of textCotent)
    var knownLanguages = Races[charRace].languages.toString().split().join("\r\n") + ("" + String(ele.extraLanguage.value));
    func.showElementWithProps(ele.languagesPreview, "Known Languages", knownLanguages);
    ele.currentLevel.textContent = String(Levels[0].level);
    ele.experienceNextLevel.textContent = String(Levels[0].experience);
    ele.namePreview.textContent = ele.name.value;
    ele.racePreview.textContent = selectedRace.textContent;
    ele.genderPreview.textContent = ele.gender.value;
    ele.agePreview.textContent = ele.age.value;
    ele.clsPreview.textContent = selectedClass.textContent;
    ele.alignmentPreview.textContent = selectedAlignment.textContent;
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
var lookupAbilityScore = function (ability) {
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
var subraceAbilityModifier = function () {
    setRace();
    if (Races[charRace].subrace) {
        // get subrace bonus ability and modifier value
        var subraceAbility = Races[charRace].subrace.ability;
        var subraceAbilityMod = Races[charRace].subrace.modifier;
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
var racialAbilityModifier = function () {
    setRace();
    var racialAbility = Races[charRace].abilityModifier.ability;
    var racialAbilityMod = Races[charRace].abilityModifier.modifier;
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
    if (Races[charRace].abilityModifier.extraAbility) {
        for (var i = 0; i < abilityScoreListItems.length; i++) {
            var abilityText = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
            var abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent;
            if (abilityText.toLowerCase() === Races[charRace].abilityModifier.extraAbility) {
                var abilityScore_3 = Number(abilityScorePreview);
                abilityScorePreview = String(abilityScore_3 + Races[charRace].abilityModifier.extraModifier);
            }
        }
    }
};
// Display extra ability modifier field if race is Half-Elf
func.addOptionsToSelect(extraAbilityModifier1, Abilities);
var showExtraModifiersInput = function () {
    setRace();
    // Add ability options to extra ability select element
    charRace === 'halfelf'
        ? extraAbilityModifier.classList.remove('d-none')
        : extraAbilityModifier.classList.add('d-none');
    charRace === 'halfelf'
        ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1'
        : extraAbilityModifierHelp.textContent = '';
};
ele.race.addEventListener('change', showExtraModifiersInput);
// Hide ability selected in either select element from the other select element
var hideModSelection = function (extraAbilityModifier, otherAbilityModifier) {
    var firstSelection = extraAbilityModifier.options[extraAbilityModifier.selectedIndex].textContent;
    otherAbilityModifier.innerHTML = "";
    Abilities.map(function (ability) {
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
// if extra ability score is selected add +1 to ability score preview
var addHalfElfAbilityMofifiers = function () {
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
var dragonbornDraconicAncestry = function () {
    var selectedDraconicAncestry = ele.draconicAncestry.options[ele.draconicAncestry.selectedIndex];
    var charDraconicAncestry = selectedDraconicAncestry.textContent.toLowerCase();
    console.log(selectedDraconicAncestry);
    console.log(charDraconicAncestry);
    return Races[charRace].special.draconicAncestry
        ? (ele.draconicAncestryPreview.parentElement.classList.remove('d-none'),
            ele.draconicAncestryPreview.parentElement.classList.add('d-flex'),
            ele.draconicAncestryPreview.setAttribute('title', Races.dragonborn.special.draconicAncestry.info),
            dragonType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].color),
            damageType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type),
            breathWeapon.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].breath),
            damageResistancePreview.parentElement.classList.remove('d-none'),
            damageResistancePreview.parentElement.classList.add('d-flex'),
            damageResistanceType.textContent = Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type)
        : (ele.draconicAncestryPreview.parentElement.classList.remove('d-flex'),
            ele.draconicAncestryPreview.parentElement.classList.add('d-none'),
            ele.draconicAncestryHelp.textContent = "");
};
// Dwarf 
// Dwarf Stonecunning
var dwarfStonecunning = function () {
    return Races[charRace].special.stonecunning
        ? (func.showElementWithProps(stonecunningPreview, Races[charRace].special.stonecunning.info, "Stonework (Int, Hist)"))
        : stonecunningPreview.parentElement.classList.add('d-none');
};
// Dwarf tool proficiency
var dwarfToolProficiency = function () {
    return Races[charRace].special.toolProficiency
        ? (func.showElementWithProps(toolProficiencyPreview, Races[charRace].special.stonecunning.info, "Pick one: Smith\u2019s tools, Mason\u2019s tools, or Brewer\u2019s supplies)"))
        : toolProficiencyPreview.parentElement.classList.add('d-none');
};
// Elf Keen Senses Perception Bonus Skill
var elfKeenSenses = function () {
    return Races[charRace].special.keenSenses
        ? highightSkill('perception')
        : null;
};
// Elf Trance sleep skill
var elfTrance = function () {
    return Races[charRace].special.trance
        ? func.showElementWithProps(tranceInfo, Races[charRace].special.trance.info, "Details")
        : null;
};
// Halfling lightfoot stealth skill
var lightfootNaturallyStealthy = function () {
    return charSubrace === "lightfoot"
        ? func.showElementWithProps(stealthInfo, Races[charRace].subrace.naturallyStealthy.info, "Details")
        : null;
};
// Half-orc special abilities
var halforcMenacing = function () {
    return Races[charRace].special.menacing
        ? func.showElementWithProps(menacingInfo, Races[charRace].special.menacing.info, "Details")
        : null;
};
var halforcRelentlessEndurance = function () {
    return Races[charRace].special.relentlessEndurance
        ? func.showElementWithProps(relentlessEnduranceInfo, Races[charRace].special.relentlessEndurance.info, "Details")
        : null;
};
var halforcSavageAttacks = function () {
    return Races[charRace].special.savageAttacks
        ? func.showElementWithProps(savageAttacksInfo, Races[charRace].special.savageAttacks.info, "Details")
        : null;
};
// Rock gnome special abilities
var rockgnomeSpecials = function () {
    return charSubrace === "rockgnome"
        ? (func.showElementWithProps(artificersLoreInfo, Races[charRace].subrace.artificersLore.info, "Details"),
            func.showElementWithProps(tinkerPreview, Races[charRace].subrace.tinker.info, "Tinker"),
            tinkerInfo.setAttribute('title', Races[charRace].subrace.tinker.details),
            tinkerInfo.textContent = "Details")
        : null;
};
// Tiefling special abilities\
var tieflingHellishResistance = function () {
    return Races[charRace].special.hellishResistance
        ? func.showElementWithProps(hellishResistanceInfo, Races[charRace].special.hellishResistance.info, "Details")
        : null;
};
var tieflingInfernalLegacy = function () {
    return Races[charRace].special.infernalLegacy
        ? func.showElementWithProps(infernalLegacyInfo, Races[charRace].special.infernalLegacy.info, "Details")
        : null;
};
// Skill functions
// const showSkillSlots = (characterClass) => {
//   // get number of skills for class
//   const numberOfSkills: number = Classes[charClass].skills
//   //loop through and display skill selects
// }
var getSelectedSkills = function () {
    selectedSkill1 = ele.skill1.options[ele.skill1.selectedIndex];
    selectedSkill2 = ele.skill2.options[ele.skill2.selectedIndex];
    selectedSkill3 = ele.skill3.options[ele.skill3.selectedIndex];
};
// Get any modifiers to the proficiency bonus for a skill
var getSkillModifier = function (skillText) {
    var skillAbility = String(singleWord.exec(skillText));
    var skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());
    abilityScoreMod = func.getAbilityScoreModifier(skillAbilityScore);
    return totalMod = abilityScoreMod + proficiencyBonus;
};
// highlight a single skill
var highightSkill = function (skillText) {
    for (var i = 0; i < skillsPreviewListItems.length; i++) {
        var skill = skillsPreviewListItems[i];
        var skillName = skillsPreviewListItems[i].childNodes[1];
        var skillText_1 = String(skillsPreviewListItems[i].childNodes[1].textContent).toLowerCase();
        skillText_1 === skillText_1
            ? (skill.style.color = 'green',
                getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent),
                func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]))
            : null;
    }
};
// highlight choosen skills on character creation
var highlightSkills = function () {
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
        if (skillText === selectedSkill1.textContent.trim()
            || skillText === selectedSkill2.textContent.trim()
            || skillText === selectedSkill3.textContent.trim()) {
            skill.style.color = 'green';
            getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
            func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
        }
        else {
            // if no match dim selection
            skill.style.color = '#ccc';
        }
    }
};
// Set value of Dwarven Toughtness hit point modifier based on race selection
var addDwarvenToughness = function () {
    setRace();
    charRace === "dwarf"
        ? dwarvenToughnessMod = 1
        : dwarvenToughnessMod = 0;
    return dwarvenToughnessMod;
};
var racialBonuses = function () {
    addDwarvenToughness();
    addHalfElfAbilityMofifiers(); // Half-Elf racial ability score bonus (Any 2 plus Charisma)
};
var highlightRacialSKills = function () {
    setRace();
    setSubrace();
    // Dwarf
    dwarfStonecunning();
    dwarfToolProficiency();
    addDwarvenToughness();
    // Dragonborn
    dragonbornDraconicAncestry();
    // Elf
    elfKeenSenses();
    elfTrance();
    // Half-Elf
    addHalfElfAbilityMofifiers(); // Half-Elf racial ability score bonus (Any 2 plus Charisma)
    // Half-orc
    halforcMenacing();
    halforcRelentlessEndurance();
    halforcSavageAttacks();
    // Tiefling 
    tieflingHellishResistance();
    tieflingInfernalLegacy();
    // Subrace skills
    // Halfling Lightfoots
    lightfootNaturallyStealthy();
    // Rock gnome special abilities
    rockgnomeSpecials();
};
// Skills combined function call
var skillCreation = function () {
    updateProficiencyBonus();
    // Highlight selected skills and append skill modifier
    highlightSkills();
    // Preview racial abilities
    highlightRacialSKills();
};
// Function to combine related functions (TODO: can be combined with other racial)
var clearRacialSkils = function () {
    // set text content and attr to 'null', hide elements in preview
    // Combat tab
    func.resetProps(weaponProficiencesPreview);
    func.resetProps(poisonResistance);
    func.resetProps(charmResistance);
    func.resetProps(fearResistance);
    // Skills tab - Additional Skills
    func.resetProps(ele.languagesPreview);
    func.hideParentElement(toolProficiencyPreview);
    func.resetProps(toolProficiencyPreview);
    // Dwarf
    func.hideParentElement(stonecunningPreview);
    func.resetProps(stonecunningPreview);
    // Dragonborn
    func.hideParentElement(ele.draconicAncestryPreview);
    func.resetProps(ele.draconicAncestryPreview);
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
ele.race.addEventListener('change', clearRacialSkils);
ele.subrace.addEventListener('change', clearRacialSkils);
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
var initialHitPoints = function () {
    // 1st level is max hit points + constiution modifier + racial modifier
    var modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
    var hitpoints = (Classes[charClass].hitdie + modifier);
    hitPointPreview.textContent = String(hitpoints);
};
var addHitPoints = function () {
    var currentHitPoints = Number(hitPointPreview.textContent);
    var rolledHitPoints = func.randomIntFromRange(1, Classes[charClass].hitdie);
    modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
    var hitPointsToAdd = (rolledHitPoints + modifier);
    // Prevent negative or zero hit points on level up
    if (rolledHitPoints + modifier <= 0) {
        hitPointsToAdd = 1;
    }
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
};
var armorClass = function () {
    var base = 10;
    var dexMod = func.getAbilityScoreModifier(Number(dexerity));
    var armorMod = 0;
    var ac = String(base + dexMod + armorMod);
    armorClassPreview.textContent = ac;
};
var initiativeMod = function () {
    var dexMod = func.getAbilityScoreModifier(Number(dexerity));
    initiativeModPreview.textContent = String(dexMod);
};
var baseSpeed = function () { return speedPreview.textContent = Races[charRace].speed; };
var passivePerception = function () { return passivePerceptionPreview.textContent = String(10 + func.getAbilityScoreModifier(wisdom)); };
var darkvision = function () {
    setRace();
    if (Races[charRace].darkvision) {
        darkvisionPreview.textContent = '60 ft.';
    }
    else {
        darkvisionPreview.textContent = 'None';
    }
};
var setCharacterSize = function () { return sizePreview.textContent = Races[charRace].size; };
var calculateWeaponProficiencies = function () {
    setRace();
    setSubrace();
    charRace === 'dwarf'
        ? Races[charRace].weaponProficiences.map(function (weapon) {
            weaponProficiencesPreview.textContent += weapon + ", ";
        })
        : null;
    charSubrace === 'highelf'
        ? Races[charRace].subrace.weaponProficiences.map(function (weapon) {
            weaponProficiencesPreview.textContent += weapon + ", ";
        })
        : null;
};
// Saving throws
var savingThrowList = document.querySelector('#savingThrowPreviewList');
var savingThrowListItems = savingThrowList.children;
// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)
var calculateSavingThrowMods = function () {
    setClass();
    var abilities = Classes[charClass].savingThrows;
    abilities.map(function (ability) {
        // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
        for (var i = 0; i < savingThrowListItems.length; i++) {
            var string = (singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
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
var calculateSpecialResistances = function () {
    setRace();
    if (charRace === 'dwarf') {
        poisonResistance.textContent = "Advantage, Resistance";
        poisonResistance.setAttribute('title', Races[charRace].special.resilience.info);
    }
    if (charRace === 'elf' || charRace === 'halfelf') {
        charmResistance.textContent = 'Advantage';
        charmResistance.setAttribute('title', Races[charRace].special.feyAncestry.info);
    }
    if (charRace === 'gnome') {
        var types = Races[charRace].special.gnomeCunning.type;
        types.map(function (type) {
            // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
            for (var i = 0; i < savingThrowListItems.length; i++) {
                var string = (singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
                if (string === type) {
                    savingThrowListItems[i].childNodes[1].textContent += " (Advantage)";
                }
            }
        });
    }
    if (charRace === 'halfling') {
        fearResistance.textContent = 'Advantage';
        fearResistance.setAttribute('title', Races[charRace].special.brave.info);
    }
};
var combatCreation = function () {
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
ele.createCharacterButton.addEventListener('click', function (e) {
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
ele.levelUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    setClass();
    // Get level up variables
    constitution = ele.rolledConstitution.textContent;
    if (ele.currentLevel.textContent === "20") {
        return;
    }
    charLevelUp();
    addHitPoints();
    highlightSkills();
});
ele.addNewExperienceButton.addEventListener('click', function (e) {
    e.preventDefault();
    addExp();
    ele.addNewExperienceInput.value = null;
});

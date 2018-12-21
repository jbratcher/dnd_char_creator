'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
////////////////////////////////////////
// DOM Elements
////////////////////////////////////////
////////////////////////////////////////
// Character Attributes
////////////////////////////////////////
// Class Select
var cls = exports.cls = document.querySelector('#cls'); // cls here due to reserved Class keyword
var classHelp = exports.classHelp = document.querySelector('#classHelp');
// Race select
var race = exports.race = document.querySelector('#race');
var raceHelp = exports.raceHelp = document.querySelector('#raceHelp');
// Subrace select
var subraceSelectSection = exports.subraceSelectSection = document.querySelector('#optionalSubrace');
var subrace = exports.subrace = document.querySelector('#subrace');
var subraceHelp = exports.subraceHelp = document.querySelector('#subraceHelp');
// Alignment
var alignment = exports.alignment = document.querySelector('#alignment');
// Name
var name = exports.name = document.querySelector('#name');
// Gender
var gender = exports.gender = document.querySelector('#gender');
// Age 
var age = exports.age = document.querySelector('#age');
var ageHelp = exports.ageHelp = document.querySelector('#ageHelp');
////////////////////////////////////////
// Ability score
////////////////////////////////////////
var rollStrength = exports.rollStrength = document.querySelector('#rollStrength');
var rolledStrength = exports.rolledStrength = document.querySelector('#rolledStrength');
var rollDexerity = exports.rollDexerity = document.querySelector('#rollDexerity');
var rolledDexerity = exports.rolledDexerity = document.querySelector('#rolledDexerity');
var rollConstitution = exports.rollConstitution = document.querySelector('#rollConstitution');
var rolledConstitution = exports.rolledConstitution = document.querySelector('#rolledConstitution');
var rollIntelligence = exports.rollIntelligence = document.querySelector('#rollIntelligence');
var rolledIntelligence = exports.rolledIntelligence = document.querySelector('#rolledIntelligence');
var rollWisdom = exports.rollWisdom = document.querySelector('#rollWisdom');
var rolledWisdom = exports.rolledWisdom = document.querySelector('#rolledWisdom');
var rollCharisma = exports.rollCharisma = document.querySelector('#rollCharisma');
var rolledCharisma = exports.rolledCharisma = document.querySelector('#rolledCharisma');
////////////////////////////////////////
// Racial traits
////////////////////////////////////////
// Dragonborn Draconic Ancestry
var draconicAncestrySection = exports.draconicAncestrySection = document.querySelector('#draconicAncestrySection');
var draconicAncestry = exports.draconicAncestry = document.querySelector('#draconicAncestry');
var draconicAncestryHelp = exports.draconicAncestryHelp = document.querySelector('#draconicAncestryHelp');
var draconicAncestryPreview = exports.draconicAncestryPreview = document.querySelector('#draconicAncestryPreview');
// Extra Language trait for Half-Elf, High Elf, and Human
var extraLanguageField = exports.extraLanguageField = document.querySelector('#extraLanguageField');
var extraLanguage = exports.extraLanguage = document.querySelector('#extraLanguage');
var extraLanguageHelp = exports.extraLanguageHelp = document.querySelector('#extraLanguageHelp');
////////////////////////////////////////
// Character Skills
////////////////////////////////////////
var skill1 = exports.skill1 = document.querySelector('#skillsSelect1');
var skill2 = exports.skill2 = document.querySelector('#skillsSelect2');
var skill3 = exports.skill3 = document.querySelector('#skillsSelect3');
////////////////////////////////////////////////////////////
// Level and experience elements (preview section)
////////////////////////////////////////////////////////////
// Elements
var currentLevel = exports.currentLevel = document.querySelector('#currentLevel');
var currentExperience = exports.currentExperience = document.querySelector('#currentExperience');
var experienceNextLevel = exports.experienceNextLevel = document.querySelector('#experienceNextLevel');
var addNewExperienceInput = exports.addNewExperienceInput = document.querySelector('#addNewExperience');
// Buttons
var createCharacterButton = exports.createCharacterButton = document.querySelector('#createCharacterButton');
var levelUpButton = exports.levelUpButton = document.querySelector('#levelUpButton');
var addNewExperienceButton = exports.addNewExperienceButton = document.querySelector('#addExp');
////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////
// General Preview variables
var namePreview = exports.namePreview = document.querySelector('#namePreview');
var racePreview = exports.racePreview = document.querySelector('#racePreview');
var genderPreview = exports.genderPreview = document.querySelector('#genderPreview');
var agePreview = exports.agePreview = document.querySelector('#agePreview');
var clsPreview = exports.clsPreview = document.querySelector('#clsPreview');
var alignmentPreview = exports.alignmentPreview = document.querySelector('#alignmentPreview');
var characterImg = exports.characterImg = document.querySelector('#characterImg');
var proficiencyBonusPreview = exports.proficiencyBonusPreview = document.querySelector('#proficiencyBonusPreview');
var languagesPreview = exports.languagesPreview = document.querySelector('#languagesPreview');
////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////
// Ability score variables
var abilityScoreList = exports.abilityScoreList = document.querySelector('#abilityScoreList');
var strengthPreview = exports.strengthPreview = document.querySelector('#strengthPreview');
var dexerityPreview = exports.dexerityPreview = document.querySelector('#dexerityPreview');
var constitutionPreview = exports.constitutionPreview = document.querySelector('#constitutionPreview');
var wisdomPreview = exports.wisdomPreview = document.querySelector('#wisdomPreview');
var intelligencePreview = exports.intelligencePreview = document.querySelector('#intelligencePreview');
var charismaPreview = exports.charismaPreview = document.querySelector('#charismaPreview');
var extraAbilityModifier = exports.extraAbilityModifier = document.querySelector('#extraAbilityModifier');
var extraAbilityModifier1 = exports.extraAbilityModifier1 = document.querySelector('#extraAbilityModifier1');
var extraAbilityModifier2 = exports.extraAbilityModifier2 = document.querySelector('#extraAbilityModifier2');
var extraAbilityModifierHelp = exports.extraAbilityModifierHelp = document.querySelector('#extraAbilityModifierHelp');
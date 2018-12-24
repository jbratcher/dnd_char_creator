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
////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////
// Skill variables
// Skill Lists
var skillsPreviewList = exports.skillsPreviewList = document.querySelector('#skillsPreviewList');
var skillsPreviewListItems = exports.skillsPreviewListItems = skillsPreviewList.children;
var additionalSkillsPreviewList = exports.additionalSkillsPreviewList = document.querySelector('#additionalSkillsPreviewList');
var additionalSkillsPreviewListItems = exports.additionalSkillsPreviewListItems = additionalSkillsPreviewList.children;
// Special Abilities
var stonecunningPreview = exports.stonecunningPreview = document.querySelector('#stonecunningPreview');
var toolProficiencyPreview = exports.toolProficiencyPreview = document.querySelector('#toolProficiencyPreview');
var dragonType = exports.dragonType = document.querySelector('#dragonType');
var damageType = exports.damageType = document.querySelector('#damageType');
var breathWeapon = exports.breathWeapon = document.querySelector('#breathWeapon');
var trancePreview = exports.trancePreview = document.querySelector('#trancePreview');
var tranceInfo = exports.tranceInfo = document.querySelector('#tranceInfo');
var stealthPreview = exports.stealthPreview = document.querySelector('#stealthPreview');
var stealthInfo = exports.stealthInfo = document.querySelector('#stealthInfo');
var artificersLorePreview = exports.artificersLorePreview = document.querySelector('#artificersLorePreview');
var artificersLoreInfo = exports.artificersLoreInfo = document.querySelector('#artificersLoreInfo');
var tinkerPreview = exports.tinkerPreview = document.querySelector('#tinkerPreview');
var tinkerInfo = exports.tinkerInfo = document.querySelector('#tinkerInfo');
var damageResistancePreview = exports.damageResistancePreview = document.querySelector('#damageResistancePreview');
var damageResistanceType = exports.damageResistanceType = document.querySelector('#damageResistanceType');
var menacingPreview = exports.menacingPreview = document.querySelector('#menacingPreview');
var menacingInfo = exports.menacingInfo = document.querySelector('#menacingInfo');
var relentlessEndurancePreview = exports.relentlessEndurancePreview = document.querySelector('#relentlessEndurancePreview');
var relentlessEnduranceInfo = exports.relentlessEnduranceInfo = document.querySelector('#relentlessEnduranceInfo');
var savageAttacksPreview = exports.savageAttacksPreview = document.querySelector('#savageAttacksPreview');
var savageAttacksInfo = exports.savageAttacksInfo = document.querySelector('#savageAttacksInfo');
var hellishResistancePreview = exports.hellishResistancePreview = document.querySelector('#hellishResistancePreview');
var hellishResistanceInfo = exports.hellishResistanceInfo = document.querySelector('#hellishResistanceInfo');
var infernalLegacyPreview = exports.infernalLegacyPreview = document.querySelector('#infernalLegacyPreview');
var infernalLegacyInfo = exports.infernalLegacyInfo = document.querySelector('#infernalLegacyInfo');
////////////////////////////////////////////////////////////
// Combat
////////////////////////////////////////////////////////////
// Combat variables
var hitPointPreview = exports.hitPointPreview = document.querySelector('#hitPoints');
var armorClassPreview = exports.armorClassPreview = document.querySelector('#armorClass');
var initiativeModPreview = exports.initiativeModPreview = document.querySelector('#initiative');
var speedPreview = exports.speedPreview = document.querySelector('#speed');
var passivePerceptionPreview = exports.passivePerceptionPreview = document.querySelector('#passivePerception');
var darkvisionPreview = exports.darkvisionPreview = document.querySelector('#darkvisionPreview');
var sizePreview = exports.sizePreview = document.querySelector('#size');
var weaponProficiencesPreview = exports.weaponProficiencesPreview = document.querySelector('#weaponProficiencesPreview');
// Saving Throws 
var savingThrowList = exports.savingThrowList = document.querySelector('#savingThrowPreviewList');
var savingThrowListItems = exports.savingThrowListItems = savingThrowList.children;
// Special Resistances
var specialResistances = exports.specialResistances = document.querySelector('#specialResistances');
var poisonResistance = exports.poisonResistance = document.querySelector('#poisonResistance');
var charmResistance = exports.charmResistance = document.querySelector('#charmResistance');
var fearResistance = exports.fearResistance = document.querySelector('#fearResistance');
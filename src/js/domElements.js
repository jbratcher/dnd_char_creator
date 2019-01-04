////////////////////////////////////////
// DOM Elements
////////////////////////////////////////
////////////////////////////////////////
// Character Attributes
////////////////////////////////////////
// Class Select
export var cls = document.querySelector('#cls'); // cls here due to reserved Class keyword
export var classHelp = document.querySelector('#classHelp');
// Race select
export var race = document.querySelector('#race');
export var raceHelp = document.querySelector('#raceHelp');
// Subrace select
export var subraceSelectSection = document.querySelector('#optionalSubrace');
export var subrace = document.querySelector('#subrace');
export var subraceHelp = document.querySelector('#subraceHelp');
// Alignment
export var alignment = document.querySelector('#alignment');
// Name
export var name = document.querySelector('#name');
// Gender
export var gender = document.querySelector('#gender');
// Age 
export var age = document.querySelector('#age');
export var ageHelp = document.querySelector('#ageHelp');
////////////////////////////////////////
// Ability score
////////////////////////////////////////
export var rollStrength = document.querySelector('#rollStrength');
export var rolledStrength = document.querySelector('#rolledStrength');
export var rollDexerity = document.querySelector('#rollDexerity');
export var rolledDexerity = document.querySelector('#rolledDexerity');
export var rollConstitution = document.querySelector('#rollConstitution');
export var rolledConstitution = document.querySelector('#rolledConstitution');
export var rollIntelligence = document.querySelector('#rollIntelligence');
export var rolledIntelligence = document.querySelector('#rolledIntelligence');
export var rollWisdom = document.querySelector('#rollWisdom');
export var rolledWisdom = document.querySelector('#rolledWisdom');
export var rollCharisma = document.querySelector('#rollCharisma');
export var rolledCharisma = document.querySelector('#rolledCharisma');
////////////////////////////////////////
// Racial traits
////////////////////////////////////////
// Dragonborn Draconic Ancestry
export var draconicAncestrySection = document.querySelector('#draconicAncestrySection');
export var draconicAncestry = document.querySelector('#draconicAncestry');
export var draconicAncestryHelp = document.querySelector('#draconicAncestryHelp');
export var draconicAncestryPreview = document.querySelector('#draconicAncestryPreview');
// Extra Language trait for Half-Elf, High Elf, and Human
export var extraLanguageField = document.querySelector('#extraLanguageField');
export var extraLanguage = document.querySelector('#extraLanguage');
export var extraLanguageHelp = document.querySelector('#extraLanguageHelp');
////////////////////////////////////////
// Character Skills
////////////////////////////////////////
export var skill1 = document.querySelector('#skillsSelect1');
export var skill2 = document.querySelector('#skillsSelect2');
export var skill3 = document.querySelector('#skillsSelect3');
export var skill4 = document.querySelector('#skillsSelect4');
////////////////////////////////////////////////////////////
// Level and experience elements (preview section)
////////////////////////////////////////////////////////////
// Elements
export var currentLevel = document.querySelector('#currentLevel');
export var currentExperience = document.querySelector('#currentExperience');
export var experienceNextLevel = document.querySelector('#experienceNextLevel');
export var addNewExperienceInput = document.querySelector('#addNewExperience');
// Buttons
export var createCharacterButton = document.querySelector('#createCharacterButton');
export var levelUpButton = document.querySelector('#levelUpButton');
export var addNewExperienceButton = document.querySelector('#addExp');
////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////
// General Preview variables
export var namePreview = document.querySelector('#namePreview');
export var racePreview = document.querySelector('#racePreview');
export var genderPreview = document.querySelector('#genderPreview');
export var agePreview = document.querySelector('#agePreview');
export var clsPreview = document.querySelector('#clsPreview');
export var alignmentPreview = document.querySelector('#alignmentPreview');
export var characterImg = document.querySelector('#characterImg');
export var proficiencyBonusPreview = document.querySelector('#proficiencyBonusPreview');
export var languagesPreview = document.querySelector('#languagesPreview');
////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////
// Ability score variables
export var abilityScoreList = document.querySelector('#abilityScoreList');
export var strengthPreview = document.querySelector('#strengthPreview');
export var dexerityPreview = document.querySelector('#dexerityPreview');
export var constitutionPreview = document.querySelector('#constitutionPreview');
export var wisdomPreview = document.querySelector('#wisdomPreview');
export var intelligencePreview = document.querySelector('#intelligencePreview');
export var charismaPreview = document.querySelector('#charismaPreview');
export var extraAbilityModifier = document.querySelector('#extraAbilityModifier');
export var extraAbilityModifier1 = document.querySelector('#extraAbilityModifier1');
export var extraAbilityModifier2 = document.querySelector('#extraAbilityModifier2');
export var extraAbilityModifierHelp = document.querySelector('#extraAbilityModifierHelp');
////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////
// Skill variables
// Skill Lists
export var skillsPreviewList = document.querySelector('#skillsPreviewList');
export var skillsPreviewListItems = skillsPreviewList.children;
export var additionalSkillsPreviewList = document.querySelector('#additionalSkillsPreviewList');
export var additionalSkillsPreviewListItems = additionalSkillsPreviewList.children;
// Special Abilities
export var stonecunningPreview = document.querySelector('#stonecunningPreview');
export var toolProficiencyPreview = document.querySelector('#toolProficiencyPreview');
export var dragonType = document.querySelector('#dragonType');
export var damageType = document.querySelector('#damageType');
export var breathWeapon = document.querySelector('#breathWeapon');
export var trancePreview = document.querySelector('#trancePreview');
export var tranceInfo = document.querySelector('#tranceInfo');
export var stealthPreview = document.querySelector('#stealthPreview');
export var stealthInfo = document.querySelector('#stealthInfo');
export var artificersLorePreview = document.querySelector('#artificersLorePreview');
export var artificersLoreInfo = document.querySelector('#artificersLoreInfo');
export var tinkerPreview = document.querySelector('#tinkerPreview');
export var tinkerInfo = document.querySelector('#tinkerInfo');
export var damageResistancePreview = document.querySelector('#damageResistancePreview');
export var damageResistanceType = document.querySelector('#damageResistanceType');
export var menacingPreview = document.querySelector('#menacingPreview');
export var menacingInfo = document.querySelector('#menacingInfo');
export var relentlessEndurancePreview = document.querySelector('#relentlessEndurancePreview');
export var relentlessEnduranceInfo = document.querySelector('#relentlessEnduranceInfo');
export var savageAttacksPreview = document.querySelector('#savageAttacksPreview');
export var savageAttacksInfo = document.querySelector('#savageAttacksInfo');
export var hellishResistancePreview = document.querySelector('#hellishResistancePreview');
export var hellishResistanceInfo = document.querySelector('#hellishResistanceInfo');
export var infernalLegacyPreview = document.querySelector('#infernalLegacyPreview');
export var infernalLegacyInfo = document.querySelector('#infernalLegacyInfo');
////////////////////////////////////////////////////////////
// Combat
////////////////////////////////////////////////////////////
// Combat variables
export var hitPointPreview = document.querySelector('#hitPoints');
export var armorClassPreview = document.querySelector('#armorClass');
export var initiativeModPreview = document.querySelector('#initiative');
export var speedPreview = document.querySelector('#speed');
export var passivePerceptionPreview = document.querySelector('#passivePerception');
export var darkvisionPreview = document.querySelector('#darkvisionPreview');
export var sizePreview = document.querySelector('#size');
export var weaponProficiencesPreview = document.querySelector('#weaponProficiencesPreview');
// Saving Throws 
export var savingThrowList = document.querySelector('#savingThrowPreviewList');
export var savingThrowListItems = savingThrowList.children;
// Special Resistances
export var specialResistances = document.querySelector('#specialResistances');
export var poisonResistance = document.querySelector('#poisonResistance');
export var charmResistance = document.querySelector('#charmResistance');
export var fearResistance = document.querySelector('#fearResistance');
////////////////////////////////////////////////////////////
// Inventory
////////////////////////////////////////////////////////////
// Inventory variables
export var startingEquipmentPreview = document.querySelector("#startingEquipmentPreview");

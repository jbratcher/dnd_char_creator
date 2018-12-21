////////////////////////////////////////
// DOM Elements
////////////////////////////////////////


////////////////////////////////////////
// Character Attributes
////////////////////////////////////////

// Class Select

export const cls = <HTMLSelectElement>document.querySelector('#cls');  // cls here due to reserved Class keyword

export const classHelp = <HTMLElement>document.querySelector('#classHelp');

// Race select

export const race = <HTMLSelectElement>document.querySelector('#race');

export const raceHelp = <HTMLElement>document.querySelector('#raceHelp');

// Subrace select

export const subraceSelectSection = <HTMLElement>document.querySelector('#optionalSubrace');

export const subrace = <HTMLSelectElement>document.querySelector('#subrace');

export const subraceHelp = <HTMLElement>document.querySelector('#subraceHelp');

// Alignment

export const alignment = <HTMLSelectElement>document.querySelector('#alignment');

// Name

export const name = <HTMLInputElement>document.querySelector('#name');

// Gender

export const gender = <HTMLInputElement>document.querySelector('#gender');

// Age 

export const age = <HTMLInputElement>document.querySelector('#age');

export const ageHelp = <HTMLElement>document.querySelector('#ageHelp');


////////////////////////////////////////
// Ability score
////////////////////////////////////////

export const rollStrength: HTMLElement = document.querySelector('#rollStrength');
export const rolledStrength: HTMLElement = document.querySelector('#rolledStrength');

export const rollDexerity: HTMLElement = document.querySelector('#rollDexerity');
export const rolledDexerity: HTMLElement = document.querySelector('#rolledDexerity');

export const rollConstitution: HTMLElement = document.querySelector('#rollConstitution');
export const rolledConstitution: HTMLElement = document.querySelector('#rolledConstitution');

export const rollIntelligence: HTMLElement = document.querySelector('#rollIntelligence');
export const rolledIntelligence: HTMLElement = document.querySelector('#rolledIntelligence');

export const rollWisdom: HTMLElement = document.querySelector('#rollWisdom');
export const rolledWisdom: HTMLElement = document.querySelector('#rolledWisdom');

export const rollCharisma: HTMLElement = document.querySelector('#rollCharisma');
export const rolledCharisma: HTMLElement = document.querySelector('#rolledCharisma');

////////////////////////////////////////
// Racial traits
////////////////////////////////////////

// Dragonborn Draconic Ancestry

export const draconicAncestrySection = <HTMLElement>document.querySelector('#draconicAncestrySection');

export const draconicAncestry = <HTMLSelectElement>document.querySelector('#draconicAncestry');

export const draconicAncestryHelp = <HTMLElement>document.querySelector('#draconicAncestryHelp');

export const draconicAncestryPreview = <HTMLElement>document.querySelector('#draconicAncestryPreview');

// Extra Language trait for Half-Elf, High Elf, and Human

export const extraLanguageField = <HTMLElement>document.querySelector('#extraLanguageField');

export const extraLanguage = <HTMLSelectElement>document.querySelector('#extraLanguage');

export const extraLanguageHelp = <HTMLElement>document.querySelector('#extraLanguageHelp');

////////////////////////////////////////
// Character Skills
////////////////////////////////////////

export const skill1 = <HTMLSelectElement>document.querySelector('#skillsSelect1');

export const skill2 = <HTMLSelectElement>document.querySelector('#skillsSelect2');

export const skill3 = <HTMLSelectElement>document.querySelector('#skillsSelect3');

////////////////////////////////////////////////////////////
// Level and experience elements (preview section)
////////////////////////////////////////////////////////////

// Elements

export const currentLevel = <HTMLElement>document.querySelector('#currentLevel');

export const currentExperience = <HTMLElement>document.querySelector('#currentExperience');

export const experienceNextLevel = <HTMLElement>document.querySelector('#experienceNextLevel');

export const addNewExperienceInput = <HTMLInputElement>document.querySelector('#addNewExperience');

// Buttons

export const createCharacterButton = <HTMLElement>document.querySelector('#createCharacterButton');

export const levelUpButton = <HTMLElement>document.querySelector('#levelUpButton');

export const addNewExperienceButton = <HTMLElement>document.querySelector('#addExp');

////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////

// General Preview variables

export const namePreview = <HTMLElement>document.querySelector('#namePreview');

export const racePreview = <HTMLElement>document.querySelector('#racePreview');

export const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');

export const agePreview = <HTMLElement>document.querySelector('#agePreview');

export const clsPreview = <HTMLElement>document.querySelector('#clsPreview');

export const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');

export const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

export const proficiencyBonusPreview = <HTMLElement>document.querySelector('#proficiencyBonusPreview');

export const languagesPreview = <HTMLElement>document.querySelector('#languagesPreview');

////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////

// Ability score variables

export const abilityScoreList = <HTMLElement>document.querySelector('#abilityScoreList');

export const strengthPreview = <HTMLElement>document.querySelector('#strengthPreview');

export const dexerityPreview = <HTMLElement>document.querySelector('#dexerityPreview');

export const constitutionPreview = <HTMLElement>document.querySelector('#constitutionPreview');

export const wisdomPreview = <HTMLElement>document.querySelector('#wisdomPreview');

export const intelligencePreview = <HTMLElement>document.querySelector('#intelligencePreview');

export const charismaPreview = <HTMLElement>document.querySelector('#charismaPreview');

export const extraAbilityModifier = <HTMLElement>document.querySelector('#extraAbilityModifier');

export const extraAbilityModifier1 = <HTMLSelectElement>document.querySelector('#extraAbilityModifier1');

export const extraAbilityModifier2 = <HTMLSelectElement>document.querySelector('#extraAbilityModifier2');

export const extraAbilityModifierHelp = <HTMLElement>document.querySelector('#extraAbilityModifierHelp');
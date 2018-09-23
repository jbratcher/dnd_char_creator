////////////////////////////////////////
// Imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';
import { Classes, Races, Levels, Languages, Abilities, CharacterClassesList } from './info.js';

////////////////////////////////////////
// Utility functions
////////////////////////////////////////

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomBoolean = () => Math.random() >= 0.5;  // Get a random true or false value

const rollAbilityScore = () => randomIntFromRange(3,18);

const setToMinMax = score => score > 18 ? 18 : score < 3 ? 3 : score;

const singleWord = /(\w+)/;  // capture a single word (i.e. 'strength')

// Initialize variables

let sign: string;

let modifier: number;

let totalMod: number;

let abilityScore: number;

let abilityScoreMod: number;

let proficiencyBonus: number;

let option = document.createElement("option");

////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////

const setScore = (abilityScorePreview) => {
  let score: number = rollAbilityScore();
  setToMinMax(score);
  abilityScorePreview.textContent = String(score);
}

const getCharacterImage = (genderedImages) => {
  let randomIndex: number = randomIntFromRange(0, (genderedImages.length-1));
  return genderedImages[randomIndex];
}

// Get Character Attributes to set preview image

const getCharacterAttributes = (charCls, charRace, charGender) => {
  if(charGender !== 'male' && charGender !== "female") {
    let gender = randomBoolean();
    gender ? charGender = "male" : charGender = "female";
  }
  return characterImages[charRace][charCls][charGender];
}

// Set modifier to ability score modifier value

const getAbilityScoreModifier = abilityScore => modifier = Math.floor((abilityScore / 2) - 5);

// Append sign to value

const appendSigntoValue = (value, node) => {
  value > 0 ? sign = "+" : sign = "-";
  value = Math.abs(value);
  node.textContent = `${sign} ${value}`;
}

// set ability modifier to element helper

// const setAbilityModifierToElement = (ability, modFunction, elementAndMethod) => {
//   let modifier = modFunction;
//   elementAndMethod = modifier;
// }

////////////////////////////////////////
// Declare big 6 attributes
////////////////////////////////////////

const rollStrength = document.querySelector('#rollStrength');
const rolledStrength = document.querySelector('#rolledStrength');

const rollDexerity = document.querySelector('#rollDexerity');
const rolledDexerity = document.querySelector('#rolledDexerity');

const rollConstitution = document.querySelector('#rollConstitution');
const rolledConstitition = document.querySelector('#rolledConstitition');

const rollIntelligence = document.querySelector('#rollIntelligence');
const rolledIntelligence = document.querySelector('#rolledIntelligence');

const rollWisdom = document.querySelector('#rollWisdom');
const rolledWisdom = document.querySelector('#rolledWisdom');

const rollCharisma = document.querySelector('#rollCharisma');
const rolledCharisma = document.querySelector('#rolledCharisma');

// Event listeners for rolling each attribute

rollStrength.addEventListener('click', () => setScore(rolledStrength));

rollDexerity.addEventListener('click', () => setScore(rolledDexerity));

rollConstitution.addEventListener('click', () => setScore(rolledConstitition));

rollWisdom.addEventListener('click', () => setScore(rolledWisdom));

rollIntelligence.addEventListener('click', () => setScore(rolledIntelligence));

rollCharisma.addEventListener('click', () => setScore(rolledCharisma));

// Setters for ability scores

let strength = rolledStrength.textContent;

let dexerity = rolledDexerity.textContent;

let constitution = rolledConstitition.textContent;

let intelligence = rolledIntelligence.textContent;

let wisdom = rolledWisdom.textContent;

let charisma = rolledCharisma.textContent;

////////////////////////////////////////////////////////////
// Get character info input elements
////////////////////////////////////////////////////////////

// General Info

const name = <HTMLInputElement>document.querySelector('#name');

const race = <HTMLSelectElement>document.querySelector('#race');

const alignment = <HTMLSelectElement>document.querySelector('#alignment');

const cls = <HTMLSelectElement>document.querySelector('#cls');

const addClasses = () => {
  
  CharacterClassesList.map(characterCls => {
    
    let option = document.createElement("option");
    option.textContent = characterCls;
    cls.appendChild(option);
    
  })
  
}

addClasses();

const gender = <HTMLInputElement>document.querySelector('#gender');

let selectedAlignment = alignment.options[alignment.selectedIndex];

let selectedCls = cls.options[cls.selectedIndex];

let charCls = selectedCls.textContent.toLowerCase();

let selectedRace = race.options[race.selectedIndex];

let charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");

let charGender = gender.value.toLowerCase();

const age = <HTMLInputElement>document.querySelector('#age');

const ageHelp = <HTMLElement>document.querySelector('#ageHelp');

// Displays race specific age help text on race selection

const ageHelpText = () => {
  
  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");
  ageHelp.textContent = `Please enter an age between ${Races[charRace].age.min} and  ${Races[charRace].age.max}`
  
}

race.addEventListener('change', ageHelpText);

// Iniialize help text on page load

ageHelpText();

// Display extra language field if race selection is human and add language options

const extraLanguageField = <HTMLElement>document.querySelector('#extraLanguageField');

const extraLanguage = <HTMLSelectElement>document.querySelector('#extraLanguage');

const extraLanguageHelp = <HTMLElement>document.querySelector('#extraLanguageHelp');

const addLanguages = () => {
  
  Languages.standard.map(lang => {
    
    let languageElement = document.createElement("option");
    languageElement.textContent = lang;
    extraLanguage.appendChild(languageElement);
    
  })
  
}

addLanguages();

const showExtraLanguageInput = () => {
  
  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");
  
  charRace === 'human' ? extraLanguageField.classList.remove('d-none') : extraLanguageField.classList.add('d-none');
  
  charRace === 'human' ? extraLanguageHelp.textContent = 'Humans get to choose 1 extra language' : extraLanguageHelp.textContent = '';
  
}

race.addEventListener('change', showExtraLanguageInput);

showExtraLanguageInput();

// Skill select

const skill1 = <HTMLSelectElement>document.querySelector('#skillsSelect1');

let skill1list = skill1.children;

const skill2 = <HTMLSelectElement>document.querySelector('#skillsSelect2');

let skill2list = skill2.children;

const skill3 = <HTMLSelectElement>document.querySelector('#skillsSelect3');

let skill3list = skill3.children;

////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////

// Level and experience section

const currentLevel = <HTMLElement>document.querySelector('#currentLevel')

const currentExperience = <HTMLElement>document.querySelector('#currentExperience');

const experienceNextLevel = <HTMLElement>document.querySelector('#experienceNextLevel');

const addNewExperienceInput = <HTMLInputElement>document.querySelector('#addNewExperience');

////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////

// General Preview variables

const namePreview = document.querySelector('#namePreview');

const racePreview = <HTMLElement>document.querySelector('#racePreview');

const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');

const agePreview = <HTMLElement>document.querySelector('#agePreview');

const clsPreview = <HTMLElement>document.querySelector('#clsPreview');

const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');

const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

const proficiencyBonusPreview = <HTMLElement>document.querySelector('#proficiencyBonusPreview');

const languagesPreview = <HTMLElement>document.querySelector('#languagesPreview')

// General buttons

const createCharacterButton = document.querySelector('#createCharacterButton');

const levelUpButton = document.querySelector('#levelUpButton');

const addNewExperienceButton = document.querySelector('#addExp');

// General functions

const charImageSet = () => {
  let characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
  characterImg.src = getCharacterImage(characterAttributes);
}

const charLevelUp = () => {
  currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
  experienceNextLevel.textContent = String(Levels[Number(currentLevel.textContent)-1].experience);
  updateProficiencyBonus();
}

const addHitPoints = () => {
  let currentHitPoints = Number(hitPointPreview.textContent);
  let rolledHitPoints = randomIntFromRange(1, Classes[charCls].hitdie)
  modifier = getAbilityScoreModifier(constitution)
  let hitPointsToAdd = (rolledHitPoints + modifier);
  // Prevent negative or zero hit points on level up
  if(rolledHitPoints + modifier <= 0) {
    hitPointsToAdd = 1;
  }
  hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
}

const updateProficiencyBonus = () => {
  proficiencyBonus = Levels[currentLevel.textContent].bonus;
  proficiencyBonusPreview.textContent = String(Levels[currentLevel.textContent].bonus);
  appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
}

const addExp = () => {
    let currentExpNum = Number(currentExperience.textContent);
    let newExpNum = Number(addNewExperienceInput.value)
    currentExperience.textContent = String(currentExpNum + newExpNum);
}

const generalInfo = () => {
  
  // Get current state of info required to create character
  
  selectedCls = cls.options[cls.selectedIndex];

  charCls = selectedCls.textContent.toLowerCase();

  selectedRace = race.options[race.selectedIndex];
  
  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");

  strength = rolledStrength.textContent;

  dexerity = rolledDexerity.textContent;

  constitution = rolledConstitition.textContent;

  intelligence = rolledIntelligence.textContent;

  wisdom = rolledWisdom.textContent;

  charisma = rolledCharisma.textContent;

  selectedAlignment = alignment.options[alignment.selectedIndex];

  charGender = gender.value.toLowerCase();
  
  languagesPreview.textContent = Races[charRace].languages.map(lang => lang).join(", ") + `, ${String(extraLanguage.value)}`;

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
  
}

////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////

// Ability score variables

let abilityScoreList = document.querySelector('#abilityScoreList');

let abilityScoreListItems = abilityScoreList.children;

const strengthPreview = <HTMLElement>document.querySelector('#strengthPreview');

const dexerityPreview = <HTMLElement>document.querySelector('#dexerityPreview');

const constitutionPreview = <HTMLElement>document.querySelector('#constitutionPreview');

const wisdomPreview = <HTMLElement>document.querySelector('#wisdomPreview');

const intelligencePreview = <HTMLElement>document.querySelector('#intelligencePreview');

const charismaPreview = <HTMLElement>document.querySelector('#charismaPreview');

const extraAbilityModifier = <HTMLElement>document.querySelector('#extraAbilityModifier');

const extraAbilityModifier1 = <HTMLSelectElement>document.querySelector('#extraAbilityModifier1');

const extraAbilityModifier2 = <HTMLSelectElement>document.querySelector('#extraAbilityModifier2');

const extraAbilityModifierHelp = <HTMLElement>document.querySelector('#extraAbilityModifierHelp');

// Ability Score functions

const lookupAbilityScore = (ability) => {

  // if ability matches abilityScore in list return number value of abilityScore
  for(let i = 0; i < abilityScoreListItems.length; i++) {
    let string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    if(string.toLowerCase() === ability) {
      abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
      return abilityScore;
    }
  }
  
}

const racialAbilityModifier = () => {
  
  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");
  let racialAbility = Races[charRace].abilityModifier.ability;
  let racialAbilityMod = Races[charRace].abilityModifier.modifier;
  
  // if ability matches abilityPreview node text, add modifier to score
  for(let i = 0; i < abilityScoreListItems.length; i++) {
    let string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    if(string.toLowerCase() === racialAbility) {
      let abilityScore = abilityScoreListItems[i].childNodes[3].textContent;
      abilityScoreListItems[i].childNodes[3].textContent = String(Number(abilityScore) + Number(racialAbilityMod));
    }
  }
  
  // if race has extra ability to modify
  if(Races[charRace].abilityModifier.extraAbility) {
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      if(string.toLowerCase() === Races[charRace].abilityModifier.extraAbility) {
        let abilityScore = abilityScoreListItems[i].childNodes[3].textContent;
        abilityScoreListItems[i].childNodes[3].textContent = String(Number(abilityScore) + Number(Races[charRace].abilityModifier.extraModifier));
      }
    }

  }

}

const extraAbiliyMods = () => {
  
  Abilities.map(ability => {
    
    let abilityElement1 = document.createElement("option");
    let abilityElement2 = document.createElement("option");
    abilityElement1.textContent = ability;
    abilityElement2.textContent = ability;
    extraAbilityModifier1.appendChild(abilityElement1);
    extraAbilityModifier2.appendChild(abilityElement2);
    
  })
  
}

extraAbiliyMods();

// Display extra ability modifier field if race is Half-Elf

const showExtraModifiersInput = () => {
  
  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");
  
  charRace === 'halfelf' ? extraAbilityModifier.classList.remove('d-none') : extraAbilityModifier.classList.add('d-none');
  
  charRace === 'halfelf' ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1' : extraAbilityModifierHelp.textContent = '';
  
}

race.addEventListener('change', showExtraModifiersInput);

// Hide first selection in 2nd select list

const hideMod1Selection = () => {
  
  let firstSelection = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
  
  extraAbilityModifier2.innerHTML = "";
  
  Abilities.map(ability => {
    if(ability !== firstSelection) {
      let abilityElement2 = document.createElement("option");
      abilityElement2.textContent = ability;
      extraAbilityModifier2.appendChild(abilityElement2);
    }
  })
  
}

extraAbilityModifier1.addEventListener('change', hideMod1Selection)

// if extra ability score is selected add +1 to ability score preview

const addExtraAbilityMofifiers = () => {
  
  if(charRace === 'halfelf') {
    
    // get selected abilities
    let mod1 = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
    let mod2 = extraAbilityModifier2.options[extraAbilityModifier2.selectedIndex].textContent;
    // get selected abilities preview element
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      if(string === mod1 || string === mod2) {
        let abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
        abilityScore += 1;
        abilityScoreListItems[i].childNodes[3].textContent = String(abilityScore);
      }
    }
    
  }

}

////////////////////////////////////////////////////////////
// Skills
////////////////////////////////////////////////////////////

// Skill variables

let availableSkills = Classes[charCls].availableSkills;

let selectedSkill1 = skill1.options[skill1.selectedIndex];

let selectedSkill2 = skill1.options[skill2.selectedIndex];

let selectedSkill3 = skill1.options[skill3.selectedIndex];

const skillsPreviewList = document.querySelector('#skillsPreviewList');

const skillsPreviewListItems = skillsPreviewList.children;

// Skill functions

const getSkillModifier = skillText => {

  let skillAbility = (singleWord.exec(skillText));
  let skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());
  abilityScoreMod = getAbilityScoreModifier(skillAbilityScore);
  return totalMod = abilityScoreMod + proficiencyBonus;

};

const highlightSkills = () => {
  // Get current values of required info
  selectedSkill1 = skill1.options[skill1.selectedIndex];
  selectedSkill2 = skill1.options[skill2.selectedIndex];
  selectedSkill3 = skill1.options[skill3.selectedIndex];
  updateProficiencyBonus();
  // if selected skills match text of selected skill in preview section, highlight in green and append modifier, otherwise dim and remove modifier if present
  for(let i = 0; i < skillsPreviewListItems.length; i++) {
    // reset modifier node to '-'
    skillsPreviewListItems[i].childNodes[5].textContent = "-";
    if(
      (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill1.textContent.trim()
      || (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill2.textContent.trim()
      || (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill3.textContent.trim()
      ) {
        (<HTMLElement>skillsPreviewListItems[i]).style.color = 'green';
        getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
        appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
    } else {
      // if no match dim selection
      (<HTMLElement>skillsPreviewListItems[i]).style.color = '#ccc';
    }
  }
}

// TODO: refactor this monstrosity from 3 loops to 1

const highlightAvailableSkills = () => {

  availableSkills = Classes[charCls].availableSkills;

  for(let i = 0; i < skill1list.length; i++) {
    (<HTMLSelectElement>skill1list[i]).style.display = 'none';
  }

  for(let i = 0; i < skill2list.length; i++) {
    (<HTMLSelectElement>skill2list[i]).style.display = 'none';
  }

  for(let i = 0; i < skill3list.length; i++) {
    (<HTMLSelectElement>skill3list[i]).style.display = 'none';
  }

    for(let i = 0; i < skill1list.length; i++) {

      availableSkills.forEach(skill => {

        if(String(skill1list[i].textContent) === skill) {
            (<HTMLSelectElement>skill1list[i]).style.display = 'block';
            (<HTMLSelectElement>skill1list[i]).style.color = 'black';
        }

      })

    }

    for(let i = 0; i < skill2list.length; i++) {

      availableSkills.forEach(skill => {

        if(String(skill2list[i].textContent) === skill) {
            (<HTMLSelectElement>skill2list[i]).style.display = 'block';
            (<HTMLSelectElement>skill2list[i]).style.color = 'black';
        }

      })

    }

    for(let i = 0; i < skill3list.length; i++) {

      availableSkills.forEach(skill => {

        if(String(skill3list[i].textContent) === skill) {
            (<HTMLSelectElement>skill3list[i]).style.display = 'block';
            (<HTMLSelectElement>skill3list[i]).style.color = 'black';
        }

      })

    }

}

// dynamically change available skills based on character class

cls.addEventListener('change', () => {

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

const hitPointPreview = <HTMLElement>document.querySelector('#hitPoints');

const armorClassPreview = <HTMLElement>document.querySelector('#armorClass');

const initiativeModPreview = <HTMLElement>document.querySelector('#initiative');

const speedPreview = <HTMLElement>document.querySelector('#speed');

const passivePerceptionPreview = <HTMLElement>document.querySelector('#passivePerception');

const darkvisionPreview = <HTMLElement>document.querySelector('#darkvisionPreview');

const sizePreview = <HTMLElement>document.querySelector('#size');

// Combat functions

const hitPoints = () => {
  // 1st level is max hit points + constiution modifier
  let modifier: number = getAbilityScoreModifier(Number(constitution))
  let hitpoints: number = (Classes[charCls].hitdie + modifier);
  hitPointPreview.textContent = String(hitpoints);
}

const armorClass = () => {
  let base: number = 10;
  let dexMod: number = getAbilityScoreModifier(Number(dexerity))
  let armorMod: number = 0;
  let ac = String(base + dexMod + armorMod);
  armorClassPreview.textContent = ac;
}

const initiativeMod = () => {
  let dexMod: number = getAbilityScoreModifier(Number(dexerity))
  initiativeModPreview.textContent = String(dexMod);
}

const baseSpeed = () => speedPreview.textContent = Races[charRace].speed;

const passivePerception = () => passivePerceptionPreview.textContent = String(10 + getAbilityScoreModifier(wisdom));

const darkvision = () => {
  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");
  if (Races[charRace].darkvision) {
    darkvisionPreview.textContent = '60 ft.'
  } else {
    darkvisionPreview.textContent = 'None'
  }
}

const charSize = () => sizePreview.textContent = Races[charRace].size;

const combatCreation = () => {

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

  charSize();

}

////////////////////////////////////////////////////////////
// Character Creation
////////////////////////////////////////////////////////////

createCharacterButton.addEventListener('click', e => {

  e.preventDefault();

  // Character Creation functions
  
  generalInfo();  // General tab functions
  
  addExtraAbilityMofifiers();  // Half-Elf racial bonus

  combatCreation();  // Combat tab functions

});

// Level advancement button submit

levelUpButton.addEventListener('click', e => {

  e.preventDefault();

  // Get level up variables

  constitution = rolledConstitition.textContent;
  selectedCls = cls.options[cls.selectedIndex];
  charCls = selectedCls.textContent.toLowerCase();

  if(currentLevel.textContent === "20") {
    return;
  }

  charLevelUp();

  addHitPoints();

  highlightSkills();

});

addNewExperienceButton.addEventListener('click', e => {

  e.preventDefault();

  addExp();

  addNewExperienceInput.value = null;

});

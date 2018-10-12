////////////////////////////////////////
// Imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';
import {
  Abilities,
  Alignments,
  ClassList,
  ClassProps,
  Levels,
  Languages,
  Races,
  RaceList,
  Skills
} from './info.js';

////////////////////////////////////////
// Utility functions
////////////////////////////////////////

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomBoolean = () => Math.random() >= 0.5;  // Get a random true or false value

const rollAbilityScore = () => randomIntFromRange(3,18);

const setToMinMax = score => score > 18
                              ? 18
                              : score < 3
                                ? 3
                                : score;

const singleWord = /(\w+)/;  // capture a single word (i.e. 'strength')

// Initialize variables

let sign: string;

let modifier: number;

let totalMod: number;

let abilityScore: number;

let abilityScoreMod: number;

let proficiencyBonus: number;

////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////

const addOptionstoSelect = (selectElement, dataArray) => {

  dataArray.map(optionText => {
    let optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.textContent = optionText;
    selectElement.appendChild(optionElement);
  })
}

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
    let gender: boolean = randomBoolean();
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

////////////////////////////////////////
// Declare big 6 attributes
////////////////////////////////////////

const rollStrength: HTMLElement = document.querySelector('#rollStrength');
const rolledStrength: HTMLElement = document.querySelector('#rolledStrength');

const rollDexerity: HTMLElement = document.querySelector('#rollDexerity');
const rolledDexerity: HTMLElement = document.querySelector('#rolledDexerity');

const rollConstitution: HTMLElement = document.querySelector('#rollConstitution');
const rolledConstitition: HTMLElement = document.querySelector('#rolledConstitition');

const rollIntelligence: HTMLElement = document.querySelector('#rollIntelligence');
const rolledIntelligence: HTMLElement = document.querySelector('#rolledIntelligence');

const rollWisdom: HTMLElement = document.querySelector('#rollWisdom');
const rolledWisdom: HTMLElement = document.querySelector('#rolledWisdom');

const rollCharisma: HTMLElement = document.querySelector('#rollCharisma');
const rolledCharisma: HTMLElement = document.querySelector('#rolledCharisma');

// Event listeners for rolling each attribute

rollStrength.addEventListener('click', () => setScore(rolledStrength));

rollDexerity.addEventListener('click', () => setScore(rolledDexerity));

rollConstitution.addEventListener('click', () => setScore(rolledConstitition));

rollWisdom.addEventListener('click', () => setScore(rolledWisdom));

rollIntelligence.addEventListener('click', () => setScore(rolledIntelligence));

rollCharisma.addEventListener('click', () => setScore(rolledCharisma));

// Setters for ability scores

let strength: string = rolledStrength.textContent;

let dexerity: string = rolledDexerity.textContent;

let constitution: string = rolledConstitition.textContent;

let intelligence: string = rolledIntelligence.textContent;

let wisdom: string = rolledWisdom.textContent;

let charisma: string = rolledCharisma.textContent;

////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////

// General Info

const name = <HTMLInputElement>document.querySelector('#name');

const race = <HTMLSelectElement>document.querySelector('#race');

addOptionstoSelect(race, RaceList);

const cls = <HTMLSelectElement>document.querySelector('#cls');

addOptionstoSelect(cls, ClassList);

const alignment = <HTMLSelectElement>document.querySelector('#alignment');

addOptionstoSelect(alignment, Alignments)

let selectedAlignment = <HTMLOptionElement>alignment.options[alignment.selectedIndex];

const availableAlignments = () => {

  alignment.innerHTML = '';
  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");
  addOptionstoSelect(alignment, Races[charRace].alignments);

}

race.addEventListener('change', availableAlignments);

const gender = <HTMLInputElement>document.querySelector('#gender');

let selectedCls = <HTMLOptionElement>cls.options[cls.selectedIndex];

let charCls: string = selectedCls.textContent.toLowerCase();

let selectedRace = <HTMLOptionElement>race.options[race.selectedIndex];

let charRace: string = selectedRace.textContent.toLowerCase().replace(/-/g,"");

const subraceSelectSection = <HTMLElement>document.querySelector('#optionalSubrace');

const subrace = <HTMLSelectElement>document.querySelector('#subrace');

const subraceHelp = <HTMLElement>document.querySelector('#subraceHelp');

let charSubrace: string = subrace.textContent.toLowerCase().replace(/s/g,"");

// Subrace select

const showOptionalSubraceSelect = () => {

  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");

  subrace.innerHTML = "-"  // Reset any subrace from previous selection

  Races[charRace].subrace
    ? (
      addOptionstoSelect(subrace, ["-"]),  // Make first option "null"
      addOptionstoSelect(subrace, Races[charRace].subrace.name)
      )
    : subraceSelectSection.classList.add('d-none')

  Races[charRace].subrace
    ? subraceSelectSection.classList.remove('d-none')
    : subraceSelectSection.classList.add('d-none')

}

race.addEventListener('change', showOptionalSubraceSelect);

let charGender: string = gender.value.toLowerCase();

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

// Display extra language field if race selection is human or halfelf and add language options

const extraLanguageField = <HTMLElement>document.querySelector('#extraLanguageField');

const extraLanguage = <HTMLSelectElement>document.querySelector('#extraLanguage');

const extraLanguageHelp = <HTMLElement>document.querySelector('#extraLanguageHelp');

addOptionstoSelect(extraLanguage, Languages.standard);

const showExtraLanguageInput = () => {

  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");

  charRace === 'human'
    ? extraLanguageField.classList.remove('d-none')
    : charRace === 'halfelf'
      ? extraLanguageField.classList.remove('d-none')
      : extraLanguageField.classList.add('d-none')

  charRace === 'human'
    ? extraLanguageHelp.textContent = 'Humans get to choose 1 extra language'
    : charRace === 'halfelf'
      ? extraLanguageHelp.textContent = 'Half-Elves get to choose 1 extra language'
      : extraLanguageHelp.textContent = ''

}

race.addEventListener('change', showExtraLanguageInput);

const racialBonuses = () => {

    addHalfElfAbilityMofifiers();  // Half-Elf racial ability score bonus (Any 2 plus Charisma)

}

showExtraLanguageInput();

// Skill select

const skill1 = <HTMLSelectElement>document.querySelector('#skillsSelect1');

addOptionstoSelect(skill1, Skills);

let skill1list = skill1.children;

const skill2 = <HTMLSelectElement>document.querySelector('#skillsSelect2');

addOptionstoSelect(skill2, Skills);

let skill2list = skill2.children;

const skill3 = <HTMLSelectElement>document.querySelector('#skillsSelect3');

addOptionstoSelect(skill3, Skills);

let skill3list = skill3.children;

let availableSkills = ClassProps[charCls].availableSkills;

let selectedSkill1 = skill1.options[skill1.selectedIndex];

let selectedSkill2 = skill1.options[skill2.selectedIndex];

let selectedSkill3 = skill1.options[skill3.selectedIndex];

// Skill functions

const highlightAvailableSkills = () => {

  availableSkills = ClassProps[charCls].availableSkills;

  skill1.innerHTML = "";
  skill2.innerHTML = "";
  skill3.innerHTML = "";

  addOptionstoSelect(skill1, availableSkills);
  addOptionstoSelect(skill2, availableSkills);
  addOptionstoSelect(skill3, availableSkills);

}

// dynamically change available skills based on character class

cls.addEventListener('change', () => {

  charCls = cls.options[cls.selectedIndex].text.toLowerCase();
  highlightAvailableSkills();

});

// Initialize state for selected class on document load

highlightAvailableSkills();

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

const namePreview = <HTMLElement>document.querySelector('#namePreview');

const racePreview = <HTMLElement>document.querySelector('#racePreview');

const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');

const agePreview = <HTMLElement>document.querySelector('#agePreview');

const clsPreview = <HTMLElement>document.querySelector('#clsPreview');

const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');

const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

const proficiencyBonusPreview = <HTMLElement>document.querySelector('#proficiencyBonusPreview');

const languagesPreview = <HTMLElement>document.querySelector('#languagesPreview')

// General buttons

const createCharacterButton = <HTMLElement>document.querySelector('#createCharacterButton');

const levelUpButton = <HTMLElement>document.querySelector('#levelUpButton');

const addNewExperienceButton = <HTMLElement>document.querySelector('#addExp');

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
  let currentHitPoints: number = Number(hitPointPreview.textContent);
  let rolledHitPoints: number = randomIntFromRange(1, ClassProps[charCls].hitdie)
  modifier = getAbilityScoreModifier(constitution)
  let hitPointsToAdd: number = (rolledHitPoints + modifier);
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
    let currentExpNum: number = Number(currentExperience.textContent);
    let newExpNum: number = Number(addNewExperienceInput.value)
    currentExperience.textContent = String(currentExpNum + newExpNum);
}

const generalInfo = () => {

  strength = null;

  dexerity = null;

  constitution = null;

  intelligence = null;

  wisdom = null;

  charisma = null;

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

let abilityScoreList = <HTMLElement>document.querySelector('#abilityScoreList');

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
    let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    if(string.toLowerCase() === ability) {
      abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
      return abilityScore;
    }
  }

}

const subraceAbilityModifier = () => {

  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");

  if(Races[charRace].subrace) {

    let subraceAbility: string = Races[charRace].subrace.ability;
    let subraceAbilityMod: number = Races[charRace].subrace.modifier;

    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let abilityText: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      let abilityScorePreview = abilityScoreListItems[i].childNodes[3]
      let abilityScore: number = Number(abilityScoreListItems[i].childNodes[3].textContent);

      if(abilityText.toLowerCase() === subraceAbility) {
         abilityScorePreview.textContent = String(abilityScore + subraceAbilityMod);

      }

    }

  }

}

const racialAbilityModifier = () => {

  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");
  let racialAbility: string = Races[charRace].abilityModifier.ability;
  let racialAbilityMod: number = Races[charRace].abilityModifier.modifier;


  // if ability matches abilityPreview node text, add modifier to score
  for(let i = 0; i < abilityScoreListItems.length; i++) {
    let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    let abilityScorePreview = abilityScoreListItems[i].childNodes[3]
    let abilityScore: number = Number(abilityScoreListItems[i].childNodes[3].textContent);

    if(string.toLowerCase() === racialAbility) {
       abilityScorePreview.textContent = String(abilityScore + racialAbilityMod);
    }

  }

  // if race has extra ability to modify
  if(Races[charRace].abilityModifier.extraAbility) {
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      let abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent
      if(string.toLowerCase() === Races[charRace].abilityModifier.extraAbility) {
        let abilityScore: number = Number(abilityScorePreview);
         abilityScorePreview = String(abilityScore + Races[charRace].abilityModifier.extraModifier);
      }
    }

  }

}

// Add ability options to extra ability select element

addOptionstoSelect(extraAbilityModifier1, Abilities);
addOptionstoSelect(extraAbilityModifier2, Abilities);

// Display extra ability modifier field if race is Half-Elf

const showExtraModifiersInput = () => {

  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");

  charRace === 'halfelf'
    ? extraAbilityModifier.classList.remove('d-none')
    : extraAbilityModifier.classList.add('d-none');

  charRace === 'halfelf'
    ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1'
    : extraAbilityModifierHelp.textContent = '';

}

race.addEventListener('change', showExtraModifiersInput);

// Hide first selection in 2nd select list

const hideMod1Selection = () => {

  let firstSelection: string = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;

  extraAbilityModifier2.innerHTML = "";

  Abilities.map(ability => {
    if(ability !== firstSelection) {
      let abilityElement2 = <HTMLOptionElement>document.createElement("option");
      abilityElement2.textContent = ability;
      extraAbilityModifier2.appendChild(abilityElement2);
    }
  })

}

extraAbilityModifier1.addEventListener('change', hideMod1Selection)

// if extra ability score is selected add +1 to ability score preview

const addHalfElfAbilityMofifiers = () => {

  if(charRace === 'halfelf') {
    // get selected abilities
    let mod1: string = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
    let mod2: string = extraAbilityModifier2.options[extraAbilityModifier2.selectedIndex].textContent;
    // get selected abilities preview element
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent
      let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      if(string === mod1 || string === mod2) {
        let abilityScore: number = Number(abilityScorePreview);
        abilityScore += 1;
        abilityScorePreview = String(abilityScore);
        console.log(abilityScorePreview);
      }
    }
  }

}

////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////

// Skill variables

const skillsPreviewList = <HTMLElement>document.querySelector('#skillsPreviewList');

const skillsPreviewListItems = skillsPreviewList.children;

const additionalSKillsPreviewList = <HTMLElement>document.querySelector('#additionalSKillsPreviewList');

const additionalSkillsPreviewListItems = additionalSKillsPreviewList.children;

const stonecunningPreview = <HTMLElement>document.querySelector('#stonecunningPreview');

// Skill functions

const getSkillModifier = skillText => {

  let skillAbility = (singleWord.exec(skillText));
  let skillAbilityScore: number = lookupAbilityScore(skillAbility[0].toLowerCase());
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
    let skill = <HTMLElement>skillsPreviewListItems[i];
    let skillName = <HTMLElement>skillsPreviewListItems[i].childNodes[1];
    let skillText = skillsPreviewListItems[i].childNodes[1].textContent;
    // reset modifier node to '-'
    skillsPreviewListItems[i].childNodes[5].textContent = "-";
    if(
      skillText === selectedSkill1.textContent.trim()
      || skillText === selectedSkill2.textContent.trim()
      || skillText === selectedSkill3.textContent.trim()
    ) {
      skill.style.color = 'green';
      getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent);
      appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
    } else {
      // if no match dim selection
      skill.style.color = '#ccc';
    }
  }
}

const highlightRacialSKills = () => {

  charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");

  Races[charRace].special 
    ? Races[charRace].special.stonecunning
      ? (
        stonecunningPreview.parentElement.classList.remove('d-none'),
        stonecunningPreview.parentElement.classList.add('d-flex'),
        stonecunningPreview.setAttribute('title', Races[charRace].special.stonecunning.info),
        stonecunningPreview.textContent = "Stonework (Int, Hist)"
        )
      : stonecunningPreview.parentElement.classList.add('d-none')
    : stonecunningPreview.parentElement.classList.add('d-none')

}

// Skills combined function call

const skillCreation = () => {

  updateProficiencyBonus();

  // Highlight selected skills and append skill modifier

  highlightSkills();

  highlightRacialSKills();

}

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

const weaponProficiencesPreview = <HTMLElement>document.querySelector('#weaponProficiences');

// Combat functions

const hitPoints = () => {
  // 1st level is max hit points + constiution modifier
  let modifier: number = getAbilityScoreModifier(Number(constitution))
  let hitpoints: number = (ClassProps[charCls].hitdie + modifier);
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

const setCharacterSize = () => sizePreview.textContent = Races[charRace].size;

const calculateWeaponProficiencies = () => {

  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");

  if(charRace === 'dwarf') {

    Races[charRace].weaponProficiences.map(weapon => {

      weaponProficiencesPreview.textContent += weapon + ", ";

    })

  }

}

// Saving throws

const savingThrowList = <HTMLElement>document.querySelector('#savingThrowPreviewList');
const savingThrowListItems = savingThrowList.children;

// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)

const calculateSavingThrowMods = () => {

  charCls = selectedCls.textContent.toLowerCase();
  let abilities = ClassProps[charCls].savingThrows;

  abilities.map(ability => {
    // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
    for(let i = 0; i < savingThrowListItems.length; i++) {
      let string: string = (singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
      if(string === ability) {
        let abilityMod: number = getAbilityScoreModifier(lookupAbilityScore(ability));
        let totalMod: number = Number(abilityMod + proficiencyBonus);
        appendSigntoValue(totalMod, savingThrowListItems[i].childNodes[3]);
      }
    }
  });

}

// Special Resistances

const specialResistances = <HTMLElement>document.querySelector('#specialResistances');

const poisonResistance = <HTMLElement>document.querySelector('#poisonResistance');

const charmResistance = <HTMLElement>document.querySelector('#charmResistance');

const fearResistance = <HTMLElement>document.querySelector('#fearResistance');

const calculateSpecialResistances = () => {

  charRace = String(race.options[race.selectedIndex].textContent).toLowerCase().replace(/-/g,"");

  if(charRace === 'dwarf') {

    poisonResistance.textContent = `Advantage, Resistance`;
    poisonResistance.setAttribute('title', Races[charRace].special.resilience.info);

  }

  if(charRace === 'elf' || charRace === 'halfelf') {

    charmResistance.textContent = 'Advantage';
    charmResistance.setAttribute('title', Races[charRace].special.feyAncestry.info);

  }

  if(charRace === 'gnome') {

    let types = Races[charRace].special.gnomeCunning.type

    types.map(type => {
    // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
    for(let i = 0; i < savingThrowListItems.length; i++) {
      let string: string = (singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
      if(string === type) {
        savingThrowListItems[i].childNodes[1].textContent += ` (Advantage)`;
      }
    }
  });

  }

  if(charRace === 'halfling') {

    fearResistance.textContent = 'Advantage';
    fearResistance.setAttribute('title', Races[charRace].special.brave.info);

  }

}


const combatCreation = () => {

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

  subraceAbilityModifier();

  // Set the character size

  setCharacterSize();

  calculateSavingThrowMods();

  calculateSpecialResistances();

  calculateWeaponProficiencies();

}

////////////////////////////////////////////////////////////
// Character Creation
////////////////////////////////////////////////////////////

createCharacterButton.addEventListener('click', e => {

  e.preventDefault();

  // Character Creation functions

  generalInfo();  // General tab functions

  racialBonuses();  // Race bonus functions

  skillCreation(); // SKill tab functions

  combatCreation();  // Combat tab functions

});

////////////////////////////////////////////////////////////
// Preview Functions
////////////////////////////////////////////////////////////

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

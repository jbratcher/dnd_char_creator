////////////////////////////////////////
// imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';
import { Classes, Races, Levels } from './info.js';

////////////////////////////////////////
// Utility functions
////////////////////////////////////////

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomBoolean = () => Math.random() >= 0.5;  // Get a true or false value

const rollAbilityScore = () => Math.floor(Math.random() * ((18 - 3) + 1)) + 3;

const setToMinMax = score => score > 18 ? 18 : score < 3 ? 3 : score;

const singleWord = /(\w+)/;

////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////

const setScore = (scoreDisplay) => {
  let score = rollAbilityScore();
  setToMinMax(score);
  scoreDisplay.textContent = score.toString();
}

const getCharacterImage = (genderedImages) => {
  let randomIndex = randomIntFromRange(0, (genderedImages.length-1));
  return genderedImages[randomIndex];
}

// Get Character Attributes to set preview image
// TODO: use attributes to set other output

const getCharacterAttributes = (charCls, charRace, charGender) => {
  if(charGender !== 'male' && charGender !== "female") {
    let gender = randomBoolean();
    if(gender) {
      charGender = "male";
    } else if(!gender) {
      charGender = "female";
    }
  }
  return characterImages[charRace][charCls][charGender];
}

const getAbilityScoreModifier = (abilityScore) => {

  let mod = 0;
  mod = Math.floor((abilityScore / 2) - 5)

  return mod;

}

// Append sign to value

const appendSigntoValue = (value, node) => {
  let sign;
  if(value > 0) {
    sign = "+";
  } else if(value < 0) {
    sign = "-";
  } else {
    sign = "";
  }
  value = Math.abs(value);
  node.textContent = `${sign} ${value}`
  
}

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

rollStrength.addEventListener('click', () => {
  setScore(rolledStrength);
});

rollDexerity.addEventListener('click', () => {
  setScore(rolledDexerity);
});

rollConstitution.addEventListener('click', () => {
  setScore(rolledConstitition);
});

rollWisdom.addEventListener('click', () => {
  setScore(rolledWisdom);
});

rollIntelligence.addEventListener('click', () => {
  setScore(rolledIntelligence);
});

rollCharisma.addEventListener('click', () => {
  setScore(rolledCharisma);
});

////////////////////////////////////////////////////////////
// Get character info input elements
////////////////////////////////////////////////////////////

// General Info

const name = <HTMLInputElement>document.querySelector('#name');

const race = <HTMLSelectElement>document.querySelector('#race');

const alignment = <HTMLSelectElement>document.querySelector('#alignment');

const cls = <HTMLSelectElement>document.querySelector('#cls');

const gender = <HTMLInputElement>document.querySelector('#gender');

const age = <HTMLInputElement>document.querySelector('#age');

// Skill select

const skill1 = <HTMLSelectElement>document.querySelector('#skillsSelect1');

const skill2 = <HTMLSelectElement>document.querySelector('#skillsSelect2');

const skill3 = <HTMLSelectElement>document.querySelector('#skillsSelect3');

////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////

// Level and experience Section

const currentLevel = <HTMLElement>document.querySelector('#currentLevel')

const currentExperience = <HTMLElement>document.querySelector('#currentExperience');

const experienceNextLevel = <HTMLElement>document.querySelector('#experienceNextLevel');

const addNewExperienceInput = <HTMLInputElement>document.querySelector('#addNewExperience');

// Info section

const namePreview = document.querySelector('#namePreview');

const racePreview = <HTMLElement>document.querySelector('#racePreview');

const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');

const agePreview = <HTMLElement>document.querySelector('#agePreview');

let abilityScoreList = document.querySelector('#abilityScoreList');

let abilityScoreListItems = abilityScoreList.children;

const strengthPreview = <HTMLElement>document.querySelector('#strengthPreview');

const dexerityPreview = <HTMLElement>document.querySelector('#dexerityPreview');

const constitutionPreview = <HTMLElement>document.querySelector('#constitutionPreview');

const wisdomPreview = <HTMLElement>document.querySelector('#wisdomPreview');

const intelligencePreview = <HTMLElement>document.querySelector('#intelligencePreview');

const charismaPreview = <HTMLElement>document.querySelector('#charismaPreview');

const clsPreview = <HTMLElement>document.querySelector('#clsPreview');

const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');

const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

const proficiencyBonusPreview = <HTMLElement>document.querySelector('#proficiencyBonusPreview');

let proficiencyBonus = 0;

// Proficiencies Section

// DOM Elements

let selectedSkill1 = skill1.options[skill1.selectedIndex];

let selectedSkill2 = skill1.options[skill2.selectedIndex];
  
let selectedSkill3 = skill1.options[skill3.selectedIndex];

const skillsPreviewList = document.querySelector('#skillsPreviewList');

const skillsPreviewListItems = skillsPreviewList.children;

const acrobaticsSkill = <HTMLElement>document.querySelector('#acrobaticsSkill');

const animalHandlingsSkill = <HTMLElement>document.querySelector('#animalHandlingsSkill');

const arcanaSkill = <HTMLElement>document.querySelector('#arcanaSkill');

const athleticsSkill = <HTMLElement>document.querySelector('#athleticsSkill');

const deceptionSkill = <HTMLElement>document.querySelector('#deceptionSkill');

const historySkill = <HTMLElement>document.querySelector('#historySkill');

const intimidationSkill = <HTMLElement>document.querySelector('#intimidationSkill');

const investigationSkill = <HTMLElement>document.querySelector('#investigationSkill');

const medicineSkill = <HTMLElement>document.querySelector('#medicineSkill');

const natureSkill = <HTMLElement>document.querySelector('#natureSkill');

const perceptionSkill = <HTMLElement>document.querySelector('#perceptionSkill');

const performanceSkill = <HTMLElement>document.querySelector('#performanceSkill');

const persuasionSkill = <HTMLElement>document.querySelector('#persuasionSkill');

const religionSkill = <HTMLElement>document.querySelector('#religionSkill');

const slieghtOfHandSkill = <HTMLElement>document.querySelector('#slieghtOfHandSkill');

const stealthSkill = <HTMLElement>document.querySelector('#stealthSkill');

const survivalSkill = <HTMLElement>document.querySelector('#survivalSkill');

// Skill functions

const lookupAbilityScore = (ability) => {
  
  abilityScoreList = document.querySelector('#abilityScoreList');
  abilityScoreListItems = abilityScoreList.children;
  let abilityScore;

    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      if(string.toLowerCase() === ability) {
        let abilityScore = abilityScoreListItems[i].childNodes[3].textContent;
        return abilityScore;
      }
            
    }
  
}

const highlightSkills = () => {
  
  selectedSkill1 = skill1.options[skill1.selectedIndex];
  selectedSkill2 = skill1.options[skill2.selectedIndex];
  selectedSkill3 = skill1.options[skill3.selectedIndex];
  proficiencyBonus = Levels[currentLevel.textContent].bonus;
    
  for(let i = 0; i < skillsPreviewListItems.length; i++) {
    
    skillsPreviewListItems[i].childNodes[5].textContent = "-";

    if(
      (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill1.textContent.trim()
      || (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill2.textContent.trim()
      || (<HTMLElement>skillsPreviewListItems[i]).childNodes[1].textContent === selectedSkill3.textContent.trim()
      ) {
        (<HTMLElement>skillsPreviewListItems[i]).style.color = 'green';
        let skillAbility = (singleWord.exec(skillsPreviewListItems[i].childNodes[3].textContent));  // get ability that modifies skill
        let skillAbilityScore = lookupAbilityScore(skillAbility[0].toLowerCase());  // get ability score for that skill
        let abilityScoreMod = getAbilityScoreModifier(skillAbilityScore);
        let totalMod = abilityScoreMod + proficiencyBonus;
        appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
    } else {
      (<HTMLElement>skillsPreviewListItems[i]).style.color = '#ccc';
    }
  }
  
}

// Combat section

const hitPointPreview = <HTMLElement>document.querySelector('#hitPoints')

////////////////////////////////////////////////////////////
// The big submit button for character creation
////////////////////////////////////////////////////////////

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (e) => {

  e.preventDefault();

  // Get info to create character

  // General info

  const selectedRace = race.options[race.selectedIndex];

  const strength = rolledStrength.textContent;

  const dexerity = rolledDexerity.textContent;

  const constitution = rolledConstitition.textContent;

  const intelligence = rolledIntelligence.textContent;

  const wisdom = rolledWisdom.textContent;

  const charisma = rolledCharisma.textContent;

  const selectedAlignment = alignment.options[alignment.selectedIndex];

  const selectedCls = cls.options[cls.selectedIndex];
  
  // Skills
  
  const selectedSkill1 = skill1.options[skill1.selectedIndex];

  const selectedSkill2 = skill1.options[skill2.selectedIndex];
  
  const selectedSkill3 = skill1.options[skill3.selectedIndex];

  // Post info from character creation to preview area
  
  currentLevel.textContent = '1';
  
  experienceNextLevel.textContent = String(Levels[currentLevel.textContent].experience);
  
  proficiencyBonus = Levels[currentLevel.textContent].bonus;

  namePreview.textContent = name.value;

  racePreview.textContent = selectedRace.textContent;
  const charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");

  genderPreview.textContent = gender.value;
  const charGender = gender.value.toLowerCase();

  agePreview.textContent = age.value;

  strengthPreview.textContent = strength;

  dexerityPreview.textContent = dexerity;

  constitutionPreview.textContent = constitution;

  wisdomPreview.textContent = wisdom;

  intelligencePreview.textContent = intelligence;

  charismaPreview.textContent = charisma;

  clsPreview.textContent = selectedCls.textContent;
  const charCls = selectedCls.textContent.toLowerCase();

  alignmentPreview.textContent = selectedAlignment.textContent;
  
  proficiencyBonusPreview.textContent = String(Levels[currentLevel.textContent].bonus);
  
  // Skills preview section
  
  highlightSkills();
  
  appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);

  // Get character preview image based on class, race, and gender

  const charImageSet = () => {
    const characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
    characterImg.src = getCharacterImage(characterAttributes);
  }

  charImageSet();

  // Proficiencies section

    // Add logic for Proficiencies section

  // Combat Section

  const hitPoints = () => {

    // 1st level is max hit points + constiution modifier

    let mod = getAbilityScoreModifier(Number(constitution))
    let hitpoints = (Classes[charCls].hitdie + mod);
    hitPointPreview.textContent = hitpoints;

  }

  hitPoints();

  // Get dexerity and armor modifier and set armor class

  const armorClass = () => {

    let base = 10;
    let dexMod = getAbilityScoreModifier(Number(dexerity))
    // TODO add worn armor modifier
    let ac = String(base + dexMod);
    const armorClassPreview = <HTMLElement>document.querySelector('#armorClass');
    armorClassPreview.textContent = ac;

  }

  armorClass();

  // Get dexerity modifier and set initiative bonus

  const initiativeMod = () => {

    let dexMod = getAbilityScoreModifier(Number(dexerity))
    let mod = String(dexMod);
    const initiativeModPreview = <HTMLElement>document.querySelector('#initiative');
    initiativeModPreview.textContent = mod;

  }

  initiativeMod();

  // Get base speed based on chosen race

  const baseSpeed = () => {

    const speedPreview = <HTMLElement>document.querySelector('#speed');
    speedPreview.textContent = Races[charRace].speed;

  }

  baseSpeed();
  
});

// Level advancement button submit

const levelUpButton = document.querySelector('#levelUpButton');

levelUpButton.addEventListener('click', (e) => {

  const constitution = rolledConstitition.textContent;
  const selectedCls = cls.options[cls.selectedIndex];
  const charCls = selectedCls.textContent.toLowerCase();
  proficiencyBonus = Levels[currentLevel.textContent].bonus;

  e.preventDefault();

  const charLevelUp = () => {

    currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
    experienceNextLevel.textContent = String(Levels[currentLevel.textContent].experience);

  }

  charLevelUp();

  const addHitPoints = () => {

    // get current hitpoints
    let currentHitPoints = Number(hitPointPreview.textContent);
    // roll for hit points to add
    let mod = getAbilityScoreModifier(constitution)
    let rolledHitPoints = randomIntFromRange(1, Classes[charCls].hitdie)
    let hitPointsToAdd = (rolledHitPoints + mod);
    if(rolledHitPoints + mod <= 0) {
      hitPointsToAdd = 1;
    }
    // add hitpoints to current total and display
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
  }

  addHitPoints();
  
  const addProficiencyBonus = () => proficiencyBonusPreview.textContent = String(Levels[currentLevel.textContent].bonus);
  
  addProficiencyBonus();

  appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
  
  highlightSkills();
  
});

const addNewExperienceButton = document.querySelector('#addExp');

addNewExperienceButton.addEventListener('click', (e) => {

  e.preventDefault();

  const addExp = () => {

      let currentExpNum = Number(currentExperience.textContent);
      let newExpNum = Number(addNewExperienceInput.value)
      currentExperience.textContent = String(currentExpNum + newExpNum);

  }

  addExp();

  addNewExperienceInput.value = null;

});

////////////////////////////////////////
// imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';
import { Classes, Races } from './info.js';

////////////////////////////////////////
// Utility functions
////////////////////////////////////////

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomBoolean = () => Math.random() >= 0.5;

const abilityScore = () => Math.floor(Math.random() * ((18 - 3) + 1)) + 3;

const setToMinMax = score => score > 18 ? score = 18 : score = 3;

////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////

const setScore = (scoreDisplay) => {
  let score = abilityScore();
  setToMinMax(score);
  scoreDisplay.textContent = score.toString();
}

const getCharacterImage = (genderedImages) => {
  let randomIndex = randomIntFromRange(0, (genderedImages.length-1));
  return genderedImages[randomIndex];
}

// Get Character Attributes to set preview image
// TODO: use attributes to set other output

const getCharacterAttributes = (charCls,charRace,charGender) => {
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

const getAbilityScoreModifier = (ability) => {

  let score = ability;
  let mod = 0;
  mod = Math.floor((score / 2) - 5)

  return mod;

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

const name = <HTMLInputElement>document.querySelector('#name');

const race = <HTMLSelectElement>document.querySelector('#race');

const alignment = <HTMLSelectElement>document.querySelector('#alignment');

const cls = <HTMLSelectElement>document.querySelector('#cls');

const gender = <HTMLInputElement>document.querySelector('#gender');

const age = <HTMLInputElement>document.querySelector('#age');

////////////////////////////////////////////////////////////
// Get character info preview elements
////////////////////////////////////////////////////////////

// Level and experience Section

const currentLevel = <HTMLElement>document.querySelector('#currentLevel')

const currentExperience = <HTMLElement>document.querySelector('#currentExperience');

const addNewExperienceInput = <HTMLInputElement>document.querySelector('#addNewExperience');

// Info section

const namePreview = document.querySelector('#namePreview');

const racePreview = <HTMLElement>document.querySelector('#racePreview');

const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');

const agePreview = <HTMLElement>document.querySelector('#agePreview');

const strengthPreview = <HTMLElement>document.querySelector('#strengthPreview');

const dexerityPreview = <HTMLElement>document.querySelector('#dexerityPreview');

const constitutionPreview = <HTMLElement>document.querySelector('#constitutionPreview');

const wisdomPreview = <HTMLElement>document.querySelector('#wisdomPreview');

const intelligencePreview = <HTMLElement>document.querySelector('#intelligencePreview');

const charismaPreview = <HTMLElement>document.querySelector('#charismaPreview');

const clsPreview = <HTMLElement>document.querySelector('#clsPreview');

const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');

const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

// Proficiencies Section

  // TODO: add Proficiencies elements

// Combat section

const hitPointPreview = <HTMLElement>document.querySelector('#hitPoints')

////////////////////////////////////////////////////////////
// The big submit button for character creation
////////////////////////////////////////////////////////////

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (e) => {

  e.preventDefault();

  // Get info to create characte

  const selectedRace = race.options[race.selectedIndex];

  const strength = rolledStrength.textContent;

  const dexerity = rolledDexerity.textContent;

  const constitution = rolledConstitition.textContent;

  const intelligence = rolledIntelligence.textContent;

  const wisdom = rolledWisdom.textContent;

  const charisma = rolledCharisma.textContent;

  const selectedAlignment = alignment.options[alignment.selectedIndex];

  const selectedCls = cls.options[cls.selectedIndex];

  // Post info from character creation to preview area

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

  // return variables for use in level up submitButton


});

// Level advancement button submit

const levelUpButton = document.querySelector('#levelUpButton');

levelUpButton.addEventListener('click', (e) => {

  const constitution = rolledConstitition.textContent;
  const selectedCls = cls.options[cls.selectedIndex];
  const charCls = selectedCls.textContent.toLowerCase();

  e.preventDefault();

  const charLevelUp = () => {

    currentLevel.textContent = String(Number(currentLevel.textContent) + 1);

  }

  charLevelUp();

  const addHitPoints = () => {

    // get current hitpoints
    let currentHitPoints = Number(hitPointPreview.textContent);
    // roll for hit points to add
    let mod = getAbilityScoreModifier(constitution)
    let rolledHitPoints = randomIntFromRange(1, Classes[charCls].hitdie)
    let hitPointsToAdd = (rolledHitPoints + mod);
    // add hitpoints to current total and display
    hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
    console.log(`current hit points: ${currentHitPoints}\n Hit Points to Add: ${hitPointsToAdd}\n Total Hit points ${hitPointPreview.textContent}`)
  }

  addHitPoints();

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

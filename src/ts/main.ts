////////////////////////////////////////
// imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';

////////////////////////////////////////
// Utility functions
////////////////////////////////////////

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

// TODO: Add race to complete trifecta of charater image setting

const getCharacterAttributes = (charCls,charRace,charGender) => {
  return characterImages[charRace][charCls][charGender];
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
// The big submit button for character creation
////////////////////////////////////////////////////////////

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () => {

  // Get info to create character

  const $name = <HTMLInputElement>document.querySelector('#name');

  const $race = <HTMLSelectElement>document.querySelector('#race');
  const selectedRace = $race.options[$race.selectedIndex];

  const $strength = rolledStrength.textContent;

  const $dexerity = rolledDexerity.textContent;

  const $constitution = rolledConstitition.textContent;

  const $intelligence = rolledIntelligence.textContent;

  const $wisdom = rolledWisdom.textContent;

  const $charisma = rolledCharisma.textContent;

  const $alignment = <HTMLSelectElement>document.querySelector('#alignment');
  const selectedAlignment = $alignment.options[$alignment.selectedIndex];

  const $cls = <HTMLSelectElement>document.querySelector('#cls');
  const selectedCls = $cls.options[$cls.selectedIndex];

  const $gender = <HTMLInputElement>document.querySelector('#gender');

  const $age = <HTMLInputElement>document.querySelector('#age');

  // Post info from character creation to preview area

  const namePreview = document.querySelector('#namePreview');
  namePreview.textContent = $name.value;

  const racePreview = <HTMLElement>document.querySelector('#racePreview');
  racePreview.textContent = selectedRace.textContent;
  const charRace = selectedRace.textContent.toLowerCase().replace(/-/g,"");
  console.log(charRace);

  const genderPreview = <HTMLElement>document.querySelector('#genderPreview');
  genderPreview.textContent = $gender.value;
  const charGender = $gender.value.toLowerCase();

  const agePreview = <HTMLElement>document.querySelector('#agePreview');
  agePreview.textContent = $age.value;

  const strengthPreview = <HTMLElement>document.querySelector('#strengthPreview');
  strengthPreview.textContent = $strength;

  const dexerityPreview = <HTMLElement>document.querySelector('#dexerityPreview');
  dexerityPreview.textContent = $dexerity;

  const constitutionPreview = <HTMLElement>document.querySelector('#constitutionPreview');
  constitutionPreview.textContent = $constitution;

  const wisdomPreview = <HTMLElement>document.querySelector('#wisdomPreview');
  wisdomPreview.textContent = $wisdom;

  const intelligencePreview = <HTMLElement>document.querySelector('#intelligencePreview');
  intelligencePreview.textContent = $intelligence;

  const charismaPreview = <HTMLElement>document.querySelector('#charismaPreview');
  charismaPreview.textContent = $charisma;

  const clsPreview = <HTMLElement>document.querySelector('#clsPreview');
  clsPreview.textContent = selectedCls.textContent;
  const charCls = selectedCls.textContent.toLowerCase();

  const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');
  alignmentPreview.textContent = selectedAlignment.textContent;

  // Get character preview image based on class and gender

  const characterImg = <HTMLImageElement>document.querySelector('#characterImg');

  const charImageSet = () => {
    characterImg.src = getCharacterImage(getCharacterAttributes(charCls,charRace,charGender));
    console.log(charCls,charRace,charGender);
  }

  charImageSet();

});

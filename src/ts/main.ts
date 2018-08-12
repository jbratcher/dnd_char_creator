////////////////////////////////////////
// imports
////////////////////////////////////////

import { characterImages } from './characterImages.js';
import { Classes, Races } from './classes.js';

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

const getAbitlityScoreModifier = (ability) => {
  
  let score = ability;
  let mod = 0;
  if(score === 1) {
    mod -= 5;
  } else if(score === 2 || score === 3) {
    mod -= 4;
  } else if(score === 4 || score === 5) {
    mod -= 3;
  } else if (score === 6 || score === 7) {
    mod -= 2;
  } else if(score === 8 || score === 9) {
    mod -= 1;
  } else if(score === 10 || score === 11) {
    mod = 0;
  } else if(score === 12 || score === 13) {
    mod += 1;
  } else if(score === 14 || score === 15) {
    mod += 2;
  } else if(score === 16 || score === 17) {
    mod += 3
  } else if(score === 18 || score === 19) {
    mod += 4;
  } else {
    mod = 0;
  }
  
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

  const genderPreview = <HTMLInputElement>document.querySelector('#genderPreview');
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
    const characterAttributes = getCharacterAttributes(charCls, charRace, charGender);
    characterImg.src = getCharacterImage(characterAttributes);
    console.log(charCls,charRace,charGender);
  }

  charImageSet();
  
  // Proficiencies section
  
  const hitPoints = () => {

    // roll for hit points
    let hitpoints = String(randomIntFromRange(1,Classes[charCls].hitdie));
    // output hit points to hitpoints element
    const hitPointPreview = <HTMLElement>document.querySelector('#hitPoints')
    hitPointPreview.textContent = hitpoints;
    
  }
  
  hitPoints();
  
  // Get dexerity and armor modifier and set armor class
  
  const armorClass = () => {
    
    let base = 10;
    let dexMod = getAbitlityScoreModifier(Number($dexerity))
    // TODO add worn armor modifier
    let ac = String(base + dexMod);
    const armorClassPreview = <HTMLElement>document.querySelector('#armorClass');
    armorClassPreview.textContent = ac;
    console.log(ac);
    
  }
  
  armorClass();
  
  // Get dexerity modifier and set initiative bonus
  
  const initiativeMod = () => {
    
    let dexMod = getAbitlityScoreModifier(Number($dexerity))
    let mod = String(dexMod);
    const initiativeModPreview = <HTMLElement>document.querySelector('#initiative');
    initiativeModPreview.textContent = mod;
    console.log(mod);
    
  }
  
  initiativeMod();
  
  // Get base speed based on chosen race
  
  const baseSpeed = () => {
    
    const speedPreview = <HTMLElement>document.querySelector('#speed');
    speedPreview.textContent = Races[charRace].speed;
    console.log(Races[charRace].speed);
    
  }
  
  baseSpeed();

});

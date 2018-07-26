import { characterImages } from './characters.js';

// Utility functions

const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



const getCharacterImage = (genderedImages) => {
  let randomIndex = randomIntFromRange(0, (genderedImages.length-1));
  return genderedImages[randomIndex];
}

// create function to get ability score 3-18

const abilityScore = () => Math.floor(Math.random() * ((18 - 3) + 1)) + 3;

const setToMinMax = score => score > 18 ? score = 18 : score = 3;

// Declare Variables

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

const setScore = (scoreDisplay) => {
  let score = abilityScore();
  setToMinMax(score);
  scoreDisplay.textContent = score.toString();
}

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

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () =>{

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

  const genderPreview = <HTMLElement>document.querySelector('#genderPreview');
  genderPreview.textContent = $gender.value;

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

  const alignmentPreview = <HTMLElement>document.querySelector('#alignmentPreview');
  alignmentPreview.textContent = selectedAlignment.textContent;

  // Get character preview image based on class and gender
  
  const characterImg = <HTMLImageElement>document.querySelector('#characterImg');
  console.log(clsPreview.textContent);

  
  if($gender.value.toLowerCase() === 'male') {

    // class if statement for male genders

    if(clsPreview.textContent.toLowerCase() === 'barbarian') {
      characterImg.src = getCharacterImage(characterImages.barbarian.male);
      console.log('barbarian male');
    } else if(clsPreview.textContent.toLowerCase() === 'bard') {
      characterImg.src = getCharacterImage(characterImages.bard.male);
      console.log('bard male');
    } else if(clsPreview.textContent.toLowerCase() === 'cleric') {
      characterImg.src = getCharacterImage(characterImages.cleric.male);
      console.log('cleric male');
    } else if(clsPreview.textContent.toLowerCase() === 'druid') {
      characterImg.src = getCharacterImage(characterImages.druid.male);
      console.log('druid male');
    } else if(clsPreview.textContent.toLowerCase() === 'fighter') {
      characterImg.src = getCharacterImage(characterImages.fighter.male);
      console.log('fighter male');
    }  else if(clsPreview.textContent.toLowerCase() === 'monk') {
      characterImg.src = getCharacterImage(characterImages.monk.male);
      console.log('monk male');
    }  else if(clsPreview.textContent.toLowerCase() === 'paladin') {
      characterImg.src = getCharacterImage(characterImages.paladin.male);
      console.log('paladin male');
    }  else if(clsPreview.textContent.toLowerCase() === 'ranger') {
      characterImg.src = getCharacterImage(characterImages.ranger.male);
      console.log('ranger male');
    }  else if(clsPreview.textContent.toLowerCase() === 'rogue') {
      characterImg.src = getCharacterImage(characterImages.fighter.male);
      console.log('rogue male');
    }  else if(clsPreview.textContent.toLowerCase() === 'soccerror') {
      characterImg.src = getCharacterImage(characterImages.soccerror.male);
      console.log('soccerror male');
    }  else if(clsPreview.textContent.toLowerCase() === 'warlock') {
      characterImg.src = getCharacterImage(characterImages.warlock.male);
      console.log('warlock male');
    }  else if(clsPreview.textContent.toLowerCase() === 'wizard') {
      characterImg.src = getCharacterImage(characterImages.wizard.male);
      console.log('wizard male');
    } 
    
    

  } else if($gender.value.toLowerCase() === 'female') {

    if(clsPreview.textContent.toLowerCase() === 'barbarian') {
      characterImg.src = getCharacterImage(characterImages.barbarian.female);
      console.log('barbarian female');
    } else if(clsPreview.textContent.toLowerCase() === 'bard') {
      characterImg.src = getCharacterImage(characterImages.bard.female);
      console.log('bard female');
    } else if(clsPreview.textContent.toLowerCase() === 'cleric') {
      characterImg.src = getCharacterImage(characterImages.cleric.female);
      console.log('cleric female');
    } else if(clsPreview.textContent.toLowerCase() === 'druid') {
      characterImg.src = getCharacterImage(characterImages.druid.female);
      console.log('druid female');
    } else if(clsPreview.textContent.toLowerCase() === 'fighter') {
      characterImg.src = getCharacterImage(characterImages.fighter.female);
      console.log('fighter female');
    }  else if(clsPreview.textContent.toLowerCase() === 'monk') {
      characterImg.src = getCharacterImage(characterImages.monk.female);
      console.log('monk female');
    }  else if(clsPreview.textContent.toLowerCase() === 'paladin') {
      characterImg.src = getCharacterImage(characterImages.paladin.female);
      console.log('paladin female');
    }  else if(clsPreview.textContent.toLowerCase() === 'ranger') {
      characterImg.src = getCharacterImage(characterImages.ranger.female);
      console.log('ranger female');
    }  else if(clsPreview.textContent.toLowerCase() === 'rogue') {
      characterImg.src = getCharacterImage(characterImages.fighter.female);
      console.log('rogue female');
    }  else if(clsPreview.textContent.toLowerCase() === 'soccerror') {
      characterImg.src = getCharacterImage(characterImages.soccerror.female);
      console.log('soccerror female');
    }  else if(clsPreview.textContent.toLowerCase() === 'warlock') {
      characterImg.src = getCharacterImage(characterImages.warlock.female);
      console.log('warlock female');
    }  else if(clsPreview.textContent.toLowerCase() === 'wizard') {
      characterImg.src = getCharacterImage(characterImages.wizard.female);
      console.log('wizard female');
    } 

  } else {

    let randomBoolean = Math.random() >= 0.5;
    if(randomBoolean) {
      characterImg.src = getCharacterImage(characterImages.barbarian.male);
    } else if (!randomBoolean) {
      characterImg.src = getCharacterImage(characterImages.barbarian.female);
    }
  }

});

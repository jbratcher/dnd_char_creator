

// Character image arrays

const maleCharacterImages = [
  "https://i.pinimg.com/736x/86/84/32/868432784e4fd37beb893ecdb0830a74--old-friends-barbarian-fantasy.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmOrOMDeUgAgx9IWjCZD9g5oBec8-fk8xZH9UuofS_VAOt3zb",
  "https://i.pinimg.com/736x/08/69/71/086971ec519d01df20ae9cb4bf5e411d--character-outfits-character-portraits.jpg",
  "https://www.videogamesartwork.com/sites/default/files/images/image/1377178542/diablo3-class-barbarian-male-06.jpg",
  "https://i.pinimg.com/736x/bd/4f/b9/bd4fb957e6046747533e6d62af90f6fe--fantasy-warrior-fantasy-art.jpg"
]

const femaleCharacterImages = [
  "https://vignette.wikia.nocookie.net/bgtscc/images/9/99/Barbarian.jpg/revision/latest?cb=20161105214456",
  "https://i.kinja-img.com/gawker-media/image/upload/s--NdbChKcZ--/c_scale,f_auto,fl_progressive,q_80,w_800/18j3zwhxy85iyjpg.jpg",
  "https://cdna.artstation.com/p/assets/covers/images/001/568/198/large/denny-ibnu-barbarian-final-lr.jpg?1448720934",
  "https://i.pinimg.com/236x/30/9a/4e/309a4ecd64fefa487ebb20c2eb23d922--fantasy-characters-female-characters.jpg",
  "http://www.conceptart.org/forums/attachment.php?attachmentid=2239200&d=1490565589s"
]

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

  if($gender.value.toLowerCase() === 'male') {

    // class if statement for male genders

    const characterImg = <HTMLImageElement>document.querySelector('#characterImg');
    characterImg.src = getCharacterImage(maleCharacterImages);
    console.log(characterImg.src)

  } else if($gender.value.toLowerCase() === 'female') {

    const characterImg = <HTMLImageElement>document.querySelector('#characterImg');
    characterImg.src = getCharacterImage(femaleCharacterImages);
    console.log(characterImg.src)

  } else {

    const characterImg = <HTMLImageElement>document.querySelector('#characterImg');
    let randomBoolean = Math.random() >= 0.5;
    if(randomBoolean) {
      characterImg.src = getCharacterImage(maleCharacterImages);
    } else if (!randomBoolean) {
      characterImg.src = getCharacterImage(femaleCharacterImages);
    }
    console.log(randomBoolean)

  }

});

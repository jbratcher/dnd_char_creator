



  // create function to get ability score 3-18

  const abilityScore = function(){
    return Math.floor(Math.random() * ((18 - 3) + 1)) + 3;
  }

  const setToMinMax = (score) => score > 18 ? score = 18 : score = 3;


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
    const $name = document.querySelector('#name').textContent;

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

    const $gender = document.querySelector('#gender').textContent;

    const $age = document.querySelector('#age').textContent;

    // Post info from character creation to preview area

    const namePreview = <HTMLElement>document.querySelector('#namePreview');
    namePreview.textContent = $name;

    const racePreview = <HTMLElement>document.querySelector('#racePreview');
    racePreview.textContent = selectedRace.textContent;

    const genderPreview = <HTMLElement>document.querySelector('#genderPreview');
    genderPreview.textContent = $gender;

    const agePreview = <HTMLElement>document.querySelector('#agePreview');
    agePreview.textContent = $age;

    // stats, align, class

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

  });

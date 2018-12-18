////////////////////////////////////////
// Imports
////////////////////////////////////////

import * as func from './functions.js';

import * as ele from './domElements.js'

import {
  Abilities,
  Alignments,
  ClassList,
  Classes,
  Levels,
  Languages,
  Races,
  RaceList,
  Skills
} from './characterInfo.js';

// Initialize  global variables

let modifier: number;  // integer value that increases or decreases key values

let totalMod: number;  // integer value to combine modifier values before adding to key value

let abilityScore: number;  // character ability score

let abilityScoreMod: number;  // character ability score modifier

let proficiencyBonus: number;

const singleWord = /(\w+)/;  // capture a single word (i.e. 'strength')

// Setters for ability scores (string for textContent display)

let strength: string = "0";

let dexerity: string = "0";

let constitution: string = "0";

let intelligence: string = "0";

let wisdom: string = "0";

let charisma: string = "0";

// Event listeners for rolling ability scores

ele.rollStrength.addEventListener('click', () => func.setScore(ele.rolledStrength));

ele.rollDexerity.addEventListener('click', () => func.setScore(ele.rolledDexerity));

ele.rollConstitution.addEventListener('click', () => func.setScore(ele.rolledConstitution));

ele.rollWisdom.addEventListener('click', () => func.setScore(ele.rolledWisdom));

ele.rollIntelligence.addEventListener('click', () => func.setScore(ele.rolledIntelligence));

ele.rollCharisma.addEventListener('click', () => func.setScore(ele.rolledCharisma));


////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// General Info / User Input
////////////////////////////////////////////////////////////

// User input in chronological order


// Class Select

func.addOptionsToSelect(ele.cls, ClassList);

let selectedClass = <HTMLOptionElement>ele.cls.options[ele.cls.selectedIndex];

let charClass: string = selectedClass.textContent.toLowerCase();

const setClass = () => {
  charClass = ele.cls.options[ele.cls.selectedIndex].textContent.toLowerCase().replace(/-/g,"");
}

func.setText(ele.classHelp, Classes[charClass].info);

ele.cls.addEventListener('change', function() {
  setClass();
  func.setText(ele.classHelp, Classes[charClass].info);
});


// Race Select

func.addOptionsToSelect(ele.race, RaceList);

let selectedRace = <HTMLOptionElement>ele.race.options[ele.race.selectedIndex];

let charRace: string = selectedRace.textContent.toLowerCase().replace(/-/g,""); // "i.e. human, halfelf, halforc"

const setRace = () => {
  charRace = ele.race.options[ele.race.selectedIndex].textContent.toLowerCase().replace(/-/g,"");
}

func.setText(ele.raceHelp, Races[charRace].info);

ele.race.addEventListener('change', function() {
  setRace();
  func.setText(ele.raceHelp, Races[charRace].info);
});


// Subrace Select (Optional, if subrace exists)

let selectedSubrace = <HTMLOptionElement>ele.subrace.options[ele.subrace.selectedIndex];

let charSubrace: string = ele.subrace.textContent.toLowerCase().replace(/-|\s/g,"");

// Subrace select

const showOptionalSubraceSelect = () => {

  setRace();

  // Reset any subrace from previous selection
  ele.subrace.innerHTML = "-"
  ele.subraceHelp.textContent = "";
  charSubrace = null;

  // if race has a subrace, show and populate subrace select element
  Races[charRace].subrace
    ? (
      func.addOptionsToSelect(ele.subrace, ["-"]),  // Make first option "null"
      func.addOptionsToSelect(ele.subrace, Races[charRace].subrace.name),
      ele.subraceSelectSection.classList.remove('d-none')
      )
    : ele.subraceSelectSection.classList.add('d-none')

}

// Subrace options regenerate on race selection change
ele.race.addEventListener('change', showOptionalSubraceSelect);  

const setSubrace = () => {
  // if subrace exists for selected race, subrace element is shown, otherwise it stays hidden
  if(!ele.subrace.parentElement.classList.contains("d-none")) {
    charSubrace = ele.subrace.textContent.toLowerCase().replace(/-|\s/g,"") // normalize subrace text to all lowercase joined letters
    console.log(charSubrace);
  } else {
    // if subrace does not exist for selected race
    return null;
  }
}

// On subrace selection, get value of subrace and display descriptive text
ele.subrace.addEventListener('change', function() {
  func.setText(ele.subraceHelp, "");
  setSubrace();
  func.setText(ele.subraceHelp, Races[charRace].subrace.helpText);

});


// Alignment

func.addOptionsToSelect(ele.alignment, Alignments)

let selectedAlignment = <HTMLOptionElement>ele.alignment.options[ele.alignment.selectedIndex];

let charAlignment: string = selectedAlignment.textContent // "Lawful Good, Chaotic Evil, True Neutral"

const setAlignment = () => {
  let charAlignment: string = selectedAlignment.textContent;
}

// limits alignment options to race recommendations
const availableAlignments = () => {

  ele.alignment.innerHTML = "";  // reset alignment select options
  setRace();
  func.addOptionsToSelect(ele.alignment, Races[charRace].alignments);

}

// Alignment options regenerate on race selection
ele.race.addEventListener('change', availableAlignments);  


// Name
// see domElements.ts

// Gender

let charGender: string = ele.gender.value.toLowerCase();


// Age

// Displays race specific age help text on race selection
const ageHelpText = () => {
  setRace();
  func.setText(ele.ageHelp, `${func.capitialize(charRace)} age ranges between ${Races[charRace].age.min} and  ${Races[charRace].age.max}` )
}

ele.race.addEventListener('change', ageHelpText);

// Iniialize help text on page load
ageHelpText();


// Dragonborn: Draconic Ancestry / Dragonborn "subrace"

const draconicAncestrySection = <HTMLElement>document.querySelector('#draconicAncestrySection');

const draconicAncestry = <HTMLSelectElement>document.querySelector('#draconicAncestry');

const draconicAncestryHelp = <HTMLElement>document.querySelector('#draconicAncestryHelp');

const showDraconicAncestrySelect = () => {

  setRace();

  // if ancestry exists, populate and show ancestry select element 
  Races[charRace].special.draconicAncestry
    ? (
        func.addOptionsToSelect(draconicAncestry, Races[charRace].special.draconicAncestry.types),
        draconicAncestryHelp.textContent = 'Choose a dragon lineage.',
        draconicAncestrySection.classList.remove('d-none')
      )
    : (
        draconicAncestrySection.classList.add('d-none'),
        draconicAncestryHelp.textContent = ''
      )
}

// Draconic ancestry options regenerate on race selection
ele.race.addEventListener('change', showDraconicAncestrySelect);

// Initialize on page load
showDraconicAncestrySelect();


// Extra Language Selection: Human and Half-elf

// Display extra language select element if race selection is Human, Half-Elf, or High Elf and populate lwith anguage options

const extraLanguageField = <HTMLElement>document.querySelector('#extraLanguageField');

const extraLanguage = <HTMLSelectElement>document.querySelector('#extraLanguage');

const extraLanguageHelp = <HTMLElement>document.querySelector('#extraLanguageHelp');

func.addOptionsToSelect(extraLanguage, Languages.standard);

const showExtraLanguageInput = () => {

  setRace();
  setSubrace();

  charRace === 'human'
    ? (
        extraLanguageField.classList.remove('d-none'),
        func.setText(extraLanguageHelp, `Humans get to choose 1 extra language` )
      )
    : charRace === 'halfelf'
    ? (
        extraLanguageField.classList.remove('d-none'),
        func.setText(extraLanguageHelp, `Half-Elves get to choose 1 extra language` )
      )
    : charSubrace === 'highelf'
    ? (
        extraLanguageField.classList.remove('d-none'),
        func.setText(extraLanguageHelp, `High Elves get to choose 1 extra language` )
      )
    : (
      extraLanguageField.classList.add('d-none'),
      extraLanguageHelp.textContent = ''
    )

}

ele.race.addEventListener('change', showExtraLanguageInput);

ele.subrace.addEventListener('change', showExtraLanguageInput);

// Function to combine related functions (TODO: can be combined with other racial)

const racialBonuses = () => {

    addDwarvenToughness();

    addHalfElfAbilityMofifiers();  // Half-Elf racial ability score bonus (Any 2 plus Charisma)

}

const clearRacialSkils = () => {

  // set text content and attr to 'null', hide elements in preview

  // Combat tab

  func.resetProps(weaponProficiencesPreview);
  func.resetProps(poisonResistance);
  func.resetProps(charmResistance);
  func.resetProps(fearResistance);

  // Skills tab - Additional Skills

  func.resetProps(languagesPreview);
  func.hideParentElement(toolProficiencyPreview);
  func.resetProps(toolProficiencyPreview);

  // Dwarf
  func.hideParentElement(stonecunningPreview);
  func.resetProps(stonecunningPreview);

  // Dragonborn
  func.hideParentElement(draconicAncestryPreview);
  func.resetProps(draconicAncestryPreview);
  func.hideParentElement(damageResistancePreview);
  func.resetProps(damageResistanceType);
  dragonType.textContent = "";
  damageType.textContent = "";
  breathWeapon.textContent = "";

  // Elf
  func.hideParentElement(trancePreview);
  func.resetProps(tranceInfo);

  // Halfling - Lightfoot
  func.hideParentElement(stealthPreview);
  func.resetProps(stealthInfo);

  // Gnome - Rock Gnome
  func.hideParentElement(artificersLorePreview);
  func.resetProps(artificersLoreInfo);
  func.hideParentElement(tinkerPreview);
  func.resetProps(tinkerInfo);

  // Half-orc
  func.hideParentElement(menacingPreview);
  func.resetProps(menacingInfo);
  func.hideParentElement(relentlessEndurancePreview);
  func.resetProps(relentlessEnduranceInfo);
  func.hideParentElement(savageAttacksPreview);
  func.resetProps(savageAttacksInfo);

  // Tiefling
  func.hideParentElement(hellishResistancePreview);
  func.resetProps(hellishResistanceInfo);
  func.hideParentElement(infernalLegacyPreview);
  func.resetProps(infernalLegacyInfo);

}

ele.race.addEventListener('change', clearRacialSkils)
ele.subrace.addEventListener('change', clearRacialSkils)

// Skill select

const skill1 = <HTMLSelectElement>document.querySelector('#skillsSelect1');

func.addOptionsToSelect(skill1, Skills);

let skillList1 = skill1.children;

const skill2 = <HTMLSelectElement>document.querySelector('#skillsSelect2');

func.addOptionsToSelect(skill2, Skills);

let skillList2 = skill2.children;

const skill3 = <HTMLSelectElement>document.querySelector('#skillsSelect3');

func.addOptionsToSelect(skill3, Skills);

let skillList3 = skill3.children;

let availableSkills = Classes[charClass].availableSkills;

let selectedSkill1 = skill1.options[skill1.selectedIndex];

let selectedSkill2 = skill2.options[skill2.selectedIndex];

let selectedSkill3 = skill3.options[skill3.selectedIndex];

// Skill functions

const highlightAvailableSkills = () => {

  availableSkills = Classes[charClass].availableSkills;

  skill1.innerHTML = "";
  skill2.innerHTML = "";
  skill3.innerHTML = "";

  func.addOptionsToSelect(skill1, availableSkills);
  func.addOptionsToSelect(skill2, availableSkills);
  func.addOptionsToSelect(skill3, availableSkills);

}

// dynamically change available skills based on character class

ele.cls.addEventListener('change', () => {
  setClass();
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

const languagesPreview = <HTMLElement>document.querySelector('#languagesPreview');

// General buttons

const createCharacterButton = <HTMLElement>document.querySelector('#createCharacterButton');

const levelUpButton = <HTMLElement>document.querySelector('#levelUpButton');

const addNewExperienceButton = <HTMLElement>document.querySelector('#addExp');

// General functions

const charImageSet = () => {
  let characterAttributes = func.getCharacterAttributes(charClass, charRace, charGender);
  characterImg.src = func.getCharacterImage(characterAttributes);
}

const charLevelUp = () => {
  currentLevel.textContent = String(Number(currentLevel.textContent) + 1);
  experienceNextLevel.textContent = String(Levels[Number(currentLevel.textContent)-1].experience);
  updateProficiencyBonus();
}

const updateProficiencyBonus = () => {
  proficiencyBonus = Levels[currentLevel.textContent].bonus;
  proficiencyBonusPreview.textContent = String(Levels[currentLevel.textContent].bonus);
  func.appendSigntoValue(proficiencyBonus, proficiencyBonusPreview);
}

const addExp = () => {
    let currentExpNum: number = Number(currentExperience.textContent);
    let newExpNum: number = Number(addNewExperienceInput.value)
    currentExperience.textContent = String(currentExpNum + newExpNum);
}

const setAbilityScorePreview = () => {
    
  // loop through abilities lowercased
  Abilities.map(ability => {
    // get ability score from rolled score node
    let rolledScoreNode = eval("rolled" + ability);
    // get preview element 
    let previewElement = eval(ability.toLowerCase() + "Preview");
    // set preview element text to ability score
    previewElement.textContent = rolledScoreNode.textContent;
  })

}

const resetAbilityScores = () => {
  Abilities.map(ability => {
    return ability = null;
  })
}

const generalInfo = () => {
  
  // initialize values at character creation
  
  resetAbilityScores();

  // Get current state of info required to create character

  setClass();

  setRace();
  
  setSubrace();
  
  // Post info from character creation to preview area
  
  setAbilityScorePreview();

  selectedAlignment = ele.alignment.options[ele.alignment.selectedIndex];

  charGender = ele.gender.value.toLowerCase();
  
  // convert languages array into line-separated list items (use innerHTML instead of textCotent)
  
  let knownLanguages = Races[charRace].languages.toString().split().join("\r\n") + `${String(extraLanguage.value)}`
  
  func.showElementWithProps(languagesPreview, "Known Languages", knownLanguages)

  currentLevel.textContent = String(Levels[0].level);

  experienceNextLevel.textContent = String(Levels[0].experience);

  namePreview.textContent = ele.name.value;

  racePreview.textContent = selectedRace.textContent;

  genderPreview.textContent = ele.gender.value;

  agePreview.textContent = ele.age.value;

  clsPreview.textContent = selectedClass.textContent;

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

let dwarvenToughnessMod: number = 0;

// Ability Score functions

const lookupAbilityScore = (ability) => {

  // if ability matches abilityScore in list return number value of abilityScore
  for(let i = 0; i < abilityScoreListItems.length; i++) {
    // gets ability score name from preview li > b element(Strength, Dexerity, etc.)
    let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    // if preview ability score name matches passed ability score, get ability score from li > span element
    if(string.toLowerCase() === ability) {
      abilityScore = Number(abilityScoreListItems[i].childNodes[3].textContent);
      return abilityScore;
    }
  }

}

const subraceAbilityModifier = () => {

  setRace();

  if(Races[charRace].subrace) {

    // get subrace bonus ability and modifier value
    let subraceAbility: string = Races[charRace].subrace.ability;
    let subraceAbilityMod: number = Races[charRace].subrace.modifier;

    // if ability score text matches li text, add bonus modifier to value
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

  setRace();

  let racialAbility: string = Races[charRace].abilityModifier.ability;
  let racialAbilityMod: number = Races[charRace].abilityModifier.modifier;

  // if ability matches abilityPreview node text, add modifier to score
  for(let i = 0; i < abilityScoreListItems.length; i++) {
    let abilityText: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
    let abilityScorePreview = abilityScoreListItems[i].childNodes[3]
    let abilityScore: number = Number(abilityScoreListItems[i].childNodes[3].textContent);

    if(abilityText.toLowerCase() === racialAbility) {
       abilityScorePreview.textContent = String(abilityScore + racialAbilityMod);
    }

  }

  // if race has extra ability to modify
  if(Races[charRace].abilityModifier.extraAbility) {
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let abilityText: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      let abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent
      if(abilityText.toLowerCase() === Races[charRace].abilityModifier.extraAbility) {
        let abilityScore: number = Number(abilityScorePreview);
        abilityScorePreview = String(abilityScore + Races[charRace].abilityModifier.extraModifier);
      }
    }

  }

}

// Display extra ability modifier field if race is Half-Elf

func.addOptionsToSelect(extraAbilityModifier1, Abilities);

const showExtraModifiersInput = () => {

  setRace();
  
  // Add ability options to extra ability select element

  charRace === 'halfelf'
    ? extraAbilityModifier.classList.remove('d-none')
    : extraAbilityModifier.classList.add('d-none');

  charRace === 'halfelf'
    ? extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1'
    : extraAbilityModifierHelp.textContent = '';

}

ele.race.addEventListener('change', showExtraModifiersInput);

// Hide ability selected in either select element from the other select element

const hideModSelection = (extraAbilityModifier, otherAbilityModifier) => {

  let firstSelection: string = extraAbilityModifier.options[extraAbilityModifier.selectedIndex].textContent;

  otherAbilityModifier.innerHTML = "";

  Abilities.map(ability => {
    if(ability !== firstSelection) {
      let abilityElement2 = <HTMLOptionElement>document.createElement("option");
      abilityElement2.textContent = ability;
      otherAbilityModifier.appendChild(abilityElement2);
    }
  })

}

hideModSelection(extraAbilityModifier1, extraAbilityModifier2);

extraAbilityModifier1.addEventListener('change', function() {
  hideModSelection(extraAbilityModifier1, extraAbilityModifier2)
})

extraAbilityModifier2.addEventListener('change', function() {
  hideModSelection(extraAbilityModifier2, extraAbilityModifier1)
})

// Set value of Dwarven Toughtness hit point modifier based on race selection

const addDwarvenToughness = () => {

  setRace();

  charRace === "dwarf"
    ? dwarvenToughnessMod = 1
    : dwarvenToughnessMod = 0
  return dwarvenToughnessMod

}

// if extra ability score is selected add +1 to ability score preview

const addHalfElfAbilityMofifiers = () => {

  if(charRace === 'halfelf') {
    // get selected abilities text
    let mod1: string = extraAbilityModifier1.options[extraAbilityModifier1.selectedIndex].textContent;
    let mod2: string = extraAbilityModifier2.options[extraAbilityModifier2.selectedIndex].textContent;
    // get selected abilities preview element text
    for(let i = 0; i < abilityScoreListItems.length; i++) {
      let abilityScorePreview = abilityScoreListItems[i].childNodes[3].textContent
      let string: string = singleWord.exec(abilityScoreListItems[i].childNodes[1].textContent)[0];
      // if either selected ability text matches abiltiy preview element text, update ability score
      if(string === mod1 || string === mod2) {
        let abilityScore: number = Number(abilityScorePreview);
        abilityScore += 1;
        abilityScorePreview = String(abilityScore);
      }
    }
  }

}

////////////////////////////////////////////////////////////
// Skills Preview
////////////////////////////////////////////////////////////

// Skill variables

// Skill Lists

const skillsPreviewList = <HTMLElement>document.querySelector('#skillsPreviewList');

const skillsPreviewListItems = skillsPreviewList.children;

const additionalSkillsPreviewList = <HTMLElement>document.querySelector('#additionalSkillsPreviewList');

const additionalSkillsPreviewListItems = additionalSkillsPreviewList.children;

// Special Abilities

const stonecunningPreview = <HTMLElement>document.querySelector('#stonecunningPreview');

const toolProficiencyPreview = <HTMLElement>document.querySelector('#toolProficiencyPreview');

const draconicAncestryPreview = <HTMLElement>document.querySelector('#draconicAncestryPreview');

const dragonType = <HTMLElement>document.querySelector('#dragonType');

const damageType = <HTMLElement>document.querySelector('#damageType');

const breathWeapon = <HTMLElement>document.querySelector('#breathWeapon');

const trancePreview = <HTMLElement>document.querySelector('#trancePreview');
const tranceInfo = <HTMLElement>document.querySelector('#tranceInfo');

const stealthPreview = <HTMLElement>document.querySelector('#stealthPreview');
const stealthInfo = <HTMLElement>document.querySelector('#stealthInfo');

const artificersLorePreview = <HTMLElement>document.querySelector('#artificersLorePreview');
const artificersLoreInfo = <HTMLElement>document.querySelector('#artificersLoreInfo');

const tinkerPreview = <HTMLElement>document.querySelector('#tinkerPreview');
const tinkerInfo = <HTMLElement>document.querySelector('#tinkerInfo');

const damageResistancePreview = <HTMLElement>document.querySelector('#damageResistancePreview');
const damageResistanceType = <HTMLElement>document.querySelector('#damageResistanceType');

const menacingPreview = <HTMLElement>document.querySelector('#menacingPreview');
const menacingInfo = <HTMLElement>document.querySelector('#menacingInfo');

const relentlessEndurancePreview = <HTMLElement>document.querySelector('#relentlessEndurancePreview');
const relentlessEnduranceInfo = <HTMLElement>document.querySelector('#relentlessEnduranceInfo');

const savageAttacksPreview = <HTMLElement>document.querySelector('#savageAttacksPreview');
const savageAttacksInfo = <HTMLElement>document.querySelector('#savageAttacksInfo');

const hellishResistancePreview = <HTMLElement>document.querySelector('#hellishResistancePreview');
const hellishResistanceInfo = <HTMLElement>document.querySelector('#hellishResistanceInfo');

const infernalLegacyPreview = <HTMLElement>document.querySelector('#infernalLegacyPreview');
const infernalLegacyInfo = <HTMLElement>document.querySelector('#infernalLegacyInfo');

// Racial skills functions

// Dragonborn

const dragonbornDraconicAncestry = () => {
  
  let selectedDraconicAncestry = <HTMLOptionElement>draconicAncestry.options[draconicAncestry.selectedIndex];

  let charDraconicAncestry: string = selectedDraconicAncestry.textContent.toLowerCase();
    
  return Races[charRace].special.draconicAncestry
    ? (
        draconicAncestryPreview.parentElement.classList.remove('d-none'),
        draconicAncestryPreview.parentElement.classList.add('d-flex'),
        draconicAncestryPreview.setAttribute('title', Races.dragonborn.special.draconicAncestry.info),
        dragonType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].color),
        damageType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type),
        breathWeapon.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].breath),
        damageResistancePreview.parentElement.classList.remove('d-none'),
        damageResistancePreview.parentElement.classList.add('d-flex'),
        damageResistanceType.textContent = Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type
      )
    : (
        draconicAncestryPreview.parentElement.classList.remove('d-flex'),
        draconicAncestryPreview.parentElement.classList.add('d-none'),
        draconicAncestryHelp.textContent = ""
      )
    
}

// Dwarf 

// Dwarf Stonecunning

const dwarfStonecunning = () => {
  
  return Races[charRace].special.stonecunning
    ? (
        func.showElementWithProps(stonecunningPreview, Races[charRace].special.stonecunning.info, `Stonework (Int, Hist)`)
      )
    : stonecunningPreview.parentElement.classList.add('d-none')
  
}

// Dwarf tool proficiency

const dwarfToolProficiency = () => {
  
  return Races[charRace].special.toolProficiency
    ? (
        func.showElementWithProps(toolProficiencyPreview, Races[charRace].special.stonecunning.info, `Pick one: Smith’s tools, Mason’s tools, or Brewer’s supplies)`)
      )
    : toolProficiencyPreview.parentElement.classList.add('d-none')
  
}

// Elf Keen Senses Perception Bonus Skill

const elfKeenSenses = () => {
  
  return Races[charRace].special.keenSenses
    ? highightSkill('perception')
    : null
  
}

// Elf Trance sleep skill
  
const elfTrance = () => {
  
  return Races[charRace].special.trance
    ? func.showElementWithProps(tranceInfo, Races[charRace].special.trance.info, "Details")
    : null
  
}  

// Halfling lightfoot stealth skill

const lightfootNaturallyStealthy = () => {
  
  return charSubrace === "lightfoot"
    ? func.showElementWithProps(stealthInfo, Races[charRace].subrace.naturallyStealthy.info, "Details")
    : null
  
}

// Half-orc special abilities

const halforcMenacing = () => {
  
  return Races[charRace].special.menacing
    ? func.showElementWithProps(menacingInfo, Races[charRace].special.menacing.info, "Details")
    : null
  
}

const halforcRelentlessEndurance = () => {
  
  return Races[charRace].special.relentlessEndurance
    ? func.showElementWithProps(relentlessEnduranceInfo, Races[charRace].special.relentlessEndurance.info, "Details")
    : null
  
}

const halforcSavageAttacks = () => {
  
  return Races[charRace].special.savageAttacks
    ? func.showElementWithProps(savageAttacksInfo, Races[charRace].special.savageAttacks.info, "Details")
    : null
  
}

// Rock gnome special abilities

const rockgnomeSpecials = () => {
  
  return charSubrace === "rockgnome"
    ? (
      func.showElementWithProps(artificersLoreInfo, Races[charRace].subrace.artificersLore.info, "Details"),
      func.showElementWithProps(tinkerPreview, Races[charRace].subrace.tinker.info, "Tinker"),
        tinkerInfo.setAttribute('title', Races[charRace].subrace.tinker.details),
        tinkerInfo.textContent = "Details"
      )
    : null
  
}


// Tiefling special abilities\

const tieflingHellishResistance = () => {
  
  return Races[charRace].special.hellishResistance
    ? func.showElementWithProps(hellishResistanceInfo, Races[charRace].special.hellishResistance.info, "Details")
    : null
  
}

const tieflingInfernalLegacy = () => {
  
  return Races[charRace].special.infernalLegacy
    ? func.showElementWithProps(infernalLegacyInfo, Races[charRace].special.infernalLegacy.info, "Details")
    : null
  
}

// Skill functions

// const showSkillSlots = (characterClass) => {
  
//   // get number of skills for class
//   const numberOfSkills: number = Classes[charClass].skills
//   //loop through and display skill selects
  
  
// }

const getSelectedSkills = () => {
  selectedSkill1 = skill1.options[skill1.selectedIndex];
  selectedSkill2 = skill2.options[skill2.selectedIndex];
  selectedSkill3 = skill3.options[skill3.selectedIndex];
}

// Get any modifiers to the proficiency bonus for a skill
const getSkillModifier = skillText => {

  let skillAbility: string = String(singleWord.exec(skillText));
  let skillAbilityScore: number = lookupAbilityScore(skillAbility[0].toLowerCase());
  abilityScoreMod = func.getAbilityScoreModifier(skillAbilityScore);
  return totalMod = abilityScoreMod + proficiencyBonus;

};

// highlight a single skill
const highightSkill = skillText => {

  for(let i = 0; i < skillsPreviewListItems.length; i++) {
    let skill = <HTMLElement>skillsPreviewListItems[i];
    let skillName = <HTMLElement>skillsPreviewListItems[i].childNodes[1];
    let skillText = String(skillsPreviewListItems[i].childNodes[1].textContent).toLowerCase();

    skillText === skillText
      ? (
          skill.style.color = 'green',
          getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent),
          func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5])
        )
      : null;
  }

}

// highlight choosen skills on character creation
const highlightSkills = () => {
  // Get current values of required info
  getSelectedSkills();
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
      func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5]);
    } else {
      // if no match dim selection
      skill.style.color = '#ccc';
    }
  }
}

const highlightRacialSKills = () => {

  setRace();

  setSubrace();

  // Dwarf

  dwarfStonecunning();

  dwarfToolProficiency();

  addDwarvenToughness();

  // Dragonborn
    
  dragonbornDraconicAncestry();
  
  // Elf

  elfKeenSenses();
  
  elfTrance();
  
  // Half-Elf
  
  addHalfElfAbilityMofifiers();  // Half-Elf racial ability score bonus (Any 2 plus Charisma)

  // Half-orc

  halforcMenacing();
  
  halforcRelentlessEndurance();
  
  halforcSavageAttacks();
    
  // Tiefling 

  tieflingHellishResistance();
  
  tieflingInfernalLegacy();
  
  // Subrace skills
  
  // Halfling Lightfoots

  lightfootNaturallyStealthy();

  // Rock gnome special abilities

  rockgnomeSpecials();

}

// Skills combined function call

const skillCreation = () => {

  updateProficiencyBonus();

  // Highlight selected skills and append skill modifier

  highlightSkills();

  // Preview racial abilities

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

const weaponProficiencesPreview = <HTMLElement>document.querySelector('#weaponProficiencesPreview');

// Combat functions

const initialHitPoints = () => {
  // 1st level is max hit points + constiution modifier + racial modifier
  let modifier: number = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
  let hitpoints: number = (Classes[charClass].hitdie + modifier);
  hitPointPreview.textContent = String(hitpoints);
}

const addHitPoints = () => {
  let currentHitPoints: number = Number(hitPointPreview.textContent);
  let rolledHitPoints: number = func.randomIntFromRange(1, Classes[charClass].hitdie)
  modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod
  let hitPointsToAdd: number = (rolledHitPoints + modifier);
  // Prevent negative or zero hit points on level up
  if(rolledHitPoints + modifier <= 0) {
    hitPointsToAdd = 1;
  }
  hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
}

const armorClass = () => {
  let base: number = 10;
  let dexMod: number = func.getAbilityScoreModifier(Number(dexerity))
  let armorMod: number = 0;
  let ac = String(base + dexMod + armorMod);
  armorClassPreview.textContent = ac;
}

const initiativeMod = () => {
  let dexMod: number = func.getAbilityScoreModifier(Number(dexerity))
  initiativeModPreview.textContent = String(dexMod);
}

const baseSpeed = () => speedPreview.textContent = Races[charRace].speed;

const passivePerception = () => passivePerceptionPreview.textContent = String(10 + func.getAbilityScoreModifier(wisdom));

const darkvision = () => {
  setRace();
  if (Races[charRace].darkvision) {
    darkvisionPreview.textContent = '60 ft.'
  } else {
    darkvisionPreview.textContent = 'None'
  }
}

const setCharacterSize = () => sizePreview.textContent = Races[charRace].size;

const calculateWeaponProficiencies = () => {

  setRace();
  setSubrace();

  charRace === 'dwarf'
    ? Races[charRace].weaponProficiences.map(weapon => {
      weaponProficiencesPreview.textContent += weapon + ", ";
    })
    : null;

  charSubrace === 'highelf'
    ? Races[charRace].subrace.weaponProficiences.map(weapon => {
      weaponProficiencesPreview.textContent += weapon + ", ";
    })
    : null;


}

// Saving throws

const savingThrowList = <HTMLElement>document.querySelector('#savingThrowPreviewList');
const savingThrowListItems = savingThrowList.children;

// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)

const calculateSavingThrowMods = () => {

  setClass();
  
  let abilities = Classes[charClass].savingThrows;

  abilities.map(ability => {
    // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
    for(let i = 0; i < savingThrowListItems.length; i++) {
      let string: string = (singleWord.exec(savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
      if(string === ability) {
        let abilityMod: number = func.getAbilityScoreModifier(lookupAbilityScore(ability));
        let totalMod: number = Number(abilityMod + proficiencyBonus);
        func.appendSigntoValue(totalMod, savingThrowListItems[i].childNodes[3]);
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

  setRace();

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

  initialHitPoints();

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
  
  setClass();

  // Get level up variables

  constitution = ele.rolledConstitution.textContent;

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

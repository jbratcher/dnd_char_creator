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

////////////////////////////////////////////////////////////
// Get character info input elements, populate with data
// and add dynamic updating
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// General Info / User Input
////////////////////////////////////////////////////////////

// User input in chronological order

// Class Select

// Add available classes to select and set value of class

func.addOptionsToSelect(ele.cls, ClassList);

let selectedClass = <HTMLOptionElement>ele.cls.options[ele.cls.selectedIndex];

let charClass: string = selectedClass.textContent.toLowerCase();

// Set value of character property to current selected item
// const setCharacterProperty = (property: string, selectElement: HTMLSelectElement) => {
//   let selectedPropertyIndex = <HTMLOptionElement>selectElement.options[selectElement.selectedIndex];
//   property = selectedPropertyIndex.textContent.toLowerCase().replace(/-/g,"");
// }

// Set value of class variable to current selected item
const setClass = () => {
  selectedClass = ele.cls.options[ele.cls.selectedIndex];
  charClass = selectedClass.textContent.toLowerCase().replace(/-/g,"");
}

// Set class description text and change on class selection change

func.setText(ele.classHelp, Classes[charClass].info);


// Race Select

func.addOptionsToSelect(ele.race, RaceList);

let selectedRace = <HTMLOptionElement>ele.race.options[ele.race.selectedIndex];

let charRace: string = selectedRace.textContent.toLowerCase().replace(/-/g,""); // "i.e. human, halfelf, halforc"

const setRace = () => {
  charRace = ele.race.options[ele.race.selectedIndex].textContent.toLowerCase().replace(/-/g,"");
}

func.setText(ele.raceHelp, Races[charRace].info);

// Subrace Select (Optional, if subrace exists)

let charSubrace: string = ele.subrace.textContent.toLowerCase().replace(/-|\s/g,"");

// Subrace select

const showOptionalSubraceSelect = () => {

  setRace();

  // Reset any subrace from previous selection
  ele.subrace.innerHTML = ""
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

const setSubrace = () => {
  // if subrace exists for selected race, subrace element is shown, otherwise it stays hidden
  if(!ele.subrace.parentElement.classList.contains("d-none")) {
    charSubrace = ele.subrace.options[ele.subrace.selectedIndex].textContent.toLowerCase().replace(/-|\s/g,"") // normalize subrace text to all lowercase joined letters
  } else {
    return null;
  }
}


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

// Iniialize help text on page load
ageHelpText();


// Dragonborn: Draconic Ancestry / Dragonborn "subrace"

const showDraconicAncestrySelect = () => {

  setRace();

  // if ancestry exists, populate and show ancestry select element 
  Races[charRace].special.draconicAncestry
    ? (
        func.addOptionsToSelect(ele.draconicAncestry, Races[charRace].special.draconicAncestry.types),
        ele.draconicAncestryHelp.textContent = 'Choose a dragon lineage.',
        ele.draconicAncestrySection.classList.remove('d-none')
      )
    : (
        ele.draconicAncestrySection.classList.add('d-none'),
        ele.draconicAncestryHelp.textContent = ''
      )
}

// Initialize on page load
showDraconicAncestrySelect();


// Extra Language Selection: Human and Half-elf

// Display extra language select element if race selection is Human, Half-Elf, or High Elf and populate with language options

func.addOptionsToSelect(ele.extraLanguage, Languages.standard);

const showExtraLanguageInput = () => {

  setRace();
  setSubrace();

  charRace === 'human'
    ? (
        ele.extraLanguageField.classList.remove('d-none'),
        func.setText(ele.extraLanguageHelp, `Humans get to choose 1 extra language` )
      )
    : charRace === 'halfelf'
    ? (
        ele.extraLanguageField.classList.remove('d-none'),
        func.setText(ele.extraLanguageHelp, `Half-Elves get to choose 1 extra language` )
      )
    : charSubrace === 'highelf'
    ? (
        ele.extraLanguageField.classList.remove('d-none'),
        func.setText(ele.extraLanguageHelp, `High Elves get to choose 1 extra language` )
      )
    : (
      ele.extraLanguageField.classList.add('d-none'),
      ele.extraLanguageHelp.textContent = ''
    )

}


// Skill select

func.addOptionsToSelect(ele.skill1, Skills);

let skillList1 = ele.skill1.children;

func.addOptionsToSelect(ele.skill2, Skills);

let skillList2 = ele.skill2.children;

func.addOptionsToSelect(ele.skill3, Skills);

let skillList3 = ele.skill3.children;

let availableSkills = Classes[charClass].availableSkills;

let selectedSkill1 = ele.skill1.options[ele.skill1.selectedIndex];

let selectedSkill2 = ele.skill2.options[ele.skill2.selectedIndex];

let selectedSkill3 = ele.skill3.options[ele.skill3.selectedIndex];

// Skill functions

const highlightAvailableSkills = () => {
  
  setClass();

  availableSkills = Classes[charClass].availableSkills;

  func.addOptionsToSelect(ele.skill1, availableSkills);
  func.addOptionsToSelect(ele.skill2, availableSkills);
  func.addOptionsToSelect(ele.skill3, availableSkills);

}

// Initialize state for selected class on document load

highlightAvailableSkills();

////////////////////////////////////////////////////////////
// General Preview information
////////////////////////////////////////////////////////////

// General functions

const charImageSet = () => {
  let characterAttributes = func.getCharacterAttributes(charClass, charRace, charGender);
  ele.characterImg.src = func.getCharacterImage(characterAttributes);
}

const charLevelUp = () => {
  ele.currentLevel.textContent = String(Number(ele.currentLevel.textContent) + 1);
  ele.experienceNextLevel.textContent = String(Levels[Number(ele.currentLevel.textContent)-1].experience);
  updateProficiencyBonus();
}

const updateProficiencyBonus = () => {
  proficiencyBonus = Levels[ele.currentLevel.textContent].bonus;
  ele.proficiencyBonusPreview.textContent = String(Levels[ele.currentLevel.textContent].bonus);
  func.appendSigntoValue(proficiencyBonus, ele.proficiencyBonusPreview);
}

const addExp = () => {
    let currentExpNum: number = Number(ele.currentExperience.textContent);
    let newExpNum: number = Number(ele.addNewExperienceInput.value)
    ele.currentExperience.textContent = String(currentExpNum + newExpNum);
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
  
  let knownLanguages = Races[charRace].languages.toString().split().join("\r\n") + `${String(ele.extraLanguage.value)}`
  
  func.showElementWithProps(ele.languagesPreview, "Known Languages", knownLanguages)

  ele.currentLevel.textContent = String(Levels[0].level);

  ele.experienceNextLevel.textContent = String(Levels[0].experience);

  ele.namePreview.textContent = ele.name.value;

  ele.racePreview.textContent = selectedRace.textContent;

  ele.genderPreview.textContent = ele.gender.value;

  ele.agePreview.textContent = ele.age.value;

  ele.clsPreview.textContent = func.capitialize(charClass);

  ele.alignmentPreview.textContent = selectedAlignment.textContent;

}

////////////////////////////////////////////////////////////
// Ability Scores
////////////////////////////////////////////////////////////

// Ability score variables

let abilityScoreListItems = ele.abilityScoreList.children;

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

func.addOptionsToSelect(ele.extraAbilityModifier1, Abilities);

const showExtraModifiersInput = () => {

  setRace();
  
  // Add ability options to extra ability select element

  charRace === 'halfelf'
    ? ele.extraAbilityModifier.classList.remove('d-none')
    : ele.extraAbilityModifier.classList.add('d-none');

  charRace === 'halfelf'
    ? ele.extraAbilityModifierHelp.textContent = 'Half-Elves get to choose 2 extra ability scores to add +1'
    : ele.extraAbilityModifierHelp.textContent = '';

}

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

hideModSelection(ele.extraAbilityModifier1, ele.extraAbilityModifier2);

// if extra ability score is selected add +1 to ability score preview

const addHalfElfAbilityMofifiers = () => {

  if(charRace === 'halfelf') {
    // get selected abilities text
    let mod1: string = ele.extraAbilityModifier1.options[ele.extraAbilityModifier1.selectedIndex].textContent;
    let mod2: string = ele.extraAbilityModifier2.options[ele.extraAbilityModifier2.selectedIndex].textContent;
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

// Racial skills functions

// Dragonborn

const dragonbornDraconicAncestry = () => {
  
  let selectedDraconicAncestry = ele.draconicAncestry.options[ele.draconicAncestry.selectedIndex];

  let charDraconicAncestry: string = selectedDraconicAncestry.textContent.toLowerCase();
    
  return Races[charRace].special.draconicAncestry
    ? (
        ele.draconicAncestryPreview.parentElement.classList.remove('d-none'),
        ele.draconicAncestryPreview.parentElement.classList.add('d-flex'),
        ele.draconicAncestryPreview.setAttribute('title', Races.dragonborn.special.draconicAncestry.info),
        ele.dragonType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].color),
        ele.damageType.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type),
        ele.breathWeapon.textContent = String(Races.dragonborn.special.draconicAncestry[charDraconicAncestry].breath),
        ele.damageResistancePreview.parentElement.classList.remove('d-none'),
        ele.damageResistancePreview.parentElement.classList.add('d-flex'),
        ele.damageResistanceType.textContent = Races.dragonborn.special.draconicAncestry[charDraconicAncestry].type
      )
    : (
        ele.draconicAncestryPreview.parentElement.classList.remove('d-flex'),
        ele.draconicAncestryPreview.parentElement.classList.add('d-none'),
        ele.draconicAncestryHelp.textContent = ""
      )
    
}

// Dwarf 

// Dwarf Stonecunning

const dwarfStonecunning = () => {
  
  return Races[charRace].special.stonecunning
    ? (
        func.showElementWithProps(ele.stonecunningPreview, Races[charRace].special.stonecunning.info, `Stonework (Int, Hist)`)
      )
    : ele.stonecunningPreview.parentElement.classList.add('d-none')
  
}

// Dwarf tool proficiency

const dwarfToolProficiency = () => {
  
  return Races[charRace].special.toolProficiency
    ? (
        func.showElementWithProps(ele.toolProficiencyPreview, Races[charRace].special.stonecunning.info, `Pick one: Smith’s tools, Mason’s tools, or Brewer’s supplies)`)
      )
    : ele.toolProficiencyPreview.parentElement.classList.add('d-none')
  
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
    ? func.showElementWithProps(ele.tranceInfo, Races[charRace].special.trance.info, "Details")
    : null
  
}  

// Halfling lightfoot stealth skill

const lightfootNaturallyStealthy = () => {
  
  return charSubrace === "lightfoot"
    ? func.showElementWithProps(ele.stealthInfo, Races[charRace].subrace.naturallyStealthy.info, "Details")
    : null
  
}

// Half-orc special abilities

const halforcMenacing = () => {
  
  return Races[charRace].special.menacing
    ? func.showElementWithProps(ele.menacingInfo, Races[charRace].special.menacing.info, "Details")
    : null
  
}

const halforcRelentlessEndurance = () => {
  
  return Races[charRace].special.relentlessEndurance
    ? func.showElementWithProps(ele.relentlessEnduranceInfo, Races[charRace].special.relentlessEndurance.info, "Details")
    : null
  
}

const halforcSavageAttacks = () => {
  
  return Races[charRace].special.savageAttacks
    ? func.showElementWithProps(ele.savageAttacksInfo, Races[charRace].special.savageAttacks.info, "Details")
    : null
  
}

// Rock gnome special abilities

const rockgnomeSpecials = () => {
  
  return charSubrace === "rockgnome"
    ? (
      func.showElementWithProps(ele.artificersLoreInfo, Races[charRace].subrace.artificersLore.info, "Details"),
      func.showElementWithProps(ele.tinkerPreview, Races[charRace].subrace.tinker.info, "Tinker"),
        ele.tinkerInfo.setAttribute('title', Races[charRace].subrace.tinker.details),
        ele.tinkerInfo.textContent = "Details"
      )
    : null
  
}


// Tiefling special abilities\

const tieflingHellishResistance = () => {
  
  return Races[charRace].special.hellishResistance
    ? func.showElementWithProps(ele.hellishResistanceInfo, Races[charRace].special.hellishResistance.info, "Details")
    : null
  
}

const tieflingInfernalLegacy = () => {
  
  return Races[charRace].special.infernalLegacy
    ? func.showElementWithProps(ele.infernalLegacyInfo, Races[charRace].special.infernalLegacy.info, "Details")
    : null
  
}

// Skill functions

// const showSkillSlots = (characterClass) => {
  
//   // get number of skills for class
//   const numberOfSkills: number = Classes[charClass].skills
//   //loop through and display skill selects
  
  
// }

const getSelectedSkills = () => {
  selectedSkill1 = ele.skill1.options[ele.skill1.selectedIndex];
  selectedSkill2 = ele.skill2.options[ele.skill2.selectedIndex];
  selectedSkill3 = ele.skill3.options[ele.skill3.selectedIndex];
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

  for(let i = 0; i < ele.skillsPreviewListItems.length; i++) {
    let skill = <HTMLElement>ele.skillsPreviewListItems[i];
    let skillName = <HTMLElement>ele.skillsPreviewListItems[i].childNodes[1];
    let skillText = String(ele.skillsPreviewListItems[i].childNodes[1].textContent).toLowerCase();

    skillText === skillText
      ? (
          skill.style.color = 'green',
          getSkillModifier(ele.skillsPreviewListItems[i].childNodes[3].textContent),
          func.appendSigntoValue(totalMod, ele.skillsPreviewListItems[i].childNodes[5])
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
  for(let i = 0; i < ele.skillsPreviewListItems.length; i++) {
    let skill = <HTMLElement>ele.skillsPreviewListItems[i];
    let skillName = <HTMLElement>ele.skillsPreviewListItems[i].childNodes[1];
    let skillText = ele.skillsPreviewListItems[i].childNodes[1].textContent;
    // reset modifier node to '-'
    ele.skillsPreviewListItems[i].childNodes[5].textContent = "-";
    if(
      skillText === selectedSkill1.textContent.trim()
      || skillText === selectedSkill2.textContent.trim()
      || skillText === selectedSkill3.textContent.trim()
    ) {
      skill.style.color = 'green';
      getSkillModifier(ele.skillsPreviewListItems[i].childNodes[3].textContent);
      func.appendSigntoValue(totalMod, ele.skillsPreviewListItems[i].childNodes[5]);
    } else {
      // if no match dim selection
      skill.style.color = '#ccc';
    }
  }
}

// Set value of Dwarven Toughtness hit point modifier based on race selection

const addDwarvenToughness = () => {

  setRace();

  charRace === "dwarf"
    ? dwarvenToughnessMod = 1
    : dwarvenToughnessMod = 0
  return dwarvenToughnessMod

}

const racialBonuses = () => {

    addDwarvenToughness();

    addHalfElfAbilityMofifiers();  // Half-Elf racial ability score bonus (Any 2 plus Charisma)

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

// Function to combine related functions (TODO: can be combined with other racial)

const clearRacialSkils = () => {

  // set text content and attr to 'null', hide elements in preview

  // Combat tab

  func.resetProps(ele.weaponProficiencesPreview);
  func.resetProps(ele.poisonResistance);
  func.resetProps(ele.charmResistance);
  func.resetProps(ele.fearResistance);

  // Skills tab - Additional Skills

  func.resetProps(ele.languagesPreview);
  func.hideParentElement(ele.toolProficiencyPreview);
  func.resetProps(ele.toolProficiencyPreview);

  // Dwarf
  func.hideParentElement(ele.stonecunningPreview);
  func.resetProps(ele.stonecunningPreview);

  // Dragonborn
  func.hideParentElement(ele.draconicAncestryPreview);
  func.resetProps(ele.draconicAncestryPreview);
  func.hideParentElement(ele.damageResistancePreview);
  func.resetProps(ele.damageResistanceType);
  ele.dragonType.textContent = "";
  ele.damageType.textContent = "";
  ele.breathWeapon.textContent = "";

  // Elf
  func.hideParentElement(ele.trancePreview);
  func.resetProps(ele.tranceInfo);

  // Halfling - Lightfoot
  func.hideParentElement(ele.stealthPreview);
  func.resetProps(ele.stealthInfo);

  // Gnome - Rock Gnome
  func.hideParentElement(ele.artificersLorePreview);
  func.resetProps(ele.artificersLoreInfo);
  func.hideParentElement(ele.tinkerPreview);
  func.resetProps(ele.tinkerInfo);

  // Half-orc
  func.hideParentElement(ele.menacingPreview);
  func.resetProps(ele.menacingInfo);
  func.hideParentElement(ele.relentlessEndurancePreview);
  func.resetProps(ele.relentlessEnduranceInfo);
  func.hideParentElement(ele.savageAttacksPreview);
  func.resetProps(ele.savageAttacksInfo);

  // Tiefling
  func.hideParentElement(ele.hellishResistancePreview);
  func.resetProps(ele.hellishResistanceInfo);
  func.hideParentElement(ele.infernalLegacyPreview);
  func.resetProps(ele.infernalLegacyInfo);

}


////////////////////////////////////////////////////////////
// Combat
////////////////////////////////////////////////////////////

// Combat functions

const initialHitPoints = () => {
  // 1st level is max hit points + constiution modifier + racial modifier
  let modifier: number = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod;
  let hitpoints: number = (Classes[charClass].hitdie + modifier);
  ele.hitPointPreview.textContent = String(hitpoints);
}

const addHitPoints = () => {
  let currentHitPoints: number = Number(ele.hitPointPreview.textContent);
  let rolledHitPoints: number = func.randomIntFromRange(1, Classes[charClass].hitdie)
  modifier = func.getAbilityScoreModifier(constitution) + dwarvenToughnessMod
  let hitPointsToAdd: number = (rolledHitPoints + modifier);
  // Prevent negative or zero hit points on level up
  if(rolledHitPoints + modifier <= 0) {
    hitPointsToAdd = 1;
  }
  ele.hitPointPreview.textContent = String(currentHitPoints + hitPointsToAdd);
}

const armorClass = () => {
  let base: number = 10;
  let dexMod: number = func.getAbilityScoreModifier(Number(dexerity))
  let armorMod: number = 0;
  let ac = String(base + dexMod + armorMod);
  ele.armorClassPreview.textContent = ac;
}

const initiativeMod = () => {
  let dexMod: number = func.getAbilityScoreModifier(Number(dexerity))
  ele.initiativeModPreview.textContent = String(dexMod);
}

const baseSpeed = () => ele.speedPreview.textContent = Races[charRace].speed;

const passivePerception = () => ele.passivePerceptionPreview.textContent = String(10 + func.getAbilityScoreModifier(wisdom));

const darkvision = () => {
  setRace();
  if (Races[charRace].darkvision) {
    ele.passivePerceptionPreview.textContent = '60 ft.'
  } else {
    ele.passivePerceptionPreview.textContent = 'None'
  }
}

const setCharacterSize = () => ele.sizePreview.textContent = Races[charRace].size;

const calculateWeaponProficiencies = () => {

  setRace();
  setSubrace();

  charRace === 'dwarf'
    ? Races[charRace].weaponProficiences.map(weapon => {
      ele.weaponProficiencesPreview.textContent += weapon + ", ";
    })
    : null;

  charSubrace === 'highelf'
    ? Races[charRace].subrace.weaponProficiences.map(weapon => {
      ele.weaponProficiencesPreview.textContent += weapon + ", ";
    })
    : null;


}

// Saving throws

// See domElements.ts

// saving throw mod is class ability score modifier and class proficiency bonus on listed types of saving throws (i.e. wizard, intelligence)

const calculateSavingThrowMods = () => {

  setClass();
  
  let abilities = Classes[charClass].savingThrows;

  abilities.map(ability => {
    // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
    for(let i = 0; i < ele.savingThrowListItems.length; i++) {
      let string: string = (singleWord.exec(ele.savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
      if(string === ability) {
        let abilityMod: number = func.getAbilityScoreModifier(lookupAbilityScore(ability));
        let totalMod: number = Number(abilityMod + proficiencyBonus);
        func.appendSigntoValue(totalMod, ele.savingThrowListItems[i].childNodes[3]);
      }
    }
  });

}

// Special Resistances functions

const calculateSpecialResistances = () => {

  setRace();

  if(charRace === 'dwarf') {

    ele.poisonResistance.textContent = `Advantage, Resistance`;
    ele.poisonResistance.setAttribute('title', Races[charRace].special.resilience.info);

  }

  if(charRace === 'elf' || charRace === 'halfelf') {

    ele.charmResistance.textContent = 'Advantage';
    ele.charmResistance.setAttribute('title', Races[charRace].special.feyAncestry.info);

  }

  if(charRace === 'gnome') {

    let types = Races[charRace].special.gnomeCunning.type

    types.map(type => {
    // match modifer to saving throw item (i.e. strength mod to strenth saving throw)
    for(let i = 0; i < ele.savingThrowListItems.length; i++) {
      let string: string = (singleWord.exec(ele.savingThrowListItems[i].childNodes[1].textContent)[0]).toLowerCase();
      if(string === type) {
        ele.savingThrowListItems[i].childNodes[1].textContent += ` (Advantage)`;
      }
    }
  });

  }

  if(charRace === 'halfling') {

    ele.fearResistance.textContent = 'Advantage';
    ele.fearResistance.setAttribute('title', Races[charRace].special.brave.info);

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
// Event Listeners
////////////////////////////////////////////////////////////

// Event listeners for rolling ability scores

ele.rollStrength.addEventListener('click', () => func.setScore(ele.rolledStrength));
ele.rollDexerity.addEventListener('click', () => func.setScore(ele.rolledDexerity));
ele.rollConstitution.addEventListener('click', () => func.setScore(ele.rolledConstitution));
ele.rollWisdom.addEventListener('click', () => func.setScore(ele.rolledWisdom));
ele.rollIntelligence.addEventListener('click', () => func.setScore(ele.rolledIntelligence));
ele.rollCharisma.addEventListener('click', () => func.setScore(ele.rolledCharisma));

// Handle Class selection changes

ele.cls.addEventListener('change', function() {
  setClass();
  func.setText(ele.classHelp, Classes[charClass].info);
  highlightAvailableSkills();
});

// Handle race and subrace selection changes

ele.race.addEventListener('change', function() {
  setRace();
  func.setText(ele.raceHelp, Races[charRace].info);
  showOptionalSubraceSelect();
  availableAlignments();
  ageHelpText();
  showDraconicAncestrySelect();
  showExtraLanguageInput();
  showExtraModifiersInput();
  clearRacialSkils();
});

// On subrace selection, get value of subrace and display descriptive text
ele.subrace.addEventListener('change', function() {
  setSubrace();
  func.setText(ele.subraceHelp, Races[charRace].subrace.helpText);
  showExtraLanguageInput();
  clearRacialSkils();
});

// Hide ability from extra ability modifier list

ele.extraAbilityModifier1.addEventListener('change', function() {
  hideModSelection(ele.extraAbilityModifier1, ele.extraAbilityModifier2)
})

ele.extraAbilityModifier2.addEventListener('change', function() {
  hideModSelection(ele.extraAbilityModifier2, ele.extraAbilityModifier1)
})


////////////////////////////////////////////////////////////
// Character Creation
////////////////////////////////////////////////////////////

ele.createCharacterButton.addEventListener('click', e => {

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

ele.levelUpButton.addEventListener('click', e => {

  e.preventDefault();
  
  setClass();

  // Get level up variables

  constitution = ele.rolledConstitution.textContent;

  if(ele.currentLevel.textContent === "20") {
    return;
  }

  charLevelUp();

  addHitPoints();

  highlightSkills();

});

ele.addNewExperienceButton.addEventListener('click', e => {

  e.preventDefault();

  addExp();

  ele.addNewExperienceInput.value = null;

});

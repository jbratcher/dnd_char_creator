////////////////////////////////////////
// Imports
////////////////////////////////////////

import * as func from './functions.js';

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

// Initialize variables

let modifier: number;

let totalMod: number;

let abilityScore: number;

let abilityScoreMod: number;

let proficiencyBonus: number;

const singleWord = /(\w+)/;  // capture a single word (i.e. 'strength')

////////////////////////////////////////
// Ability score DOM elements
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

// Event listeners for rolling ability scores

rollStrength.addEventListener('click', () => func.setScore(rolledStrength));

rollDexerity.addEventListener('click', () => func.setScore(rolledDexerity));

rollConstitution.addEventListener('click', () => func.setScore(rolledConstitition));

rollWisdom.addEventListener('click', () => func.setScore(rolledWisdom));

rollIntelligence.addEventListener('click', () => func.setScore(rolledIntelligence));

rollCharisma.addEventListener('click', () => func.setScore(rolledCharisma));

// Setters for ability scores

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

// General Info

// Name

const name = <HTMLInputElement>document.querySelector('#name');

// Class

const cls = <HTMLSelectElement>document.querySelector('#cls');

func.addOptionsToSelect(cls, ClassList);

let selectedCls = <HTMLOptionElement>cls.options[cls.selectedIndex];

let charCls: string = selectedCls.textContent.toLowerCase();

const classHelp = <HTMLElement>document.querySelector('#classHelp');

const setClass = () => {
  charCls = cls.options[cls.selectedIndex].textContent.toLowerCase().replace(/-/g,"");
}

func.setText(classHelp, ClassProps[charCls].info);

cls.addEventListener('change', function() {
  setClass();
  func.setText(classHelp, ClassProps[charCls].info);
});

// Race

const race = <HTMLSelectElement>document.querySelector('#race');

func.addOptionsToSelect(race, RaceList);

let selectedRace = <HTMLOptionElement>race.options[race.selectedIndex];

let charRace: string = selectedRace.textContent.toLowerCase().replace(/-/g,""); // "i.e. human, halfelf, halforc"

const raceHelp = <HTMLElement>document.querySelector('#raceHelp');

const setRace = () => {
  charRace = race.options[race.selectedIndex].textContent.toLowerCase().replace(/-/g,"");
}

func.setText(raceHelp, Races[charRace].info);

race.addEventListener('change', function() {
  setRace();
  func.setText(raceHelp, Races[charRace].info);
});

// Alignment

const alignment = <HTMLSelectElement>document.querySelector('#alignment');

func.addOptionsToSelect(alignment, Alignments)

let selectedAlignment = <HTMLOptionElement>alignment.options[alignment.selectedIndex];

// limits alignment options to race recommendations

const availableAlignments = () => {

  alignment.innerHTML = "";  // reset alignment select options
  setRace();
  func.addOptionsToSelect(alignment, Races[charRace].alignments);

}

race.addEventListener('change', availableAlignments);  // Alignment options regenerate on race selection

// Gender

const gender = <HTMLInputElement>document.querySelector('#gender');

let charGender: string = gender.value.toLowerCase();

// Subrace

const subraceSelectSection = <HTMLElement>document.querySelector('#optionalSubrace');

const subrace = <HTMLSelectElement>document.querySelector('#subrace');

const subraceHelp = <HTMLElement>document.querySelector('#subraceHelp');

let charSubrace: string = subrace.textContent.toLowerCase().replace(/-|\s/g,"");

// Subrace select

const showOptionalSubraceSelect = () => {

  setRace();

  subrace.innerHTML = "-"  // Reset any subrace from previous selection
  subraceHelp.textContent = "";

  Races[charRace].subrace
    ? (
      func.addOptionsToSelect(subrace, ["-"]),  // Make first option "null"
      func.addOptionsToSelect(subrace, Races[charRace].subrace.name),
      subraceSelectSection.classList.remove('d-none')
      )
    : subraceSelectSection.classList.add('d-none')

}

race.addEventListener('change', showOptionalSubraceSelect);  // Subrace options regenerate on race selection change

const setSubrace = () => {
  if(!subrace.classList.contains("d-none")) {
    charSubrace = subrace.options[subrace.selectedIndex].textContent.toLowerCase().replace(/-|\s/g,"");
    console.log(charSubrace);
  } else {
    return null;
  }
}

func.setText(subraceHelp, "");

subrace.addEventListener('change', function() {
  setSubrace();
  func.setText(subraceHelp, Races[charRace].subrace.helpText);

});

// Age

const age = <HTMLInputElement>document.querySelector('#age');

const ageHelp = <HTMLElement>document.querySelector('#ageHelp');

// Displays race specific age help text on race selection

const ageHelpText = () => {
  setRace();
  func.setText(ageHelp, `Please enter an age between ${Races[charRace].age.min} and  ${Races[charRace].age.max}` )
}

race.addEventListener('change', ageHelpText);

// Iniialize help text on page load

ageHelpText();

// Dragonborn: Draconic Ancestry

const draconicAncestrySection = <HTMLElement>document.querySelector('#draconicAncestrySection');

const draconicAncestry = <HTMLSelectElement>document.querySelector('#draconicAncestry');

const draconicAncestryHelp = <HTMLElement>document.querySelector('#draconicAncestryHelp');

const showDraconicAncestrySelect = () => {

  setRace();

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

race.addEventListener('change', showDraconicAncestrySelect);

showDraconicAncestrySelect();

// Extra Language Selection: Human and Half-elf

// Display extra language field if race selection is human or halfelf and add language options

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
        extraLanguageHelp.textContent = 'Humans get to choose 1 extra language'
      )
    : charRace === 'halfelf'
    ? (
      extraLanguageField.classList.remove('d-none'),
      extraLanguageHelp.textContent = 'Half-Elves get to choose 1 extra language'
    )
    : charSubrace === 'highelf'
    ? (
        extraLanguageField.classList.remove('d-none'),
        extraLanguageHelp.textContent = 'High Elves get to choose 1 extra language'
      )
    : (
      extraLanguageField.classList.add('d-none'),
      extraLanguageHelp.textContent = ''
    )


}

race.addEventListener('change', showExtraLanguageInput);

subrace.addEventListener('change', showExtraLanguageInput);

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

race.addEventListener('change', clearRacialSkils)
subrace.addEventListener('change', clearRacialSkils)

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

  func.addOptionsToSelect(skill1, availableSkills);
  func.addOptionsToSelect(skill2, availableSkills);
  func.addOptionsToSelect(skill3, availableSkills);

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

const languagesPreview = <HTMLElement>document.querySelector('#languagesPreview');

// Special Abilities

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

// General buttons

const createCharacterButton = <HTMLElement>document.querySelector('#createCharacterButton');

const levelUpButton = <HTMLElement>document.querySelector('#levelUpButton');

const addNewExperienceButton = <HTMLElement>document.querySelector('#addExp');

// General functions

const charImageSet = () => {
  let characterAttributes = func.getCharacterAttributes(charCls, charRace, charGender);
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

let dwarvenToughnessMod = 0;

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

  setRace();

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

  setRace();
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

func.addOptionsToSelect(extraAbilityModifier1, Abilities);
func.addOptionsToSelect(extraAbilityModifier2, Abilities);

// Display extra ability modifier field if race is Half-Elf

const showExtraModifiersInput = () => {

  setRace();

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

const additionalSkillsPreviewList = <HTMLElement>document.querySelector('#additionalSkillsPreviewList');

const additionalSkillsPreviewListItems = additionalSkillsPreviewList.children;

const stonecunningPreview = <HTMLElement>document.querySelector('#stonecunningPreview');

const toolProficiencyPreview = <HTMLElement>document.querySelector('#toolProficiencyPreview');

const draconicAncestryPreview = <HTMLElement>document.querySelector('#draconicAncestryPreview');

const dragonType = <HTMLElement>document.querySelector('#dragonType');

const damageType = <HTMLElement>document.querySelector('#damageType');

const breathWeapon = <HTMLElement>document.querySelector('#breathWeapon');


// Skill functions

// const showSkillSlots = () => {}

const getSelectedSkills = () => {
  selectedSkill1 = skill1.options[skill1.selectedIndex];
  selectedSkill2 = skill1.options[skill2.selectedIndex];
  selectedSkill3 = skill1.options[skill3.selectedIndex];
}

const getSkillModifier = skillText => {

  let skillAbility = (singleWord.exec(skillText));
  let skillAbilityScore: number = lookupAbilityScore(skillAbility[0].toLowerCase());
  abilityScoreMod = func.getAbilityScoreModifier(skillAbilityScore);
  return totalMod = abilityScoreMod + proficiencyBonus;

};

const highightSkill = (skillDescription) => {

  for(let i = 0; i < skillsPreviewListItems.length; i++) {
    let skill = <HTMLElement>skillsPreviewListItems[i];
    let skillName = <HTMLElement>skillsPreviewListItems[i].childNodes[1];
    let skillText = String(skillsPreviewListItems[i].childNodes[1].textContent).toLowerCase();

    skillText === skillDescription
      ? (
          skill.style.color = 'green',
          getSkillModifier(skillsPreviewListItems[i].childNodes[3].textContent),
          func.appendSigntoValue(totalMod, skillsPreviewListItems[i].childNodes[5])
        )
      : console.log('Highlight Skill: not a match');
  }

}

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

  let selectedDraconicAncestry = <HTMLOptionElement>draconicAncestry.options[draconicAncestry.selectedIndex];

  let charDraconicAncestry: string = selectedDraconicAncestry.textContent.toLowerCase();

  // Dwarf Stonecunning

  Races[charRace].special.stonecunning
    ? (
        func.showElementWithProps(stonecunningPreview, Races[charRace].special.stonecunning.info, `Stonework (Int, Hist)`)
      )
    : stonecunningPreview.parentElement.classList.add('d-none')

  // Dwarf tool proficiency

  Races[charRace].special.toolProficiency
    ? (
        func.showElementWithProps(toolProficiencyPreview, Races[charRace].special.stonecunning.info, `Pick one: Smith’s tools, Mason’s tools, or Brewer’s supplies)`)
      )
    : toolProficiencyPreview.parentElement.classList.add('d-none')

  // Dwarven Toughtness

  addDwarvenToughness();

  // Dragonborn Draconic Ancestry

  Races[charRace].special.draconicAncestry
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

  //  Elf Keen Senses Perception Bonus Skill

  Races[charRace].special.keenSenses
    ? highightSkill('perception')
    : null

  // Elf Trance sleep skill

  Races[charRace].special.trance
    ? func.showElementWithProps(tranceInfo, Races[charRace].special.trance.info, "Details")
    : null

  // Half-orc special abilities

  addHalfElfAbilityMofifiers();  // Half-Elf racial ability score bonus (Any 2 plus Charisma)

  Races[charRace].special.menacing
    ? func.showElementWithProps(menacingInfo, Races[charRace].special.menacing.info, "Details")
    : null

  Races[charRace].special.relentlessEndurance
    ? func.showElementWithProps(relentlessEnduranceInfo, Races[charRace].special.relentlessEndurance.info, "Details")
    : null

  Races[charRace].special.savageAttacks
    ? func.showElementWithProps(savageAttacksInfo, Races[charRace].special.savageAttacks.info, "Details")
    : null

  // Tiefling special abilities

  Races[charRace].special.hellishResistance
    ? func.showElementWithProps(hellishResistanceInfo, Races[charRace].special.hellishResistance.info, "Details")
    : null

  Races[charRace].special.infernalLegacy
    ? func.showElementWithProps(infernalLegacyInfo, Races[charRace].special.infernalLegacy.info, "Details")
    : null

  // Halfling lightfoot stealth skill

  charSubrace === "lightfoot"
    ? func.showElementWithProps(stealthInfo, Races[charRace].subrace.naturallyStealthy.info, "Details")
    : null

  // Rock gnome special abilities

  charSubrace === "rockgnome"
    ? (
      console.log(charSubrace),
      func.showElementWithProps(artificersLoreInfo, Races[charRace].subrace.artificersLore.info, "Details"),
      func.showElementWithProps(tinkerPreview, Races[charRace].subrace.tinker.info, "Tinker"),
        tinkerInfo.setAttribute('title', Races[charRace].subrace.tinker.details),
        tinkerInfo.textContent = "Details"
      )
    : null

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
  let hitpoints: number = (ClassProps[charCls].hitdie + modifier);
  hitPointPreview.textContent = String(hitpoints);
}

const addHitPoints = () => {
  let currentHitPoints: number = Number(hitPointPreview.textContent);
  let rolledHitPoints: number = func.randomIntFromRange(1, ClassProps[charCls].hitdie)
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

  charCls = selectedCls.textContent.toLowerCase();
  let abilities = ClassProps[charCls].savingThrows;

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

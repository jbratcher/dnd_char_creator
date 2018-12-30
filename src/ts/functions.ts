import { CharacterImages } from './characterImages.js';

let sign: string;

let modifier: number;

// Utility functions

export const capitialize = word => word.charAt(0).toUpperCase() + word.slice(1);

export const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomBoolean = () => Math.random() >= 0.5;  // Get a random true or false value

export const rollAbilityScore = () => randomIntFromRange(3,18);

export const setToMinMax = (score) => score > 18
                            ? 18
                            : score < 3
                                ? 3
                                : score;

////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////

export const addOptionsToSelect = (selectElement, dataArray) => {
  selectElement.innerHTML = "";
  dataArray.map(optionText => {
    let optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.textContent = optionText;
    selectElement.appendChild(optionElement);
  })
};

export const addOptionsToSelectWithNull = (selectElement, data) => {
  let optionElement1: HTMLOptionElement = document.createElement("option");
  optionElement1.textContent = "-"
  selectElement.appendChild(optionElement1);
  let optionElement2: HTMLOptionElement = document.createElement("option");
  optionElement2.textContent = data;
  selectElement.appendChild(optionElement2);
};

// Append sign to value

export const appendSigntoValue = (value, node) => {
  value > 0 ? sign = "+" : sign = "-";
  value = Math.abs(value);
  node.textContent = `${sign} ${value}`;
};

// Set modifier to ability score modifier value

export const getAbilityScoreModifier = (abilityScore) => modifier = Math.floor((abilityScore / 2) - 5);

export const getCharacterImage = (genderedImages) => {
  let randomIndex: number = randomIntFromRange(0, (genderedImages.length-1));
  return genderedImages[randomIndex];
};

// Get Character Attributes to set preview image

export const getCharacterAttributes = (charCls, charRace, charGender) => {
  if(charGender !== 'male' && charGender !== "female") {
    let gender: boolean = randomBoolean();
    gender ? charGender = "male" : charGender = "female";
  }
  return CharacterImages[charRace][charCls][charGender];
};

export const hideParentElement = (element) => {
  element.parentElement.classList.remove('d-flex');
  element.parentElement.classList.add('d-none')
}

export const resetProps = (element) => {
  element.textContent = "";
  element.setAttribute('title', "");
}

export const showElement = element => {
  element.classList.remove('d-none');
  element.classList.add('d-flex');
};

export const showElementWithProps = (element, titleText: string = "", contentText: string = "") => {
  element.parentElement.classList.remove('d-none');
  element.parentElement.classList.add('d-flex');
  element.setAttribute('title', titleText);
  element.textContent = contentText;
};

export const showParentElement = element => {
  element.parentElement.classList.remove('d-none');
  element.parentElement.classList.add('d-flex');
};

export const setScore = (abilityScorePreview) => {
  let score: number = rollAbilityScore();
  setToMinMax(score);
  abilityScorePreview.textContent = String(score);
};

// Clear element text then set to new value

export const setText = (element, text) => {
  element.textContent = "";
  let newText = text;
  element.textContent = text;
};

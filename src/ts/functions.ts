import { CharacterImages } from './characterImages.js';

let sign: string;

let modifier: number;

export const Functions = {
    
    // Utility functions
    
    randomIntFromRange: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomBoolean: () => Math.random() >= 0.5,  // Get a random true or false value
    
    rollAbilityScore: () => this.randomIntFromRange(3,18),
    
    setToMinMax: (score) => score > 18
                                ? 18
                                : score < 3
                                    ? 3
                                    : score,
                                    
    ////////////////////////////////////////
    // Set/Get functions
    ////////////////////////////////////////
    
    addOptionstoSelect: (selectElement, dataArray) => {
      dataArray.map(optionText => {
        let optionElement: HTMLOptionElement = document.createElement("option");
        optionElement.textContent = optionText;
        selectElement.appendChild(optionElement);
      })
    },
    
    showElement: element => {
      element.classList.remove('d-none');
      element.classList.add('d-flex');
    },
    
    showElementWithProps: (element, titleText, contentText) => {
      element.parentElement.classList.remove('d-none');
      element.parentElement.classList.add('d-flex');
      element.setAttribute('title', titleText);
      element.textContent = contentText;
    },
    
    setScore: (abilityScorePreview) => {
      let score: number = this.rollAbilityScore();
      this.setToMinMax(score);
      abilityScorePreview.textContent = String(score);
    },
    
    getCharacterImage: (genderedImages) => {
      let randomIndex: number = this.randomIntFromRange(0, (genderedImages.length-1));
      return genderedImages[randomIndex];
    },
    
    // Get Character Attributes to set preview image

    getCharacterAttributes: (charCls, charRace, charGender) => {
      if(charGender !== 'male' && charGender !== "female") {
        let gender: boolean = this.randomBoolean();
        gender ? charGender = "male" : charGender = "female";
      }
      return CharacterImages[charRace][charCls][charGender];
    },
    
    // Set modifier to ability score modifier value

    getAbilityScoreModifier: (abilityScore) => modifier = Math.floor((abilityScore / 2) - 5),

    // Append sign to value

    appendSigntoValue: (value, node) => {
      value > 0 ? sign = "+" : sign = "-";
      value = Math.abs(value);
      node.textContent = `${sign} ${value}`;
    }
    
    
};


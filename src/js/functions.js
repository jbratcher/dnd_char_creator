var _this = this;
import { CharacterImages } from './characterImages.js';
var sign;
var modifier;
export var Functions = {
    // Utility functions
    randomIntFromRange: function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); },
    randomBoolean: function () { return Math.random() >= 0.5; },
    rollAbilityScore: function () { return _this.randomIntFromRange(3, 18); },
    setToMinMax: function (score) { return score > 18
        ? 18
        : score < 3
            ? 3
            : score; },
    ////////////////////////////////////////
    // Set/Get functions
    ////////////////////////////////////////
    addOptionsToSelect: function (selectElement, dataArray) {
        dataArray.map(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText;
            selectElement.appendChild(optionElement);
        });
    },
    showElement: function (element) {
        element.classList.remove('d-none');
        element.classList.add('d-flex');
    },
    showElementWithProps: function (element, titleText, contentText) {
        if (contentText === void 0) { contentText = ""; }
        element.parentElement.classList.remove('d-none');
        element.parentElement.classList.add('d-flex');
        element.setAttribute('title', titleText);
        element.textContent = contentText;
    },
    setScore: function (abilityScorePreview) {
        var score = _this.rollAbilityScore();
        _this.setToMinMax(score);
        abilityScorePreview.textContent = String(score);
    },
    getCharacterImage: function (genderedImages) {
        var randomIndex = _this.randomIntFromRange(0, (genderedImages.length - 1));
        return genderedImages[randomIndex];
    },
    // Get Character Attributes to set preview image
    getCharacterAttributes: function (charCls, charRace, charGender) {
        if (charGender !== 'male' && charGender !== "female") {
            var gender = _this.randomBoolean();
            gender ? charGender = "male" : charGender = "female";
        }
        return CharacterImages[charRace][charCls][charGender];
    },
    // Set modifier to ability score modifier value
    getAbilityScoreModifier: function (abilityScore) { return modifier = Math.floor((abilityScore / 2) - 5); },
    // Append sign to value
    appendSigntoValue: function (value, node) {
        value > 0 ? sign = "+" : sign = "-";
        value = Math.abs(value);
        node.textContent = sign + " " + value;
    }
};

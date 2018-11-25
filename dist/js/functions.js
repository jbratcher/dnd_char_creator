'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Functions = undefined;

var _characterImages = require('./characterImages.js');

var _this = undefined;

var sign;
var modifier;
var Functions = exports.Functions = {
    // Utility functions
    randomIntFromRange: function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    randomBoolean: function randomBoolean() {
        return Math.random() >= 0.5;
    },
    rollAbilityScore: function rollAbilityScore() {
        return _this.randomIntFromRange(3, 18);
    },
    setToMinMax: function setToMinMax(score) {
        return score > 18 ? 18 : score < 3 ? 3 : score;
    },
    ////////////////////////////////////////
    // Set/Get functions
    ////////////////////////////////////////
    addOptionsToSelect: function addOptionsToSelect(selectElement, dataArray) {
        dataArray.map(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText;
            selectElement.appendChild(optionElement);
        });
    },
    showElement: function showElement(element) {
        element.classList.remove('d-none');
        element.classList.add('d-flex');
    },
    showElementWithProps: function showElementWithProps(element, titleText, contentText) {
        element.parentElement.classList.remove('d-none');
        element.parentElement.classList.add('d-flex');
        element.setAttribute('title', titleText);
        element.textContent = contentText;
    },
    setScore: function setScore(abilityScorePreview) {
        var score = _this.rollAbilityScore();
        _this.setToMinMax(score);
        abilityScorePreview.textContent = String(score);
    },
    getCharacterImage: function getCharacterImage(genderedImages) {
        var randomIndex = _this.randomIntFromRange(0, genderedImages.length - 1);
        return genderedImages[randomIndex];
    },
    // Get Character Attributes to set preview image
    getCharacterAttributes: function getCharacterAttributes(charCls, charRace, charGender) {
        if (charGender !== 'male' && charGender !== "female") {
            var gender = _this.randomBoolean();
            gender ? charGender = "male" : charGender = "female";
        }
        return _characterImages.CharacterImages[charRace][charCls][charGender];
    },
    // Set modifier to ability score modifier value
    getAbilityScoreModifier: function getAbilityScoreModifier(abilityScore) {
        return modifier = Math.floor(abilityScore / 2 - 5);
    },
    // Append sign to value
    appendSigntoValue: function appendSigntoValue(value, node) {
        value > 0 ? sign = "+" : sign = "-";
        value = Math.abs(value);
        node.textContent = sign + " " + value;
    }
};
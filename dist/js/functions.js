'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setText = exports.appendSigntoValue = exports.getAbilityScoreModifier = exports.getCharacterAttributes = exports.getCharacterImage = exports.setScore = exports.showElementWithProps = exports.showElement = exports.resetProps = exports.hideParentElement = exports.addOptionsToSelect = exports.setToMinMax = exports.rollAbilityScore = exports.randomBoolean = exports.randomIntFromRange = undefined;

var _characterImages = require('./characterImages.js');

var sign;
var modifier;
// Utility functions
var randomIntFromRange = exports.randomIntFromRange = function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomBoolean = exports.randomBoolean = function randomBoolean() {
    return Math.random() >= 0.5;
}; // Get a random true or false value
var rollAbilityScore = exports.rollAbilityScore = function rollAbilityScore() {
    return randomIntFromRange(3, 18);
};
var setToMinMax = exports.setToMinMax = function setToMinMax(score) {
    return score > 18 ? 18 : score < 3 ? 3 : score;
};
////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////
var addOptionsToSelect = exports.addOptionsToSelect = function addOptionsToSelect(selectElement, dataArray) {
    dataArray.map(function (optionText) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        selectElement.appendChild(optionElement);
    });
};
var hideParentElement = exports.hideParentElement = function hideParentElement(element) {
    element.parentElement.classList.remove('d-flex');
    element.parentElement.classList.add('d-none');
};
var resetProps = exports.resetProps = function resetProps(element) {
    element.textContent = "";
    element.setAttribute('title', "");
};
var showElement = exports.showElement = function showElement(element) {
    element.parentElement.classList.remove('d-none');
    element.parentElement.classList.add('d-flex');
};
var showElementWithProps = exports.showElementWithProps = function showElementWithProps(element, titleText, contentText) {
    if (titleText === void 0) {
        titleText = "";
    }
    if (contentText === void 0) {
        contentText = "";
    }
    element.parentElement.classList.remove('d-none');
    element.parentElement.classList.add('d-flex');
    element.setAttribute('title', titleText);
    element.textContent = contentText;
};
var setScore = exports.setScore = function setScore(abilityScorePreview) {
    var score = rollAbilityScore();
    setToMinMax(score);
    abilityScorePreview.textContent = String(score);
};
var getCharacterImage = exports.getCharacterImage = function getCharacterImage(genderedImages) {
    var randomIndex = randomIntFromRange(0, genderedImages.length - 1);
    return genderedImages[randomIndex];
};
// Get Character Attributes to set preview image
var getCharacterAttributes = exports.getCharacterAttributes = function getCharacterAttributes(charCls, charRace, charGender) {
    if (charGender !== 'male' && charGender !== "female") {
        var gender = randomBoolean();
        gender ? charGender = "male" : charGender = "female";
    }
    return _characterImages.CharacterImages[charRace][charCls][charGender];
};
// Set modifier to ability score modifier value
var getAbilityScoreModifier = exports.getAbilityScoreModifier = function getAbilityScoreModifier(abilityScore) {
    return modifier = Math.floor(abilityScore / 2 - 5);
};
// Append sign to value
var appendSigntoValue = exports.appendSigntoValue = function appendSigntoValue(value, node) {
    value > 0 ? sign = "+" : sign = "-";
    value = Math.abs(value);
    node.textContent = sign + " " + value;
};
// Clear element text then set to new value
var setText = exports.setText = function setText(element, text) {
    element.textContent = "";
    var newText = text;
    element.textContent = text;
};
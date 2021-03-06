import { CharacterImages } from './characterImages.js';
var sign;
var modifier;
// Utility functions
export var capitialize = function (word) { return word.charAt(0).toUpperCase() + word.slice(1); };
export var randomIntFromRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
export var randomBoolean = function () { return Math.random() >= 0.5; }; // Get a random true or false value
export var rollAbilityScore = function () { return randomIntFromRange(3, 18); };
export var setToMinMax = function (score) { return score > 18
    ? 18
    : score < 3
        ? 3
        : score; };
////////////////////////////////////////
// Set/Get functions
////////////////////////////////////////
export var addOptionsToSelect = function (selectElement, dataArray) {
    selectElement.innerHTML = "";
    dataArray.map(function (optionText) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        selectElement.appendChild(optionElement);
    });
};
export var addOptionsToSelectWithNull = function (selectElement, data) {
    var optionElement1 = document.createElement("option");
    optionElement1.textContent = "-";
    selectElement.appendChild(optionElement1);
    var optionElement2 = document.createElement("option");
    optionElement2.textContent = data;
    selectElement.appendChild(optionElement2);
};
// Append sign to value
export var appendSigntoValue = function (value, node) {
    value > 0 ? sign = "+" : sign = "-";
    value = Math.abs(value);
    node.textContent = sign + " " + value;
};
// Set modifier to ability score modifier value
export var getAbilityScoreModifier = function (abilityScore) { return modifier = Math.floor((abilityScore / 2) - 5); };
export var getCharacterImage = function (genderedImages) {
    var randomIndex = randomIntFromRange(0, (genderedImages.length - 1));
    return genderedImages[randomIndex];
};
// Get Character Attributes to set preview image
export var getCharacterAttributes = function (charCls, charRace, charGender) {
    if (charGender !== 'male' && charGender !== "female") {
        var gender = randomBoolean();
        gender ? charGender = "male" : charGender = "female";
    }
    return CharacterImages[charRace][charCls][charGender];
};
export var hideParentElement = function (element) {
    element.parentElement.classList.remove('d-flex');
    element.parentElement.classList.add('d-none');
};
export var resetProps = function (element) {
    element.textContent = "";
    element.setAttribute('title', "");
};
export var showElement = function (element) {
    element.classList.remove('d-none');
    element.classList.add('d-flex');
};
export var showElementWithProps = function (element, titleText, contentText) {
    if (titleText === void 0) { titleText = ""; }
    if (contentText === void 0) { contentText = ""; }
    element.parentElement.classList.remove('d-none');
    element.parentElement.classList.add('d-flex');
    element.setAttribute('title', titleText);
    element.textContent = contentText;
};
export var showParentElement = function (element) {
    element.parentElement.classList.remove('d-none');
    element.parentElement.classList.add('d-flex');
};
export var setScore = function (abilityScorePreview) {
    var score = rollAbilityScore();
    setToMinMax(score);
    abilityScorePreview.textContent = String(score);
};
// Clear element text then set to new value
export var setText = function (element, text) {
    element.textContent = "";
    var newText = text;
    element.textContent = text;
};

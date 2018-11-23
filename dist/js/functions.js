"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _this = undefined;
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
    }
};
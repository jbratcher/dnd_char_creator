var _this = this;
export var Functions = {
    // Utility functions
    randomIntFromRange: function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); },
    randomBoolean: function () { return Math.random() >= 0.5; },
    rollAbilityScore: function () { return _this.randomIntFromRange(3, 18); },
    setToMinMax: function (score) { return score > 18
        ? 18
        : score < 3
            ? 3
            : score; }
};

export const Functions = {
    
    // Utility functions
    
    randomIntFromRange: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomBoolean: () => Math.random() >= 0.5,  // Get a random true or false value
    
    rollAbilityScore: () => this.randomIntFromRange(3,18),
    
    setToMinMax: (score) => score > 18
                                ? 18
                                : score < 3
                                    ? 3
                                    : score
    
};


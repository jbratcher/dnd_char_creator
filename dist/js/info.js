"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Classes object for data
var Classes = exports.Classes = {
    barbarian: {
        hitdie: 12,
        skills: {
            number: 2
        },
        availableSkills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
    },
    bard: {
        hitdie: 8,
        skills: {
            number: 3
        },
        availableSkills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Slieght of Hand", "Stealth", "Survival"]
    },
    cleric: {
        hitdie: 8,
        skills: {
            number: 2
        },
        availableSkills: ["History", "Insight", "Medicine", "Persuasion", "Religion"]
    },
    druid: {
        hitdie: 8,
        skills: {
            number: 2
        },
        availableSkills: ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
    },
    fighter: {
        hitdie: 10,
        skills: {
            number: 2
        },
        availableSkills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
    },
    monk: {
        hitdie: 8,
        skills: {
            number: 2
        },
        availableSkills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"]
    },
    paladin: {
        hitdie: 10,
        skills: {
            number: 2
        },
        availableSkills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
    },
    ranger: {
        hitdie: 10,
        skills: {
            number: 3
        },
        availableSkills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"]
    },
    rogue: {
        hitdie: 8,
        skills: {
            number: 4
        },
        availableSkills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Slieght of Hand", "Stealth"]
    },
    sorcerer: {
        hitdie: 6,
        skills: {
            number: 2
        },
        availableSkills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
    },
    warlock: {
        hitdie: 8,
        skills: {
            number: 2
        },
        availableSkills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
    },
    wizard: {
        hitdie: 6,
        skills: {
            number: 2
        },
        availableSkills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"]
    }
};
var Races = exports.Races = {
    dwarf: {
        speed: 25
    },
    elf: {
        speed: 30
    },
    gnome: {
        speed: 25
    },
    halfelf: {
        speed: 30
    },
    halfling: {
        speed: 25
    },
    halforc: {
        speed: 30
    },
    human: {
        speed: 30
    }
};
var Levels = exports.Levels = [{
    experience: 0,
    bonus: 0
}, {
    experience: 300,
    bonus: 2
}, {
    experience: 900,
    bonus: 2
}, {
    experience: 2700,
    bonus: 2
}, {
    experience: 6500,
    bonus: 2
}, {
    experience: 14000,
    bonus: 3
}, {
    experience: 23000,
    bonus: 3
}, {
    experience: 34000,
    bonus: 3
}, {
    experience: 48000,
    bonus: 3
}, {
    experience: 64000,
    bonus: 4
}, {
    experience: 85000,
    bonus: 4
}, {
    experience: 100000,
    bonus: 4
}, {
    experience: 120000,
    bonus: 4
}, {
    experience: 140000,
    bonus: 5
}, {
    experience: 165000,
    bonus: 5
}, {
    experience: 195000,
    bonus: 5
}, {
    experience: 225000,
    bonus: 5
}, {
    experience: 265000,
    bonus: 6
}, {
    experience: 265000,
    bonus: 6
}, {
    experience: 305000,
    bonus: 6
}, {
    experience: 335000,
    bonus: 6
}];
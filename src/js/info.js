////////////////////////////////////////
// Classes object
////////////////////////////////////////
export var ClassProps = {
    barbarian: {
        hitdie: 12,
        savingThrows: [
            "strength",
            "constitution"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Animal Handling",
            "Athletics",
            "Intimidation",
            "Nature",
            "Perception",
            "Survival"
        ]
    },
    bard: {
        hitdie: 8,
        savingThrows: [
            "dexerity",
            "charisma"
        ],
        skills: {
            number: 3
        },
        availableSkills: [
            "Acrobatics",
            "Animal Handling",
            "Arcana",
            "Athletics",
            "Deception",
            "History",
            "Insight",
            "Intimidation",
            "Investigation",
            "Medicine",
            "Nature",
            "Perception",
            "Performance",
            "Persuasion",
            "Religion",
            "Slieght of Hand",
            "Stealth",
            "Survival"
        ]
    },
    cleric: {
        hitdie: 8,
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "History",
            "Insight",
            "Medicine",
            "Persuasion",
            "Religion"
        ]
    },
    druid: {
        hitdie: 8,
        savingThrows: [
            "intelligence",
            "wisdom"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Animal Handling",
            "Arcana",
            "Insight",
            "Medicine",
            "Nature",
            "Perception",
            "Religion",
            "Survival"
        ]
    },
    fighter: {
        hitdie: 10,
        savingThrows: [
            "strength",
            "constitution"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Acrobatics",
            "Animal Handling",
            "Athletics",
            "History",
            "Insight",
            "Intimidation",
            "Perception",
            "Survival"
        ]
    },
    monk: {
        hitdie: 8,
        savingThrows: [
            "strength",
            "dexerity"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Acrobatics",
            "Athletics",
            "History",
            "Insight",
            "Religion",
            "Stealth"
        ]
    },
    paladin: {
        hitdie: 10,
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Athletics",
            "Insight",
            "Intimidation",
            "Medicine",
            "Persuasion",
            "Religion"
        ]
    },
    ranger: {
        hitdie: 10,
        savingThrows: [
            "strength",
            "dexerity"
        ],
        skills: {
            number: 3
        },
        availableSkills: [
            "Animal Handling",
            "Athletics",
            "Insight",
            "Investigation",
            "Nature",
            "Perception",
            "Stealth",
            "Survival"
        ]
    },
    rogue: {
        hitdie: 8,
        savingThrows: [
            "dexerity",
            "intelligence"
        ],
        skills: {
            number: 4
        },
        availableSkills: [
            "Acrobatics",
            "Athletics",
            "Deception",
            "Insight",
            "Intimidation",
            "Investigation",
            "Perception",
            "Performance",
            "Persuasion",
            "Slieght of Hand",
            "Stealth"
        ]
    },
    sorcerer: {
        hitdie: 6,
        savingThrows: [
            "constitution",
            "charisma"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Arcana",
            "Deception",
            "Insight",
            "Intimidation",
            "Persuasion",
            "Religion"
        ]
    },
    warlock: {
        hitdie: 8,
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Arcana",
            "Deception",
            "History",
            "Intimidation",
            "Investigation",
            "Nature",
            "Religion"
        ]
    },
    wizard: {
        hitdie: 6,
        savingThrows: [
            "intelligence",
            "wisdom"
        ],
        skills: {
            number: 2
        },
        availableSkills: [
            "Arcana",
            "History",
            "Insight",
            "Investigation",
            "Medicine",
            "Religion"
        ]
    }
};
////////////////////////////////////////
// Races Object
////////////////////////////////////////
export var Races = {
    dragonborn: {
        abilityModifier: {
            ability: 'strength',
            modifier: 2
        },
        age: {
            min: 15,
            max: 80
        },
        alignments: [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good",
            "Lawful Evil",
            "Neutral Evil",
            "Chaotic Evil"
        ],
        darkvision: false,
        languages: [
            'Common',
            'Draconic'
        ],
        size: 'Medium',
        speed: 30
    },
    dwarf: {
        abilityModifier: {
            ability: 'constitution',
            modifier: 2
        },
        age: {
            min: 50,
            max: 350
        },
        alignments: [
            "Lawful Good",
            "Lawful Neutral",
            "Lawful Evil"
        ],
        darkvision: true,
        languages: [
            'Common',
            'Dwarfish'
        ],
        size: 'Medium',
        special: {
            resilience: {
                type: 'poison',
                advantage: true,
                resistence: true,
                info: "Roll 2x on poison saves, take 1/2 poison damage",
                tooltip: "Dwarven Resilience. You have advantage on\tsaving throws against poison,and you have\tresistance against poison damage."
            }
        },
        speed: 25
    },
    elf: {
        abilityModifier: {
            ability: 'dexerity',
            modifier: 2
        },
        age: {
            min: 100,
            max: 750
        },
        alignments: [
            "Chaotic Good",
            "Chaotic Neutral",
            "Chaotic Evil"
        ],
        darkvision: true,
        languages: [
            'Common',
            'Elfish'
        ],
        size: 'Medium',
        speed: 30
    },
    gnome: {
        abilityModifier: {
            ability: 'intelligence',
            modifier: 2
        },
        age: {
            min: 40,
            max: 500
        },
        alignments: [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good"
        ],
        darkvision: true,
        languages: [
            "Common",
            "Gnomish"
        ],
        size: 'Small',
        speed: 25
    },
    halfelf: {
        abilityModifier: {
            ability: 'charisma',
            modifier: 2,
            extra: 2,
            extraMofiier: 1
        },
        age: {
            min: 20,
            max: 180
        },
        alignments: [
            "Chaotic Good",
            "Chaotic Neutral",
            "Chaotic Evil"
        ],
        bonusSkills: 2,
        darkvision: true,
        languages: [
            "Common",
            "Elfish"
        ],
        extraLanguage: 1,
        size: 'Medium',
        speed: 30
    },
    halfling: {
        abilityModifier: {
            ability: 'dexerity',
            modifier: 2
        },
        age: {
            min: 20,
            max: 150
        },
        alignments: [
            "Lawful Good",
        ],
        darkvision: false,
        languages: [
            "Common",
            "Halfling"
        ],
        extraLanguage: 1,
        size: 'Small',
        speed: 25
    },
    halforc: {
        abilityModifier: {
            ability: 'strength',
            modifier: 2,
            extraAbility: 'constitution',
            extraModifier: 1
        },
        age: {
            min: 14,
            max: 75
        },
        alignments: [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good",
            "Lawful Evil",
            "Neutral Evil",
            "Chaotic Evil"
        ],
        darkvision: true,
        languages: [
            "Common",
            "Orc"
        ],
        size: 'Medium',
        speed: 30
    },
    human: {
        abilityModifier: {
            ability: 'all',
            modifier: 1
        },
        age: {
            min: 15,
            max: 80
        },
        alignments: [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good",
            "Lawful Neutral",
            "True Neutral",
            "Chaotic Neutral",
            "Lawful Evil",
            "Neutral Evil",
            "Chaotic Evil"
        ],
        darkvision: false,
        languages: [
            "Common"
        ],
        extraLanguage: 1,
        size: 'Medium',
        speed: 30
    },
    tiefling: {
        abilityModifier: {
            ability: 'intelligence',
            modifier: 1,
            extraAbility: 'charisma',
            extraModifier: 2
        },
        age: {
            min: 15,
            max: 100
        },
        alignments: [
            "Chaotic Neutral",
            "Chaotic Evil"
        ],
        darkvision: true,
        languages: [
            "Common",
            "Infernal"
        ],
        size: 'Medium',
        speed: 30
    }
};
////////////////////////////////////////
// Levels Object
////////////////////////////////////////
export var Levels = [
    {
        level: 1,
        experience: 300,
        bonus: 2
    },
    {
        level: 2,
        experience: 900,
        bonus: 2
    },
    {
        level: 3,
        experience: 2700,
        bonus: 2
    },
    {
        level: 4,
        experience: 6500,
        bonus: 2
    },
    {
        level: 5,
        experience: 14000,
        bonus: 3
    },
    {
        level: 6,
        experience: 23000,
        bonus: 3
    },
    {
        level: 7,
        experience: 34000,
        bonus: 3
    },
    {
        level: 8,
        experience: 48000,
        bonus: 3
    },
    {
        level: 9,
        experience: 64000,
        bonus: 4
    },
    {
        level: 10,
        experience: 85000,
        bonus: 4
    },
    {
        level: 11,
        experience: 100000,
        bonus: 4
    },
    {
        level: 12,
        experience: 120000,
        bonus: 4
    },
    {
        level: 13,
        experience: 140000,
        bonus: 5
    },
    {
        level: 14,
        experience: 165000,
        bonus: 5
    },
    {
        level: 15,
        experience: 195000,
        bonus: 5
    },
    {
        level: 16,
        experience: 225000,
        bonus: 5
    },
    {
        level: 17,
        experience: 265000,
        bonus: 6
    },
    {
        level: 18,
        experience: 265000,
        bonus: 6
    },
    {
        level: 19,
        experience: 305000,
        bonus: 6
    },
    {
        level: 20,
        experience: 335000,
        bonus: 6
    },
];
////////////////////////////////////////
// Languages object
////////////////////////////////////////
export var Languages = {
    standard: [
        'Common',
        'Dwarvish',
        'Elvish',
        'Giant',
        'Gnomish',
        'Goblin',
        'Halfling',
        'Orc'
    ],
    exotic: [
        'Abyssal',
        'Celestial',
        'Draconic',
        'Deep speech',
        'Infernal',
        'Primordial',
        'Sylvan',
        'Undercommon'
    ]
};
////////////////////////////////////////
// Abilities Array
////////////////////////////////////////
export var Abilities = [
    'Strength',
    'Dexerity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
];
////////////////////////////////////////
// Class List Array
////////////////////////////////////////
export var ClassList = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
];
////////////////////////////////////////
// Race List Array
////////////////////////////////////////
export var RaceList = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling"
];
////////////////////////////////////////
// Alignments Array
////////////////////////////////////////
export var Alignments = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil"
];
////////////////////////////////////////
// Skills Array
////////////////////////////////////////
export var Skills = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Slieght of Hand",
    "Stealth",
    "Survival"
];

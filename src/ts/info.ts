////////////////////////////////////////
// Classes object
////////////////////////////////////////

export const ClassProps = {

    barbarian: {
        hitdie: 12,
        savingThrows: [
            "strength",
            "constitution"
        ],
        skills: 2,
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
        skills: 3,
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
        skills: 2,
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
        skills: 2,
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
        skills: 2,
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
        skills: 2,
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
        skills: 2,
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
        skills: 3,
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
        skills: 4,
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
        skills: 2,
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
        skills: 2,
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
        skills: 2,
        availableSkills: [
            "Arcana",
            "History",
            "Insight",
            "Investigation",
            "Medicine",
            "Religion"
        ]
    }


}

////////////////////////////////////////
// Races Object
////////////////////////////////////////

export const Races = {

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
        info: `Your draconic heritage manifests in a variety of traits you share with other dragonborn.`,
        languages: [
            'Common',
            'Draconic'
        ],
        size: 'Medium',
        speed: 30,
        special: {
            breathWeapon: {
                info: `You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.`
            },
            damageResistance: {
                info: `You have resistance to the damage type associated with your draconic ancestry.`
            },
            draconicAncestry: {
                info: `You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.`,
                types: [
                    'Black',
                    'Blue',
                    'Brass',
                    'Bronze',
                    'Copper',
                    'Gold',
                    'Green',
                    'Red',
                    'Silver',
                    'White'
                ],
                black: {
                    color: 'Black',
                    type: 'Acid',
                    breath: '5 by 30 ft. line (Dex. save)'
                },
                blue: {
                    color: 'Blue',
                    type: 'Lightning',
                    breath: '5 by 30 ft. line (Dex. save)'
                },
                brass: {
                    color: 'Brass',
                    type: 'Fire',
                    breath: '5 by 30 ft. line (Dex. save)'
                },
                bronze: {
                    color: 'Bronze',
                    type: 'Lightning',
                    breath: '5 by 30 ft. line (Dex. save)'
                },
                copper: {
                    color: 'Copper',
                    type: 'Acid',
                    breath: '5 by 30 ft. line (Dex. save)'
                },
                gold: {
                    color: 'Gold',
                    type: 'Fire',
                    breath: '15	ft. cone (Dex .save)'
                },
                green: {
                    color: 'Green',
                    type: 'Poison',
                    breath: '15	ft. cone (Dex .save)'
                },
                red: {
                    color: 'Red',
                    type: 'Fire',
                    breath: '15	ft. cone (Dex .save)'
                },
                silver: {
                    color: 'Silver',
                    type: 'Cold',
                    breath: '15	ft. cone (Dex .save)'
                },
                white: {
                    color: 'White',
                    type: 'Cold',
                    breath: '15	ft. cone (Dex .save)'
                },
            }
        }

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
        info: `Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.`,
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
                info: `Roll 2x on poison saves, take 1/2 poison damage`,
                tooltip: `Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage.`
            },
            stonecunning: {
                type: "stonework",
                ability: "intelligence",
                skill: "history",
                info: `Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`
            },
            toolProficiency: {
                info: `You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.`
            },
        },
        speed: 25,
        subrace: {
            name: [
                "Hill Dwarf"
            ],
            ability: "wisdom",
            modifier: 1,
            dwarvernToughness: {
                hitpointModifier: 1
            },
            helpText: `As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.`
        },
        weaponProficiences: [
            "Battleaxe",
            "Handaxe",
            "Light Hammer",
            "Warhammer"
        ]

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
        info: `Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.`,
        languages: [
            'Common',
            'Elfish'
        ],
        size: 'Medium',
        special: {
            keenSenses: {
              skill: 'perception'
            },
            feyAncestry: {
                type: 'charm',
                advantage: true,
                resistence: null,
                info: `Roll 2x on charm saves, magic sleep has no effect`,
                tooltip: `Fey Ancestry. You have advantage on saving throws against being charmed,and magic can't put you to sleep.`
            },
            trance: {
                info: `Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`
            },
        },
        speed: 30,
        subrace: {
            name: [
                "High Elf"
            ],
            ability: "intelligence",
            modifier: 1,
            extraLanguage: 1,
            cantrip: 1,
            weaponProficiences: [
                "Long Sword",
                "Short Sword",
                "Long Bow",
                "Short Bow"
            ],
            helpText: `As	a	high elf,	you	have a keen	mind and a mastery of at least the basics	of magic.`
        }

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
        info: `Your gnome character has certain characteristics in common with all other gnomes.`,
        languages: [
            "Common",
            "Gnomish"
        ],
        size: 'Small',
        special: {
            gnomeCunning: {
                type: [
                    'charisma',
                    'wisdom',
                    'intelligence'
                ],
                advantage: true,
                resistence: null,
                info: `Roll 2x on fear saves`,
                tooltip: `Brave. You have advantage on saving throws against being frightened.`
            },
        },
        speed: 25,
        subrace: {
            name: [
                "Rock Gnome"
            ],
            ability: "constitution",
            modifier: 1,
            artificersLore: {
                ability: "intelligence",
                skill: "history",
                modifier: 2,
                info: `Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.`
            },
            tinker: {
                info: `You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.`,
                details: `When you create a device, choose one of the following options:

                    Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.

                    Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.

                    Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.`
            },
            proficiencyModifier: 2,
            helpText: `As a rock gnome, you	have a natural inventiveness an hardiness	beyond that of other gnomes.`

        }

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
        info: `Your half-elf character has some qualities in common with elves and some that are unique to half-elves.`,
        languages: [
            "Common",
            "Elfish"
        ],
        extraLanguage: 1,
        size: 'Medium',
        special: {
            feyAncestry: {
                type: 'charm',
                advantage: true,
                resistence: null,
                info: `Roll 2x on charm saves`,
                tooltip: `Fey Ancestry. You have advantage on saving throws against being charmed,and magic can't put you to sleep.`
            },
            skillVersatility: {
                info: `You gain proficiency in two skills of your choice.`
            }
        },
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
        info: `Your halfling character has a number of traits in common with all other halflings.`,
        languages: [
            "Common",
            "Halfling"
        ],
        size: 'Small',
        special: {
            brave: {
                type: 'fear',
                advantage: true,
                resistence: null,
                info: `Roll 2x on fear saves`,
                tooltip: `Brave. You have advantage on saving throws against being frightened.`
            },
            halflingNimbleness: {
                info: `You can move through the space of any creature that is of a size larger than yours.`
            },
            lucky: {
                info: `When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`
            }
        },
        speed: 25,
        subrace: {
            name: [
                "Lightfoot"
            ],
            ability: "charisma",
            modifier: 1,
            naturallyStealthy: {
                info: `You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you`
            },
            helpText: `Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.`
        }

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
        info: `Your half-orc character has certain traits deriving from your orc ancestry.`,
        languages: [
            "Common",
            "Orc"
        ],
        size: 'Medium',
        speed: 30,
        special: {
            menacing: {
                info: `You gain proficiency in the Intimidation skill.`
            },
            relentlessEndurance: {
                info: `When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.`
            },
            savageAttacks: {
                info: `When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.`
            }
        },

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
        info: `It’s hard to make generalizations about humans, but your human character has these traits.`,
        languages:[
            "Common"
        ],
        extraLanguage: 1,
        size: 'Medium',
        special: {
            info: "Your mom thinks that you are special."
        },
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
        info: `Tieflings share certain racial traits as a result of their infernal descent.`,
        languages: [
            "Common",
            "Infernal"
        ],
        size: 'Medium',
        speed: 30,
        special: {
            hellishResistance: {
                info: `You have resistance to fire damage.`
            },
            infernalLegacy: {
                info: `You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`
            }
        },

    }


}

////////////////////////////////////////
// Levels Object
////////////////////////////////////////

export const Levels = [

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

]

////////////////////////////////////////
// Languages object
////////////////////////////////////////

export const Languages = {

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

}

////////////////////////////////////////
// Abilities Array
////////////////////////////////////////

export const Abilities = [
    'Strength',
    'Dexerity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
]

////////////////////////////////////////
// Class List Array
////////////////////////////////////////

export const ClassList = [

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

]

////////////////////////////////////////
// Race List Array
////////////////////////////////////////

export const RaceList = [

    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling"

]

////////////////////////////////////////
// Alignments Array
////////////////////////////////////////

export const Alignments = [

    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil"

]

////////////////////////////////////////
// Skills Array
////////////////////////////////////////

export const Skills = [

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

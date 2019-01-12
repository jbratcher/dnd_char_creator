////////////////////////////////////////
// Classes object
////////////////////////////////////////
export var Classes = {
    barbarian: {
        armor: [
            "light armor",
            "medium armor",
            "shields"
        ],
        classAbilities: {
            rage: null,
            unarmoredDefense: null,
            recklessAttack: null,
            dangerSense: null,
            abilityScoreImprovement: null,
            extraAttack: null,
            fastMovement: null,
            feralInstinct: null,
            brutalCritical: null,
            relentlessRage: null,
            persistentRage: null,
            indomitableMight: null,
            primalChampion: null
        },
        hitdie: 12,
        info: "You are a savage warrior wearing little, if any, armor.  Tough to take down why enraged.",
        levels: [
            {
                level: 1,
                features: ["Rage", "Unarmored Defense"],
                rages: 2,
                rageDamage: 2
            },
            {
                level: 2,
                features: ["Reckless Attack", "Danger Sense"],
                rages: 2,
                rageDamage: 2
            },
            {
                level: 3,
                features: ["Primal Path"],
                rages: 3,
                rageDamage: 2
            },
            {
                level: 4,
                features: ["Ability Score Improvment"],
                rages: 3,
                rageDamage: 2
            },
            {
                level: 5,
                features: ["Extra Attack", "Fast Movement"],
                rages: 4,
                rageDamage: 2
            },
            {
                level: 6,
                features: ["Path Feature"],
                rages: 4,
                rageDamage: 2
            },
            {
                level: 7,
                features: ["Feral Instinct"],
                rages: 4,
                rageDamage: 2
            },
            {
                level: 8,
                features: ["Ability Score Improvment"],
                rages: 4,
                rageDamage: 2
            },
            {
                level: 9,
                features: ["Brutal Critical (1 die)"],
                rages: 4,
                rageDamage: 3
            },
            {
                level: 10,
                features: ["Path Feature"],
                rages: 4,
                rageDamage: 3
            },
            {
                level: 11,
                features: ["Relentless Rage"],
                rages: 4,
                rageDamage: 3
            },
            {
                level: 12,
                features: ["Ability Score Improvment"],
                rages: 5,
                rageDamage: 3
            },
            {
                level: 13,
                features: ["Brutal Critical (2 dice)"],
                rages: 5,
                rageDamage: 3
            },
            {
                level: 14,
                features: ["Path Feature"],
                rages: 5,
                rageDamage: 3
            },
            {
                level: 15,
                features: ["Persistent Rage"],
                rages: 5,
                rageDamage: 3
            },
            {
                level: 16,
                features: ["Ability Score Improvment"],
                rages: 5,
                rageDamage: 4
            },
            {
                level: 17,
                features: ["Brutal Critical (3 dice)"],
                rages: 6,
                rageDamage: 4
            },
            {
                level: 18,
                features: ["Indomitable Might"],
                rages: 6,
                rageDamage: 4
            },
            {
                level: 19,
                features: ["Ability Score Improvment"],
                rages: 6,
                rageDamage: 4
            },
            {
                level: 20,
                features: ["Primal Champion"],
                rages: "Unlimited",
                rageDamage: 4
            }
        ],
        savingThrows: [
            "strength",
            "constitution"
        ],
        skills: {
            number: 2,
            available: [
                "Animal Handling",
                "Athletics",
                "Intimidation",
                "Nature",
                "Perception",
                "Survival"
            ]
        },
        startingEquipment: [
            "(a) a greataxe or (b) any martial melee weapon",
            "(a) two handaxes or (b) any simple weapon",
            "explorer’s pack",
            "4 javelins"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "simple weapons",
            "martial weapons"
        ]
    },
    bard: {
        armor: [
            "light armor"
        ],
        classAbilities: {
            spellCasting: {
                cantrips: null,
                spellSlots: null,
                spellsKnown: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                ritualCasting: null,
                spellCastingFocus: null
            },
            bardicInspiration: null,
            jackOfAllTrades: null,
            songOfRest: null,
            bardCollege: null,
            expertise: null,
            abilityScoreImprovement: null,
            fontOfInspiration: null,
            counterCharm: null,
            magicalSecrets: null,
            superiorInspiration: null
        },
        hitdie: 8,
        info: "Minstrel or joker with a trick or two up there sleeve.  Your companions will appreciate your company.",
        levels: [
            {
                level: 1,
                features: ["Spellcasting", "Bardic Inspiration (d6)"],
                cantripsKnown: 2,
                spellsKnown: 4,
                spellSlotsPerLevel: {
                    '1st': 2,
                    '2nd': 0,
                    '3rd': 0,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 2,
                features: ["Jack of All Trades", "Song of Rest (d6)"],
                cantripsKnown: 2,
                spellsKnown: 5,
                spellSlotsPerLevel: {
                    '1st': 3,
                    '2nd': 0,
                    '3rd': 0,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 3,
                features: ["Bard College", "Expertise"],
                cantripsKnown: 2,
                spellsKnown: 6,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 2,
                    '3rd': 0,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 4,
                features: ["Ability Score Improvement"],
                cantripsKnown: 3,
                spellsKnown: 7,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 0,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 5,
                features: ["Bardic Inspiration (d8)", "Font of Inspiration"],
                cantripsKnown: 3,
                spellsKnown: 8,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 2,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 6,
                features: ["Countercharm", "Bard College feature"],
                cantripsKnown: 3,
                spellsKnown: 9,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 0,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 7,
                features: [""],
                cantripsKnown: 3,
                spellsKnown: 10,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 1,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 8,
                features: ["Ability Score Improvement"],
                cantripsKnown: 3,
                spellsKnown: 11,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 2,
                    '5th': 0,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 9,
                features: ["Song of Rest (d8)"],
                cantripsKnown: 3,
                spellsKnown: 12,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 1,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 10,
                features: ["Bardic Inspiration (d10)", "Expertise, Magical Secrets"],
                cantripsKnown: 4,
                spellsKnown: 14,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 0,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 11,
                features: [""],
                cantripsKnown: 4,
                spellsKnown: 15,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 12,
                features: ["Ability Score Improvement"],
                cantripsKnown: 4,
                spellsKnown: 15,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 0,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 13,
                features: ["Song of Rest (d10)"],
                cantripsKnown: 4,
                spellsKnown: 16,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 1,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 14,
                features: ["Magical Secrets", "Bard College feature"],
                cantripsKnown: 4,
                spellsKnown: 18,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 1,
                    '8th': 0,
                    '9th': 0
                }
            },
            {
                level: 15,
                features: ["Bardic Inspiration (d12)"],
                cantripsKnown: 4,
                spellsKnown: 19,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 1,
                    '8th': 1,
                    '9th': 0
                }
            },
            {
                level: 16,
                features: ["Ability Score Improvement"],
                cantripsKnown: 4,
                spellsKnown: 19,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 1,
                    '8th': 1,
                    '9th': 0
                }
            },
            {
                level: 17,
                features: ["Song of Rest (d12)"],
                cantripsKnown: 4,
                spellsKnown: 20,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 2,
                    '6th': 1,
                    '7th': 1,
                    '8th': 1,
                    '9th': 1
                }
            },
            {
                level: 18,
                features: ["Magical Secrets"],
                cantripsKnown: 4,
                spellsKnown: 22,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 3,
                    '6th': 1,
                    '7th': 1,
                    '8th': 1,
                    '9th': 1
                }
            },
            {
                level: 19,
                features: ["Ability Score Improvement"],
                cantripsKnown: 4,
                spellsKnown: 22,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 3,
                    '6th': 2,
                    '7th': 1,
                    '8th': 1,
                    '9th': 1
                }
            },
            {
                level: 20,
                features: ["Superior Inspiration"],
                cantripsKnown: 4,
                spellsKnown: 22,
                spellSlotsPerLevel: {
                    '1st': 4,
                    '2nd': 3,
                    '3rd': 3,
                    '4th': 3,
                    '5th': 3,
                    '6th': 2,
                    '7th': 2,
                    '8th': 1,
                    '9th': 1
                }
            }
        ],
        savingThrows: [
            "dexerity",
            "charisma"
        ],
        skills: {
            number: 3,
            available: [
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
        startingEquipment: [
            "(a) a rapier, (b) a longsword, or (c) any simple weapon",
            "(a) a diplomat’s pack or (b) an entertainer’s pack",
            "(a) a lute or (b) any other musical instrument",
            "leather armor",
            "a dagger"
        ],
        tools: [
            "Three musical instruments of your choice"
        ],
        weapons: [
            "Simple weapons",
            "hand crossbows",
            "longswords",
            "rapiers",
            "shortswords"
        ]
    },
    cleric: {
        armor: [
            "light armor",
            "medium armor",
            "shields"
        ],
        classAbilities: {
            spellcasting: {
                cantrips: null,
                preparingAndCastingSpells: null,
                spellcastingAbilitiy: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                ritualCasting: null,
                spellCastingFocus: null
            },
            divineDomain: {
                domainSpells: null
            },
            channelDivinity: {
                turnUndead: null
            },
            abilityScoreImprovement: null,
            destroyUndead: null,
            divineIntervention: null
        },
        hitdie: 8,
        info: "Heavily-armor magical healer who can also melee.",
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2,
            available: [
                "History",
                "Insight",
                "Medicine",
                "Persuasion",
                "Religion"
            ]
        },
        startingEquipment: [
            "(a) a mace or (b) a warhammer (if proficient)",
            "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a priest’s pack or (b) an explorer’s pack",
            "shield",
            "holy symbol"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "Simple weapons"
        ]
    },
    druid: {
        armor: [
            "light armor",
            "medium armor",
            "shields",
            "non-metal"
        ],
        classAbilities: {
            drudic: null,
            spellCasting: {
                cantrips: null,
                preparingAndCastingSpells: null,
                spellCastingFocus: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                ritualCasting: null
            },
            wildShape: {
                beastShapes: null
            },
            dangerSense: null,
            druidCircle: null,
            abilityScoreImprovement: null,
            timelessBody: null,
            beastSpells: null,
            archDruid: null
        },
        hitdie: 8,
        info: "Natural spell-casters or shape-shifting warriors.",
        savingThrows: [
            "intelligence",
            "wisdom"
        ],
        skills: {
            number: 2,
            available: [
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
        startingEquipment: [
            "(a) a wooden shield or (b) any simple weapon",
            "(a) a scimitar or (b) any simple melee weapon",
            "leather armor",
            "explorer’s pack",
            "druidic focus"
        ],
        tools: [
            "Herbalism kit"
        ],
        weapons: [
            "clubs",
            "daggers",
            "darts",
            "javelins",
            "maces",
            "quarterstaffs",
            "scimitars",
            "sickles",
            "slings",
            "spears"
        ]
    },
    fighter: {
        armor: [
            "all armor",
            "shields"
        ],
        classAbilities: {
            fightingStyle: {
                archery: null,
                defense: null,
                dueling: null,
                greatWeaponFighting: null,
                protections: null,
                twoWeaponFighting: null
            },
            secondWind: null,
            actionSurge: null,
            martialArchetype: null,
            abilityScoreImprovement: null,
            extraAttack: null,
            indomitagble: null
        },
        hitdie: 10,
        info: "The most skilled warriors can use any armor or weapon and take a beating.",
        savingThrows: [
            "strength",
            "constitution"
        ],
        skills: {
            number: 2,
            available: [
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
        startingEquipment: [
            "(a) chain mail or (b) leather armor",
            "a longbow and 20 arrows",
            "(a) a martial weapon and a shield or (b) two martial weapons",
            "(a) a light crossbow and 20 bolts or (b) two handaxes",
            "(a) a dungeoneer’s pack or (b) an explorer’s pack"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "simple weapons",
            "martial weapons"
        ]
    },
    monk: {
        armor: [
            "none"
        ],
        classAbilities: {
            umarmoredDefense: null,
            martialArts: null,
            ki: {
                kiSaveDC: null
            },
            unarmoredMovement: null,
            monasticTradition: null,
            flurryOfBlow: null,
            patientDefense: null,
            stepOfTheWind: null,
            deflectMissles: null,
            abilityScoreImprovement: null,
            slowFall: null,
            extraAttack: null,
            stunningStrike: null,
            kiEmpoweredStrikes: null,
            evasion: null,
            stillnessOfMind: null,
            purityOfBody: null,
            toungeOfSunAndMoon: null,
            diamondSoul: null,
            timelessBody: null,
            emptyBody: null,
            perfectSelf: null
        },
        hitdie: 8,
        info: "Adept spiritual warriors that can cripple opponents.",
        savingThrows: [
            "strength",
            "dexerity"
        ],
        skills: {
            number: 2,
            available: [
                "Acrobatics",
                "Athletics",
                "History",
                "Insight",
                "Religion",
                "Stealth"
            ]
        },
        startingEquipment: [
            "(a) a shortsword or (b) any simple weapon",
            "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "10 darts"
        ],
        tools: [
            "Choose one type of artisan’s tools or one musical instrument"
        ],
        weapons: [
            "simple weapons",
            "shortswords"
        ]
    },
    paladin: {
        armor: [
            "all armor",
            "shields"
        ],
        classAbilities: {
            divineSense: null,
            layOnHands: null,
            fightingStyle: {
                defense: null,
                dueling: null,
                greatWeaponFighting: null,
                protection: null
            },
            spellCasting: {
                preparingAndCastingSpells: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                spellCastingFocus: null
            },
            divineSmite: null,
            divineHealth: null,
            sacredOath: null,
            oathSpells: null,
            channelDivinity: null,
            abilityScoreImprovement: null,
            extraAttack: null,
            auraOfProtetion: null,
            auraOfCourage: null,
            improvedDivineSmite: null,
            cleansingTouch: null,
            sacredOaths: null
        },
        hitdie: 10,
        info: "Spirtual warriors usually wearing heaving armor.  Can heal and smite.",
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2,
            available: [
                "Athletics",
                "Insight",
                "Intimidation",
                "Medicine",
                "Persuasion",
                "Religion"
            ]
        },
        startingEquipment: [
            "(a) a martial weapon and a shield or (b) two martial weapons",
            "(a) five javelins or (b) any simple melee weapon",
            "(a) a priest’s pack or (b) an explorer’s pack",
            "Chain mail",
            "holy symbol"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "simple weapons",
            "martial weapons"
        ]
    },
    ranger: {
        armor: [
            "light armor",
            "medium armor",
            "shields"
        ],
        classAbilities: {
            favoredEnemy: null,
            naturalExplorer: null,
            fightingStyle: {
                archery: null,
                defense: null,
                dueling: null,
                twoWeaponFighting: null
            },
            spellCasgin: {
                spellSlots: null,
                spellsKnown: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                }
            },
            rangerArchetype: null,
            primevalAwareness: null,
            abilityScoreImprovement: null,
            extraAttack: null,
            landsStride: null,
            hideInPlainSight: null,
            Vanish: null,
            feralSenses: null,
            foeSlayer: null
        },
        hitdie: 10,
        info: "Range-focused warriors with survival and animal skills.",
        savingThrows: [
            "strength",
            "dexerity"
        ],
        skills: {
            number: 3,
            available: [
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
        startingEquipment: [
            "(a) scale mail or (b) leather armor",
            "(a) two shortswords or (b) two simple melee weapons",
            "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "A longbow and a quiver of 20 arrows"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "simple weapons",
            "martial weapons"
        ]
    },
    rogue: {
        armor: [
            "light armor"
        ],
        classAbilities: {
            expertise: null,
            sneakAttack: null,
            theivesCant: null,
            cunningAction: null,
            rougeArchetype: null,
            abilityScoreImprovement: null,
            uncannyDodge: null,
            evasion: null,
            reliableTalent: null,
            blindSense: null,
            slipperyMind: null,
            elusive: null,
            strokeOfLuck: null
        },
        hitdie: 8,
        info: "Warrior with varied skills. Realizes on wit and agility more than strength.",
        savingThrows: [
            "dexerity",
            "intelligence"
        ],
        skills: {
            number: 4,
            available: [
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
        startingEquipment: [
            "(a) a rapier or (b) a shortsword",
            "(a) a shortbow and quiver of 20 arrows or (b) a shortsword",
            "(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack",
            "leather armor",
            "two daggers",
            "thieves’ tools"
        ],
        tools: [
            "Thieves’ tools"
        ],
        weapons: [
            "simple weapons",
            "hand crossbows",
            "longswords",
            "rapiers",
            "shortswords"
        ]
    },
    sorcerer: {
        armor: [
            "none"
        ],
        classAbilities: {
            spellCasting: {
                cantrips: null,
                spellSlots: null,
                spellsKnown: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                spellCastingFocus: null
            },
            sorcerousOrigin: null,
            fontOfMagic: {
                sorceryPoints: null,
                flexibleCasting: null,
                creatingSpellSlots: null
            },
            metaMagic: {
                carefullSpell: null,
                distantSpell: null,
                empoweredSpell: null,
                extendedSpell: null,
                heightenedSpell: null,
                quickenedSpell: null,
                subtleSpell: null,
                twinnedSpell: null
            },
            abilityScoreImprovement: null,
            sorcerousRegeneration: null
        },
        hitdie: 6,
        info: "Spell-caster inherent.",
        savingThrows: [
            "constitution",
            "charisma"
        ],
        skills: {
            number: 2,
            available: [
                "Arcana",
                "Deception",
                "Insight",
                "Intimidation",
                "Persuasion",
                "Religion"
            ]
        },
        startingEquipment: [
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "2 daggers"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "daggers",
            "darts",
            "slings",
            "quarterstaffs",
            "light crossbows"
        ]
    },
    warlock: {
        armor: [
            "light armor"
        ],
        classAbilities: {
            otherworldlyPatron: null,
            pactMagic: {
                cantrips: null,
                spellSlots: null,
                spellsKnown: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                spellCastingFocus: null
            },
            eldritchInnovations: null,
            pactBoon: {
                pactOfTheChain: null,
                pactOfTheBlade: null,
                pactOfTheTome: null
            },
            abilityScoreImprovement: null,
            mysticArcanum: null,
            eldritchMaster: null
        },
        hitdie: 8,
        info: "Spell-caster who gets their strenght from a pact with a powerful being.",
        savingThrows: [
            "wisdom",
            "charisma"
        ],
        skills: {
            number: 2,
            available: [
                "Arcana",
                "Deception",
                "History",
                "Intimidation",
                "Investigation",
                "Nature",
                "Religion"
            ]
        },
        startingEquipment: [
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a scholar’s pack or (b) a dungeoneer’s pack",
            "leather armor",
            "any simple weapon",
            "two daggers"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "simple weapons"
        ]
    },
    wizard: {
        armor: [
            "none"
        ],
        classAbilities: {
            spellCasting: {
                cantrips: null,
                spellBook: null,
                preparingAndCastingSpells: null,
                spellCastingAbility: {
                    spellSaveDC: null,
                    spellAttackModifier: null
                },
                ritualCasting: null,
                spellCastingFocus: null
            },
            arcaneRecovery: null,
            arcaneTradition: null,
            abilityScoreImprovement: null,
            spellMastery: null,
            signatureSpells: null
        },
        hitdie: 6,
        info: "Diverse spell-caster knowledgeable in the magical arts.",
        savingThrows: [
            "intelligence",
            "wisdom"
        ],
        skills: {
            number: 2,
            available: [
                "Arcana",
                "History",
                "Insight",
                "Investigation",
                "Medicine",
                "Religion"
            ]
        },
        startingEquipment: [
            "(a) a quarterstaff or (b) a dagger",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a scholar’s pack or (b) an explorer’s pack",
            "a spellbook"
        ],
        tools: [
            "none"
        ],
        weapons: [
            "daggers",
            "darts",
            "slings",
            "quarterstaffs",
            "light crossbows"
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
        info: "Your draconic heritage manifests in a variety of traits you share with other dragonborn.",
        languages: [
            'Common',
            'Draconic'
        ],
        size: 'Medium',
        speed: 30,
        special: {
            breathWeapon: {
                info: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation."
            },
            damageResistance: {
                info: "You have resistance to the damage type associated with your draconic ancestry."
            },
            draconicAncestry: {
                info: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
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
                }
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
        info: "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
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
                tooltip: "Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."
            },
            stonecunning: {
                type: "stonework",
                ability: "intelligence",
                skill: "history",
                info: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
            },
            toolProficiency: {
                info: "You gain proficiency with the artisan\u2019s tools of your choice: smith\u2019s tools, brewer\u2019s supplies, or mason\u2019s tools."
            }
        },
        speed: 25,
        subrace: {
            name: "Hill Dwarf",
            ability: "wisdom",
            modifier: 1,
            dwarvernToughness: {
                hitpointModifier: 1
            },
            helpText: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience."
        },
        weaponProficiences: [
            "battleaxe",
            "handaxe",
            "light hammer",
            "warhammer"
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
        info: "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
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
                info: "Roll 2x on charm saves, magic sleep has no effect",
                tooltip: "Fey Ancestry. You have advantage on saving throws against being charmed,and magic can't put you to sleep."
            },
            trance: {
                info: "Elves don\u2019t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \u201Ctrance.\u201D) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
            }
        },
        speed: 30,
        subrace: {
            name: "High Elf",
            ability: "intelligence",
            modifier: 1,
            extraLanguage: 1,
            cantrip: 1,
            weaponProficiences: [
                "long Sword",
                "short Sword",
                "long Bow",
                "short Bow"
            ],
            helpText: "As a\thigh elf, you have a keen mind and a mastery of at least the basics\tof magic."
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
        info: "Your gnome character has certain characteristics in common with all other gnomes.",
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
                info: "Roll 2x on fear saves",
                tooltip: "Brave. You have advantage on saving throws against being frightened."
            }
        },
        speed: 25,
        subrace: {
            name: "Rock Gnome",
            ability: "constitution",
            modifier: 1,
            artificersLore: {
                ability: "intelligence",
                skill: "history",
                modifier: 2,
                info: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
            },
            tinker: {
                info: "You have proficiency with artisan\u2019s tools (tinker\u2019s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
                details: "When you create a device, choose one of the following options:\n\n                    Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\n\n                    Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\n\n                    Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song\u2019s end or when it is closed."
            },
            proficiencyModifier: 2,
            helpText: "As a rock gnome, you\thave a natural inventiveness an hardiness\tbeyond that of other gnomes."
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
        info: "Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",
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
                info: "Roll 2x on charm saves",
                tooltip: "Fey Ancestry. You have advantage on saving throws against being charmed,and magic can't put you to sleep."
            },
            skillVersatility: {
                info: "You gain proficiency in two skills of your choice."
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
        info: "Your halfling character has a number of traits in common with all other halflings.",
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
                info: "Roll 2x on fear saves",
                tooltip: "Brave. You have advantage on saving throws against being frightened."
            },
            halflingNimbleness: {
                info: "You can move through the space of any creature that is of a size larger than yours."
            },
            lucky: {
                info: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
            }
        },
        speed: 25,
        subrace: {
            name: "Lightfoot",
            ability: "charisma",
            modifier: 1,
            naturallyStealthy: {
                info: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you"
            },
            helpText: "Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life."
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
        info: "Your half-orc character has certain traits deriving from your orc ancestry.",
        languages: [
            "Common",
            "Orc"
        ],
        size: 'Medium',
        speed: 30,
        special: {
            menacing: {
                info: "You gain proficiency in the Intimidation skill."
            },
            relentlessEndurance: {
                info: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\u2019t use this feature again until you finish a long rest."
            },
            savageAttacks: {
                info: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon\u2019s damage dice one additional time and add it to the extra damage of the critical hit."
            }
        }
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
        info: "It\u2019s hard to make generalizations about humans, but your human character has these traits.",
        languages: [
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
        info: "Tieflings share certain racial traits as a result of their infernal descent.",
        languages: [
            "Common",
            "Infernal"
        ],
        size: 'Medium',
        speed: 30,
        special: {
            hellishResistance: {
                info: "You have resistance to fire damage."
            },
            infernalLegacy: {
                info: "You know the thaumaturgy cantrip. When you reach '3rd' level, you can cast the hellish rebuke spell as a '2nd'-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach '5th' level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
            }
        }
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

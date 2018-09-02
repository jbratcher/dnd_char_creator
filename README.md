# OpenSRD Character Creator

Character creator for an openSRD-based roleplaying game.  Puts together all the info you need to start playing now and not have to worry about calculations for bonuses.    

[Demo Page](https://jbratcher.github.io/openSRD_character_creator/)

### Version

0.0.7

## Install Dependencies

```bash
npm install
```

## Start live reload server and compile Typescript, SASS

gulp

```bash
gulp
```
OR

```bash
npm start
```

## Folder and File Structure

```
/src
    /css
    styles.css
        /vendor
        /fonts
            -fontawesome-webfont.eot
            -fontawesome-webfont.svg
            -fontawesome-webfont.ttf
            -fontawesome-webfont.wotf
            -fontawesome-webfont.wotf2
            -FontAwesome.otf
        -font-awesome.min.css
    /js
        -characterImages.js
        info.js
        -main.js
    /scss
    -styles.scss
    /ts
      -characterImages.ts
      info.ts
      -main.ts
-gulpfile.js
-index.html
-LICENSE
-package.json
-readme.md
```

## Bundle and minify compiled CSS and JS

```bash
gulp useref
```

## Bulid to dist from src

```bash
gulp build
```
## Clean (delete) dist

```bash
gulp clean:dist
```

## Features:

* Random rolls between for stats, selectable races, and classes
* Randomly selects image from array based on race, class, and gender inputs
* Generates character preview based on user inputs
* Calculates hit points, armor class, initiative and speed
* Calculates hit point gain on level up
* Add experience and keeps a running tottal
* Highlights chosen skills and displays calculated bonus from proficiency and ability score modifiers
* Dynamically highlights available skills on class selection

## Future Features:

* Display abilities, racial, and class specific skills
* Add attack roll functionality
* 

## Known "bugs"

* active class on general tab not working unless clicked
* default class selection not recognized

#### Change Log

###### 0.0.7

* Highlight available skills dynamically on class selection

###### 0.0.6

* Added proficiency bonus logic and display to skill preview
* Added skill modifier logic to modify skill bonuses

###### 0.0.5

* Added logic for level, experience and hitpoints

###### 0.0.4

* Added tabs for character preview section (general, proficiencies, and combat

###### 0.0.3

* Added support for non-binary genders, removed placeholder default values for race, class, and alignment,

###### 0.0.2

* Added feature to generate random character image from an array based on the character's class, race and gender.

###### 0.0.1

* Initial commit, preview displays input only

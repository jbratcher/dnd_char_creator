# D&D Character Creator

*** Work in progress ***
Input your characters attributes and it displays your character's stats.

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
    /img
    /js
        -index.js
        -main.js
    /scss
    -styles.scss
    /ts
      -main.ts
-index.html
-gulpfile.js
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

* Random rolls between 3 - 18 for stats, selectable races, and classes

## Future Features:

* API for stats

## Known "bugs"

* ???

#### Change Log

###### 0.0.1

* Initial commit, preview displays input only

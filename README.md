# PZPW Template
Main template used by PZPW when setting up a new project.

<br>

## Use PZPW
- Install pzpw, run `npm install -g pzpw`.
- Create a new project, run `pzpw new`.
- Add an additional mod to the project, run `pzpw add`.
- Check pzpw options, run `pzpw help`.
- Check out [PZPW Repository](https://github.com/Konijima/pzpw)

## PZPW Commands
- `pzpw new`: Generate a new pzpw project.
- `pzpw add <ModID>`: Create an additional mod into the project.
- `pzpw compile distribution`: Compile your project for distribution.
- `pzpw compile development`: Compile your project in development mode.
- `pzpw compile declaration`: Compile your project `.d.ts` file in `dst/`.
- `pzpw compile workshop`: Compile your project and moves it to the `Zomboid/workshop/` directory.

<br>

----

<br>

## Use NPM
- Download or clone https://github.com/Konijima/pzpw-template
- Run `npm install` in the main folder to install dependencies.

## NPM Commands
- `npm run clean`: Deletes `dst/` and `media/lua/` directories.
- `npm run build-compiler`: Compile the compiler script.
- `npm run compile-distribution`: Compile your project for distribution.
- `npm run compile-development`: Compile your project in development mode.
- `npm run compile-declaration`: Compile your project `.d.ts` file in `dst/`.
- `npm run compile-workshop`: Compile your project and moves it to the `Zomboid/workshop/` directory.

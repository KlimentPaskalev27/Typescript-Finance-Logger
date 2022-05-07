# Typescript Finance Logger
An exercise project aiming to put into practice the main Typescript concepts, functionality and syntax.

## How to use the app
You can spin up the `index.html` file in VS Code with the Live Server extension.

## Set up
You will need Node installed on your PC. You will need to use npm to install TypeScript on your machine if you don't have it already. Open your IDE, open up a new terminal and run `npm install -g typescript`.
- Install Node
- Open IDE (e.g. VS Code)
- Create your directory for project
- Open a new terminal
- Run `npm install -g typescript`

## Structure
This was programmed in Typescript so all the dev code is in the `src/` folder. Typescript was then compiled down to Javascript by opening the terminal and running `tsc -w` in the root folder so any `.ts` file would get compiled to `.js` in the `/public` folder.

### Compiling from TS to JS
#### Directories
In order for the compiler to compile only typescript inside the /src folder and to output the Javascript into the /public folder, I have edited the "tsconfig.json" file.
- Circa `ln28` I've set `"rootDir"` to `"./src"`.
- Circa `ln50` I've set `"outDir"` to `"./public"`.
- Circa `ln102` I've added `"include" : ["src"]` to only include files in src folder. Otherwise it will compile any .ts file in root directory.
#### Module and Target
In `tsconfig.json` file:
- Circa `ln27` I've set `"module"` to `"es2015"`.
- Circa `ln14` I've set `"target"` to `"es6"`.

### UI logic
The UI interactivity is inside `app.js`

### Classes
Different classes used in `app.js` can be found in the `/classes` directory.

### Interfaces
Different interfaces used in `app.js` can be found in the `/interfaces` directory.

### Other TS data types
I've put in some examples of TypeScript Generics, Generics with Interfaces and TypeScript Enums in the `/src/datatypes` directory.

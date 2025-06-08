<!-- es-lint config working -->

## Setup of the react typescript project

- `Install node.js` and npm install
- `npm install -g create-react-app` @ global level
- `npx create-react-app my-app --template typescript` install typescript- Project
- `cd my-app`
- `npm start` - run application

#### :nail_care: Enhancement

## Step to create eslint

- [#001](https://www.youtube.com/watch?v=xinJSYiOB6Q) **Eslint Configration .**

## Steps

- `$ yarn add eslint --save-dev`

- check eslink with in list or not`npm ls eslint`
- Add eslint `$ yarn add eslint-plugin-react --save-dev`
- check eslint-plugin-react in list or not
  `npm ls eslint-plugin-react`
- check eslintplugin-react-hooks
- create new file name .eslintrc.json
  `past the configration from json file eslintconfig
{
"extend":[
  "react-app",
  "react-app/jest",
  "prettier" //add after eslint-config-prettier --save -dev step
]
}`

- add pritter install
  `$ yarn add prettier --save-dev --save-exact`
- create .prettierrc.json file empty
- create .prettierignore file also add
  /node_module
  `$ yarn add eslint-config-prettier --save-dev`
- add pritter in .eslintrc.json file
  `  "prettier"
npx prettier --write .`

- check rules work or not
  add rules in eslintrc json file

## Create a form.

`
It should have 4 entities

1. Email
2. Password
3. Name
4. Submit button

- On click of Submit, it should go and store the data in a file.
- When you start entering the email ID, after 3 seconds, fire a call to check if the email entered is already available in the file. - debounsing
- Have some regex for both email and password. - rejex - vlaidation
- Try using a library for the form but it is optional. - can use libray
- Write tests for the above example. - test case`

# Tailwind

## To set up Tailwind CSS with a React TypeScript project, you can follow these steps:

- 1. First, install Tailwind CSS, PostCSS, and autoprefixer: npm install tailwindcss postcss autoprefixer
     Generate a Tailwind configuration file: npx tailwindcss init
     This will create a tailwind.config.js file in your project root.

- 2. Open the tailwind.config.js file and configure it to scan your src directory and configure color theams:

````module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-green': '#17BF63',
        'custom-red': '#E0245E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}`

- 3. Create a new PostCSS configuration file in your project root (postcss.config.js) and add the following:
```module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}```

- 4. In your src/index.css file (or wherever you want to include Tailwind), import Tailwind's styles:
`
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`

- 5. Finally, make sure your src/index.css file is imported in your src/index.tsx file:
import './index.css';
Now, you should be able to use Tailwind CSS classes in your React components. Remember to run your build command (like npm run build or npm start) to see the changes.
````
## Azure app registration process

- [#002](https://www.youtube.com/watch?v=4pH5spE2Yss&t=421s) **Eslint Configration .**

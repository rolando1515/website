# PORTFOLIO REVAMP

## TOPIC 1.  ATOMIC DESIGN

This is an article with a simple introduction to Atomic Design [link](https://paulonteri.com/thoughts/atomic-design-react).
In the article you'll see links to other sources of documentation and insights on Atomic Design.

## THOUGHTS

The web was initially very page by page focused, you made requests to a backend that served you HTML pages rendered by the browser.
With the move to more Frontend Frameworks where your content was available client side and adapted to responses from external sources (apis, browsers, etc).
The need for a more modern architecture for structuring applications was created and Atomic Design was implemented.

It works closely to the principle of Chemistry.
Atoms build up Molecules, Molecules build up Components, Components build up templates and templates build up pages.
We won't be as verbose or granular, we will work witk components & containers (while collating the UI in Next.js' pages structure).

The advantage of Atomic Design is it's ease of understand and easy maintenance, hopefully it shouldn't take too much time to get used to.

We won't be writing any code for now, our next step will be looking into the template and configuring it to fit you better.
but for now, please look through the documentation available in the link above and leave your thoughts, advantages and possible
approach to Atomic Design.

XXXXXXXXXXXXXXXXXXX ROLAND XXXXXXXXXXXXXXXXXXXX

Figma atomic components is a methodology for building pattern libraries that makes it easier to build websites.
Components are divided into several categories like:
Atoms
Molecules
Organism  
Templates and
Pages

Atomic design also make it easier to be consistent on all the components on the website. For example creating consistent buttons that matches throughout the website.  while maintaining the flexibility of adjusting elements without spending too much time. It is like OOP with a twist.

----------------------------------------------------------------------------

### MISC

Merged a branch to Git, deleted a branch & created a new branch for tooling, NICE!

## TOPIC 2.  TOOLING

Tooling is more related to the functionalities of your code editor.
It helps you with linting, formatting (and even making your codebase prettier, the extension is literally called Prettier).
I'll leave a list a extensions you should install on your vs code and leave a line for me briefly explaining what this extensions help you with.

1. ESLint
2. Import Cost
3. markdownlint
4. Prettier
5. Todo Tree
6. vscode-styled-components
7. React Extension Pack

You'll also notice the files on the root directory.
Can you look into the purpose and doumentation of these files for our project and give a brief explanation of what they're responsible for.
Please also leave any questions you may have about these files or their purpose.

1. .eslintrc.json
2. .gitignore
3. .prettierignore
4. .prettierrc.json
5. jest.config.js
6. package.json
7. next.config.js
8. README.md
9. tsconfig.json
10. yarn.lock

XXXXXXXXXXXXXXXXXXX ROLAND XXXXXXXXXXXXXXXXXXXX

ESLint = will try to automatically fix warning / errors on save.
Import cost= Will display inline in the editor the size of the imported package. ( It helps write more efficient code.)
markdownlint = encourage standards and consistency for Markdown files.  ( It helps write more standardized code.)
Prettier= Improves code readability.
Todo Tree= It helps collaborating and keeping track of things to do.
vscode-styled-components = it helps code faster.
React Extension Pack= similar to vs code styled component but for react.

.eslintrc.json = ESLint configuration.
.gitignore = is a list of files and folders that git will ignore.
.prettierignore = ignore certain files.
.prettierrc.json= perttier file configuration.
jest.config.js = Not sure what it is for.
package.json = contains metadata about a project.  It’s helpful when you need to figure out when a package is not working. It tells you the version that you are using and if it is installed.
next.config.js = Have never used it although I seen it before.
README.md = It helps with documentation. Specially dealing with how to set up environments.
tsconfig.json= is the root of a typescript project. I haven’t had any functional used yet.
yarn.lock= Similar to package Jason. This helps when packages are not working properly.

xxx NOBERT XXX
An important part of lintiers and formatters are the errors it'll show on your file while working.
There's currently some errors on your partition above, can you work on fixing them from the markdown instruction?
You'll notice my section of the Readme has no squiggly lines, that's markdownlint enforcing good practices for me.

- ESLint does a lot more that that, it's a code linter that can also help developers stay consistent (and avoid error) while working.
- For vscode-styled & REP, it's alright, vs-code-styled improves the legibility of styled components and Reacy Extension Pack gives us a handful of covenient React extensions.

- jest.config.js is responsible for the configuration for tests, we won't be looking at tests but it's good to know.
- package.json also does more than that but great description, it's essentially a manifest for your application with the tools and methodologies, there's a few scripts in the package.json, can you explain what they do?
- next.config.js allows us customize our next.js application, can you take a guess at what the current config is responsible for?
- tsconfig.json helps with TS configuration.
- yarn.lock holds more indepth (and specific) information about the packages and libraries we're using in our application, also helpful for staying consistent across different development environments.

XXXXX ROLAND XXXXX

I am not sure if I did the formatting with markdown correctly. But the error message went away.

It start with pre script which in our case starts like this
Then it follows with the dependencies  which are packages required by our application. in our case is

1. @reduxjs/toolkit": "^1.9.3",
2. "@types/node": "18.15.10",
3. "@types/react": "18.0.29",
4. "@types/react-dom": "18.0.11",
5. "axios": "^1.3.4",
6. "eslint": "8.36.0",
7. "eslint-config-next": "13.2.4",
8. "gsap": "^3.11.5",
9. "lodash": "^4.17.21",
10. "next": "13.2.4",
11. "react": "18.2.0",
12. "react-dom": "18.2.0",
13. "react-redux": "^8.0.5",
14. "react-transition-group": "^4.4.5",
15. "styled-components": "^5.3.9",
16. "typescript": "5.0.2"

Let me know if you want me to dig in to each one of those but basically they make our life easier.

Then comes the devDependencies
These are packages that we will use only in development.  Examples Unit test.
Then we have devDependencies are dependencies that oir projets hooks into. usually they are plugins.
lint-staged not sure what are these use for but it seems that is only runs on certain files. Which helps them run faster.
current config is responsible for higlhliting potential problems in our application. It looks like is the warning signs we see when we run the application.

XXX NOBERT XXX

It's very important to note the scripts in your package.json.

1. "prepare": "husky install": this is usually run pre installation, it sets up Husky (for managing Git hooks and commit info) in your application.
2. "dev": "next dev": Next command to set up a development server.
3. "build": "next build": Next command to build your project.
4. "start": "next start": Next command to start your project.
5. "lint:js": "next lint", "lint-fix": "next lint --fix" "lint:css": "stylelint ./**/*.scss": commands for linting (we might've forgotten to add stylelint globally), they go through your application and make stuff look & act good.
6. "lint": "npm-run-all --parallel lint:*": Runs all the lint commands in the package.json.
7. "tsc": "tsc", "test": "jest --watch": For Type Checking with TypeScript & test for watching all the tests in your application.
8. "prettier": "prettier check \"**/*{js,jsx,json,ts,tsx,yaml}\"", "prettier-fix": "prettier --write \"**/*{js,jsx,json,ts,tsx,yaml}\"": These are prettier commands for formatting your code base.
9. "format": "npm-run-all tsc prettier-fix lint": This runs the tsc, prettier-fix & lint commands.

The lint-staged is called by Husky before every commit, it fixes your files with the "prettier --fix" command and adds them.

You can add any notes you might have after this description.

## TOPIC 3.  GLOBALS

Apparently, Todo tree registers XXX as a Todo so take note.
The globals are what comes after the boilerplate. They're a platform for creating consistency in your application, whether it be styling, introducing environment variables etc.

We've decided to use the [Figma](https://www.figma.com/file/uha2g6j5g7e2ofWLjAK1kP/Portfolio-Ui-Design-Template-(Community)?node-id=0%3A1&t=wHMvDD0ElKvMLZxS-1) for this application.

You'll have the following tasks to research and implement.

1. Identify the primary & secondary colors of the design.
2. Identify the fonts used in the application, there's a Google font & a non Google font. I want you to import the Google font into the main app CSS file & import the other font locally (also registering in in your CSS).
3. Define a :root in the global style sheet and also create css variables for colors, gradients etc (I'll leave examples).
4. Define a maximum content width (in px) from the application & and a percentage width (I usually use 85% or 90%);
5. Change the percentage width with CSS variables with media queries for tablet width (90%) and mobile width (95%).

I'll leave TODOs wherever you might need to work on, I'll also leave a few examples, I'll add dummy media queries, but I need you to look into the documentation behind them and adjust the values to properly match the tablet and mobile width values.
Also leave your observations at the end of this topic (or any problem you had, and how you solved them).

XXXX ROLAND XXXX

1. The Primary color seems to be #201F1F which is the background and secondary color is #FFFFFF which seems to be the letters.(I am not sure if I am correct)
2. Is there a place in Figma where I can see like a summary of all the colors weights and fonts that are used ?
   Here is a summart of the web font <https://medium.com/@aitareydesign/understanding-of-font-formats-ttf-otf-woff-eot-svg-e55e00a1ef2>  

   Is this used because different devices have different capabilities and this is a way to make sure that the font is displayed correctly on all devices ?

3. I do not see too many different colors and gradients. I am not sure if I am missing something.
4. Done.
5. Done.

Notes
   These are links of documentations
   <https://www.geeksforgeeks.org/how-to-add-custom-local-fonts-in-next-js/>
   <https://react.dev/learn>
   <https://nextjs.org/docs/getting-started>
   <https://styled-components.com/docs/basics>
  
  Questions 
  1. Are hooks only used to collect data in the front end? or is it also used to connect it to the backend ?.
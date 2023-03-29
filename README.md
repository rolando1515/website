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

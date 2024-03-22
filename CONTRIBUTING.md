# Contributing

Feel free to contribute in any way you like, and if you feel comfortable doing so, follow our standard instructions below and learn how to do it.

## Project structure

- **constants** contains the constant values and settings
- **src/storybook** contains the Items or components that will be used within the stories design system used in the app, from breakpoints to the color system
- **src/lib** Contains our component library that components our ui kit, thus our theming files
- **src/lib/components** contains the generic components
- **src/lib/elements** contains the atomic components used within the generic components
- **src/lib/theme** Contains the files to manage our dark and light themes, as well as the design system definitions that will be used in the components or elements
- **src/lib/theme/design-system** contains the files that standardize the design system used in the app, from breakpoints to the color system

## NVM Procedures

You must use the project's node version to run `npm` or `yarn` commands. To toggle your node version **we recommend to use the NVM** because of it's flexibility to manage node versions. To install the **NVM**, for windows or linux and mac, you can follow the steps by clicking on this link:
[NVM installation guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

When you done downloading and installing **NVM** in your machine, you can confirm that nvm is installed correctly by running in cmd the following command:

```bash
  nvm -v
```

This should show the version of nvm installed.

When you're able to see the **NVM** version installend in your machine, you must install the same node version as the node version in the project, by entering this cmd command:

```bash
  nvm install 18
```

_You can also check in the `package.json` file, or in `.nvmrc` file in the root of the project_

After that, you can finally run the following command to use the proposed version and apply the changes with **NVM**:

```bash
  nvm use
```

This will change your previous node version, to the project's node version.

Then you'll be able to run the `yarn` command or `npm install` to install all the dependencies and run the project!

## Increase the productivity with VSCode Interest Snippets

Get rid of typing everytime similar code parts such as: Components, Components Props and Component Story.
There's available three base snippets.

### Snippet prefixes

- For **components** you should just use our snippet prefix: `ipc`, that stands for _Interest Protocol Component_ as bellow:

<img alt="gif" src="https://i.imgur.com/yipg4xC.gif" />

- For **component's props** you should just use our snippet prefix: `ipcp`, that stands for _Interest Protocol Component Props_ as bellow:

<img alt="gif" src="https://i.imgur.com/ARPtTgY.gif" />

- For **components story** you should just use our snippet prefix: `ipsc`, that stands for _Interest Protocol Story Component_ as bellow:

<img alt="gif" src="https://i.imgur.com/1zyBDeg.gif" />

## Issue reports

A bug usually happens when something doesn't work as expected, and it can be caused by some code in the repository. Reports are important to help us overcome them.

Below are instructions on how to optimally report a bug:

### In the Repository

- **Try to reproduce the bug in the main branch**: The bug may have already been passed in the latest version, always check before reporting the issue.
- **Check to see if the issue hasn't already been reported**: It could be that your issue has already been reported by someone else, make sure it is not on the list.
- **Open a git issue**: Explain what happened, and give as much detail as possible so we can try to reproduce the same situation.

_A good bug report shouldn't leave others needing to chase you up for more._

## Branch

When creating the new branch follow the naming rule:

- for new feature: `feature/<task-name>`
- for bug: `bugfix/<task-name>`

## Commit

To commit, you must:

- Certify if your code is valid to linters;
- Use commit rules in [Gitmoji Commitlint](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config#readme):
  - Starting with one of these emojis ([Gitmoji](https://gitmoji.dev));

_Don't forget to setup your IDE with `eslint` and `prettier`._

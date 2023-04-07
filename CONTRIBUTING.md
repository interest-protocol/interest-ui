# Contributing

Feel free to contribute in any way you like, and if you feel comfortable doing so, follow our standard instructions below and learn how to do it.

## Project structure

- **constants** contains the constant values and settings
- **src/storybook** contains the Items or components that will be used within the storys design system used in the app, from breakpoints to the color system
- **src/lib** Contains our component library that components our ui kit, thus our theming files
- **src/lib/components** contains the generic components
- **src/lib/elements** contains the atomic components used within the generic components
- **src/lib/theme** Contains the files to manage our dark and light themes, as well as the design system definitions that will be used in the components or elements
- **src/lib/theme/design-system** contains the files that standardize the design system used in the app, from breakpoints to the color system

## Issue reports

A bug usually happens when something doesn't work as expected, and it can be caused by some code in the repository. Reports are important to help us overcome them.

Below are instructions on how to optimally report a bug:

### In the Repository

- **Try to reproduce the bug in the main branch**: The bug may have already been passed in the latest version, always check before reporting the issue.
- **Check to see if the issue hasn't already been reported**: It could be that your issue has already been reported by someone else, make sure it is not on the list.
- **Open a git issue**: Explain what happened, and give as much detail as possible so we can try to reproduce the same situation.

_A good bug report shouldn't leave others needing to chase you up for more._

## Commit

To commit, you must:

- Certify if your code is valid to linters;
- Use commit rules in [Gitmoji Commitlint](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config#readme):
  - Starting with one of these emojis ([Gitmoji](https://gitmoji.dev));

_Don't forget to setup your IDE with `eslint` and `prettier`._

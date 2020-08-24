<p align="center"><img src="https://i.imgur.com/putnspY.png" alt="logo"/></p>

<h1 align="center">hyper-init</h1>

<p align="center">The ultimate and most complete extension to initialize commands before and after <a href="https://hyper.is/">Hyper terminal</a> starts
  <br/><br/>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img src="https://img.shields.io/badge/support%20on-patreon-orange.svg?style=for-the-badge&labelColor=1C1E26&color=00be44" alt="become a patron or sponsor" />
  </a>
  
   <!-- IssueHunt -->
  <a href="https://issuehunt.io/r/daltonmenezes/hyper-init">
    <img alt="issuehunt url" src="https://img.shields.io/badge/fund%20issues-issuehunt-1C1E26?style=for-the-badge&labelColor=1C1E26&color=00be44">
  </a>
  
  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/hyper-init">
    <img src="https://img.shields.io/npm/v/hyper-init.svg?style=for-the-badge&labelColor=1C1E26&color=00be44" alt="npm version"/>
  </a>
  
  <!-- NPM Downloads -->
  <a href="https://www.npmjs.com/package/hyper-init">
    <img src="https://img.shields.io/npm/dm/hyper-init.svg?label=Downloads&style=for-the-badge&labelColor=1C1E26&color=00be44" alt="downloads" />
  </a>
  
  <!-- Awesome -->
  <a href="https://github.com/bnb/awesome-hyper">
    <img src="https://img.shields.io/badge/mentioned%20in-awesome-orange.svg?style=for-the-badge&labelColor=1C1E26&color=00be44" alt="mentioned in awesome list"/>
  </a>
</p>

> With **hyper-init** you can perform as many commands as you would like to do, before and after Hyper terminal starts, using rules that define when your commands should run.

<p align="center"><img src="https://github.com/daltonmenezes/hyper-init/blob/master/img/hyper-init.gif?raw=true" alt="hyper-init gif"/></p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Configuration](#configuration)
  - [init](#init)
    - [Rules](#rules)
    - [Commands](#commands)
    - [Allowed Shells](#allowed-shells)
  - [clearCommand](#clearcommand)
  - [commandSeparator](#commandseparator)
- [Contributing](#contributing)
- [License](#license)


## Installation

If you don't have Hyper, install it from [here](https://hyper.is/#installation).

So, type the following on Hyper:

```
hyper i hyper-init
```

## Configuration

### init

`hyper-init` can be configured within the `config` object in the `~/.hyper.js` configuration file.

All you have to do to get started is to create an array of objects called `init`, like this:

```js
init: [
  {
    rule: 'once',
    commands: ['cd ~/Desktop', 'ls'],
    allowedShells: ['zsh', 'bash']
  }
]
```

Your `~/.hyper.js` configuration file should look like this:
```js
module.exports = {
  config: {

    // add hyper-init configuration like this:
    init: [
      {
        rule: 'once',
        commands: ['cd ~/Desktop', 'ls'],
        allowedShells: ['zsh', 'bash']
      },
      {
        rule: 'windows',
        commands: ['echo This is only executed on New Windows!']
      },
      {
        rule: ['splitted', 'tabs', 'windows'],
        commands: ['echo Hey, I can set an array of rules!']
      }
    ]
  },

  plugins: ['hyper-init']

}
```

#### Rules
A string or array that defines when you want your commands to run.

 Rule | Description
 --- | ---
 once | executes your commands only at Hyper starts
 windows | executes your commands only when a new Hyper window opens
 tabs | executes your commands only when a new tab is opened
 splitted | executes your commands only when a new pane is opened
 all | executes your commands every time a terminal opens

#### Commands
An array with your shell commands to run.<br/>
You can perform as many commands as you would like.

Example:
```js
commands: ['cd ~/Desktop', 'ls']
```

#### Allowed Shells
An array of allowed shells to restrict the commands to be executed.

Example:
```js
allowedShells: ['zsh', 'bash']
```
> You can omit this property or let the array empty if you would like to allow the commands run for all shells.

### clearCommand

`hyper-init` can infer the command to clear the screen for a small number of terminals.
If it can't infer the command, `hyper-init` clears the terminal buffer using `printf "\\033[H"`.
You can set it manually adding the `clearCommand: ''` property within the `config` object.
For example:

```js
module.exports = {
  config: {
    clearCommand: 'reset'
  }
}
```

### commandSeparator

`hyper-init` uses ` && ` as the default separator for commands.
For known terminals, `hyper-init` can infer the separator.
You can also set it manually by adding the `commandSeparator: ''` property within the `config` object,
but this overrides for all terminals, even ones that don't support that delimiter.
For example:

```js
module.exports = {
  config: {
    commandSeparator: ' ++ ' // For an arbitrary terminal that uses `++`
  }
}
```

## Contributing

Contributions are always welcome.

There's a bunch of ways you can contribute to this project, like by:
- :electric_plug: Creating new features
- :wave: Requesting a feature
- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on Patreon
- :bug: Funding an issue on IssueHunt
- :star2: Dropping a star on this repository

And `hyper-init`'s ability to infer the `clearCommand` and `commandSeparator` is based on its relatively small dictionary.
Feel free to add more definitions for terminals not listed in `shells.js`.

```js
KNOWN_SHELLS = {
  [...]
  shellName: {
    separator: '',
    clearCommand: ''
  }
  [...]
}
```

- `shellName` should be replaced with the name of the shell you want to target (lowercase)
- The value of `separator` should be the separator for multiple statements on one line (e.g. `' && '`) as a string
- The value of `clearCommand` should be the command to clear the target shell (e.g. `'cls'`) as a string

```js
KNOWN_SHELLS = {
  [...]
  powershell: {
    separator: '; ',
    clearCommand: 'Clear-Host'
  }
  [...]
}
```

## License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE)

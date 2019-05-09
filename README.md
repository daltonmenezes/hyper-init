<p align="center"><img src="https://i.imgur.com/putnspY.png" alt="logo"/></p>

<h1 align="center">hyper-init</h1>

<p align="center">The ultimate and most complete extension to initialize commands before and after <a href="https://hyper.is/">Hyper terminal</a> starts
<br/><br/>
<a href="https://www.patreon.com/daltonmenezes"><img src="https://img.shields.io/badge/become%20a-patron%20or%20sponsor-orange.svg" alt="become a patron or sponsor" /></a>
<a href="https://paypal.me/daltonmenezes"><img src="https://img.shields.io/badge/Donate-green.svg" alt="Donate" /></a>
    <a href="https://www.npmjs.com/package/hyper-init"><img src="https://img.shields.io/npm/v/hyper-init.svg" alt="npm version"/></a>
    <img src="https://img.shields.io/npm/dm/hyper-init.svg?label=Downloads" alt="downloads" />
    <a href="https://github.com/bnb/awesome-hyper"><img src="https://camo.githubusercontent.com/63134cb1c7ec0b86c8d97bc42877a271cf7307fa/68747470733a2f2f6473632e636c6f75642f73696e647265736f726875732f6d656e74696f6e65642d62616467652e737667" alt="mentioned in awesome list"/></a>
<a href="https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/>
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
  - [clearCommand](#clearcommand)
  - [commandSeparator](#commandseparator)
- [License](#license)


## Installation

If you don't have Hyper, install it [here](https://hyper.is/#installation).

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
    commands: ['cd ~/Desktop', 'ls']
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
        commands: ['cd ~/Desktop', 'ls']
      },
      {
        rule: 'windows',
        commands: ['echo This is only executed on New Windows!']
      }
    ]
  },

  plugins: ['hyper-init']

}
```

#### Rules
A string that defines when you want your commands to run.

 Rule | Description
 --- | ---
 `once` | executes your commands only at Hyper starts
 `windows` | executes your commands only when a new Hyper window opens
 `tabs` | executes your commands only when a new tab is opened
 `splitted` | executes your commands only when a new pane is opened
 `all` | executes your commands every time a terminal opens

#### Commands
An array with your shell commands to run.<br/>
You can perform as many commands as you would like.

Example:
```js
commands: ['cd ~/Desktop', 'ls']
```


### clearCommand

`hyper-init` clears the terminal buffer using `printf "\\033[H"` as the default value, but you can set it manually adding the `clearCommand: ''` property within the `config` object. For example:

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

![Testing in PowerShell](/img/hyper_test_powershell.png)
![Testing in CMD](img/hyper_test_cmd.png)
![Testing in Node](img/hyper_test_node.png)

No, I haven't fixed the `printf \033[H` error yet. I will. Soon

## License
[MIT License](https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE)

<p align="center"><img src="https://i.imgur.com/putnspY.png" alt="logo"/></p>

<h1 align="center">hyper-init</h1>

<p align="center">The ultimate and most complete extension to initialize commands before and after <a href="https://hyper.is/">Hyper terminal</a> starts
<br/><br/>
<a href="https://paypal.me/daltonmenezes"><img src="https://img.shields.io/badge/Donate-green.svg" alt="Donate" /></a>
    <img src="https://img.shields.io/npm/dm/hyper-init.svg?label=Downloads" alt="downloads" />
<a href="https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/>
</a>
</p>

> With **hyper-init** you can perform as many commands as you would like to do, before and after Hyper terminal starts, using rules that defines when your commands should run.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [init](#init)
  - [clearCommand](#clearcommand)
- [init Options](#init-options)
  - [Rules](#rules)
  - [Commands](#commands)


## Installation
:warning: If you already have Hyper, disable any Hyper startup commands extension to avoid conflicts.

If you don't have Hyper, install it from [here](https://hyper.is/#installation).

So, type the following on Hyper:

```
hyper i hyper-init
```

## Configuration

## init

```hyper-init``` can be configured in ```~/.hyper.js``` configuration file within the ```config``` object.

All you have to do to get started is to create an array of objects called ```init```.

```js
init: [
  {
    rule: 'once',
    commands: ['cd ~/Desktop', 'ls']
  }
]
```

Your ```~/.hyper.js``` configuration file should look like this:
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

## clearCommand

Also `hyper-init` clears the terminal buffer using `printf "\\033[H"` as the default value, but you can set it manually adding the `clearCommand: ''` property within the `config` object. For example:

```js
module.exports = {
  config: {
    clearCommand: 'reset'
  }
}
```

## init: Options

### Rules
A string that defines when you want your commands to run.

 Rule | Description 
 --- | --- 
 `once` | executes your commands only at Hyper starts
 `windows` | executes your commands only at new windows
 `tabs` | executes your commands only at new tabs
 `splitted` | executes your commands only at splitted windows
 `all` | executes your commands with all described states previously

### Commands
An array with your shell commands to run.<br/>
You can perform as many commands as you would like to do.

Example:
```js
commands: ['cd ~/Desktop', 'ls']
```

## License
[MIT License](https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE)

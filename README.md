<p align="center"><img src="https://i.imgur.com/putnspY.png" alt="logo"/></p>

<h1 align="center">hyper-init</h1>

<p align="center">The ultimate extension to initialize commands before and after <a href="https://hyper.is/">Hyper terminal</a> starts
<br/><br/>
<a href="https://paypal.me/daltonmenezes"><img src="https://img.shields.io/badge/Donate-green.svg" alt="Donate" /></a>
<a href="https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/>
</a>
</p>

<h2 align="center">{ Work in progress }</h2>

> With **hyper-init** you can perform as many commands as you would like to do, before and after Hyper terminal starts, using rules that defines when your commands should run.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Options](#options)
  - [Rules](#rules)
  - [Commands](#commands)


## Installation
```
Soon...
```

## Configuration
```hyper-init``` can be configured in ```~/.hyper.js``` configuration file within the config object.

Example:
```js
module.exports = {
  config: {
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

## Options

### Rules
A string that defines when you want your commands to run.

| Rule | Description |
| --- | --- |
| `once` | executes your commands only at Hyper starts |
| `windows` | executes your commands only at new windows |
| `tabs` | executes your commands only at new tabs |
| `splitted` | executes your commands only at splitted windows |
| `all` | executes your commands with all described states previously |

### Commands
An array with your shell commands to run.<br/>
You can perform as many commands as you would like to do.

## License
[MIT License](https://github.com/daltonmenezes/hyper-init/blob/master/LICENSE)

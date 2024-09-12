leetcode
=================

Project to practive leetcode tasks


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/leetcode.svg)](https://npmjs.org/package/leetcode)
[![Downloads/week](https://img.shields.io/npm/dw/leetcode.svg)](https://npmjs.org/package/leetcode)


<!-- toc -->
* [Usage](#usage)
* [Development](#development)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g leetcode
$ leetcode COMMAND
running command...
$ leetcode (--version)
leetcode/0.0.0 linux-x64 node-v22.4.0
$ leetcode --help [COMMAND]
USAGE
  $ leetcode COMMAND
...
```
<!-- usagestop -->

# Development
```bash
pnpm build && npx leetcode --help
```

# Commands
<!-- commands -->
* [`leetcode hello PERSON`](#leetcode-hello-person)
* [`leetcode hello world`](#leetcode-hello-world)
* [`leetcode help [COMMAND]`](#leetcode-help-command)
* [`leetcode plugins`](#leetcode-plugins)
* [`leetcode plugins add PLUGIN`](#leetcode-plugins-add-plugin)
* [`leetcode plugins:inspect PLUGIN...`](#leetcode-pluginsinspect-plugin)
* [`leetcode plugins install PLUGIN`](#leetcode-plugins-install-plugin)
* [`leetcode plugins link PATH`](#leetcode-plugins-link-path)
* [`leetcode plugins remove [PLUGIN]`](#leetcode-plugins-remove-plugin)
* [`leetcode plugins reset`](#leetcode-plugins-reset)
* [`leetcode plugins uninstall [PLUGIN]`](#leetcode-plugins-uninstall-plugin)
* [`leetcode plugins unlink [PLUGIN]`](#leetcode-plugins-unlink-plugin)
* [`leetcode plugins update`](#leetcode-plugins-update)
* [`leetcode sort bubble`](#leetcode-sort-bubble)
* [`leetcode sort heap`](#leetcode-sort-heap)
* [`leetcode sort insertion`](#leetcode-sort-insertion)
* [`leetcode sort merge`](#leetcode-sort-merge)
* [`leetcode sort quick`](#leetcode-sort-quick)
* [`leetcode structures heap`](#leetcode-structures-heap)

## `leetcode hello PERSON`

Say hello

```
USAGE
  $ leetcode hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ leetcode hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/hello/index.ts)_

## `leetcode hello world`

Say hello world

```
USAGE
  $ leetcode hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ leetcode hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/hello/world.ts)_

## `leetcode help [COMMAND]`

Display help for leetcode.

```
USAGE
  $ leetcode help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for leetcode.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.4/src/commands/help.ts)_

## `leetcode plugins`

List installed plugins.

```
USAGE
  $ leetcode plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ leetcode plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/index.ts)_

## `leetcode plugins add PLUGIN`

Installs a plugin into leetcode.

```
USAGE
  $ leetcode plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into leetcode.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LEETCODE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LEETCODE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ leetcode plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ leetcode plugins add myplugin

  Install a plugin from a github url.

    $ leetcode plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ leetcode plugins add someuser/someplugin
```

## `leetcode plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ leetcode plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ leetcode plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/inspect.ts)_

## `leetcode plugins install PLUGIN`

Installs a plugin into leetcode.

```
USAGE
  $ leetcode plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into leetcode.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LEETCODE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LEETCODE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ leetcode plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ leetcode plugins install myplugin

  Install a plugin from a github url.

    $ leetcode plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ leetcode plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/install.ts)_

## `leetcode plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ leetcode plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ leetcode plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/link.ts)_

## `leetcode plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ leetcode plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ leetcode plugins unlink
  $ leetcode plugins remove

EXAMPLES
  $ leetcode plugins remove myplugin
```

## `leetcode plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ leetcode plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/reset.ts)_

## `leetcode plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ leetcode plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ leetcode plugins unlink
  $ leetcode plugins remove

EXAMPLES
  $ leetcode plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/uninstall.ts)_

## `leetcode plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ leetcode plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ leetcode plugins unlink
  $ leetcode plugins remove

EXAMPLES
  $ leetcode plugins unlink myplugin
```

## `leetcode plugins update`

Update installed plugins.

```
USAGE
  $ leetcode plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/update.ts)_

## `leetcode sort bubble`

```
USAGE
  $ leetcode sort bubble
```

_See code: [src/commands/sort/bubble.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/sort/bubble.ts)_

## `leetcode sort heap`

```
USAGE
  $ leetcode sort heap
```

_See code: [src/commands/sort/heap.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/sort/heap.ts)_

## `leetcode sort insertion`

```
USAGE
  $ leetcode sort insertion
```

_See code: [src/commands/sort/insertion.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/sort/insertion.ts)_

## `leetcode sort merge`

```
USAGE
  $ leetcode sort merge
```

_See code: [src/commands/sort/merge.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/sort/merge.ts)_

## `leetcode sort quick`

```
USAGE
  $ leetcode sort quick
```

_See code: [src/commands/sort/quick.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/sort/quick.ts)_

## `leetcode structures heap`

```
USAGE
  $ leetcode structures heap
```

_See code: [src/commands/structures/heap.ts](https://github.com/frylo0/leetcode/blob/v0.0.0/src/commands/structures/heap.ts)_
<!-- commandsstop -->

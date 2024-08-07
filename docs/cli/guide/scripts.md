---
title: Start Scripting
sidebar_position: 4
---

## What is Scripting?

Scripts are a way for creators to build complex logic and interact with a Minecraft world.
Using the Minepicker Creator CLI, you can easily install and import [script libraries](https://minepicker.com/script-libraries) listed on Minepicker to make your scripting experience easier:

```bash
minepicker use @minecraft/server
```

```js title="BP/scripts/index.js"
import { world } from "@minecraft/server";

world.sendMessage("Hello world!");
```

:::warning Script Environent Restrictions
Some script libraries can only be used in certain environments, such as `@minecraft/server-editor` which will only function within Editor extensions.
The Minepicker Creator CLI will inform you of any restrictions when installing libraries.
:::

## Scripting Setup

### New Add-Ons and Editor Extensions

When you set up a behavior pack in an add-on or Editor extension creation with [`minepicker new`](/docs/cli/commands/new), you will be asked whether you would like to set up scripts as well.

Here, you can choose the scripting language you would like to use: JavaScript or TypeScript (which is compiled into JavaScript by Minepicker).
If you're just getting started with scripting, TypeScript may be too complicated to undestand fully.
Learning the basics of JavaScript first is recommended.

This will automatically fill the `scripts` field of your behavior pack with some defaults and will create a `scripts` folder with an `index` file inside.
This file will act as the main script for all other scripts to be imported into.
Changing the `entry` field of your `creation.json` script options will change where Minepicker looks for your main file.

### Existing Add-Ons and Editor Extensions

In existing add-on or Editor extension `creation.json` files, the `scripts` field must be added to the behavior pack options:

:::info More Options
[Click here](/docs/cli/config/add-ons#scripts) to view all add-on scripting options!
:::

```js title="creation.json"
{
  "type": "addon",
  "target": "stable",
  "behavior_pack": {
    ...
    "scripts": {
      "entry": "index.js", // The main script file can be JS or TS and is located in your BP "scripts" folder.
      "dependencies": {} // Libraries that your scripts depend on.
    }
  }
}
```

The next time you run [`minepicker dev`](/docs/cli/commands/dev) your behavior pack `scripts` folder and `manifest.json` will be set up by Minepicker!

## Using Script Libraries

Script libraries can be added to a creation using the [`minepicker use`](/docs/cli/commands/use) command.
The library name should either be the name of a native Minecraft script module (such as `@minecraft/server`) or the Minepicker ID of a submitted script library.

A version range can also be specified to determine which version of the library is installed.
By default, the latest full release version is installed.

```ts
minepicker use example-library 1.4.0
```

This will install the library itself, and any other libraries that it depends on.

:::note Native Dependencies
Native module dependencies of installed script libraries must be added to your creation manually.
You will be told which versions of which native modules you need to install.
:::

Now that you've installed a library, you can use it in your scripts by importing it by name.

```js title="BP/scripts/index.js"
import { destroyWorld } from "example-library";

destroyWorld("Goodbye world!");
```

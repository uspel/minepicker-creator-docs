---
title: Developing Creations
sidebar_position: 2
---

Now that your creation is set up, you can get creating!

The [`minepicker dev`](/docs/cli/commands/dev.md) command is used to output a development build of your creation which rebuilds upon each change to your source files.
This is the version of your creation that should be used for testing.

```bash
minepicker dev
```

The folder that the build is outputted in is determined by the `directories` field within the creation's configuration file (`creation.json`).

:::warning Updating Configuration
Updates to your `creation.json` file will result in any instances of the `minepicker dev` command being terminated.
For configuration changes to take effect, you must re-run the command.
:::

## Add-Ons and Editor Extensions

The outputted folder contains the built files for your add-on, including compiled scripts.
By default, packs are built to the appropriate `development_*_packs` directories in your `com.mojang`.

### Scripting

If your behavior pack includes scripts, Minepicker Creator sets up a few extra features to help your development experience!

- **Automatic Reload** — During development we run a WebSocket that Minecraft can connect to in order to automatically reload the world whenever your scripts are rebuilt.
  By default, the WebSocket's port is set to `19145` and can be connected to by running the following Minecraft command:

  ```bash
  /connect localhost:19145
  ```

  The automatic reload functionality can be configured or disabled via your creation configuration.

- **Debugging** — When setting up a behavior pack with scripts, we create a `.vscode/launch.json` file and, during development, source maps are created.
  This enables functionality in the [Minecraft Bedrock Edition Debugger](https://marketplace.visualstudio.com/items?itemName=mojang-studios.minecraft-debugger)
  Visual Studio Code extension, which can be used to set breakpoints, debug errors and view world diagnostics.

  By default, the debugging port is set to `19144`, but this can be changed in the `.vscode/launch.json` file.

## Script Libraries

If you have set up an example creation in your script library, the development command will output built scripts to the example behavior pack scripts `node_modules` directory.
By default, the development build of the script library can be imported in the behavior pack scripts by importing the `test` module:

```js title="example/BP/scripts/index.js"
import ... from "test";
```

To change the development name of the script library, you should update the `directories` field in your creation configuration like so:

```js title="creation.json"
"directories": {
  "source": "src",
  "development": "example/BP/scripts/node_modules/my-example", // import ... from "my-example";
  "build": "build"
}
```

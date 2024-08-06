---
title: Add-On Configuration
sidebar_label: Add-Ons
sidebar_position: 1
---

| Option          | Required | Type                                 | Description                                                                                                                                                       |
| --------------- | -------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `behavior_pack` | No       | [Behavior Pack](#behavior-pack)      | Configuration for a behavior pack. <br/> If omitted, a behavior pack is not included in the add-on.                                                               |
| `resource_pack` | No       | [Resource Pack](#resource-pack)      | Configuration for a resource pack. <br/> If omitted, a resource pack is not included in the add-on.                                                               |
| `target`        | Yes      | `"stable"` <br/> `"preview"`         | Whether this creation targets Minecraft (stable) or Minecraft Preview. Determines which type definitions for native script libraries are available and installed. |
| `type`          | Yes      | `"addon"` <br/> `"editor_extension"` | Defines this creation as an add-on or Editor extension. <br/> Editor extensions are included here because they have the same options as add-ons.                  |

## Behavior Pack

| Option              | Required | Type                        | Description                                                                                                           |
| ------------------- | -------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `directories`       | Yes      | [Directories](#directories) | Determines the source, development and build directories for the behavior pack.                                       |
| `generate_contents` | No       | `boolean`                   | Whether a `contents.json` file should be generated in the behavior pack. <br/> If omitted, the file is not generated. |
| `scripts`           | No       | [Scripts](#scripts)         |                                                                                                                       |

### Scripts

| Option             | Required | Type                                                       | Description                                                                                                                                              |
| ------------------ | -------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `automatic_reload` | No       | `boolean` <br/> [Automatic&nbsp;Reload](#automatic-reload) | Starts a WebSocket that Minecraft clients can connect to in order to automatically run the "/reload" command when scripts are built. Enabled by default. |
| `bundle`           | No       | `boolean`                                                  | Whether scripts should be bundled into their entry file, disregarding the source file structure. <br/> If omitted, scripts are not bundled.              |
| `dependencies`     | Yes      | [Dependencies](#dependencies)                              | Which other script libraries these scripts depends on.                                                                                                   |
| `entry`            | Yes      | `string`                                                   | File path to be treated as the script entry.                                                                                                             |
| `minify`           | No       | `boolean`                                                  | Compresses output script files, removing comments, whitespace and shortening names. <br/> If omitted, scripts are not minified.                          |
| `source_map`       | No       | `boolean`                                                  | Improves debugging by mapping outputted development files to their source files. <br/> If omitted, sourcemaps are generated during development.          |
| `tree_shake`       | No       | `boolean`                                                  | Whether unused code and intermediate files are removed from the outputted files. <br/> If omitted, tree shaking occurs.                                  |

#### Automatic Reload

| Option | Required | Type      | Description                                                        |
| ------ | -------- | --------- | ------------------------------------------------------------------ |
| `port` | Yes      | `integer` | The port of `localhost` to host the automatic reload websocket on. |

#### Dependencies

| Key             | Value            | Description                                                                    |
| --------------- | ---------------- | ------------------------------------------------------------------------------ |
| `<libraryName>` | `<versionRange>` | Where keys are library names and values are the required string version range. |

## Resource Pack

| Option              | Required | Type                        | Description                                                                                                                         |
| ------------------- | -------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `directories`       | Yes      | [Directories](#directories) | Determines the source, development and build directories for the resource pack.                                                     |
| `generate_contents` | No       | `boolean`                   | Whether a `contents.json` file should be automatically generated in the resource pack. <br/> If omitted, the file is not generated. |
| `textures`          | No       | [Textures](#textures)       |                                                                                                                                     |

### Textures

| Option          | Required | Type      | Description                                                                                                                                |
| --------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `generate_list` | No       | `boolean` | Whether a `textures_list.json` file should be automatically generated in the textures folder. <br/> If omitted, the file is not generated. |

## Directories

| Option        | Required | Type     | Description                                                                                                                                                   |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `source`      | Yes      | `string` | Where source files are located.                                                                                                                               |
| `development` | Yes      | `string` | Where will be built to during development with the `minepicker dev` command. <br/> Can be specifically cleared by running the `minepicker clean dev` command. |
| `build`       | Yes      | `string` | Where will be built to for publishing with the `minepicker build` command. <br/> Can be specifically cleared by running the `minepicker clean build` command. |

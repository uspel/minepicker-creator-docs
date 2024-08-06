---
title: Script Library Configuration
sidebar_label: Script Libraries
sidebar_position: 1
---

| Option         | Required | Type                          | Description                                                                                                                                                       |
| -------------- | -------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bundle`       | No       | `boolean`                     | Whether scripts should be bundled into their entry file, disregarding the source file structure. <br/> If omitted, scripts are not bundled.                       |
| `dependencies` | Yes      | [Dependencies](#dependencies) | Which other script libraries this library depends on.                                                                                                             |
| `directories`  | Yes      | [Directories](#directories)   | Determines the source, development and build directories for the script library.                                                                                  |
| `entries`      | Yes      | `string[]`                    | Array of file paths to be treated as script entries. At least one is required.                                                                                    |
| `minify`       | No       | `boolean`                     | Compresses output script files, removing comments, whitespace and shortening names. <br/> If omitted, scripts are not minified.                                   |
| `source_map`   | No       | `boolean`                     | Improves debugging by mapping outputted development files to their source files. <br/> If omitted, sourcemaps are generated during development.                   |
| `target`       | Yes      | `"stable"` <br/> `"preview"`  | Whether this creation targets Minecraft (stable) or Minecraft Preview. Determines which type definitions for native script libraries are available and installed. |
| `tree_shake`   | No       | `boolean`                     | Whether unused code and intermediate files are removed from the outputted files. <br/> If omitted, tree shaking occurs.                                           |
| `type`         | Yes      | `"script_library"`            | Defines this creation as a script library.                                                                                                                        |

## Directories

| Option        | Required | Type     | Description                                                                  |
| ------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `build`       | Yes      | `string` | Where will be built to for publishing with the `minepicker build` command.   |
| `development` | Yes      | `string` | Where will be built to during development with the `minepicker dev` command. |
| `source`      | Yes      | `string` | Where source files are located.                                              |

## Dependencies

| Key             | Value            | Description                                                                    |
| --------------- | ---------------- | ------------------------------------------------------------------------------ |
| `<libraryName>` | `<versionRange>` | Where keys are library names and values are the required string version range. |

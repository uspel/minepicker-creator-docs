---
title: Building Creations
sidebar_position: 3
---

The [`minepicker build`](/docs/cli/commands/build.md) command is used to output a production build of your creation. This is the version of your creation that should be shared for others to download, such as adding it to a GitHub release.

The folder that the build is outputted in is determined by the `directories` field within the creation's configuration file (`creation.json`)

## Add-Ons and Editor Extensions

The outputted folder contains the built files for your add-on, including compiled scripts. These can be zipped up, renamed to have the `.mcaddon` extension and shared with others.

## Script Libraries

In the build folder, a `library` archive file is created. This file has no file extension and should not be confused with `library.json` which includes dependency information.

The `library` file contains build scripts and must be added to any script library releases in order for them to be used.

The build folder will also contain loose built scripts. These should not be included in your release assets.

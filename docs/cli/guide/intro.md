---
title: Getting Started
sidebar_position: 1
---

## Before You Start

We recommend that you install the following programs onto your device to continue:

- [**Node.js**](https://nodejs.org) — an open-source, cross-platform JavaScript runtime environment which the Minepicker Creator CLI runs on.
- [**Visual Studio Code**](https://code.visualstudio.com/Download) — a code editor that runs on Windows, Mac, and Linux and will integrate well with Minepicker Creator.
- [**Minecraft**](https://minecraft.net) — because it's best to test your creations before they're published!

If you plan on publishing your creations:

- [**Git**](https://git-scm.com/) — a system that helps you manage different versions of code within a repository.

## Installation

First, make sure you have **[Node.js](https://nodejs.org) version 18** or later installed on your device.

:::tip
Don't have Node.js installed? [Follow this link](https://nodejs.org) and download the latest LTS (Long-Term Support) version.
:::

Then, to install the Minepicker Creator CLI globally, run this command from any directory in your terminal (which can be opened in VS Code by pressing `Ctrl`+`Shift`+`'`):

```bash
npm install -g minepicker-creator
```

Now you can use the [`minepicker` commands](/docs/cli/commands)!

## Creation Setup

First, run the [`minepicker new`](/docs/cli/commands/new) command in the folder you want your creation to be set up in.
This folder will contain all of your creation's source files, such as textures and scripts.

```bash
minepicker new
```

You will then be prompted to choose which type of creation you'd like to set up.

Currently, the CLI supports **add-ons, Editor extensions and script modules**.

Based on this choice, you'll be met with some more questions tailored towards the creation you're making.

:::info Default Configuration
Many questions will have sensible defaults in brackets after the question message.
To use these defaults, simply press the `Enter` key without typing anything!
:::

## Developing Your Creation

Now your creation is all set up!

— but wait… In order to start testing your creation there's one more command to run:

```bash
minepicker dev
```

This will trigger the CLI to build your creation to its development directory every time a source file changes.

For example, files in a resource pack folder would be copied to your `development_resource_packs` com.mojang folder.

Learn more about creation development [here](/docs/cli/guide/development.md)!

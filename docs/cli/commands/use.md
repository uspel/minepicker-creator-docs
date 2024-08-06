Installs a script library in the current creation.

If no arguments are provided, the script dependencies listed in `creation.json` will be installed.
This is useful for setting up local repository clones of creations.

## Usage

```ts
minepicker use [libraryName: string] [versionRange: string]
```

### Examples

```ts
minepicker use
```

```ts
minepicker use @minecraft/server
```

```ts
minepicker use @minecraft/server 1.11.0
```

## Arguments

| Argument       | Required | Description                                                                                                                                                                                                    |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `libraryName`  | No       | The Minepicker ID of the script library you would like to use. If omitted, all dependencies in the `creation.json` config are installed.                                                                       |
| `versionRange` | No       | Minepicker will install the lastest version of the script library satisfying the [semantic version](https://semver.org/) range supplied. If omitted, the latest full release of the library will be installed. |

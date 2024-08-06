Clear build and/or development directories.

## Usage

```ts
minepicker clean [directory: "build" | "dev"]
```

### Examples

```ts
minepicker clean
```

```ts
minepicker clean build
```

```ts
minepicker clean dev
```

## Arguments

| Argument    | Required | Description                                                                                               |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `directory` | No       | Which output directory to remove. If omitted, both the `build` and `development` directories are cleared. |

# webpack-rails-18n

Webpack plugin to provide access to Rails i18n translations.  Heavily inspired by https://github.com/mikamai/rails-translations-webpack-plugin, without dependency on lodash.

## Installation

```bash
yarn add webpack-rails-i18n
yarn add json-loader          # required to load the generated JSON file
```

## Setup

Require and setup in your webpack configuration.

```js
const WebpackRailsI18n = require("webpack-rails-i18n")
...
plugins: [
  new WebpackRailsI18n({
    localesPath:  path.resolve(__dirname, "../locales"),
    pathRoot:     "output/path"     // Where the generated file is output
  })
]
```

Require in your application
```js
import translations from "translations.json" // Either specify path to the pathRoot as above or have webpack resolve this path
console.log(`${translations.hello.world}`)
```

## Things to improve

- test framework and decent test coverage
- write in ES2015 and transpile
- smarter setting of locale
- find a way to allow locale to be changed on the fly or at least remove the need to load all locales and reference using their key
- add config options to include or exclude a key from the locale files to reduce size of the generated object

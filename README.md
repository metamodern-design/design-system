# @metamodern/design-system [![Build Status](https://travis-ci.com/metamodern-design/design-system.svg?branch=master)](https://travis-ci.com/metamodern-design/design-system) [![npm (scoped)](https://img.shields.io/npm/v/@metamodern/design-system)](https://www.npmjs.com/package/@metamodern/design-system) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@metamodern/design-system)

*An approach to layout, typography & color with [Tailwind CSS](https://tailwindcss.com/)*

## Usage with PostCSS

```js
// postcss.config.js

const designSystem = require('@metamodern/design-system');
const tailwindcss = require('tailwindcss');

// set any configuration options (see documentation)
const configOptions = {};

module.exports = {
  plugins: [
    // syntax-parsing plugins (postcss-import) go before
    tailwindcss(designSystem(configOptions)),
    // postprocessing plugins (autoprefixer) go after
  ],
};

```

## Documentation

See our website at http://system.metamodern.design.

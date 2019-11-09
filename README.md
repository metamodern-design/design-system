# @metamodern/design-system [![Build Status](https://travis-ci.com/metamodern-design/design-system.svg?branch=master)](https://travis-ci.com/metamodern-design/design-system) [![npm (scoped)](https://img.shields.io/npm/v/@metamodern/design-system)](https://www.npmjs.com/package/@metamodern/design-system) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@metamodern/design-system)

*A [TailwindCSS](https://tailwindcss.com/) configuration informed by [modernist design theory](https://medium.com/@bryanarchy/celebrating-karl-gerstner-b0ffbcf65c96)*

## Usage with PostCSS

```js
// postcss.config.js

const designSystem = require('@metamodern/design-system');
const tailwindcss = require('tailwindcss');


module.exports = {
  plugins: [
    // syntax-parsing plugins (postcss-import) go before
    tailwindcss(designSystem()),
    // postprocessing plugins (autoprefixer) go after
  ],
};

```

## Documentation

Patience young grasshopper, a documentation site is in the works.

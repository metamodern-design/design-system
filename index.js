import borderParams from './src/border-params.js';
import colorParams from './src/color-params.js';
import fontParams from './src/font-params.js';
import layoutParams from './src/layout-params.js';
import variants from './src/variants.js';


const designSystem = (options = {}) => ({
  separator: '_',
  theme: {
    ...layoutParams(options),
    ...colorParams(options),
    ...fontParams(options),
    ...borderParams(options),
  },
  variants: variants(options.variants),
});


export default designSystem;

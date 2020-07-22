import borderParams from './border-params.js';
import colorParams from './color-params.js';
import fontParams from './font-params.js';
import layoutParams from './layout-params.js';
import variants from './variants.js';
import corePlugins from './core-plugins.js';

const designSystem = (options = {}) => ({
  theme: {
    ...layoutParams(options),
    ...colorParams(options),
    ...fontParams(options),
    ...borderParams(options),
  },
  variants: variants(options.variants),
  corePlugins: corePlugins(options.corePlugins),
});

export default designSystem;

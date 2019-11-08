import borderParams from './src/border-params';
import colorParams from './src/color-params';
import fontParams from './src/font-params';
import layoutParams from './src/layout-params';
import variants from './src/variants';


const designSystem = (options = {}) => ({
  theme: {
    ...layoutParams(options),
    ...colorParams(options),
    ...fontParams(options),
    ...borderParams(options),
  },
  variants: variants(options.variants),
});


export default designSystem;

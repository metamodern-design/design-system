import reduce from '@arr/reduce';
import range from './range.js';


const borderParams = ({
  defaultBorderRadius = 4,
  defaultBorderWidth = 1,
  maxBorderWidth = 8,
} = {}) => ({
  borderRadius: (t) => ({
    default: `${defaultBorderRadius}px`,
    full: '9999px',
    ...t('spacing'),
  }),
  borderWidth: reduce(
    range(1, maxBorderWidth, 1),
    (a, k) => ({ ...a, [k]: `${k}px` }),
    { default: `${defaultBorderWidth}px` },
  ),
});


export default borderParams;

import reduce from '@arr/reduce';
import range from './range';


const borderParams = ({
  defaultBorderRadius = 4.25,
  defaultBorderWidth = 1,
  maxBorderWidth = 8,
} = {}) => ({
  borderRadius: (t) => ({
    default: `${defaultBorderRadius}px`,
    ...t('spacing'),
  })
  borderWidth: reduce(
    range(1, maxBorderWidth, 1),
    (a, k) => ({ ...a, [k]: `${k}px` }),
    { default: `${defaultBorderWidth}px` },
  ),
});


export default borderParams;

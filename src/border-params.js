import reduce from '@arr/reduce';
import range from './range';


const borderParams = ({ maxBorderWidth = 8 } = {}) => ({
  borderWidth: reduce(
    range(1, maxBorderWidth, 1),
    (a, k) => ({ ...a, [k]: `${k}px` }),
    { default: '1px' },
  ),
});


export default borderParams;

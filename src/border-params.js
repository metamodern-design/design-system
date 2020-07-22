import range from './range.js';

const borderParams = ({
  defaultBorderRadius = 4,
  defaultBorderWidth = 1,
  maxBorderWidth = 8,
} = {}) => {
  const borderRadius = (t) => ({
    default: `${defaultBorderRadius}px`,
    none: '0',
    full: '9999px',
    ...t('spacing'),
  });

  const borderWidth = { default: `${defaultBorderWidth}px` };

  range(0, maxBorderWidth, 1).forEach(
    (k) => { borderWidth[k] = `${k}px`; },
  );

  return {
    borderRadius,
    borderWidth,
  };
};

export default borderParams;

import colorSystem from '@metamodern/color-system';

const colorParams = (options = {}) => ({
  ...colorSystem(options).theme,
  placeholderColor: {},
});

export default colorParams;

import colorSystem from '@metamodern/color-system';


const colorParams = (options = {}) => ({
  colors: colorSystem(options).theme,
  borderColor: (t) => ({
    default: options.defaultBorderColor || 'transparent',
    ...t('colors'),
  }),
  placeholderColor: {},
});


export default colorParams;

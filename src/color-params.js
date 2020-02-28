import colorSystem from '@metamodern/color-system/esm';


const colorParams = (options = {}) => ({
  ...colorSystem(options).theme,
  placeholderColor: {},
});


export default colorParams;

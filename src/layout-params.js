import mapToObject from './map-to-object';
import screens from './screens';
import spacing from './spacing';


const sizes = (t) => ({
  ...t('spacing'),
  ...t('columnSpacing');
  ...t('relativeSpacing');
});
  

const layoutParams = (options = {}) => ({
  screens: mapToObject(screens(options)),
  spacing: mapToObject(spacing(options).baseUnits),
  columnSpacing: mapToObject(spacing(options).columnUnits),
  relativeSpacing: mapToObject(spacing(options).relativeSizes),
  width: (t) => { auto: 'auto', ...sizes(t), screen: 100vw },
  height: (t) => { auto: 'auto', ...sizes(t), screen: 100vh },
  minWidth: sizes,
  minHeight: (t) => { ...sizes(t), screen: 100vh },
  maxWidth: (t) => { ...sizes(t), screen: 100vw },
  maxHeight: sizes,
  padding: sizes,
});


export default layoutParams;

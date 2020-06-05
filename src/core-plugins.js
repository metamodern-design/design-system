const corePlugins = (settings = {}) => ({
  backgroundOpacity: false,
  borderOpacity: false,
  textOpacity: false,
  placeholderOpacity: false,
  ...settings,
});


export default corePlugins;

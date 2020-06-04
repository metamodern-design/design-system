const corePlugins = (settings = {}) => ({
  backgroundOpacity: false,
  borderOpacity: false,
  textOpacity: false,
  ...settings,
});


export default corePlugins;

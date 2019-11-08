import typography from './typography';


const fontParams = (options = {}) => ({
  fontFamily: {},
  fontSize: typography(options).sizes,
  lineHeight: typography(options).leadings,
  extend: {
    fontWeight: { regular: 400 },
  },
});


export default fontParams;

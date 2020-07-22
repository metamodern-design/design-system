import mapToObject from './map-to-object.js';
import typography from './typography.js';

const sans = {
  asap: ['Asap', 'sans-serif'],
  barlow: ['Barlow', 'sans-serif'],
  'exo-2': ['"Exo 2"', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
  'libre-franklin': ['"Libre Franklin"', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
  nunito: ['Nunito', 'sans-serif'],
  'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
  roboto: ['Roboto', 'sans-serif'],
  'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
};

const condensed = {
  'asap-condensed': ['"Asap Condensed"', 'sans-serif'],
  'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
  'barlow-semi-condensed': ['"Barlow Semi Condensed"', 'sans-serif'],
  'ibm-plex-sans-condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
};

const serif = {
  'libre-baskerville': ['"Libre Baskerville"', 'serif'],
  'crimson-pro': ['"Crimson Pro"', 'serif'],
  'eb-garamond': ['"EB Garamond"', 'serif'],
  'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
  rokkitt: ['Rokkitt', 'serif'],
  'source-serif-pro': ['"Source Serif Pro"', 'serif'],
};

const mono = {
  'courier-prime': ['"Courier Prime"', 'monospace'],
  'cutive-mono': ['"Cutive Mono"', 'monospace'],
  'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
  'source-code-pro': ['"Source Code Pro"', 'monospace'],
};

const fontFamilies = (settings = {}) => ({
  ...sans,
  ...condensed,
  ...serif,
  ...mono,
  ...settings,
});

const fontParams = (options = {}) => ({
  fontSize: mapToObject(typography(options).sizes),
  lineHeight: mapToObject(typography(options).leadings),
  extend: {
    fontWeight: { regular: 400 },
    fontFamily: fontFamilies(options.fontFamilies),
  },
});

export default fontParams;

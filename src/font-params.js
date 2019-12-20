import mapToObject from './map-to-object';
import typography from './typography';


const sans = {
  asap: ['Asap', 'sans-serif'],
  barlow: ['Barlow', 'sans-serif'],
  exo: ['"Exo 2"', 'sans-serif'],
  franklin: ['"Libre Franklin"', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
  nunito: ['Nunito', 'sans-serif'],
  'plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
  roboto: ['Roboto', 'sans-serif'],
  'source-sans': ['"Source Sans Pro"', 'sans-serif'],
};


const condensed = {
  'asap-condensed': ['"Asap Condensed"', 'sans-serif'],
  'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
  'barlow-semi': ['"Barlow Semi Condensed"', 'sans-serif'],
  'exo-condensed': ['"Exo Condensed"', 'sans-serif'],
  'plex-condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
  'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
};


const serif = {
  baskerville: ['"Libre Baskerville"', 'serif'],
  crimson: ['"Crimson Pro"', 'serif'],
  garamond: ['"EB Garamond"', 'serif'],
  'plex-serif': ['"IBM Plex Serif"', 'serif'],
  'roboto-slab': ['"Roboto Slab"', 'serif'],
  rokkitt: ['Rokkitt', 'serif'],
  'source-serif': ['"Source Serif Pro"', 'serif'],
};


const mono = {
  cutive: ['"Cutive Mono"', 'monospace'],
  'plex-mono': ['"IBM Plex Mono"', 'monospace'],
  'roboto-mono': ['"Roboto Mono"', 'monospace'],
  'source-code': ['"Source Code Pro"', 'monospace'],
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

import reduce from '@arr/reduce';


const fontSizeNames = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
];


const defaultPxSizes = [
  14,
  16,
  20,
  24,
  32,
  40,
  48,
  64,
  80,
  96,
];


const defaultPxLeadings = [
  16,
  20,
  24,
  32,
  40,
  48,
  64,
  80,
  96,
  128,
  160,
  192,
];


const sizes = ({
  u = 16,
  fontSizes = defaultPxSizes,
} = {}) => reduce(
  fontSizeNames,
  (a, k, i) => a.set(k, `${fontSizes[i] / u}rem`),
  new Map(),
);


const leadings = ({
  u = 16,
  lineHeights = defaultPxLeadings,
} = {}) => reduce(
  fontSizeNames,
  (a, k, i) => {
    a.set(`${k}-narrow`, `${lineHeights[i] / u}rem`);
    a.set(k, `${lineHeights[i + 1] / u}rem`);
    a.set(`${k}-wide`, `${lineHeights[i + 2] / u}rem`);
    return a;
  },
  new Map(),
);


const typography = (options = {}) => ({
  sizes: sizes(options),
  leadings: leadings(options),
});


export default typography;

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
  13,
  17,
  21,
  25.5,
  34,
  42.5,
  51,
  68,
  85,
  102,
];


const defaultPxLeadings = [
  17,
  21.25,
  25.5,
  34,
  42.5,
  51,
  68,
  85,
  102,
  136,
  170,
  204,
];


const sizes = ({
  u = 17,
  fontSizes = defaultPxSizes,
} = {}) => reduce(
  fontSizeNames,
  (a, k, i) => a.set(k, `${fontSizes[i] / u}rem`),
  new Map(),
);


const leadings = ({
  u = 17,
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

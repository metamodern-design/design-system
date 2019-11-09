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
  27.5,
  34,
  44.5,
  55,
  72,
  89,
  116.5,
  144,
  188.5,
  233,
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
  fontSizes = defaultPxSizes,
} = {}) => reduce(
  fontSizeNames,
  (a, k, i) => {
    a.set(`${k}-narrow`, `${fontSizes[i + 1] / u}rem`);
    a.set(k, `${fontSizes[i + 2] / u}rem`);
    a.set(`${k}-wide`, `${fontSizes[i + 3] / u}rem`);
    return a;
  },
  new Map(),
);


const typography = (options = {}) => ({
  sizes: sizes(options),
  leadings: leadings(options),
});


export default typography;

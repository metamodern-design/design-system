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

const defaultTextHeights = [
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
  128,
  160,
  192,
];

const sizes = ({
  u = 16,
  textHeights = defaultTextHeights,
} = {}) => {
  const mp = new Map();

  fontSizeNames.forEach(
    (k, i) => {
      mp.set(`${k}-narrow`, [
        `${textHeights[i] / u}rem`,
        `${textHeights[i + 1] / u}rem`,
      ]);

      mp.set(k, [
        `${textHeights[i] / u}rem`,
        `${textHeights[i + 2] / u}rem`,
      ]);

      mp.set(`${k}-wide`, [
        `${textHeights[i] / u}rem`,
        `${textHeights[i + 3] / u}rem`,
      ]);
    },
  );

  return mp;
};

const leadings = ({
  u = 16,
  textHeights = defaultTextHeights,
} = {}) => {
  const mp = new Map();

  fontSizeNames.forEach(
    (k, i) => { mp.set(k, `${textHeights[i] / u}rem`); },
  );

  mp.set('none', '1');
  mp.set('quarter', '1.25');
  mp.set('three-eighths', '1.375');
  mp.set('half', '1.5');
  mp.set('five-eighths', '1.625');
  mp.set('whole', '2');

  return mp;
};

const typography = (options = {}) => ({
  sizes: sizes(options),
  leadings: leadings(options),
});

export default typography;

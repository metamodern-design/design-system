import range from './range.js';

const baseUnits = ({
  u = 16,
  b = 16,
  bMax = 8,
} = {}) => {
  const rems = (n) => `${(n * b) / u}rem`;

  const mp = new Map();

  range(1, bMax, 1).forEach(
    (k) => { mp.set(`${k}b`, rems(k)); },
  );

  mp.set('0', '0');
  mp.set('quarter-b', rems(0.25));
  mp.set('half-b', rems(0.5));
  mp.set('three-quarter-b', rems(0.75));
  mp.set('one-and-quarter-b', rems(1.25));
  mp.set('one-and-half-b', rems(1.5));
  mp.set('two-and-half-b', rems(2.5));

  return mp;
};

const columnUnits = ({
  u = 16,
  b = 16,
  c = 4,
  cMax = 20,
} = {}) => {
  const rems = (n) => `${(n * c * b) / u}rem`;

  const mp = new Map();

  range(1, cMax, 1).forEach(
    (k) => { mp.set(`${k}c`, rems(k)); },
  );

  mp.set('one-and-half-c', rems(1.5));
  mp.set('two-and-half-c', rems(2.5));
  mp.set('three-and-half-c', rems(3.5));

  return mp;
};

const relativeSizes = new Map([
  ['full', '100%'],
  ['half', '49.99%'],
  ['third', '33.33%'],
  ['two-thirds', '66.66%'],
  ['fourth', '24.99%'],
  ['three-fourths', '74.99%'],
  ['fifth', '19.99%'],
  ['two-fifths', '39.99%'],
  ['three-fifths', '59.99%'],
  ['four-fifths', '79.99%'],
]);

const spacing = (options = {}) => ({
  baseUnits: baseUnits(options),
  columnUnits: columnUnits(options),
  relativeSizes,
});

export default spacing;

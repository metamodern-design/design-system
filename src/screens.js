import reduce from '@arr/reduce';


const screens = ({
  b = 17,
  c = 4,
  breakpoints = [11, 18, 25],
} = {}) => reduce(
  breakpoints,
  (a, k) => a.set(`c${k}`, `${k * c * b}px`),
  new Map(),
);


export default screens;

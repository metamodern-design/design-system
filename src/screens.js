import reduce from '@arr/reduce';


const screens = ({
  b = 16,
  c = 4,
  breakpoints = [11, 17],
} = {}) => reduce(
  breakpoints,
  (a, k) => a.set(`c${k}`, `${k * c * b}px`),
  new Map(),
);


export default screens;

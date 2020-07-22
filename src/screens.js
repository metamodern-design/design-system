const screens = ({
  b = 16,
  c = 4,
  breakpoints = [11, 17, 21],
} = {}) => {
  const mp = new Map();

  breakpoints.forEach(
    (k) => { mp.set(`c${k}`, `${k * c * b}px`); },
  );

  return mp;
};

export default screens;

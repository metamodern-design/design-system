const mapToObject = (mp) => {
  const out = {};

  mp.forEach(
    (value, key) => { out[key] = value; },
  );

  return out;
};


export default mapToObject;

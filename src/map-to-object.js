import reduce from '@arr/reduce';


const mapToObject = (mp) => reduce(
  [...mp.entries()],
  (a, [key, value]) => ({ ...a, [key]: value }),
  {},
);


export default mapToObject;

import nodeResolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    external: [],
    output: [
      { file: 'dist/index.js', format: 'es' },
      { file: 'dist/main.cjs', format: 'cjs' },
    ],
    plugins: [nodeResolve()],
  },
];

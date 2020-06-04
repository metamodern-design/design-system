export default [
  {
    input: 'src/index.js',
    external: ['@metamodern/color-system'],
    output: [
      { file: 'dist/index.js', format: 'es' },
      { file: 'dist/main.cjs', format: 'cjs' },
    ],
  },
];

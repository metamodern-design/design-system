import test from 'ava';
import designSystem from '../dist/index.js';


const defaultSystem = designSystem();

test(`dist: outer keys were generated`, (t) => {
  t.deepEqual(
    Object.keys(defaultSystem).sort(),
    ['theme', 'variants', 'corePlugins'].sort(),
  );
});

test(`dist: theme keys were generated`, (t) => {
  t.deepEqual(
    Object.keys(defaultSystem.theme).sort(),
    ['screens', 'spacing', 'columnSpacing', 'relativeSpacing', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'padding', 'colors', 'backgroundColor', 'borderColor', 'textColor', 'placeholderColor', 'fontSize', 'lineHeight', 'extend', 'borderRadius', 'borderWidth'].sort(),
  );
});

test(`dist: theme.extend keys were generated`, (t) => {
  t.deepEqual(
    Object.keys(defaultSystem.theme.extend).sort(),
    ['fontWeight', 'fontFamily'].sort(),
  );
});

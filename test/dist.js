import test from 'ava';
import designSystem from '../dist/index.js';


const defaultSystem = designSystem();

test(`dist: outer keys were generated`, (t) => {
  t.deepEqual(
    Object.keys(defaultSystem).sort(),
    ['separator', 'theme', 'variants'].sort(),
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

test(`dist: variants keys were generated`, (t) => {
  t.deepEqual(
    Object.keys(defaultSystem.variants).sort(),
    ['accessibility', 'alignContent', 'alignItems', 'alignSelf', 'appearance', 'backgroundAttachment', 'backgroundColor', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'borderCollapse', 'borderColor', 'borderRadius', 'borderStyle', 'borderWidth', 'boxShadow', 'cursor', 'display', 'fill', 'flex', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'fontFamily', 'fontSize', 'fontSmoothing', 'fontStyle', 'fontWeight', 'height', 'inset', 'justifyContent', 'letterSpacing', 'lineHeight', 'listStylePosition', 'listStyleType', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'objectFit', 'objectPosition', 'opacity', 'order', 'outline', 'overflow', 'padding', 'placeholderColor', 'pointerEvents', 'position', 'resize', 'stroke', 'tableLayout', 'textAlign', 'textColor', 'textDecoration', 'textTransform', 'userSelect', 'verticalAlign', 'visibility', 'whitespace', 'width', 'wordBreak', 'zIndex'].sort(),
  );
});

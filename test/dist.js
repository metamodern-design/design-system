import test from 'ava';
import module from '../dist/module';
import main from '../dist/main';


const run = (name, bundle) => {
  const defaultSystem = bundle();
  
  test(`dist/${name}: outer keys were generated`, (t) => {
    t.deepEqual(
      Object.keys(defaultSystem).sort(),
      ['theme', 'variants'].sort(),
    );
  });
  
  test(`dist/${name}: theme keys were generated`, (t) => {
    t.deepEqual(
      Object.keys(defaultSystem.theme).sort(),
      ['screens', 'spacing', 'columnSpacing', 'relativeSpacing', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'padding', 'colors', 'borderColor', 'placeholderColor', 'fontSize', 'lineHeight', 'extend', 'borderRadius', 'borderWidth'].sort(),
    );
  });
  
  test(`dist/${name}: theme.extend keys were generated`, (t) => {
    t.deepEqual(
      Object.keys(defaultSystem.theme.extend).sort(),
      ['fontWeight', 'fontFamily'].sort(),
    );
  });

  test(`dist/${name}: variants keys were generated`, (t) => {
    t.deepEqual(
      Object.keys(defaultSystem.variants).sort(),
      ['accessibility', 'alignContent', 'alignItems', 'alignSelf', 'appearance', 'backgroundAttachment', 'backgroundColor', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize',  'borderCollapse', 'borderColor', 'borderRadius',  'borderStyle',  'borderWidth', 'boxShadow', 'cursor', 'display', 'fill',  'flex', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'fontFamily', 'fontSize', 'fontSmoothing', 'fontStyle', 'fontWeight', 'height',  'inset',  'justifyContent', 'letterSpacing', 'lineHeight', 'listStylePosition', 'listStyleType', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'objectFit', 'objectPosition', 'opacity', 'order', 'outline', 'overflow', 'padding', 'placeholderColor', 'pointerEvents', 'position',  'resize', 'stroke', 'tableLayout', 'textAlign',  'textColor', 'textDecoration',  'textTransform', 'userSelect', 'verticalAlign', 'visibility', 'whitespace', 'width', 'wordBreak', 'zIndex'].sort(),
    );
  });
};


run('module', module);
run('main', main);

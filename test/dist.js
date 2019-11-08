import test from 'ava';
import module from '../dist/module';
import main from '../dist/main';


const run = (name, bundle) => {
  const defaultSystem = bundle();
  
  test(`dist/${name}: colors`, (t) => {
    t.is(
      defaultSystem.colors.get('h45-s70-l27'),
      'hsl(45,70%,27%)',
    );
    t.is(
      defaultSystem.colors.get('h90-s10-l52'),
      'hsl(90,10%,52%)',
    );
    t.is(
      defaultSystem.colors.get('h225-s40-l67'),
      'hsl(225,40%,67%)',
    );
  });
  
  test(`dist/${name}: grays`, (t) => {
    t.is(
      defaultSystem.grays.get('gray-12'),
      'hsl(0,0%,12%)',
    );
    t.is(
      defaultSystem.grays.get('gray-57'),
      'hsl(0,0%,57%)',
    );
    t.is(
      defaultSystem.grays.get('gray-87'),
      'hsl(0,0%,87%)',
    );
  });
  
  test(`dist/${name}: lsh`, (t) => {
    t.is(
      defaultSystem.lsh(83)(66)(11),
      'hsl(11,66%,83%)',
    );  
  });

  test(`dist/${name}: theme`, (t) => {
    t.is(
      defaultSystem.theme['h30-s55-l62'],
      'hsl(30,55%,62%)',
    );
    t.is(
      defaultSystem.theme['h255-s25-l12'],
      'hsl(255,25%,12%)',
    );
    t.is(
      defaultSystem.theme['h315-s85-l77'],
      'hsl(315,85%,77%)',
    );
    t.is(
      defaultSystem.theme['gray-32'],
      'hsl(0,0%,32%)',
    );
  });
};


run('module', module);
run('main', main);

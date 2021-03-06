'use strict';

const signal = 'red';

if (signal === 'red') {
  console.log('Stop');
} else if (signal === 'yellow') {
  console.log('Caution');
} else if (signal === 'blue') {
  console.log('GO!');
}

switch (signal) {
  case 'red':
  console.log('Stop!');
  break;
  case 'yellow':
  console.log('Caution!');
  break;
  case 'blue':
  case 'green':
  console.log('Go!');
  break;
  default:
  console.log('wrong signal!');
  break;
}

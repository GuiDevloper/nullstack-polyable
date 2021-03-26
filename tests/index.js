import Nullstack from 'nullstack';
import Application from './src/Application';

import polyable from 'nullstack-polyable';

Nullstack.use(polyable({
  types: {
    button: 'botão',
    input: 'entrada'
  },
  attributes: {
    onclick: 'aoclicar',
    oninput: 'aoteclar'
  }
}));

Nullstack.start(Application);
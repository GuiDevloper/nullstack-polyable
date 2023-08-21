import Nullstack from 'nullstack';
import Application from './src/Application';

import { polyable } from './utils';

Nullstack.use(polyable);

const context = Nullstack.start(Application);

Application.start(context)

export default context
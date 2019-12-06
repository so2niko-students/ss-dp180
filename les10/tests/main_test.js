import { test1 } from './test1.js';

mocha.setup('bdd');
const ass = chai.assert;

test1(ass);

mocha.run();
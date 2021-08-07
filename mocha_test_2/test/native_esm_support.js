// test.mjs
import {add} from './add.mjs';
import assert from 'assert';

it('should add to numbers from an es module', () => {
  assert.equal(add(3, 5), 8);
});
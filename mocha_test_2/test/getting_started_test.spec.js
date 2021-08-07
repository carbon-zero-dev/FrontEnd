// import { add } from '../src/component/functions.js';
// import assert from 'assert';
const { add } = require('../src/component/functions.js');
const assert = require('assert');

describe('ADD function', function(){
    it('1+2 = 3', function(){
        assert.strictEqual(add(1,2), 3);
    })
})

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
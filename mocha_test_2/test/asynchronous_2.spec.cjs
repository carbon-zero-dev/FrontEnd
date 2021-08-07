const assert = require('assert');

// antipattern
it('should complete this test', function(done) {
  return new Promise(function(resolve) {
    assert.ok(true);
    resolve();
  }).then(done);
});
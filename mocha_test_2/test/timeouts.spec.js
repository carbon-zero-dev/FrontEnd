// SUITE_LEVEL
describe('1 a suite of tests', function() {
    this.timeout(500);
  
    it('2 should take less than 500ms', function(done) {
      setTimeout(done, 300);
    });
  
    it('3 should take less than 500ms as well', function(done) {
      setTimeout(done, 250);
    });
  });

// TEST_LEVEL
it('4 should take less than 800ms', function(done) {
    this.timeout(800);
    setTimeout(done, 750);
  });

// HOOK_LEVEL
describe('5 a suite of tests', function() {
    beforeEach(function(done) {
      this.timeout(3000); // A very long environment setup.
      setTimeout(done, 2500);
    });
  });


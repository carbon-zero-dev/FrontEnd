function User(name) {
    this.name = name;
    this.save = function () {
        console.log("hello")
        setTimeout(() => {
            console.log('asynchronous example')
        }, 1000);
        return;
    }
}

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(function(err) {
                if (err) done(err);
                else done();
            });
            done();
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(done());
        });
    });
});
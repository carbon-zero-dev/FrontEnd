// run with: mocha --require fixtures.mjs test.spec.mjs.
// fixtures.mjs

let server;

export const mochaGlobalSetup = async () => {
  server = await startSomeServer({port: process.env.TEST_PORT});
  console.log(`server running on port ${server.port}`);
};

export const mochaGlobalTeardown = async () => {
  await server.stop();
  console.log('server stopped!');
};

// test.spec.mjs

import {connect} from 'my-server-connector-thingy';

describe('my API', function() {
  let connection;

  before(async function() {
    connection = await connect({port: process.env.TEST_PORT});
  });

  it('should be a nice API', function() {
    // assertions here
  });

  after(async function() {
    return connection.close();
  });
});
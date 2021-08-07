// fixtures.cjs
// can be async or not
exports.mochaGlobalSetup = async function() {
    this.server = await startSomeServer({port: process.env.TEST_PORT});
    console.log(`server running on port ${this.server.port}`);
};

// // fixtures.mjs
// // can be async or not
// export async function mochaGlobalSetup() {
//     this.server = await startSomeServer({port: process.env.TEST_PORT});
//     console.log(`server running on port ${this.server.port}`);
// }